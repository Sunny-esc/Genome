import Topbar from "@/comp/Topbar/topbar"
import Main from "./main.page"
import Dock from "@/comp/dock/dock"
import { motion } from "framer-motion";
import { pageTransition } from "@/animations/page"

export default function Home(){
    return(
        <motion.div {...pageTransition} className="h-screen w-screen">
        <Topbar/>
        <Main/>
        <Dock/>
        </motion.div>

    )

}