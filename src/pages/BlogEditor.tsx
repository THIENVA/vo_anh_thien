import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

function BlogEditor() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.title || !form.content) {
      alert("Vui lòng nhập tiêu đề và nội dung!");
      return;
    }

    setLoading(true);

    const newPost = {
      title: form.title,
      excerpt: form.excerpt,
      category: form.category,
      slug: form.title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, ""),
      date: new Date().toISOString().split("T")[0],
      author: "Võ Anh Thiện",
      content: form.content.split("\n").filter((p) => p.trim() !== ""),
      cover_image: "",
    };

    const { error } = await supabase.from("posts").insert([newPost]);

    setLoading(false);

    if (error) {
      alert("Lỗi khi đăng bài: " + error.message);
      console.error(error);
    } else {
      alert("Đăng bài thành công!");
      navigate("/blog");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-[#e7870a] mb-10">Viết bài mới</h1>

      <div className="flex flex-col gap-6">
        <div>
          <label className="text-sm text-gray-400 mb-1 block">Tiêu đề</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Tiêu đề bài viết..."
            className="w-full bg-[#1e293b] border border-[#e7870a]/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#e7870a]"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400 mb-1 block">Category</label>
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Technical, Learning Notes, Dev Journey..."
            className="w-full bg-[#1e293b] border border-[#e7870a]/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#e7870a]"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400 mb-1 block">Mô tả ngắn</label>
          <input
            name="excerpt"
            value={form.excerpt}
            onChange={handleChange}
            placeholder="Tóm tắt nội dung bài viết..."
            className="w-full bg-[#1e293b] border border-[#e7870a]/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#e7870a]"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400 mb-1 block">
            Nội dung{" "}
            <span className="text-gray-500">(mỗi đoạn văn xuống dòng)</span>
          </label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            rows={12}
            placeholder="Viết nội dung bài viết..."
            className="w-full bg-[#1e293b] border border-[#e7870a]/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#e7870a] resize-none"
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-[#e7870a] text-white py-3 px-8 rounded-xl font-semibold hover:bg-[#374151] transition-colors disabled:opacity-50"
          >
            {loading ? "Đang đăng..." : "Đăng bài"}
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-[#1e293b] text-gray-400 py-3 px-8 rounded-xl font-semibold hover:bg-[#374151] transition-colors"
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogEditor;
