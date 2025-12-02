import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a Senior Frontend & Cloud Engineer with 13+ years of hands-on experience building
                scalable, high-performance applications. My passion lies in crafting exceptional user
                experiences while architecting robust cloud-ready solutions.
              </p>
              <p>
                Throughout my career, I've led teams in modernizing legacy systems, designing enterprise
                applications, and implementing DevOps best practices that improve deployment efficiency
                by up to 70%.
              </p>
              <p>
                My expertise spans modern web technologies, cloud infrastructure, and performance
                optimization. I'm particularly focused on accessibility standards and sustainable
                engineering practices.
              </p>
              <p>
                When I'm not coding, I'm exploring new technologies, contributing to open-source
                projects, and mentoring junior developers.
              </p>
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-3"
            >
              {['React', 'Next.js', 'TypeScript', 'AWS', 'Docker', 'DevOps'].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-cyan-400/20" />

              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Always Learning
                  </p>
                  <p className="text-gray-400 mt-2 text-sm">Staying ahead of the curve</p>
                </div>
              </motion.div>

              <div className="absolute top-4 right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
