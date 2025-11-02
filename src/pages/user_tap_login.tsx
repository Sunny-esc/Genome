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

import { useNavigate } from "react-router-dom";

export default function LoginPageTap() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/genome/login"); // go to login
  };
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <Card
        className="w-full max-w-sm bg-gradient-to-b from-gray-900 to-black border-2 border-blue-900 text-white"
        onClick={handleSubmit}
      >
        <CardHeader>
          <CardTitle>Users</CardTitle>
       
        </CardHeader>

        <CardContent>
            <div>
                <CircleUser />
            </div>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}
