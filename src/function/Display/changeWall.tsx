    import { useState, useEffect, useRef } from "react";
    import Draggable from "react-draggable";
    import images from "@/assets";
    import { CircleX, Maximize2 } from "lucide-react";

    type Browserprops = {
    onClose: () => void;
      onSelect: (src: string) => void;

    };
    export default function ChangeWallpaper({ onClose, onSelect }: Browserprops) {
    const nodeRef = useRef(null);

    console.log("compoennt is loading");

    return (
        <>
        <Draggable nodeRef={nodeRef}>
            <div
            ref={nodeRef}
            className="w-[60%] overflow-y-scroll fixed top-20 rounded-2xl p-2  bg-slate-800 h-[30rem] resize"
            >
            <div
                id="container for the main contents"
                className="flex flex-row gap-1 h-full mt-2 rounded-lg  bg-slate-800 p-1"
            >
                
                <div
                id="Sidebar"
                className=" h-full border-2  rounded-xl  bg-slate-800 text-gray-400 w-[20%]"
                >
                     <div className="flex w-full space-x-3">
                    <CircleX
                    className="bg-red-600 rounded-full cursor-pointer"
                    onClick={onClose}
                    />
                    <Maximize2 className="bg-green-400 rounded-full cursor-pointer" />
                </div>
               
                <div id="sidecontent" className=" border-dotted border m-2">
                    {" "}
                    gsdhbsbvihsbvsidvsj
                </div>
                </div>

                <div
                id="mainScreen"
                className=" h-auto bg-slate-700 w-[80%] font-semibold rounded-xl   border flex flex-col "
                >
                
                <span className=" text-white text-center">Appearnce </span>
                <div id="mainContent" className="border-dotted border m-2">
                    dsgsdgsfdhfdsggdag
                </div>
                <div id="mainContent" className="border-dotted border m-2">
                    dsgsdgsfdhfdsggdag
                </div>
                <div id="mainContent" className="border-dotted border m-2  p-2 overflow-y-scroll">
                 <span className="text-white ">  Background </span>                               
                       <div id="wallpaper" className="grid grid-cols-4 gap-2 p-2 bg-slate-500 rounded-2xl">
                            {Object.entries(images).map(([path, module]) => {
                                const src = (module as { default: string }).default;
                                return (
                                <img
                                    key={path}
                                    src={src}
                                    alt={path}
                                    className="cursor-pointer rounded hover:opacity-80"
                                    onClick={() => onSelect(src)} // 👈 set as wallpaper
                                />
                                    );
                                })}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </Draggable>
        </>
    );
    }
