import {
  Wifi,
  Bluetooth,
  BatteryCharging,
  SunMedium,
  Volume2,
  X,
} from "lucide-react";
import { useState } from "react";
import { Dialog as DialogRoot, DialogPortal, DialogOverlay } from "@/components/ui/dialog"
import { Slider } from "@/components/ui/slider";

type CDrawProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function CDraw({ open, onOpenChange }: CDrawProps) {
  const [wifiEnabled, setWifiEnabled] = useState(true);
  const [bluetoothEnabled, setBluetoothEnabled] = useState(false);
  const [batteryOptimized, setBatteryOptimized] = useState(false);

  return (
    <DialogRoot open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-transparent" onClick={() => onOpenChange(false)} />

        {/* Don't use DialogContent - it has default centering styles */}
        <div
          className="fixed top-14 right-4 w-[350px]
                     bg-[#1E293B] text-white 
                     border border-gray-700 rounded-xl p-6 
                     shadow-2xl z-50
                     flex flex-col space-y-4"
        >
          {/* Close button */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-3 right-3 p-1 hover:bg-gray-700 rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Sliders Section */}
          <div className="flex flex-col space-y-4 pt-2">
            <div className="flex items-center space-x-3">
              <SunMedium className="w-5 h-5 flex-shrink-0" />
              <Slider
                defaultValue={[70]}
                max={100}
                step={1}
                className="flex-1"
              />
              <span className="text-xs w-10 text-right">70%</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <Volume2 className="w-5 h-5 flex-shrink-0" />
              <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                className="flex-1"
              />
              <span className="text-xs w-10 text-right">50%</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700"></div>

          {/* Toggle Buttons Grid */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setWifiEnabled(!wifiEnabled)}
              className={`${wifiEnabled ? "bg-blue-600" : "bg-gray-700"} 
                         text-white rounded-lg p-4
                         flex flex-col items-center justify-center gap-2
                         transition-all hover:opacity-90
                         border ${wifiEnabled ? "border-blue-500" : "border-gray-600"}`}
            >
              <Wifi className="w-6 h-6" />
              <span className="text-sm font-medium">Wi-Fi</span>
            </button>

            <button
              onClick={() => setBluetoothEnabled(!bluetoothEnabled)}
              className={`${bluetoothEnabled ? "bg-blue-600" : "bg-gray-700"} 
                         text-white rounded-lg p-4
                         flex flex-col items-center justify-center gap-2
                         transition-all hover:opacity-90
                         border ${bluetoothEnabled ? "border-blue-500" : "border-gray-600"}`}
            >
              <Bluetooth className="w-6 h-6" />
              <span className="text-sm font-medium">Bluetooth</span>
            </button>

            <button
              onClick={() => setBatteryOptimized(!batteryOptimized)}
              className={`${batteryOptimized ? "bg-blue-600" : "bg-gray-700"} 
                         text-white rounded-lg p-4
                         flex flex-col items-center justify-center gap-2
                         transition-all hover:opacity-90
                         border ${batteryOptimized ? "border-blue-500" : "border-gray-600"}`}
            >
              <BatteryCharging className="w-6 h-6" />
              <span className="text-sm font-medium">Battery</span>
            </button>

            <button
              className="bg-gray-700 text-white rounded-lg p-4
                         flex flex-col items-center justify-center gap-2
                         transition-all hover:opacity-90
                         border border-gray-600"
            >
              <SunMedium className="w-6 h-6" />
              <span className="text-sm font-medium">Display</span>
            </button>
          </div>
        </div>
      </DialogPortal>
    </DialogRoot>
  );
}