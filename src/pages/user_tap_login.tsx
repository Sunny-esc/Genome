import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {CircleUser} from "lucide-react"
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";
import { pageTransition } from "@/animations/page";
export default function LoginPageTap() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/genome/login"); // go to login
  };
  return (
    <motion.div {...pageTransition} className="bg-black h-screen flex items-center justify-center">
      <Card
        className="w-full max-w-sm bg-gradient-to-b from-gray-900 to-black border-2 border-blue-900 text-white"
        onClick={handleSubmit}
      >
        <CardHeader>
          <CardTitle>Users</CardTitle>
       
        </CardHeader>

        <CardContent className="flex border border-gray-500 rounded-xl m-4 p-4 gap-6">
            <div>
                <CircleUser />
            </div>
          <p>Guest</p>
        </CardContent>
        <CardFooter>
          <p className="text-sm font-stretch-50% text-gray-400">Tap to go to login</p>
        </CardFooter>
      </Card>
    </motion.div>
  );  
}
