function Team() {
  return (
    <div className="bg-[#0F1115] text-white min-h-screen">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="text-[#F59E0B] text-xs md:text-sm font-semibold mb-3">
            OUR TEAM
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Meet the People Behind Websign
          </h1>

          <p className="text-gray-400 text-sm md:text-lg leading-7">
            Our team combines technical expertise, creative thinking, and
            collaboration to build digital experiences that make an impact.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-12 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-[#171A20] border border-[#24272E] rounded-xl overflow-hidden">
            <img
              src="/profile.jpeg"
              alt="Team Member 1"
              className="w-full h-56 md:h-64 object-cover"
            />

            <div className="p-5 md:p-6">
              <h2 className="text-xl font-bold">Raoul Widjaja</h2>

              <p className="text-[#F59E0B] text-sm font-medium mt-1">
                Founder & CEO
              </p>

              <p className="text-gray-400 text-sm leading-6 mt-4">
                Leads the company and oversees our overall business and digital
                strategy.
              </p>
            </div>
          </div>

          <div className="bg-[#171A20] border border-[#24272E] rounded-xl overflow-hidden">
            <img
              src="/Felicia.jpg"
              alt="Team Member 2"
              className="w-full h-56 md:h-64 object-cover"
            />

            <div className="p-5 md:p-6">
              <h2 className="text-xl font-bold">Felicia Perry</h2>

              <p className="text-[#F59E0B] text-sm font-medium mt-1">
                UI/UX Designer
              </p>

              <p className="text-gray-400 text-sm leading-6 mt-4">
                Focuses on creating intuitive and visually engaging digital
                experiences. Combines user research, design, and creativity to
                make products simple and enjoyable to use.
              </p>
            </div>
          </div>

          <div className="bg-[#171A20] border border-[#24272E] rounded-xl overflow-hidden">
            <img
              src="/larry.jpg"
              alt="Team Member 3"
              className="w-full h-56 md:h-64 object-cover"
            />

            <div className="p-5 md:p-6">
              <h2 className="text-xl font-bold">Larry Rivera</h2>

              <p className="text-[#F59E0B] text-sm font-medium mt-1">
                Lead Developer
              </p>

              <p className="text-gray-400 text-sm leading-6 mt-4">
                Builds reliable and scalable systems that power modern web
                applications. Focused on APIs, databases, security, and ensuring
                everything works smoothly behind the scenes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
