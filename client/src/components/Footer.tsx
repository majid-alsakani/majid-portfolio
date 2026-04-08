import { motion } from 'framer-motion';
import { Github, Mail, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t border-border bg-card/30 backdrop-blur"
    >
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xs">{'<'}</span>
              </div>
              <span className="text-foreground font-mono font-bold">majid.dev</span>
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              Building production-ready solutions for businesses and clients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-mono font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#projects"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors font-mono"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors font-mono"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors font-mono"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://bsafina.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors font-mono inline-flex items-center gap-1"
                >
                  Portfolio <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-mono font-bold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:majidalsakani@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors font-mono"
              >
                <Mail size={16} />
                majidalsakani@gmail.com
              </a>
              <a
                href="https://github.com/majid-alsakani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors font-mono"
              >
                <Github size={16} />
                github.com/majid-alsakani
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground font-mono">
              © {currentYear} Majid Al-Sakani. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground font-mono flex items-center gap-1">
              Made with <Heart size={12} className="text-accent" /> and code
            </p>
          </div>
        </div>

        {/* Code closing */}
        <div className="mt-8 text-center">
          <p className="text-accent font-mono text-sm">&lt;/portfolio&gt;</p>
        </div>
      </div>
    </motion.footer>
  );
}
