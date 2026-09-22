import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { axiosInstance } from "@/lib/axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axiosInstance.post("/users/register", {
        name: name,
        email: email,
        password: password,
      });

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#0F1115] text-white min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <p className="text-[#F59E0B] text-sm font-semibold mb-3">
            JOIN WEBSIGN
          </p>

          <h1 className="text-3xl font-bold mb-3">Create an Account</h1>

          <p className="text-gray-400">
            Create an account to publish blog posts.
          </p>
        </div>

        <div className="bg-[#171A20] border border-[#24272E] rounded-xl p-8 space-y-6">
          <div>
            <label className="text-sm font-medium">Name</label>

            <Input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 bg-[#0F1115] border-[#24272E]"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>

            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 bg-[#0F1115] border-[#24272E]"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>

            <Input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 bg-[#0F1115] border-[#24272E]"
            />
          </div>

          <Button
            onClick={handleRegister}
            className="w-full bg-[#F59E0B] text-black hover:bg-[#D97706]"
          >
            Create Account
          </Button>
          <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <a href="/login" className="text-[#F59E0B] hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
