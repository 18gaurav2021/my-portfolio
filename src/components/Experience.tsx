import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const experiences = [
    {
      role: 'Technical Lead – Frontend',
      company: 'Altudo Consultancy Services Pvt Ltd',
      period: 'May 2025 – Present',
      highlights: [
        'Leading UI engineering and cloud-ready development',
        'Architected scalable UI systems on AWS (EC2, S3, CloudFront)',
        'Implemented CI/CD pipelines via Jenkins & Azure DevOps',
        'Ensured WCAG/ADA compliance with 95+ accessibility score',
      ],
    },
    {
      role: 'Lead Next.js Engineer',
      company: 'Cerebra IT Services Pvt Ltd',
      period: 'July 2024 – March 2025',
      highlights: [
        'Delivered enterprise features using Next.js and Storybook',
        'Improved API rendering performance by 30%',
        'Developed cloud-ready modules for AWS environments',
        'Created reusable component library',
      ],
    },
    {
      role: 'Team Lead',
      company: 'Vipusti Solutions (CLA Global IVC)',
      period: 'Aug 2021 – April 2024',
      highlights: [
        'Led Next.js + NX Monorepo development for enterprise apps',
        'Integrated Docker, reducing setup time by 94%',
        'Designed performance-focused components',
        'Managed CI/CD via Azure DevOps',
      ],
    },
    {
      role: 'Senior Software Developer',
      company: 'Nativebyte LLP',
      period: 'March 2016 – June 2021',
      highlights: [
        'Built scalable React applications with RBAC',
        'Implemented RabbitMQ-based event-driven architecture',
        'Integrated Auth0 for secure authentication',
        'Worked with MSSQL and microservices',
      ],
    },
     {
      role: 'Software Engineer',
      company: 'SSD Trust',
      period: 'March 2013 – March 2016',
      highlights: [
        'Built applications with Html, css and JS',
        'Design with bootstrap and vanilla Css',
        'Integrated API for fetching data',        
      ],
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : 'initial'}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Journey through my career</p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative mb-12 group"
            >
              <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 -translate-x-1/2" />

              <motion.div
                whileHover={{ x: 10 }}
                className="ml-20 p-6 rounded-lg border border-gray-800 bg-gradient-to-br from-gray-900/50 to-black/50 group-hover:border-blue-500/50 transition-colors"
              >
                <div className="absolute left-0 top-6 w-16 h-16 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white border-4 border-black group-hover:scale-110 transition-transform">
                  <Briefcase size={24} />
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-blue-400 text-sm mt-1">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mt-2 md:mt-0">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : 'initial'}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="text-cyan-400 mt-1">→</span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
