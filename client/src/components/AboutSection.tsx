import { motion } from 'framer-motion';
import { BookOpen, Code, Users } from 'lucide-react';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="about" className="py-20 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="text-accent" size={28} />
            <h2 className="text-4xl md:text-5xl font-mono font-bold text-foreground">
              About Me
            </h2>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left column - Bio */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-accent font-mono">Computer Science student</span> and <span className="text-accent font-mono">Software Developer</span> with hands-on experience building production systems for real businesses.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My work spans web development, backend systems, and business automation. I focus on creating solutions that are reliable, scalable, and directly aligned with business goals. I actively leverage modern tools and AI-assisted workflows to deliver efficient and maintainable code.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I've worked with hotels, traders, businesses, and individual clients to transform their ideas into production-ready applications. Each project taught me the importance of understanding client needs and delivering solutions that truly solve problems.
            </p>

            <div className="pt-4">
              <h3 className="text-accent font-mono font-bold mb-3">What I Focus On:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-mono mt-1">→</span>
                  <span>Building systems that are reliable and production-ready</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-mono mt-1">→</span>
                  <span>Creating scalable architectures for growing businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-mono mt-1">→</span>
                  <span>Automating workflows to save time and reduce errors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-mono mt-1">→</span>
                  <span>Writing clean, maintainable code that others can understand</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right column - Stats & Education */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border border-border rounded-sm bg-card/50 backdrop-blur">
                <div className="text-3xl font-mono font-bold text-accent mb-2">4+</div>
                <p className="text-sm text-muted-foreground font-mono">Production Projects</p>
              </div>
              <div className="p-6 border border-border rounded-sm bg-card/50 backdrop-blur">
                <div className="text-3xl font-mono font-bold text-accent mb-2">2+</div>
                <p className="text-sm text-muted-foreground font-mono">Years Experience</p>
              </div>
              <div className="p-6 border border-border rounded-sm bg-card/50 backdrop-blur">
                <div className="text-3xl font-mono font-bold text-accent mb-2">10+</div>
                <p className="text-sm text-muted-foreground font-mono">Clients Served</p>
              </div>
              <div className="p-6 border border-border rounded-sm bg-card/50 backdrop-blur">
                <div className="text-3xl font-mono font-bold text-accent mb-2">100%</div>
                <p className="text-sm text-muted-foreground font-mono">Delivery Rate</p>
              </div>
            </div>

            {/* Education */}
            <div className="p-6 border border-border rounded-sm bg-card/50 backdrop-blur">
              <div className="flex items-start gap-3 mb-4">
                <Code className="text-accent mt-1" size={20} />
                <div>
                  <h3 className="text-accent font-mono font-bold">Education</h3>
                  <p className="text-sm text-muted-foreground mt-1">Computer Science Student</p>
                  <p className="text-xs text-muted-foreground/60 mt-2">Continuous learning through real-world projects and modern development practices</p>
                </div>
              </div>
            </div>

            {/* Approach */}
            <div className="p-6 border border-border rounded-sm bg-card/50 backdrop-blur">
              <div className="flex items-start gap-3">
                <Users className="text-accent mt-1" size={20} />
                <div>
                  <h3 className="text-accent font-mono font-bold">My Approach</h3>
                  <p className="text-sm text-muted-foreground mt-1">I believe in understanding client needs first, then building solutions that exceed expectations. Quality over quantity, always.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
