import { useState } from 'react';
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';
import { Columns } from '../../types';
import { Board } from '../../data/board';
import { AddOutline } from 'react-ionicons';
import AddModal from '../../components/Modal';
import { onDragEnd } from '../../helpers/onDragEnd';
import Task from '../../components/Task';
const Boards = () => {
  const [columns, setColumns] = useState<Columns>(Board);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState('');

  const openModal = (columnId: string) => {
    setSelectedColumn(columnId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAddTask = (taskData: any) => {
    const newBoard = { ...columns };
    newBoard[selectedColumn].items.push(taskData);
  };

  return (
    <>
      <DragDropContext
        onDragEnd={(result: any) => onDragEnd(result, columns, setColumns)}>
        <div className='w-full flex items-start justify-between px-5 pb-8 md:gap-5 gap-10'>
          {Object.entries(columns).map(([columnId, column]: any) => (
            <div
              key={columnId}
              className='w-full flex flex-col'>
              <Droppable
                droppableId={columnId}
                key={columnId}
                direction='horizontal'
                type='column'>
                {(provided: any) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className='flex flex-col md:w-full md:max-w-[350px] w-[250px] items-center py-5 gap-3'>
                    <div className='w-full flex items-center justify-center py-[10px] px-4 bg-white rounded-lg shadow-sm text-[#2D3248] font-medium text-[15px]'>
                      {column.name}
                    </div>
                    {column.items.map((task: any, index: number) => (
                      <Draggable
                        key={task.id.toString()}
                        index={index}
                        draggableId={task.id.toString()}>
                        {(provided: any) => (
                          <>
                            <Task
                              task={task}
                              provided={provided}
                            />
                          </>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <div
                onClick={() => openModal(columnId)}
                className='flex cursor-pointer items-center justify-center gap-1 py-[10px] md:w-full md:max-w-[350px] w-[250px] opacity-90 bg-white rounded-lg shadow-sm text-[#2D3248] font-medium text-[15px]'>
                <AddOutline color={'#2D3248'} />
                Add Task
              </div>
            </div>
          ))}
        </div>
      </DragDropContext>

      <AddModal
        isOpen={modalOpen}
        onClose={closeModal}
        setOpen={setModalOpen}
        handleAddTask={handleAddTask}
      />
    </>
  );
};

export default Boards;
