import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion";
import { pageTransition } from "@/animations/page"
import {CircleUser} from "lucide-react"

export default function LoginPage() {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: validate credentials
    navigate("/genome") // go to main/home
  }

  return (
     <motion.div {...pageTransition} >

    <div className="flex items-center justify-center h-screen bg-gray-950 text-white">

    <Card className="w-full max-w-sm bg-gradient-to-b from-gray-900 to-black border-2 border-blue-900">
      <CardHeader>
        <CardTitle className="text-xl text-gray-50 flex gap-6"> <CircleUser />Login to your account</CardTitle>
        <CardDescription className="text-gray-200">
          Enter your email below to login to your account
        </CardDescription>
       
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                />
            </div>
            <div className="grid gap-2">
              <div className="flex-col items-center">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="pass" required className="bg-gray-700 border-2" />
               
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button onClick={handleSubmit} type="submit" className="w-full bg-blue-800">
          Login
        </Button>
      
      </CardFooter>
    </Card>
    </div>
  </motion.div>
  )
}
