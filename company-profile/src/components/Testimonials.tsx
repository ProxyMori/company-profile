function Testimonials() {
  return (
    <div className="bg-[#0F1115] text-white py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="inline-block">
            <p className="text-[#F59E0B] text-xs">
              TRUSTED BY INDUSTRY LEADERS
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            What Our Clients Say
          </h2>

          <p className="text-gray-300 text-sm md:text-base mt-3">
            Real feedback from partners who engineered their digital
            transformation with Websign.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
          <div className="bg-[#171A20] border border-[#24272E] rounded-lg p-5 md:p-6 flex flex-col">
            <div className="text-[#F59E0B]">★★★★★</div>

            <p className="text-gray-300 text-sm md:text-base mt-4">
              "The team completely transformed our online presence. The new
              website looks professional, loads quickly, and has helped us
              attract more customers."
            </p>

            <div className="flex items-center justify-between mt-auto pt-6">
              <div>
                <h3 className="font-bold">Gene Little</h3>

                <p className="text-xs md:text-sm text-gray-400 mt-1">
                  Chief Technology Officer at Kinetix Media
                </p>
              </div>

              <img
                src="/Gene.jpg"
                alt="Gene Little"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
              />
            </div>
          </div>

          <div className="bg-[#171A20] border border-[#24272E] rounded-lg p-5 md:p-6 flex flex-col">
            <div className="text-[#F59E0B]">★★★★★</div>

            <p className="text-gray-300 text-sm md:text-base mt-4">
              "They understood our requirements from the beginning and delivered
              a website that was better than we expected."
            </p>

            <div className="flex items-center justify-between mt-auto pt-6">
              <div>
                <h3 className="font-bold">Judith Harrison</h3>

                <p className="text-xs md:text-sm text-gray-400 mt-1">
                  VP of Product at Solaris Cloud
                </p>
              </div>

              <img
                src="/Judith.jpg"
                alt="Judith Harrison"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
              />
            </div>
          </div>

          <div className="bg-[#171A20] border border-[#24272E] rounded-lg p-5 md:p-6 flex flex-col">
            <div className="text-[#F59E0B]">★★★★★</div>

            <p className="text-gray-300 text-sm md:text-base mt-4">
              "Professional, creative, and reliable. They made the entire
              development process simple and straightforward."
            </p>

            <div className="flex items-center justify-between mt-auto pt-6">
              <div>
                <h3 className="font-bold">Zachary Fleming</h3>

                <p className="text-xs md:text-sm text-gray-400 mt-1">
                  Founder & CEO at Omnistack
                </p>
              </div>

              <img
                src="/Zach.jpg"
                alt="Zachary Fleming"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
