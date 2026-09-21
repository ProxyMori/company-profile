function AboutSection() {
  return (
    <div className="bg-[#0F1115] text-white py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <div className="inline-block border border-[#F59E0B] rounded-md px-3 py-1 mb-4">
              <p className="text-[#F59E0B] text-xs">• WHO WE ARE</p>
            </div>

            <h2 className="text-4xl font-bold mb-4">
              Building Better Digital Experiences
            </h2>

            <p className="text-gray-300 mb-6">
              We are a team of developers, designers, and digital
              problem-solvers dedicated to helping businesses establish a strong
              presence online. From company websites to custom web applications,
              we combine thoughtful design with reliable technology to create
              digital products that make a real impact.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#171A20] rounded-lg p-4">
                <h3 className="font-bold">Focus on Quality</h3>

                <p className="text-sm text-[#FFFDD0]">
                  Surgical code reviews, clean paradigms, and top tier
                  architecture.
                </p>
              </div>

              <div className="bg-[#171A20] rounded-lg p-4">
                <h3 className="font-bold">True Collaboration</h3>

                <p className="text-sm text-[#FFFDD0]">
                  Embedded teams maintaining clear direct channels with
                  stakeholders.
                </p>
              </div>

              <div className="bg-[#171A20] rounded-lg p-4">
                <h3 className="font-bold">Forward Innovation</h3>

                <p className="text-sm text-[#FFFDD0]">
                  Early adopters of headless frameworks and performant edge
                  networks.
                </p>
              </div>

              <div className="bg-[#171A20] rounded-lg p-4">
                <h3 className="font-bold">Client Satisfaction</h3>

                <p className="text-sm text-[#FFFDD0]">
                  Proven long-term partnerships with compounding digital
                  success.
                </p>
              </div>
            </div>

            <a href="/about" className="inline-block mt-6 text-[#F59E0B]">
              Learn More About Us →
            </a>
          </div>

          {/* Right Side */}
          <div>
            <img
              src="/teamrev.png"
              alt="Websign team"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
