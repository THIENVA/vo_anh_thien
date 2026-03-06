import { useState } from "react";
import { Link } from "react-router-dom";
import postsData from "../../data/posts.json";
import Block from "../../Block";

type Post = {
  id: number;
  title: string;
  slug: string;
  category: string;
  date: string;
  excerpt: string;
  coverImage: string;
  content: string[];
};

const posts = postsData as Post[];

function BlogList() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const allCategories = [
    "All",
    ...Array.from(new Set(posts.map((p) => p.category))),
  ];

  const filtered = posts.filter((post) => {
    const matchSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      activeCategory === "All" || post.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    // ✅ Background trắng toàn trang
    <div className="min-h-screen bg-[#fff] px-6 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {/* Header Block */}
        <Block>
          <h1 className="text-4xl font-bold text-[#e7870a] mb-2">Blog</h1>
          <p className="text-gray-600">
            Chia sẻ kiến thức và kinh nghiệm lập trình
          </p>
        </Block>

        {/* Search + Filter Block */}
        <Block>
          <input
            type="text"
            placeholder="Tìm kiếm bài viết..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-[#e7870a]/30 rounded-xl px-4 py-3 mb-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#e7870a]"
          />
          <div className="flex flex-wrap gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#e7870a] text-white"
                    : "bg-white text-gray-500 hover:bg-[#e7870a]/20 hover:text-[#e7870a]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Block>

        {/* Post List - mỗi bài là 1 Block */}
        {filtered.length === 0 ? (
          <Block>
            <p className="text-gray-500">Không tìm thấy bài viết nào.</p>
          </Block>
        ) : (
          filtered.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`}>
              <Block>
                <span className="text-xs bg-[#e7870a]/10 text-[#e7870a] px-2 py-0.5 rounded-full mb-3 inline-block">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-[#e7870a] transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm mb-4">{post.excerpt}</p>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Võ Anh Thiện</span>
                  <span>{post.date}</span>
                </div>
              </Block>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default BlogList;
