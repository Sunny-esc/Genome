import arch_linux from '../../../public/assets/arch_linux.png'
import Notification from '../Date&Notification/notification';
import Control from '../control/control';
export default function Topbar() {
  return (
    <>
      <div className="w-full h-[5%]  z-50 backdrop-blur-3xl flex justify-between items-center fixed text-white font-semibold">
        
        <div id="logo" className="flex justify-center items-center space-x-4">
          <img src={arch_linux} alt="Arch Linux Logo" className="ml-4 w-6 bg-amber-50" />
          <div>Apps</div>
          <div className='flex items-center space-x-1'>
            <div className='bg-white rounded-2xl w-6 h-2'></div>
            <div className=' bg-white rounded-full w-2 h-2'></div>
          </div>
        </div>

        <div id="time-notification-date">
          <Notification/>
        </div>

        <div className='mr-4'>
          <Control/>
        </div>
      </div>
    </>
  );
}
