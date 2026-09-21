function WebTech() {
  return (
    <div className="bg-[#0F1115] text-[#FFFDD0] py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center text-[#FFFDD5] text-lg md:text-2xl font-bold">
          <p>ENGINEERED WITH LEADING MODERN WEB TECHNOLOGIES</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4 mt-8">
          <a href="https://react.dev/" target="_blank" rel="noreferrer">
            <div className="border border-[#17191F] bg-[#17191F] hover:bg-[#2A2D34] rounded-lg p-4 md:p-6 text-center">
              <p>React</p>
            </div>
          </a>

          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="border border-[#17191F] bg-[#17191F] hover:bg-[#2A2D34] rounded-lg p-4 md:p-6 text-center">
              <p>TypeScript</p>
            </div>
          </a>

          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            <div className="border border-[#17191F] bg-[#17191F] hover:bg-[#2A2D34] rounded-lg p-4 md:p-6 text-center">
              <p>Next.js</p>
            </div>
          </a>

          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            <div className="border border-[#17191F] bg-[#17191F] hover:bg-[#2A2D34] rounded-lg p-4 md:p-6 text-center">
              <p>Tailwind CSS</p>
            </div>
          </a>

          <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
            <div className="border border-[#17191F] bg-[#17191F] hover:bg-[#2A2D34] rounded-lg p-4 md:p-6 text-center">
              <p>Node.js</p>
            </div>
          </a>

          <a href="https://graphql.org/" target="_blank" rel="noreferrer">
            <div className="border border-[#17191F] bg-[#17191F] hover:bg-[#2A2D34] rounded-lg p-4 md:p-6 text-center">
              <p>GraphQL</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WebTech;
