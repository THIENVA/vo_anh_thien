import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BlogEditor() {
  const navigate = useNavigate();
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

  const handleSubmit = () => {
    console.log("New post:", {
      ...form,
      slug: form.title.toLowerCase().replace(/\s+/g, "-"),
      date: new Date().toISOString().split("T")[0],
      author: "Võ Anh Thiện",
    });
    alert("Đã lưu bài viết (mock)!");
    navigate("/blog");
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
          <label className="text-sm text-gray-400 mb-1 block">Nội dung</label>
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
            className="bg-[#e7870a] text-white py-3 px-8 rounded-xl font-semibold hover:bg-[#374151] transition-colors"
          >
            Đăng bài
          </button>
          <button
            onClick={() => navigate("/blog")}
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
