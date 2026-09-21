function Footer() {
  return (
    <div className="bg-[#0B0D10] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">Websign</span>
            </div>

            <p className="text-[#F59E0B]  text-sm mt-4 max-w-sm">
              Engineering high-impact web architectures and bespoke digital
              solutions for visionary digital leaders.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Quick Links</h3>
            <div className="flex flex-col gap-2 mt-4 text-sm text-gray-400">
              <a href="/About">About Us</a>
              <a href="/Service">Services</a>
              <a href="/Blog">Blog</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Direct Contact</h3>

            <div className="flex flex-col gap-2 mt-4 text-sm text-gray-400">
              <p> partner@websign.com</p>
              <p> +62 0811 1923 1257</p>
              <p> Indonesia, CA & Remote Global</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#24272E] mt-10 pt-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-500">
          <p>© 2025 Websign Agency. All rights reserved.</p>
          <div className="flex gap-6 text-[#F59E0B]">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Security Protocol</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
