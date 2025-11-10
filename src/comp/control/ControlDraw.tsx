import {
  Wifi,
  Bluetooth,
  BatteryCharging,
  SunMedium,
  Volume2,
  Cog,
  Camera,
  LockKeyhole,
  Power,
} from "lucide-react";
import { useBattery } from 'react-use';

import batteryimg from "../../../public/assets/battery.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";

export default function Contorl() {
  const [open, setOpen] = useState(false);

  //const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false);

  const [wifiEnabled, setWifiEnabled] = useState(true);
  const [bluetoothEnabled, setBluetoothEnabled] = useState(false);
  const [batteryOptimized, setBatteryOptimized] = useState(false);


  const battery=useBattery();
  const{level,charging,isSupported}=battery;

  if(!isSupported){
    return(
        <div>
        <strong>Battery sensor</strong>: <span>Not supported</span>
      </div>
    );
  }
  return (
    <div>
      {/* Dialog itself */}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <div className=" flex   space-x-3 items-center justify-center">
            <SunMedium />
            <Wifi />
            <Bluetooth />
            <img src={batteryimg} alt="" className="w-6" />
          </div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent border flex-col gap-4 w-[25%] h-[50%] fixed top-[30  %] left-[87%] p-2 rounded-2xl text-white ">
         
         {/**/}
            <div className="flex justify-between">
              <span className="flex">
                <img src={batteryimg} alt="Battery" className="w-6 " />
                
                 <strong>Charge level</strong>:&nbsp;&nbsp;{" "}
                <span>{(level * 100).toFixed(0)}%</span> <br />         
              </span>
              <div className="flex space-x-2">
                <Camera />
                <Cog />
                <LockKeyhole />
                <Power />
              </div>
            </div>

            <div
              className=" 
                     rounded-xl p-6 
                     shadow-2xl z-50
                     flex flex-col space-y-4"
            >
              {/* Sliders Section */}
              <div className="flex flex-col space-y-4 pt-2">
                <div className="flex items-center space-x-3">
                  <SunMedium className="w-5 h-5 flex-shrink-0" />
                  <Slider
                    defaultValue={[10]}
                    max={100}
                    step={1}
                    className="flex-1 rounded-2xl"
                  />
                  
                </div>

                <div className="flex items-center space-x-3">
                  <Volume2 className="w-5 h-5 flex-shrink-0" />
                  <Slider
                    defaultValue={[50]}
                    max={100}
                    step={1}
                    className="flex-1"
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-700"></div>

              {/* Toggle Buttons Grid */}
              <div className="grid grid-cols-2 gap-3">
                
                
               <div
              onClick={() => setWifiEnabled(!wifiEnabled)}
              className={`${wifiEnabled ? "bg-blue-600" : "bg-gray-700"} 
                         text-white rounded-lg p-4
                         flex flex-col items-center justify-center gap-2
                         transition-all hover:opacity-90
                         border ${wifiEnabled ? "border-blue-500" : "border-gray-600"}`}
            >
              <Wifi className="w-6 h-6" />
            </div>

            <div
              onClick={() => setBluetoothEnabled(!bluetoothEnabled)}
              className={`${bluetoothEnabled ? "bg-blue-600" : "bg-gray-700"} 
                         text-white rounded-lg p-4
                         flex flex-col items-center justify-center gap-2
                         transition-all hover:opacity-90
                         border ${bluetoothEnabled ? "border-blue-500" : "border-gray-600"}`}
            >
              <Bluetooth className="w-6 h-6" />
            </div>

            <div
              onClick={() => setBatteryOptimized(!batteryOptimized)}
              className={`${batteryOptimized ? "bg-blue-600" : "bg-gray-700"} 
                         text-white rounded-lg p-4
                         flex flex-col items-center justify-center gap-2
                         transition-all hover:opacity-90
                         border ${batteryOptimized ? "border-blue-500" : "border-gray-600"}`}
            >
              <BatteryCharging className="w-6 h-6" />
            </div>
             
            <div
              className="bg-gray-700 text-white rounded-lg p-4
                         flex flex-col items-center justify-center gap-2
                         transition-all hover:opacity-90
                         border border-gray-600"
            >
              <SunMedium className="w-6 h-6" />
            </div>
              </div>
            </div>

            <Dialog.Close asChild className="">
              <button onClick={closeModal} className="">
                Close
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
