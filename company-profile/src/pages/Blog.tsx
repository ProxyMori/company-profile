import { useEffect, useState } from "react";
import { Link } from "react-router";
import { axiosInstance } from "@/lib/axios";
import type { Blog } from "@/types/Blog";

function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getBlogs = async () => {
    try {
      const response = await axiosInstance.get("/data/Blog");

      console.log(response.data);

      setBlogs(response.data);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="bg-[#0F1115] text-white min-h-screen">
      <div className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mt-8">
            <p className="text-[#F59E0B] text-xs md:text-sm font-semibold mb-3">
              WEBSIGN BLOG
            </p>

            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Insights & Ideas
            </h1>

            <p className="text-gray-400 text-sm md:text-lg leading-7">
              Explore our latest thoughts, insights, and ideas about web
              development, design, and technology.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-12 md:pb-20">
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-gray-400">Loading...</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400">No blog posts available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {blogs.map((blog) => {
              return (
                <div
                  key={blog.objectId}
                  className="bg-[#171A20] border border-[#24272E] rounded-xl p-5 md:p-6 flex flex-col"
                >
                  <p className="text-[#F59E0B] text-sm font-medium mb-3">
                    {blog.category}
                  </p>

                  <h2 className="text-xl font-bold mb-3">{blog.title}</h2>

                  <p className="text-gray-400 text-sm leading-6 mb-6">
                    {blog.content}
                  </p>

                  <div className="flex items-end justify-between gap-4 mt-auto">
                    <div>
                      <p className="text-sm font-medium">{blog.author}</p>

                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(blog.created).toLocaleDateString()}
                      </p>
                    </div>

                    <Link
                      to={`/blog/${blog.objectId}`}
                      className="text-[#F59E0B] text-sm font-medium hover:underline whitespace-nowrap"
                    >
                      Read Article →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="container mx-auto px-6 pb-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/" className="text-[#F59E0B] hover:underline">
            ← Back to Home
          </Link>

          <Link
            to="/write"
            className="bg-[#F59E0B] text-black px-5 py-2 rounded-lg font-medium hover:bg-[#D97706]"
          >
            Create Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
