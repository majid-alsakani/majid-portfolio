import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navigation() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border"
    >
      <nav className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-sm">{'<'}</span>
          </div>
          <span className="text-foreground font-mono font-bold text-sm">majid.dev</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="text-muted-foreground hover:text-accent transition-colors text-sm font-mono"
          >
            projects
          </a>
          <a
            href="#skills"
            className="text-muted-foreground hover:text-accent transition-colors text-sm font-mono"
          >
            skills
          </a>
          <a
            href="#about"
            className="text-muted-foreground hover:text-accent transition-colors text-sm font-mono"
          >
            about
          </a>

          <div className="flex items-center gap-3 pl-6 border-l border-border">
            <a
              href="https://github.com/majid-alsakani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:majidalsakani@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
              title="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://bsafina.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              title="Portfolio Website"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
