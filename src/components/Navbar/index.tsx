import {
  ChevronDown,
  NotificationsCircleOutline,
  PersonCircleOutline,
  SearchOutline,
  SettingsOutline,
  ShareOutline,
} from 'react-ionicons';
const Navbar = () => {
  return (
    <div className='md-w-[calc(100%-230px)] w-[calc(100%-60px)] fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-[60px] border-b border-slate-300 bg-white'>
      <div className='flex items-center gap-3 cursor-pointer'>
        <PersonCircleOutline
          color={'#2D3248'}
          width={'28px'}
          height={'28px'}
        />
        <span className='text-[#2D3248] font-semibold md:text-lg text-sm whitespace-nowrap'>
          Board Name
        </span>
        <ChevronDown
          color={'#2D3248'}
          width={'16px'}
          height={'16px'}
        />
      </div>
      <div className='flex items-center gap-2 md:w-[800px] w-[130px] bg-gray-100 rounded-lg px-3 py-[10px]'>
        <SearchOutline color={'#999'} />
        <input
          type='text'
          placeholder='Search...'
          className='w-full outline-none bg-gray-100 text-[15px]'
        />
      </div>
      <div className='md:flex hidden items-center gap-4'>
        <div className='grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer'>
          <ShareOutline color={'#2D3248'} />
        </div>
        <div className='grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer'>
          <SettingsOutline color={'#2D3248'} />
        </div>
        <div className='grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer'>
          <NotificationsCircleOutline color={'#2D3248'} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
