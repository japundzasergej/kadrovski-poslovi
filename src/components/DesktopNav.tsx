import nav from '../assets/navbar.png';

const DesktopNav = () => {
  const title = 'Кадровски Послови';
  const desktopNav = (
    <nav className="z-40 fixed flex w-full justify-end py-8 text-xl bg-white shadow-sm shadow-black px-12">
      <div className='absolute -translate-x-[325px] translate-y-[25px]'>
        <img src={nav} alt="navbar" className="w-18 h-16" />
      </div>
      <div className="flex flex-col justify-center text-center">
        <div className="mt-2 text-2xl font-semibold">
          <p className="flex flex-col">
            <span className='italic text-4xl w-1/2 mx-auto border-b-2 border-black py-1'>Ђорђевић</span> <span className='font-light'>{title.toLowerCase()}</span>
          </p>
        </div>
        <div className="flex text-base pt-2">
          <p className="border-black border-r px-4 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            anaselma.djordjevic@gmail.com
          </p>
          <p className="px-4 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            063/8020371
          </p>
        </div>
      </div>
    </nav>
  );
  return desktopNav;
};
export default DesktopNav;
