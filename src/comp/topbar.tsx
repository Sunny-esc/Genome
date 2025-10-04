import arch from './archlinux-logo-dark-90dpi.png';
import Notification from './notification';
import Control from './control/control';
export default function Topbar() {
  return (
    <>
      <div className="w-full h-[5%] z-50 backdrop-blur-sm flex justify-between border-2 items-center fixed text-white font-semibold">
        <div id="logo" className="flex justify-center items-center space-x-2">
          <img src={arch} alt="Arch Linux Logo" className="w-14 bg-amber-50" />
        </div>
        <div id="time-notification-date">
          <Notification/>
        </div>

        <div >
          <Control/>
        </div>
      </div>
    </>
  );
}
