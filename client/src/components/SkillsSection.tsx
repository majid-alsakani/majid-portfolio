import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['Python', 'JavaScript', 'HTML/CSS', 'TypeScript'],
  },
  {
    name: 'Web & Backend',
    skills: ['REST APIs', 'Backend Architecture', 'Responsive Design', 'Database Design'],
  },
  {
    name: 'Automation & Bots',
    skills: ['Telegram Bot Dev', 'Business Automation', 'Scheduling Systems', 'Admin Dashboards'],
  },
  {
    name: 'Tools & Platforms',
    skills: ['Git/GitHub', 'Linux', 'APIs', 'AI-assisted Development'],
  },
  {
    name: 'Data & Storage',
    skills: ['JSON', 'SQLite', 'Data Modeling', 'Database Management'],
  },
  {
    name: 'Specializations',
    skills: ['Scalable Systems', 'Business Logic', 'User Management', 'Role-based Access'],
  },
];

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Zap className="text-accent" size={28} />
            <h2 className="text-4xl md:text-5xl font-mono font-bold text-foreground">
              Skills & Technologies
            </h2>
          </div>
          <p className="text-muted-foreground font-mono text-sm">
            Tools and expertise for building production systems
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="group"
            >
              <div className="p-6 border border-border rounded-sm bg-card/50 backdrop-blur hover:border-accent/50 transition-all duration-300">
                <h3 className="text-lg font-mono font-bold text-accent mb-4">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 bg-secondary/30 text-secondary-foreground rounded-sm text-sm font-mono border border-secondary/50 hover:border-accent/50 hover:bg-secondary/50 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
