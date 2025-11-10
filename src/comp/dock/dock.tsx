import app from './dockicons/applications-system.svg'
import bash from './dockicons/bash.svg'
import firfox from './dockicons/firefox-3.5.svg'
import vs from './dockicons/vscode.svg'
import menu from './dockicons/icon-preview-app.svg'
import cal from './dockicons/chrome-calculator.svg'
import softwarre from './dockicons/software-center.svg'
import drive from './dockicons/chrome-aghbiahbpaijignceidepookljebhfak-Default.svg'
import { useState } from 'react'
import BrowserApp from '../../app/chrome'
import Draw from '../menu/drawer'
import Terminal from '../../app/terminal'
import { Alert } from '@/function/alert'
export default function Dock(){
    const [openmenu,setmenu]=useState(false);
    const[chrome ,setchrome]=useState(false);
    const[term ,setterm]=useState(false);
    const[alert,setalert]=useState(false);
    const handleUnfinishedApp = () => {
        setalert(true);
    };
    return(
        <>
        <div className=' w-full flex justify-center fixed bottom-0'>

        <div className="w-[40%] h-[20%] rounded-2xl backdrop-blur-3xl  flex justify-center">
        <img src={app} alt=""onClick={handleUnfinishedApp} />
         <img src={firfox} alt="" onClick={()=> setchrome(true)}/>
         <img src={bash} alt="" onClick={()=>setterm(true)}/>
     <img src={softwarre} alt="" onClick={handleUnfinishedApp}/>
                <img src={vs} alt="" onClick={handleUnfinishedApp} />
                <img src={cal} alt="" onClick={handleUnfinishedApp} />
                <img src={drive} alt="" onClick={handleUnfinishedApp} />
         <img src={menu} alt=""   onClick={() => setmenu(true)} />

        </div>
        </div>
        { chrome &&
        <BrowserApp onClose={()=>setchrome(false)} />}
         <Draw open={openmenu} onOpenChange={setmenu} />
         { term && <Terminal onClose={()=>setterm(false)} /> }
        {alert && <Alert onClose={() => setalert(false)} />}
        </>
    )

}