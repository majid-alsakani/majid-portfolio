import { motion } from 'framer-motion';
import { Code2, Zap } from 'lucide-react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(114, 200, 100, .05) 25%, rgba(114, 200, 100, .05) 26%, transparent 27%, transparent 74%, rgba(114, 200, 100, .05) 75%, rgba(114, 200, 100, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(114, 200, 100, .05) 25%, rgba(114, 200, 100, .05) 26%, transparent 27%, transparent 74%, rgba(114, 200, 100, .05) 75%, rgba(114, 200, 100, .05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <motion.div
        className="container relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* Code bracket opening */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <span className="text-accent font-mono text-2xl">&lt;</span>
            <Code2 className="text-accent" size={32} />
            <span className="text-accent font-mono text-2xl">&gt;</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-mono font-bold text-accent mb-4"
          >
            Majid Al-Sakani
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground font-mono mb-6"
          >
            Software Developer | Web Systems | Automation
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Building reliable, scalable, and business-oriented solutions. Specialized in web development, backend systems, and Telegram bot automation. Computer Science student transforming ideas into production-ready applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-accent text-accent-foreground font-mono font-bold rounded-sm hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 inline-flex items-center justify-center gap-2 group"
            >
              View Projects
              <Zap size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:majidalsakani@gmail.com"
              className="px-8 py-3 border border-accent text-accent font-mono font-bold rounded-sm hover:bg-accent/10 transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Code bracket closing */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 mt-16"
          >
            <span className="text-accent font-mono text-2xl">&lt;/</span>
            <Code2 className="text-accent" size={32} />
            <span className="text-accent font-mono text-2xl">&gt;</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
