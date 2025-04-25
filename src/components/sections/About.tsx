import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learn more about my background, experience, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Profile Image */}
          <motion.div 
            className="lg:w-1/3 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 transform rotate-6 rounded-lg"></div>
              <div className="relative bg-gray-200 dark:bg-gray-700 p-2 rounded-lg transform -rotate-2">
                <div className="aspect-w-1 aspect-h-1 bg-gray-300 dark:bg-gray-600 rounded-lg overflow-hidden">
                  {/* Replace with your actual image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400 text-lg">Your Photo</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Full Stack Developer with 2 Years of MERN Experience
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate Full Stack Developer with a strong focus on creating modern, 
              responsive, and user-friendly web applications. With 2 years of experience in 
              the MERN stack (MongoDB, Express.js, React.js, Node.js), I've developed a deep 
              understanding of both frontend and backend technologies.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              My journey in web development began with a fascination for creating interactive user 
              interfaces, which led me to specialize in React.js for frontend development. As I 
              delved deeper into the world of web development, I expanded my skills to include 
              backend technologies like Node.js and Express.js, along with MongoDB for database management.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Educational Background
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Bachelor's degree in Computer Science with a focus on web technologies and software engineering.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Professional Growth
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Continuous learner, staying updated with the latest trends and best practices in web development.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary rounded-full text-sm">
                Problem Solver
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary rounded-full text-sm">
                Team Player
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary rounded-full text-sm">
                Clean Code Advocate
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary rounded-full text-sm">
                User-Focused
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary rounded-full text-sm">
                Agile Methodology
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

