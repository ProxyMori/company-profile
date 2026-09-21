import { Link } from "react-router";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <div className="w-full bg-gray-900 text-white fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">
          <h1 className="font-extrabold text-base md:text-lg">Websign</h1>
          <div className="flex gap-2">
            <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-black text-xs md:text-sm px-3 md:px-4">
              <Link to="/register">Sign up</Link>
            </Button>
            <Button className="bg-gray-500 hover:bg-gray-700 text-white text-xs md:text-sm px-3 md:px-4">
              <Link to="/login">Log in</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6 py-2">
          <div className="flex justify-center items-center gap-5 md:gap-10 font-bold text-xs md:text-base">
            <Link to="/" className="hover:text-[#F59E0B]">
              Home
            </Link>

            <Link to="/about" className="hover:text-[#F59E0B]">
              About Us
            </Link>

            <Link to="/teams" className="hover:text-[#F59E0B]">
              Team
            </Link>

            <Link to="/service" className="hover:text-[#F59E0B]">
              Services
            </Link>

            <Link to="/blog" className="hover:text-[#F59E0B]">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
