import bg from "../assets/20250923-BearLodge_EN-IN2528556725_UHD.jpg";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import ChangeWallpaper from "@/function/Display/changeWall";
import { useState ,useEffect} from "react";

export default function Main() {
      const[background ,setbg]=useState(false)
  const [selectedBg, setSelectedBg] = useState<string | null>(null);
   // 🔹 Load saved wallpaper on mount
  useEffect(() => {
    const savedBg = localStorage.getItem("wallpaper");
    if (savedBg) {
      setSelectedBg(savedBg);
    }
  }, []);

  // 🔹 Save wallpaper whenever it changes
  useEffect(() => {
    if (selectedBg) {
      localStorage.setItem("wallpaper", selectedBg);
    }
  }, [selectedBg]);
  return (
    <div className=" w-full h-full " onContextMenu={(e) => e.preventDefault()}>
       {/* If background selected show it, else fallback */}
      <img
        src={selectedBg ?? `${bg}`}
        alt="Wallpaper"
        className="w-full h-full object-cover"
      />
      <ContextMenu>
        <ContextMenuTrigger className=" absolute inset-0">
        </ContextMenuTrigger>

        <ContextMenuContent className="bg-slate-700 text-white font-semibold border-none">
          <ContextMenuItem>Refresh</ContextMenuItem>
          <ContextMenuItem onClick={()=> setbg(true)}>Change Bg</ContextMenuItem>
          <ContextMenuItem>Setting</ContextMenuItem>
          <ContextMenuItem>New</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      { background &&
             <ChangeWallpaper
          onClose={() => setbg(false)}
          onSelect={(src) => {
            setSelectedBg(src); // set new bg
            setbg(false); // close window
          }}
        />}
    </div>
  );
}
