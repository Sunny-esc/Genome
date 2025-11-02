import React from "react";
import ReactTerminal from "react-console-emulator";
import Draggable from "react-draggable";
import { useRef } from "react";
import { CircleX, CircleMinus, Maximize2 } from "lucide-react";

interface TerminalProps {
  onClose: () => void;
}

function Terminal({ onClose }: TerminalProps) {
  const nodeRef = useRef(null);

  const commands = {
    echo: {
      description: "Echoes input",
      usage: "echo <value>",
      fn: (...args: string[]) => args.join(" "),
    },
    help: {
      description: "Lists all commands",
      usage: "help",
      fn: () => "Available commands: echo, help",
    },
  };

  return (
    <Draggable nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className="w-[50%] fixed top-20 rounded-2xl p-2 bg-zinc-800 h-[30rem] resize"
      >
        <div className="terminal-toolbar border-b flex space-x-4 justify-end p-2">
          <CircleX
            className="bg-red-600 rounded-full cursor-pointer"
            onClick={onClose}
          />
          <CircleMinus className="bg-yellow-400 rounded-full cursor-pointer" />
          <Maximize2 className="bg-green-400 rounded-full cursor-pointer" />
        </div>
        <div className="h-[90%]">
          <ReactTerminal
            commands={commands}
            welcomeMessage={
              'Welcome to GNOME-like Terminal! Type "help" for commands.'
            }
            promptLabel={"user@gnome:~$"}
            noDefaults={true} // ✅ this disables built-in commands
            style={{
              backgroundColor: "#2e3436",
              minHeight: "100%",
              maxHeight: "100%",
              overflow: "auto",
              color: "#eeeeec",
              fontFamily: "monospace",
              padding: "10px",
              borderRadius: "0 0 10px 10px",
            }}
          />
        </div>
      </div>
    </Draggable>
  );
}

export default Terminal;
