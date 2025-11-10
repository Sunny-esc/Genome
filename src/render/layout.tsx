import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "@/pages/home"
import LoginPage from "@/pages/login"
import LoginPageTap from "@/pages/user_tap_login"
import { AnimatePresence } from "framer-motion";

export default function Layout() {
  return (
        <AnimatePresence mode="wait">
    <BrowserRouter>
      <Routes >

        <Route path="/Genome" element={<Home />} />
        <Route path="/Genome/login" element={<LoginPage />} />
        <Route path="/Genome/user" element={<LoginPageTap />} />
      </Routes>
    </BrowserRouter>
    </AnimatePresence>
  )
}
