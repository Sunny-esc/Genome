import bg from "../assets/20250923-BearLodge_EN-IN2528556725_UHD.jpg";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
export default function Main() {
  return (
    <div className=" w-full h-full " onContextMenu={(e) => e.preventDefault()}>
      <img src={bg} alt="" className="" />
      <ContextMenu>
        <ContextMenuTrigger className=" absolute inset-0">
        </ContextMenuTrigger>

        <ContextMenuContent className="bg-slate-700 text-white font-semibold border-none">
          <ContextMenuItem>Refresh</ContextMenuItem>
          <ContextMenuItem>Change Bg</ContextMenuItem>
          <ContextMenuItem>Setting</ContextMenuItem>
          <ContextMenuItem>New</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
}
