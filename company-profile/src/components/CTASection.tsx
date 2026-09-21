import { Button } from "@/components/ui/button";

function CTASection() {
  return (
    <section className="bg-[#0F1115] text-white py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="border border-[#8B5A0B] rounded-xl bg-[#1A1C21] p-6 md:p-12 text-center">
          <p className="text-[#F59E0B] text-xs font-bold">NEXT STEPS</p>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Ready to Build Something
            <br />
            Great?
          </h2>

          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-2xl mx-auto">
            Let's turn your idea into a digital experience that makes an impact.
          </p>

          <div className="mt-6">
            <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-black">
              Start a Project →
            </Button>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-8 mt-6 text-xs text-gray-400">
            <p>✦ Free Consultation</p>
            <p>✦ Dedicated Team</p>
            <p>✦ Fast Turnaround</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
