import { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable"; 
import {
  RefreshCw,
  House,
  CircleX,
  CircleMinus,
  Maximize2,
} from "lucide-react";

const HOME_URL = "https://google.com";
type Browserprops={
  onClose:()=>void;

};

export default function BrowserApp({onClose}:Browserprops  ) {
  const [isOpen, setIsOpen] = useState(true);
  const [url, setUrl] = useState(HOME_URL);
  const [displayUrl, setDisplayUrl] = useState(HOME_URL);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const nodeRef = useRef(null);

  useEffect(() => {
    const lastUrl = localStorage.getItem("browser-url");
    if (lastUrl) {
      setUrl(lastUrl);
      setDisplayUrl(lastUrl);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("browser-url", url);
  }, [url]);

  const goHome = () => {
    setUrl(HOME_URL);
    setDisplayUrl(HOME_URL);
  };

  const refresh = () => {
    if (iframeRef.current) {
      iframeRef.current.src = url;
    }
  };

  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      let formattedUrl = displayUrl.trim();
      if (!/^https?:\/\//i.test(formattedUrl)) {
        formattedUrl = "https://" + formattedUrl;
      }
      setUrl(formattedUrl);
    }
  };

  // auto reopen after 3s when closed
  useEffect(() => { 
    if (!isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // if closed, return nothing
  if (!isOpen) return null;

  return (
    <Draggable nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className="w-[50%] fixed top-20 rounded-2xl p-2 bg-amber-50 h-[30rem] resize"
      >
        <div className="browser-toolbar border-b flex space-x-4">
          <button onClick={refresh} className="border-r">
            <RefreshCw className="mr-2" />
          </button>
          <button className="border-2" onClick={goHome}>
            <House className="mr-2" />
          </button>
          <input
            value={displayUrl}
            onChange={(e) => setDisplayUrl(e.target.value)}
            onKeyDown={handleKeyDown}
            type="url"
            className="border-2 border-black"
          />
          <div className="flex w-full justify-end space-x-3">
            <CircleX
              className="bg-red-600 rounded-full cursor-pointer"
              onClick={onClose}
            />
            <CircleMinus className="bg-yellow-400 rounded-full cursor-pointer" />
            <Maximize2 className="bg-green-400 rounded-full cursor-pointer" />
          </div>
        </div>
        <iframe
          ref={iframeRef}
          src={url}
          title="Browser"
          style={{
            flexGrow: 1,
            width: "100%",
            height: "95%",
            padding: "20px",
            borderRadius: "20px",
          }}
        />
      </div>
    </Draggable>
  );
}
