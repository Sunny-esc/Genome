import app from './dockicons/applications-system.svg'
import bash from './dockicons/bash.svg'
import firfox from './dockicons/firefox-3.5.svg'
import vs from './dockicons/vscode.svg'
import menu from './dockicons/icon-preview-app.svg'
import cal from './dockicons/chrome-calculator.svg'
import softwarre from './dockicons/software-center.svg'
import drive from './dockicons/chrome-aghbiahbpaijignceidepookljebhfak-Default.svg'
import { useState } from 'react'
import BrowserApp from '../../app/chrome.tsx'
import Draw from '../menu/drawer'
export default function Dock(){
    const [openmenu,setmenu]=useState(false);
    const[chrome ,setchrome]=useState(false)
    return(
        <>
        <div className=' w-full flex justify-center fixed bottom-0'>

        <div className="w-[40%] h-[20%] rounded-2xl bg-black  flex justify-center">
        <img src={app} alt="" />
         <img src={firfox} alt="" onClick={()=> setchrome(true)}/>
         <img src={bash} alt="" />
         <img src={softwarre} alt="" />
         <img src={vs} alt="" />
         <img src={cal} alt="" />
         <img src={drive} alt="" />
         <img src={menu} alt=""   onClick={() => setmenu(true)} />

        </div>
        </div>
        { chrome &&
        <BrowserApp onClose={()=>setchrome(false)} />}
         <Draw open={openmenu} onOpenChange={setmenu} />
        </>
    )

}