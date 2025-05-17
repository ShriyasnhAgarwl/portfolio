import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number; // 1-5
  icon?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 5 },
        { name: "JavaScript", level: 5 },
        { name: "TypeScript", level: 4 },
        { name: "HTML5", level: 5 },
        { name: "CSS3", level: 4 },
        { name: "Tailwind CSS", level: 4 },
        { name: "Redux", level: 4 },
        { name: "Next.js", level: 3 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 5 },
        { name: "Express.js", level: 5 },
        { name: "RESTful APIs", level: 4 },
        { name: "GraphQL", level: 3 },
        { name: "Authentication", level: 4 },
        { name: "Socket.io", level: 3 }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", level: 5 },
        { name: "Mongoose", level: 4 },
        { name: "SQL", level: 3 },
        { name: "Firebase", level: 3 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 4 },
        { name: "Docker", level: 3 },
        { name: "AWS", level: 2 },
        { name: "Jest", level: 3 },
        { name: "CI/CD", level: 3 },
        { name: "Agile", level: 4 },
        { name: "Webpack", level: 3 }
      ]
    }
  ];

  // Get an array of our MERN stack skills for highlighting
  const mernSkills = ["MongoDB", "Express.js", "React.js", "Node.js"];

  // Function to render the skill level bar
  const renderSkillLevel = (level: number) => {
    return (
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="h-2.5 rounded-full bg-gradient-to-r from-primary to-purple-600"
          style={{ width: `${level * 20}%` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level * 20}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    );
  };

  // Animation variants for list items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-20 bg-red-500 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Expert in MERN stack development with a wide range of skills and technologies.
          </p>
        </motion.div>

        {/* MERN Stack Highlight */}
        <motion.div 
          className="mb-16 p-6 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            MERN Stack Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">M</span>
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">MongoDB</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                NoSQL database for storing application data with flexible schema design.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full">
                <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">E</span>
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Express.js</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Backend web application framework running on Node.js for building APIs.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">R</span>
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">React.js</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Frontend library for building interactive user interfaces with components.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md text-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">N</span>
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Node.js</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                JavaScript runtime for server-side programming and backend development.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              
              <motion.ul 
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill) => (
                  <motion.li key={skill.name} variants={itemVariants} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className={`font-medium ${mernSkills.includes(skill.name) ? 'text-primary dark:text-secondary' : 'text-gray-700 dark:text-gray-300'}`}>
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level * 20}%
                      </span>
                    </div>
                    {renderSkillLevel(skill.level)}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

