import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  status: 'production' | 'private' | 'demo';
}

const projects: Project[] = [
  {
    id: 'hotel-website',
    title: 'Hotel Website',
    description: 'Full-featured hotel website with booking system, responsive design, and business-ready features. Deployed and actively used by real customers.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Backend'],
    link: 'https://bsafina.com',
    status: 'production',
  },
  {
    id: 'telegram-bots',
    title: 'Telegram Business Automation Bots',
    description: 'Production bots for channel/group management, join request handling, scheduled posting, referral systems, and admin control panels.',
    technologies: ['Python', 'Telegram API', 'Automation', 'Databases'],
    status: 'private',
  },
  {
    id: 'translation-bot',
    title: 'AI Translation Bot',
    description: 'Multi-language translation bot supporting text, images, files, and links. Features premium system and AI-powered API integrations.',
    technologies: ['Python', 'AI APIs', 'Telegram Bot', 'Premium System'],
    status: 'demo',
  },
  {
    id: 'learning-bot',
    title: 'Gamified Learning Bot',
    description: 'Interactive learning platform with XP/level system, daily streaks, user statistics, and progress-based engagement mechanics.',
    technologies: ['Python', 'Game Mechanics', 'Databases', 'Analytics'],
    status: 'demo',
  },
];

export default function ProjectsSection() {
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'production':
        return 'bg-accent/20 text-accent border border-accent';
      case 'private':
        return 'bg-muted/50 text-muted-foreground border border-muted';
      case 'demo':
        return 'bg-secondary/20 text-secondary-foreground border border-secondary';
      default:
        return 'bg-muted/50 text-muted-foreground';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'production':
        return 'Live';
      case 'private':
        return 'Private';
      case 'demo':
        return 'Demo';
      default:
        return status;
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="text-accent" size={28} />
            <h2 className="text-4xl md:text-5xl font-mono font-bold text-foreground">
              Featured Projects
            </h2>
          </div>
          <p className="text-muted-foreground font-mono text-sm">
            Real-world solutions delivered to businesses and clients
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-6 border border-border rounded-sm bg-card/50 backdrop-blur hover:bg-card transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-mono font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <span className={`inline-block text-xs font-mono px-2 py-1 rounded-sm ${getStatusColor(project.status)}`}>
                      {getStatusLabel(project.status)}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 bg-secondary/30 text-secondary-foreground rounded-sm border border-secondary/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-mono"
                    >
                      <ExternalLink size={16} />
                      Visit
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-mono"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {!project.link && !project.github && (
                    <span className="text-muted-foreground text-xs font-mono italic">
                      Available upon request
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
