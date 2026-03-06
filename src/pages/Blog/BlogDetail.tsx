import { useParams, Link } from "react-router-dom";
import postsData from "../../data/posts.json";
import Block from "../../Block"; // ✅ import Block

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

function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold text-[#e7870a]">404</h1>
        <p className="text-gray-400">Bài viết không tồn tại.</p>
        <Link to="/blog" className="text-[#e7870a] hover:underline">
          ← Quay lại Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fff] px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <Block>
          {/* Navigation */}
          <div className="flex items-center gap-3 mb-6">
            <Link to="/blog" className="text-[#e7870a] hover:underline text-sm">
              ← Quay lại Blog
            </Link>
            <span className="text-xs bg-[#e7870a]/10 text-[#e7870a] px-2 py-0.5 rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-[#e7870a] mb-4">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex justify-between text-sm text-gray-500 mb-8 border-b border-[#ebad0f] pb-4">
            <span>Võ Anh Thiện</span>
            <span>{post.date}</span>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </Block>
      </div>
    </div>
  );
}

export default BlogDetail;
