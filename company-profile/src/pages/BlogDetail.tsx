import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { axiosInstance } from "@/lib/axios";
import type { Blog } from "@/types/Blog";

function BlogDetail() {
  const [blog, setBlog] = useState<Blog>();
  const [isLoading, setIsLoading] = useState(true);

  const { objectId } = useParams();

  const getBlog = async () => {
    try {
      const response = await axiosInstance.get(`/data/Blog/${objectId}`);

      console.log(response.data);

      setBlog(response.data);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getBlog();
  }, [objectId]);

  if (isLoading) {
    return (
      <div className="bg-[#0F1115] text-white min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="bg-[#0F1115] text-white min-h-screen flex items-center justify-center">
        <p>Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#0F1115] text-white min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <Link to="/blog" className="text-[#F59E0B] hover:underline">
          ← Back to Blog
        </Link>

        <div className="max-w-3xl mx-auto mt-10">
          <p className="text-[#F59E0B] text-sm font-semibold mb-3">
            {blog.category}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{blog.title}</h1>

          <div className="flex items-center gap-4 text-sm text-gray-400 mb-10">
            <p>{blog.author}</p>

            <p>{new Date(blog.created).toLocaleDateString()}</p>
          </div>

          <div className="bg-[#171A20] border border-[#24272E] rounded-xl p-8">
            <p className="text-gray-300 leading-8 whitespace-pre-line">
              {blog.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
