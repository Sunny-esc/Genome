import * as Dialog from "@radix-ui/react-dialog";
import "./notification.css";
import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import Time from "../../function/DateTime.js";
import { Switch } from "@/components/ui/switch"
export default function Notification() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  //const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false);

  const [current, setDate2] = useState(Time());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate2(Time());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Dialog itself */}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <div id="time-notification-date">{current}</div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent border flex gap-4 w-[50%] h-[70%] fixed top-[40%] left-[50%] p-2 rounded-2xl text-white ">
          
          
           <div className=" w-[65%] border-r border-gray-500 p-2 ">
            <div id="welcome msg" className=" bg-slate-600 w-full h-12 rounded-xl">
                  wellcome
            </div>

            <div className="flex items-center space-x-2 border" >
      <Switch id="airplane-mode" className="w-6 h-10 bg-white border-amber-600" />
    </div>
           </div>


            <div className="w-[40%] flex flex-col ">
              <Dialog.Title className="DialogTitle">friday</Dialog.Title>
              <Dialog.Description className="DialogDescription">
                {current}
              </Dialog.Description>

              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-lg w-full"
              />

              <Dialog.Close asChild className="">
                <button onClick={closeModal}>Close</button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
