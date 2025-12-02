import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { ArrowDown } from 'lucide-react';

function AnimatedSphere() {
  return (
    <Sphere args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#00d4ff"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.5}
      />
    </Sphere>
  );
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-cyan-900/10" />

      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <p className="text-blue-400 text-lg mb-2">Welcome to my portfolio</p>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Gaurav Dhar Dwivedi
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-300 mb-8"
          >
            Frontend Technical Lead & Cloud Engineer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 mb-8 leading-relaxed"
          >
            13+ years building scalable, high-performance applications with React, Next.js, and AWS.
            Specialist in modern UI architecture, cloud deployments, and DevOps excellence.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition-colors"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex gap-6"
          >
            {[
              { label: '13+', desc: 'Years Experience' },
              { label: '100+', desc: 'Projects Delivered' },
              { label: '10+', desc: 'Enterprise Apps' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-cyan-400">{stat.label}</p>
                <p className="text-sm text-gray-400 mt-1">{stat.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="h-96 md:h-full min-h-96"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Canvas className="w-full h-full">
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <AnimatedSphere />
            <OrbitControls
              autoRotate
              autoRotateSpeed={4}
              enableZoom={false}
              enablePan={false}
            />
          </Canvas>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-blue-400" size={32} />
      </motion.div>
    </section>
  );
}
