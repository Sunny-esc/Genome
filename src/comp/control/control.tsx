import { Wifi,Bluetooth ,BatteryCharging ,SunMedium} from 'lucide-react';
import { useState } from 'react';
import CDraw from './conrolDrawer';
export default function Control(){
        const [openmenu,setmenu]=useState(false);
    
    return(
        <div className=' flex   space-x-3 items-center justify-center'   onClick={() => setmenu(true)} >
          <SunMedium />
          <Wifi />
          <Bluetooth />
          <BatteryCharging />
              <CDraw open={openmenu} onOpenChange={setmenu} />
        </div>
    )

}