import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogData";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const Blog = () => {
  return (
    <main className="min-h-screen bg-[#131313]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-gradient opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37] font-medium mb-4 block">
              Esplora la Medicina Estetica Moderna
            </span>
            <h1 className="font-headline-xl text-4xl md:text-6xl text-[#e5e2e1] mb-6 leading-tight">
              Il Nostro <span className="text-gold-gradient italic">Blog</span>
            </h1>
            <p className="text-[#a0a0a0] text-sm md:text-base leading-relaxed">
              Consigli professionali, approfondimenti tecnologici e tutto ciò che devi sapere sui trattamenti laser e di medicina estetica d'avanguardia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-[#1a1a1a] rounded-3xl overflow-hidden border border-[#2a2a2a] hover:border-[#d4af37]/30 transition-all duration-500 shadow-2xl"
              >
                <Link to={`/blog/${post.slug}`} className="block h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#131313]/80 backdrop-blur-md text-[#d4af37] text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/5">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-[#707070] text-[10px] uppercase tracking-widest mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={12} />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h2 className="text-xl md:text-2xl font-display text-[#e5e2e1] mb-4 group-hover:text-[#d4af37] transition-colors duration-300 leading-snug">
                      {post.title}
                    </h2>
                    
                    <p className="text-[#a0a0a0] text-sm line-clamp-3 mb-8 flex-1 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-[#d4af37] text-[10px] uppercase tracking-[0.2em] font-medium group/btn">
                      Leggi Articolo
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
