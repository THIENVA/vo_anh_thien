import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import Block from "../../Block";

type Post = {
  id: number;
  title: string;
  slug: string;
  category: string;
  date: string;
  excerpt: string;
  content: string[];
};

function BlogList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("date", { ascending: false });

      if (error) console.error(error);
      else setPosts(data || []);
      setLoading(false);
    };

    fetchPosts();
  }, []);

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
    <div className="min-h-screen bg-[#fff] dark:bg-[#0f172a] px-6 py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <Block>
          <h1 className="text-4xl font-bold text-[#e7870a] mb-2">Blog</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Chia sẻ kiến thức và kinh nghiệm lập trình
          </p>
        </Block>

        <Block>
          <input
            type="text"
            placeholder="Tìm kiếm bài viết..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white dark:bg-gray-800 border border-[#e7870a]/30 rounded-xl px-4 py-3 mb-4 text-gray-700 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#e7870a]"
          />
          <div className="flex flex-wrap gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#e7870a] text-white"
                    : "bg-white dark:bg-gray-800 text-gray-500 hover:bg-[#e7870a]/20 hover:text-[#e7870a]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Block>

        {loading && (
          <Block>
            <p className="text-gray-400 text-center py-8">
              Đang tải bài viết...
            </p>
          </Block>
        )}

        {!loading && filtered.length === 0 && (
          <Block>
            <p className="text-gray-500">Không tìm thấy bài viết nào.</p>
          </Block>
        )}

        {!loading &&
          filtered.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`}>
              <Block>
                <span className="text-xs bg-[#e7870a]/10 text-[#e7870a] px-2 py-0.5 rounded-full mb-3 inline-block">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2 hover:text-[#e7870a] transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  {post.excerpt}
                </p>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Võ Anh Thiện</span>
                  <span>{post.date}</span>
                </div>
              </Block>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default BlogList;
