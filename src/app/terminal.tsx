import { motion } from "framer-motion";
import { windowPop } from "@/animations/windowPop";
import ReactTerminal from "react-console-emulator";
import Draggable from "react-draggable";
import { useRef, useState } from "react";
import { CircleX, CircleMinus, Maximize2 } from "lucide-react";

interface TerminalProps {
  onClose: () => void;
}

function Terminal({ onClose }: TerminalProps) {
  const nodeRef = useRef(null);

  // ✅ Hooks must be inside the component
  const [path, setPath] = useState("~");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isFileManagerOpen, setIsFileManagerOpen] = useState(false);

  const commands = {
    help: {
      fn: () => `
Available commands:
  help               List all commands
  clear              Clear terminal
  ls                 List files/folders in directory
  cd <dir>           Change directory
  whoami             Shows current user
  date               Prints system date
  about              About this system
  neofetch           Display system info
  open <app>         Launch app (terminal, settings, files)
  shutdown           Return to login screen
`,
    },

    clear: {
      fn: function () {
        // @ts-ignore
        this.clearStdout();
      },
    },

    date: { fn: () => new Date().toString() },
    whoami: { fn: () => "user" },
    ls: { fn: () => `Desktop  Documents  Pictures  Downloads  Music  Videos  Apps` },

    cd: {
      fn: (dir: string) => {
        if (!dir) return "Usage: cd <directory>";
        setPath(dir === ".." ? "~" : dir);
        return `Changed directory to ${dir}`;
      },
    },

    about: {
      fn: () => `
GNOME-DE (React Desktop Environment)
Designed & Coded by Sunny 🧠⚡`,
    },

    neofetch: {
      fn: () => `
user@gnome
------------------------------
OS: GNOME-DE (React + Tailwind)
Kernel: imagination-1.0.0
CPU: Human Cortex 9000 🧠
GPU: Creative Rendering Engine 🎨
RAM: Based Developer • Infinite
`,
    },

    open: {
      fn: (app: string) => {
        if (app === "settings") {
          setIsSettingsOpen(true);
          return "⚙️ Opening Settings...";
        }
        if (app === "files" || app === "explorer") {
          setIsFileManagerOpen(true);
          return "📂 Opening File Manager...";
        }
        if (app === "terminal") return "🔁 Terminal is already open.";
        return `Unknown app: ${app}`;
      },
    },

    shutdown: {
      fn: () => "🛑 System shutting down...",
    },
  };

  return (
    <Draggable nodeRef={nodeRef}>
      
      <motion.div
        {...windowPop}
        ref={nodeRef}
        className="w-[50%] fixed top-20 rounded-2xl p-2 bg-zinc-800 h-[30rem] resize"
      >
        <div className="terminal-toolbar border-b flex space-x-4 justify-end p-2">
          <CircleX className="bg-red-600 rounded-full cursor-pointer" onClick={onClose} />
          <CircleMinus className="bg-yellow-400 rounded-full cursor-pointer" />
          <Maximize2 className="bg-green-400 rounded-full cursor-pointer" />
        </div>

        <div className="h-[90%]">
          <ReactTerminal
            typingSpeed={60}
            commands={commands}
            welcomeMessage={'Welcome to GNOME-like Terminal! Type "help" for commands.'}
            promptLabel={`user@gnome:${path}$`}
            noDefaults={true}
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
      </motion.div>
    </Draggable>
  );
}

export default Terminal;
