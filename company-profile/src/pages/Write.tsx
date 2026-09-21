import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { axiosInstance } from "@/lib/axios";
import { Link } from "react-router";

function Write() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");

  const submitBlog = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content) {
      return alert("Title and content cannot be empty");
    }

    try {
      const response = await axiosInstance.post("/data/Blog", {
        title: title,
        content: content,
        category: category,
        tags: tags,
        author: "Raoul",
        authorId: "test-user",
      });

      console.log(response.data);

      alert("Blog published!");

      setTitle("");
      setCategory("");
      setTags("");
      setContent("");
    } catch (error) {
      console.log(error);
      alert("Failed to publish blog");
    }
  };

  return (
    <div className="bg-[#0F1115] text-white min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <p className="text-[#F59E0B] text-sm font-semibold mb-3">
            CREATE BLOG
          </p>

          <h1 className="text-4xl font-bold mb-3">Write a New Blog Post</h1>

          <p className="text-gray-400">
            Share your thoughts, ideas, and expertise with your audience.
          </p>
        </div>

        <form
          onSubmit={submitBlog}
          className="bg-[#171A20] border border-[#24272E] rounded-xl p-8 space-y-6"
        >
          <div>
            <label className="text-sm font-medium">Title</label>

            <Input
              type="text"
              placeholder="Enter your blog title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="mt-2 bg-[#0F1115] border-[#24272E]"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Category</label>

            <Input
              type="text"
              placeholder="Web Development"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="mt-2 bg-[#0F1115] border-[#24272E]"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Tags</label>

            <Input
              type="text"
              placeholder="React, TypeScript"
              value={tags}
              onChange={(e) => {
                setTags(e.target.value);
              }}
              className="mt-2 bg-[#0F1115] border-[#24272E]"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Content</label>

            <Textarea
              placeholder="Write your blog post here..."
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              className="mt-2 min-h-[300px] bg-[#0F1115] border-[#24272E]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#F59E0B] text-black hover:bg-[#D97706]"
          >
            Publish Blog
          </Button>
        </form>
        <div className="container mx-auto py-6 px-10 flex justify-between">
          <Link to="/" className="text-[#F59E0B] hover:underline">
            ← Back to Home
          </Link>

          <Link
            to="/Blog"
            className="bg-[#F59E0B] text-black px-5 py-2 rounded-lg font-medium hover:bg-[#D97706]"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Write;
