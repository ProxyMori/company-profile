import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { axiosInstance } from "@/lib/axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.post("/users/login", {
        login: email,
        password: password,
      });

      console.log(response.data);

      localStorage.setItem("userToken", response.data["user-token"]);

      navigate("/write");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-[#0F1115] text-white min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <p className="text-[#F59E0B] text-sm font-semibold mb-3">
            WELCOME BACK
          </p>

          <h1 className="text-3xl font-bold mb-3">Login to Websign</h1>

          <p className="text-gray-400">
            Sign in to create and manage your blog posts.
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="bg-[#171A20] border border-[#24272E] rounded-xl p-8 space-y-6"
        >
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 bg-[#0F1115] border-[#24272E]"
            />
          </div>

          <Button
            onClick={handleLogin}
            className="w-full bg-[#F59E0B] text-black hover:bg-[#D97706]"
          >
            Login
          </Button>

          <p className="text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <a href="/register" className="text-[#F59E0B] hover:underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
