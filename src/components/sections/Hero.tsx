import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-gray-900"
    >
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-10 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-lg md:text-xl font-medium text-primary dark:text-secondary mb-2">
                Hello, I'm 
              </h2>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
             Shriyansh Agarwal
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              a frontend developer with almost 2 years of experience in React.js, Next.js, Tailwind CSS, and TypeScript.
              I specialize in building robust web applications using the MERN stack.
              I have worked on various projects and have a good understanding of the latest trends in web development.
             </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link 
                to="projects" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                className="px-6 py-3 rounded-lg bg-primary hover:bg-blue-700 text-white font-medium transition-colors duration-300 cursor-pointer text-center"
              >
                View My Work
              </Link>
              <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                className="px-6 py-3 rounded-lg bg-transparent border border-primary text-primary dark:text-white hover:bg-primary hover:text-white dark:hover:bg-primary font-medium transition-colors duration-300 cursor-pointer text-center"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero image or animation */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg">
              <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
                    MERN
                  </div>
                  <div className="text-lg text-gray-600 dark:text-gray-300">Stack Developer</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-10 border-2 border-gray-500 dark:border-gray-400 rounded-full flex justify-center"
          >
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-3 bg-gray-500 dark:bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

