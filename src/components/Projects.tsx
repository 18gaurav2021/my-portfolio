import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const projects = [
    {
      title: 'IPC Web Refresh & Audit',
      description: 'Led frontend team to rebuild legacy Sitecore components into modern micro frontends with accessibility compliance.',
      tech: ['Next.js', 'Vue.js', 'React.js', 'Sitecore SXA', 'Docker'],
      role: 'Technical Lead',
      year: '2025',
    },
    {
      title: 'Order Orchestration Platform',
      description: 'Delivered comprehensive order management system with logs, comments, and cancellation workflows.',
      tech: ['React', 'Tailwind', 'GraphQL', 'AWS', 'Next.js'],
      role: 'Technical Lead',
      year: '2024-2025',
    },
    {
      title: 'Enterprise UI Solutions',
      description: 'Built multiple scalable UI solutions for major enterprises with performance optimization and cloud integration.',
      tech: ['React', 'Next.js', 'NX', 'Storybook', 'Azure DevOps'],
      role: 'Senior Developer',
      year: '2019-2024',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-l from-cyan-500/5 via-transparent to-blue-500/5" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : 'initial'}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Major Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Showcase of enterprise solutions</p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative rounded-xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900/50 to-black/50 flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />

              <div className="relative z-10 p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xl mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-shadow"
                    whileHover={{ rotate: 180 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    💼
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-400 mb-3">{project.role} • {project.year}</p>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-3 group-hover:opacity-100">
                  <motion.button
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-2 text-sm text-blue-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </motion.button>
                  <motion.button
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-2 text-sm text-blue-400 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={16} />
                    View
                  </motion.button>
                </div>
              </div>

              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : 'initial'}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Plus 100+ additional components modernized and deployed enterprise solutions
          </p>
          <motion.a
            href="https://github.com/18gaurav2021"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-blue-400 text-blue-400 font-semibold hover:bg-blue-400/10 transition-colors"
          >
            <Github size={20} />
            Explore More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
