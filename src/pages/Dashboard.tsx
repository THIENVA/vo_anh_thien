import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useClerk, useUser } from "@clerk/clerk-react";
import postsData from "../data/posts.json";
import Block from "../Block";

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

const stats = [
  { label: "Tổng bài viết", value: postsData.length, icon: "📝" },
  { label: "Lượt xem", value: "1,204", icon: "👁️" },
  {
    label: "Categories",
    value: [...new Set(postsData.map((p) => p.category))].length,
    icon: "🏷️",
  },
  { label: "Tháng này", value: 2, icon: "📅" },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const { signOut } = useClerk();
  const { user } = useUser();
  const [postList, setPostList] = useState<Post[]>(postsData as Post[]);
  const [activeTab, setActiveTab] = useState<"posts" | "profile">("posts");

  const handleDelete = (id: number) => {
    if (confirm("Bạn chắc chắn muốn xóa bài này?")) {
      setPostList(postList.filter((p) => p.id !== id));
    }
  };

  const handleSignOut = () => {
    signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#fff] px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {/* Top Bar */}
        <Block>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-[#e7870a] text-xl font-black tracking-tight">
                VAT
              </span>
              <span className="text-gray-400 text-sm">/ Dashboard</span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/blog"
                className="text-sm text-gray-500 hover:text-[#e7870a] transition-colors"
              >
                ← Xem Blog
              </Link>
              <button
                onClick={handleSignOut}
                className="text-sm bg-[#e7870a]/10 hover:bg-[#e7870a]/20 text-[#e7870a] px-4 py-2 rounded-lg transition-all"
              >
                Đăng xuất
              </button>
            </div>
          </div>
        </Block>

        {/* Welcome */}
        <Block>
          <h1 className="text-3xl font-black text-gray-800 mb-1">
            Chào,{" "}
            <span className="text-[#e7870a]">{user?.firstName || "Admin"}</span>{" "}
            👋
          </h1>
          <p className="text-gray-500 text-sm">Quản lý blog cá nhân của bạn</p>
        </Block>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Block key={stat.label}>
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-black text-[#e7870a]">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
            </Block>
          ))}
        </div>

        {/* Tabs */}
        <Block>
          <div className="flex gap-2 border-b border-[#ebad0f]/30 mb-6">
            {(["posts", "profile"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 text-sm font-semibold rounded-t-lg transition-all -mb-px border-b-2 ${
                  activeTab === tab
                    ? "text-[#e7870a] border-[#e7870a]"
                    : "text-gray-400 border-transparent hover:text-gray-600"
                }`}
              >
                {tab === "posts" ? "📝 Bài viết" : "👤 Hồ sơ"}
              </button>
            ))}
          </div>

          {/* Tab: Posts */}
          {activeTab === "posts" && (
            <div>
              <div className="flex justify-between items-center mb-5">
                <p className="text-sm text-gray-500">
                  {postList.length} bài viết
                </p>
                <Link
                  to="/blog/editor"
                  className="bg-[#e7870a] hover:bg-[#d4780a] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                >
                  + Tạo bài mới
                </Link>
              </div>

              <div className="flex flex-col gap-3">
                {postList.length === 0 ? (
                  <div className="text-center py-16 text-gray-400">
                    <p className="text-4xl mb-3">📭</p>
                    <p>Chưa có bài viết nào.</p>
                  </div>
                ) : (
                  postList.map((post) => (
                    <div
                      key={post.id}
                      className="border border-[#ebad0f]/30 rounded-2xl p-5 flex items-start justify-between gap-4 hover:border-[#e7870a] transition-all"
                    >
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] bg-[#e7870a]/10 text-[#e7870a] px-2 py-0.5 rounded-full inline-block mb-2">
                          {post.category}
                        </span>
                        <h3 className="font-bold text-gray-800 text-base truncate">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 text-xs mt-1">
                          {post.date}
                        </p>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <Link
                          to={`/blog/${post.slug}`}
                          className="text-xs text-gray-500 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-all"
                        >
                          Xem
                        </Link>
                        <Link
                          to="/blog/editor"
                          className="text-xs text-[#e7870a] bg-[#e7870a]/10 hover:bg-[#e7870a]/20 px-3 py-1.5 rounded-lg transition-all"
                        >
                          Sửa
                        </Link>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="text-xs text-red-400 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-all"
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Tab: Profile */}
          {activeTab === "profile" && (
            <div className="max-w-lg">
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={user?.imageUrl}
                  alt="avatar"
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-[#ebad0f]"
                />
                <div>
                  <p className="font-bold text-gray-800 text-lg">
                    {user?.fullName}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {user?.primaryEmailAddress?.emailAddress}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {[
                  { label: "Họ tên", value: user?.fullName },
                  {
                    label: "Email",
                    value: user?.primaryEmailAddress?.emailAddress,
                  },
                  {
                    label: "Tham gia",
                    value: user?.createdAt?.toLocaleDateString("vi-VN"),
                  },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex justify-between text-sm border-b border-[#ebad0f]/20 pb-3"
                  >
                    <span className="text-gray-500">{label}</span>
                    <span className="text-gray-800 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Block>
      </div>
    </div>
  );
}
