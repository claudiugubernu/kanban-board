import {
  AppsOutline,
  GridOutline,
  HomeOutline,
  LogOutOutline,
  NewspaperOutline,
  NotificationsOutline,
  PeopleOutline,
  PieChartOutline,
} from 'react-ionicons';

const Sidebar = () => {
  const navLinks = [
    {
      title: 'Home',
      icon: (
        <HomeOutline
          width='22px'
          height='22px'
        />
      ),
      active: true,
    },
    {
      title: 'Boards',
      icon: (
        <AppsOutline
          width='22px'
          height='22px'
        />
      ),
      active: false,
    },
    {
      title: 'Projects',
      icon: (
        <GridOutline
          width='22px'
          height='22px'
        />
      ),
      active: false,
    },
    {
      title: 'Analitycs',
      icon: (
        <PieChartOutline
          width='22px'
          height='22px'
        />
      ),
      active: false,
    },
    {
      title: 'Worflows',
      icon: (
        <PeopleOutline
          width='22px'
          height='22px'
        />
      ),
      active: false,
    },
    {
      title: 'Notifications',
      icon: (
        <NotificationsOutline
          width='22px'
          height='22px'
        />
      ),
      active: false,
    },
    {
      title: 'Newsletter',
      icon: (
        <NewspaperOutline
          width='22px'
          height='22px'
        />
      ),
      active: false,
    },
  ];

  const linkPath =
    window.location.pathname.split('/')[1] === ''
      ? 'home'
      : window.location.pathname.split('/')[1];

  return (
    <div className='fixed left-0 top-0 md:w-[230px] w-[60px] oveflow-hidden h-full flex flex-col'>
      <div className='w-full flex items-center md:justify-start justify-center md:pl-5 h-[70px] bg-white'>
        <span className='text-[#2D3248] font-semibold text-2xl md:block hidden'>
          Logo.
        </span>
        <span className='text-[#2D3248] font-semibold text-2xl md:hidden block'>
          L.
        </span>
      </div>
      <div className='w-full h-[calc(100vh-70px)] border-r flex flex-col md:items-start items-center gap-2 border-slate-300 bg-white py-t px-3 relative'>
        {navLinks.map((link) => {
          return (
            <div
              key={link.title}
              className={`w-full rounder-lg hover:bg-[#2D3248] px-2 py-3 cursor-pointer ${
                linkPath === link.title.toLowerCase()
                  ? 'bg-[#2D3248] text-white'
                  : 'bg-transparent'
              }`}>
              <a
                href={link.title === 'Home' ? '/' : link.title.toLowerCase()}
                className='flex items-center gap-2'>
                <span className='text-white'>{link.icon}</span>
                <span className='font-medium text-[15px] md:block hidden'>
                  {link.title}
                </span>
              </a>
            </div>
          );
        })}
        <div className='flex flex-col absolute bottom-4 md:w-[90%] w-[70%]'>
          <div className='flex items-center md:justify-start justify-center gap-2 rounded-lg hover:bg-red-600 px-2 py-3 cursor-pointer bg-grey-200 '>
            <LogOutOutline />
            <span className='font-medium text-[15px] md:block hidden'>
              Log out
            </span>
          </div>
          <span className='text-[9px] md:block hidden px-2'>
            &copy;2024 Gubiz Craft
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
