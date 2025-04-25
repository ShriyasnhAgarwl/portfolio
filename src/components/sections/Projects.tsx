import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  source_code_link: string;
  live_demo_link: string;
}

const projects: Project[] = [
  {
    title: "Project 1",
    description: "A full-stack web application built with the MERN stack that demonstrates modern web development practices, responsive design, and user authentication.",
    tags: ["React", "MongoDB", "Express.js", "Node.js", "TailwindCSS"],
    image: "/project1.png",
    source_code_link: "https://github.com",
    live_demo_link: "https://demo.com"
  },
  {
    title: "Project 2",
    description: "Real-time chat application with features like instant messaging, file sharing, and user presence detection. Built with Socket.io and MERN stack.",
    tags: ["React", "Socket.io", "MongoDB", "Express.js", "Node.js"],
    image: "/project2.png",
    source_code_link: "https://github.com",
    live_demo_link: "https://demo.com"
  },
  {
    title: "Project 3",
    description: "E-commerce platform with features like product catalog, shopping cart, payment integration, and order management system.",
    tags: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
    image: "/project3.png",
    source_code_link: "https://github.com",
    live_demo_link: "https://demo.com"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore some of my recent projects that showcase my skills and experience in full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative aspect-video bg-gray-200 dark:bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 flex gap-2">
                  <a
                    href={project.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black/70 p-2 rounded-full hover:bg-black/90 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href={project.live_demo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black/70 p-2 rounded-full hover:bg-black/90 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveDemo?: string;
  github?: string;
  featured: boolean;
}

const Projects = () => {
  // Sample project data - replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product browsing, cart management, user authentication, and payment processing.",
      image: "https://via.placeholder.com/600x400?text=E-Commerce+App",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
      liveDemo: "https://example.com/ecommerce",
      github: "https://github.com/yourusername/ecommerce",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, task assignments, and progress tracking.",
      image: "https://via.placeholder.com/600x400?text=Task+Management",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      liveDemo: "https://example.com/taskapp",
      github: "https://github.com/yourusername/taskapp",
      featured: true
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "A dashboard for social media analytics with data visualization, reporting, and insights features.",
      image: "https://via.placeholder.com/600x400?text=Social+Dashboard",
      techStack: ["React", "D3.js", "Node.js", "Express", "MongoDB"],
      liveDemo: "https://example.com/dashboard",
      github: "https://github.com/yourusername/dashboard",
      featured: true
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "A weather forecast application that provides real-time weather data and forecasts for locations worldwide.",
      image: "https://via.placeholder.com/600x400?text=Weather+App",
      techStack: ["React", "Node.js", "Express", "OpenWeather API"],
      liveDemo: "https://example.com/weather",
      github: "https://github.com/yourusername/weather",
      featured: false
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "A content management system for blogs with rich text editing, comment system, and user management.",
      image: "https://via.placeholder.com/600x400?text=Blog+Platform",
      techStack: ["React", "Node.js", "Express", "MongoDB", "AWS S3"],
      liveDemo: "https://example.com/blog",
      github: "https://github.com/yourusername/blog",
      featured: false
    },
    {
      id: 6,
      title: "Real-time Chat Application",
      description: "A real-time chat application with private and group messaging, file sharing, and online status tracking.",
      image: "https://via.placeholder.com/600x400?text=Chat+App",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      liveDemo: "https://example.com/chat",
      github: "https://github.com/yourusername/chat",
      featured: true
    }
  ];

  // State for filtered projects (all or featured)
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.filter(project => project.featured);

  // Animation variants
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Check out some of my recent work built with MERN stack and other modern technologies.
          </p>
        </motion.div>

        {/* Filter toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => setShowAll(false)}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                !showAll 
                  ? 'bg-primary text-white' 
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              Featured
            </button>
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                showAll 
                  ? 'bg-primary text-white' 
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              All Projects
            </button>
          </div>
        </div>

        {/* Project grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Project Image */}
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-between items-center">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary transition-colors"
                        aria-label={`View ${project.title} GitHub repository`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {project.liveDemo && (
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-200 rounded text-xs"
                    >
                      {tech}
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

