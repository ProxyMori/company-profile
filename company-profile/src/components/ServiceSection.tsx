function ServicesSection() {
  return (
    <div className="bg-[#0F1115] text-white py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="inline-block">
            <p className="text-[#F59E0B] text-xs">SOLUTIONS & EXPERTISE</p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">What We Do</h2>

          <p className="text-gray-300 text-sm md:text-base mt-3">
            From strategy to development, we create digital solutions designed
            around your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 md:mt-12">
          <div className="bg-[#171A20] border border-[#24272E] rounded-lg p-5 md:p-6">
            <div>Icon</div>

            <h3 className="text-xl font-bold mt-4">Web Development</h3>

            <p className="text-gray-400 text-sm md:text-base mt-2">
              Modern, responsive websites built with reliable and scalable
              technologies.
            </p>

            <div className="mt-6 py-2">
              <p>⊙ Responsive Design</p>
              <p>⊙ Modern Tech Stack</p>
              <p>⊙ High Performance</p>
            </div>
          </div>

          <div className="bg-[#171A20] border border-[#24272E] rounded-lg p-5 md:p-6">
            <div>Icon</div>

            <h3 className="text-xl font-bold mt-4">UI/UX Design</h3>

            <p className="text-gray-400 text-sm md:text-base mt-2">
              Clean and intuitive interfaces designed to create engaging user
              experiences.
            </p>

            <div className="mt-6 py-2">
              <p>⊙ User Research</p>
              <p>⊙ Wireframing & Prototyping</p>
              <p>⊙ Design Systems</p>
            </div>
          </div>

          <div className="bg-[#171A20] border border-[#24272E] rounded-lg p-5 md:p-6">
            <div>Icon</div>

            <h3 className="text-xl font-bold mt-4">Web Applications</h3>

            <p className="text-gray-400 text-sm md:text-base mt-2">
              Custom web applications designed to solve complex business
              problems.
            </p>

            <div className="mt-6 py-2">
              <p>⊙ Cloud Scalability</p>
              <p>⊙ API Integrations</p>
              <p>⊙ Robust Security</p>
            </div>
          </div>

          <div className="bg-[#171A20] border border-[#24272E] rounded-lg p-5 md:p-6">
            <div>Icon</div>

            <h3 className="text-xl font-bold mt-4">E-Commerce</h3>

            <p className="text-gray-400 text-sm md:text-base mt-2">
              High-performance online stores designed to help businesses sell
              and grow.
            </p>

            <div className="mt-6 py-2">
              <p>⊙ Conversion Optimization</p>
              <p>⊙ Payment Gateways</p>
              <p>⊙ Inventory Sync</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
