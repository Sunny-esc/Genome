import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface AlertProps {
  onClose?: () => void;
}

export function Alert({ onClose }: AlertProps) {
  return (
    <AlertDialog open={true}>
      <AlertDialogContent className="fixed top-[30%] left-[50%] -translate-x-1/2 z-50 bg-white text-gray-600">
        <AlertDialogHeader>
          <AlertDialogTitle>Component Not Available</AlertDialogTitle>
          <AlertDialogDescription>
            This application is currently under development and not yet available.
            Please check back later.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClose}>Close</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
