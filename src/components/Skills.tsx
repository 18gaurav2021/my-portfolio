import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const skillCategories = [
    {
      title: 'Frontend Engineering',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Performance Optimization', 'Accessibility (WCAG/ADA)', 'Component Architecture'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS (EC2, S3, RDS, Lambda)', 'Docker', 'CI/CD Pipelines', 'GitHub Actions', 'Terraform', 'Monitoring & Logging', 'Infrastructure-as-Code', 'Containerization'],
      color: 'from-cyan-500 to-teal-500',
    },
    {
      title: 'Backend & Tools',
      skills: ['NX Monorepo', 'Redux/Zustand', 'MSSQL', 'MySQL', 'RabbitMQ', 'GraphQL', 'REST APIs', 'Git/GitLab'],
      color: 'from-teal-500 to-green-500',
    },
  ];

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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Mastering modern technologies</p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative rounded-xl p-8 border border-gray-800 bg-gradient-to-br from-gray-900/50 to-black/50 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative z-10">
                <motion.div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 text-xl`}
                  whileHover={{ rotate: 180 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {idx === 0 && '⚡'}
                  {idx === 1 && '☁️'}
                  {idx === 2 && '🛠️'}
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>

                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : 'initial'}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                      <span className="text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : 'initial'}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { value: '40%', label: 'Perf Improvement' },
            { value: '70%', label: 'Deployment Time Saved' },
            { value: '100+', label: 'Components Modernized' },
            { value: '95+', label: 'Accessibility Score' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg border border-blue-500/20 bg-blue-500/5"
            >
              <p className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
