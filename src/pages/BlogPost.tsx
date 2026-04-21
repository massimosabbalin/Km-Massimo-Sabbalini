import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogData";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#131313] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-[#e5e2e1] font-display mb-4">
            {language === "IT" ? "Post non trovato" : "Beitrag nicht gefunden"}
          </h1>
          <Link to="/blog" className="text-[#d4af37] hover:underline">
            {language === "IT" ? "Torna al blog" : "Zurück zum Blog"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#131313]">
      <Navbar />

      {/* Hero Header */}
      <header className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={post.image}
          alt={post.title[language]}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center gap-4 text-[#d4af37] text-[10px] uppercase tracking-widest mb-6"
            >
              <span className="bg-[#d4af37]/10 border border-[#d4af37]/30 px-3 py-1 rounded-full backdrop-blur-sm">
                {post.category[language]}
              </span>
              <div className="flex items-center gap-2 text-white/60">
                <Calendar size={14} />
                {post.date}
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Clock size={14} />
                {post.readTime}
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl md:text-6xl text-[#e5e2e1] mb-8 leading-tight max-w-4xl"
            >
              {post.title[language]}
            </motion.h1>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-invert prose-gold max-w-none"
          >
            <div 
              className="font-body-md text-lg text-[#d0c5af] leading-relaxed space-y-8"
              dangerouslySetInnerHTML={{ __html: post.content[language] }} 
            />
          </motion.div>

          {/* Social & Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-8 border-t border-[#2a2a2a] flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <button 
              onClick={() => navigate("/blog")}
              className="flex items-center gap-3 text-[#d4af37] text-xs uppercase tracking-widest font-medium hover:opacity-80 transition-opacity"
            >
              <ArrowLeft size={16} />
              {language === "IT" ? "Torna al Blog" : "Zurück zum Blog"}
            </button>

            <div className="flex items-center gap-6">
               <button 
                 onClick={() => {
                   navigator.clipboard.writeText(window.location.href);
                   alert(language === "IT" ? "Link copiato!" : "Link kopiert!");
                 }}
                 className="flex items-center gap-2 text-white/40 hover:text-[#d4af37] transition-colors text-[10px] uppercase tracking-widest"
               >
                 <Share2 size={14} />
                 {language === "IT" ? "Condividi" : "Teilen"}
               </button>
            </div>
          </motion.div>

          {/* CTA Section */}
          <div className="mt-20 p-8 md:p-12 rounded-3xl bg-secondary border border-primary/20 text-center relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                   {language === "IT" ? "Interessato a questo trattamento?" : "Interessiert an dieser Behandlung?"}
                </h3>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                   {language === "IT" 
                     ? "Prenota una consulenza per scoprire come i nostri protocolli medici possono aiutarti a raggiungere i tuoi obiettivi estetici."
                     : "Buchen Sie eine Beratung, um zu erfahren, wie unsere medizinischen Protokolle Ihnen helfen können, Ihre ästhetischen Ziele zu erreichen."}
                </p>
                <a
                  href={`https://wa.me/393296164667?text=${encodeURIComponent(t("nav.whatsappMessage") + " (" + post.title[language] + ")")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gold-gradient text-primary-foreground px-10 py-5 rounded-full text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium hover:opacity-90 transition-all duration-300"
                >
                  {t("cta.button")}
                </a>
             </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default BlogPost;
