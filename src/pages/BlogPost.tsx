import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogData";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { useEffect } from "react";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!post) {
      navigate("/blog");
    }
  }, [post, navigate]);

  if (!post) return null;

  return (
    <main className="min-h-screen bg-[#131313]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/50 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-6 pb-12 md:pb-20 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/blog"
              className="flex items-center gap-2 text-[#d4af37] text-[10px] uppercase tracking-[0.2em] font-medium mb-8 hover:opacity-70 transition-opacity"
            >
              <ArrowLeft size={14} />
              Torna al Blog
            </Link>
            
            <span className="bg-[#d4af37] text-[#131313] text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full font-bold mb-6 inline-block">
              {post.category}
            </span>
            
            <h1 className="font-headline-xl text-3xl md:text-5xl text-[#e5e2e1] mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-[#a0a0a0] text-[10px] uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-[#d4af37]" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#d4af37]" />
                Tempo di lettura: {post.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-32 relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="prose prose-invert prose-gold max-w-none"
          >
            <div 
              className="blog-content text-[#a0a0a0] text-base md:text-lg leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>

          {/* Social Share & Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 pt-12 border-t border-[#2a2a2a] flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#707070]">Condividi</span>
              <button className="p-3 rounded-full border border-[#2a2a2a] text-[#e5e2e1] hover:border-[#d4af37] transition-colors">
                <Share2 size={18} />
              </button>
            </div>

            <a
              href={`https://wa.me/393296164667?text=Buongiorno,%20ho%20letto%20l'articolo%20su%20${post.title}%20e%20vorrei%20maggiori%20informazioni`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-gradient text-[#131313] px-10 py-5 rounded-full text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium hover:opacity-90 transition-all duration-300 shadow-xl shadow-[#d4af37]/10"
            >
              Richiedi Informazioni
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPost;
