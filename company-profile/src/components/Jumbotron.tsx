import { Button } from "@/components/ui/button";

function Jumbotron() {
  return (
    <div className="bg-[#0F1115] text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-screen md:h-[65vh] pt-24 md:pt-28 gap-10 md:gap-20 px-6 md:px-0">
        {/* Left */}
        <div className="flex flex-col justify-center gap-4 pl-6">
          <p className="text-[#F59E0B] text-xs py-2 font-bold font-jakarta">
            WE BUILD DIGITAL EXPERIENCES THAT MOVE BUSINESSES FORWARD.
          </p>

          <div className="font-bold text-4xl font-inter">
            <p>
              Turning Ideas Into
              <br />
              <div className="text-[#D97706] ">
                Powerful Digital Experiences
              </div>
            </p>
          </div>

          <p className="font-inter">
            We design and develop modern, scalable, and high-performance
            websites and web applications that help businesses grow.
          </p>

          <div className="flex gap-4">
            <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-black">
              <a href="/Service">Explore Our Services</a>
            </Button>

            <Button className="bg-gray-500 hover:bg-gray-700 text-white">
              Contact Us
            </Button>
          </div>

          <div className="flex gap-12">
            <div>
              <h3>120+</h3>
              <p>PROJECTS BUILT</p>
            </div>

            <div>
              <h3>99.8%</h3>
              <p>RETENTION RATE</p>
            </div>

            <div>
              <h3>10+</h3>
              <p>YEARS MASTERY</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:pt-24">
          <img
            src="/webdev.png"
            alt="Web development workspace"
            className="w-full max-w-lg rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
