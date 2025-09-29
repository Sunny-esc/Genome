import * as Dialog from "@radix-ui/react-dialog"
import "./notification.css"
import { useState ,useEffect} from "react"
import { Calendar } from "@/components/ui/calendar"
import Time from '../function/DateTime.jsx'


export default function Notification() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [open, setOpen] = useState(false)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

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
    <div id="time-notification-date">
      {current}
    </div>
  </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent">
            <Dialog.Title className="DialogTitle">friday</Dialog.Title>
            <Dialog.Description className="DialogDescription">
              {current}
            </Dialog.Description>

            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-lg border"
            />

            <Dialog.Close asChild>
              <button onClick={closeModal}>Close</button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
