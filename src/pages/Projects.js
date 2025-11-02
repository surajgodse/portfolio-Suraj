// src/pages/Projects.js
import React, { useRef, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, techStack, githubLink, deployLink, darkMode }) => {
  return (
    <div 
      className={`p-8 rounded-xl ${
        darkMode 
          ? 'bg-gray-800 hover:bg-gray-700' 
          : 'bg-white hover:bg-gray-50'
      } transition-all duration-300 shadow-lg hover:shadow-xl h-full flex flex-col`}
    >
      {/* Project Title with External Links */}
      <div className="flex justify-between items-start mb-6">
        <h2 className={`text-3xl font-bold ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h2>
        <div className="flex gap-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`transform hover:scale-110 transition-transform ${
                darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Github size={28} />
            </a>
          )}
          {deployLink && (
            <a
              href={deployLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`transform hover:scale-110 transition-transform ${
                darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <ExternalLink size={28} />
            </a>
          )}
        </div>
      </div>

      {/* Project Description */}
      <div className={`space-y-4 mb-8 flex-grow ${
        darkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>
        {description.map((point, index) => (
          <div key={index} className="flex items-start">
            <span className="mr-3 mt-1.5 text-lg">•</span>
            <p className="text-base md:text-lg leading-relaxed">{point}</p>
          </div>
        ))}
      </div>

      {/* Tech Stack Icons - Fixed at Bottom */}
      <div className="flex flex-wrap gap-5 items-center mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="group relative"
          >
            {/* Tooltip */}
            <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-md
              ${darkMode ? 'bg-gray-700' : 'bg-white'} 
              shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200
              pointer-events-none z-10 text-sm whitespace-nowrap
              ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}
            >
              {tech.name}
              <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45
                ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
              ></div>
            </div>

            {/* Icon */}
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center
              bg-white
              shadow-md group-hover:shadow-lg
              transform group-hover:scale-110
              transition-all duration-200 ease-out
              ${darkMode ? 'border border-gray-600' : 'border border-gray-100'}`}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-7 h-7 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Projects = ({ darkMode }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  const projects = [
    {
      title: (
        <div className="flex flex-col">
          <span className="">Smart Home</span>
          <span className="text-xl">AI-Powered E-commerce</span>
        </div>
      ),
      description: [
        "Engineered a full-stack e-commerce platform for smart home devices using React.js, Node.js, and MySQL, implementing secure user authentication and authorization using JWT.",
        "Integrated OpenAI's GPT-4 API for automated customer service ticket analysis, implementing an intelligent system that categorizes support tickets based on image analysis and customer descriptions",
        "Designed and implemented MySQL database schema for managing user accounts, orders, products, and customer service tickets with proper relationships and constraints.",
        "Architected RESTful API endpoints for order management, customer service, and product catalog using Express.js."
      ],
      techStack: [
        { name: 'React', icon: '/icons/react.png' },
        { name: 'NodeJS', icon: '/icons/nodejs.png' },
        { name: 'MongoDB', icon: '/icons/mongodb.png' },
        { name: 'MySQL', icon: '/icons/mysql.png' },
      ],
      githubLink: "https://github.com/surajgodse/Smart-Home-AI-Powered-E-commerce",
     // deployLink: "https://project1.demo.com"
    },

    {
      title: "ExpenseMate",
      description: [
        "Constructed a feature-rich Expense Tracker platform employing React, Firebase, and Material-UI, introducing secure user authentication and reducing expense entry time by approximately 40%.",
        "Implemented front-end in React.js to emulate file system operations of directory listing, file partitioning, content inspection, file deletion and searching and analysing the stored data with ReST APIs in node.js.",
        "Partitioned these blocks of data in MySQL, Firebase and MongoDB with meta data of the files like inode, parentInode and path, size and partitioning field."
      ],
      techStack: [
        { name: 'React', icon: '/icons/react.png' },
        { name: 'NodeJS', icon: '/icons/nodejs.png' },
        { name: 'Firebase', icon: '/icons/firebase.png' },
      ],
      githubLink: "https://github.com/surajgodse/expense-tracker-react",
      deployLink: "https://expense-tracker-react-2024.web.app/guest-dashboard"
    },

    {
      title: (
        <div className="flex flex-col">
          <span className="">Thought Canvas</span>
          <span className="text-xl">Dynamic Blog Platform for Creative Expression</span>
        </div>
      ),
      description: [
        "Engineered a full-stack blog platform using React, Firebase, and NodeJS, enabling seamless content creation, management, and user authentication.",
        "Integrated Firebase Realtime Database for efficient data storage and retrieval, ensuring real-time updates and a smooth user experience.",
        "Implemented secure authentication and role-based access control, enhancing platform security and user engagement."
      ],
      techStack: [
        { name: 'React', icon: '/icons/react.png' },
        { name: 'NodeJS', icon: '/icons/nodejs.png' },
        { name: 'Firebase', icon: '/icons/firebase.png' },
      ],
      githubLink: "https://github.com/surajgodse/blog-platform-react-firebase",
      deployLink: "https://blog-platform-react-suraj.web.app/all-blogs"
    },

    {
      title: (
        <div className="flex flex-col">
          <span className="">Student Management System</span>
          <span className="text-xl">A Comprehensive Academic Record Management Solution</span>
        </div>
      ),      description: [
        "Developed a full-stack student management system using React.js, Node.js, Express.js, and MySQL, enabling seamless CRUD operations for academic record management.",
        "Optimized database queries and indexing in MySQL, improving data retrieval speed by 40% and ensuring efficient record management.",
        "Designed a responsive and user-friendly interface with React.js, enhancing accessibility and usability across devices."
      ],
      techStack: [
        { name: 'React', icon: '/icons/react.png' },
        { name: 'NodeJS', icon: '/icons/nodejs.png' },
        { name: 'MySQL', icon: '/icons/mysql.png' },
      ],
      githubLink: "https://github.com/surajgodse/student-management-system-files-storage",
     // deployLink: "https://project1.demo.com"
    },

    {
      title: (
        <div className="flex flex-col">
          <span className="">Chat-GPT Clone</span>
          <span className="text-xl">AI-Powered Text Generation and Conversation Platform</span>
        </div>
      ),
      description: [
        "Developed an AI-powered text generation platform using OpenAI API, enabling text summarization, chatbot interaction, code conversion, and image creation.",
        "Designed a responsive and dynamic UI using HTML5, CSS3, Bootstrap, and jQuery, enhancing user experience with smooth animations via WOW.js and Typed.js.",
        "Implemented a robust server architecture for efficient API handling, ensuring seamless AI-driven text generation and processing."
      ],
      techStack: [
        { name: 'Javascript', icon: '/icons/javascript.png' },
        { name: 'HTML5', icon: '/icons/html.png' },
        { name: 'CSS3', icon: '/icons/css3.png' },
      ],
      githubLink: "https://github.com/surajgodse?tab=repositories",
      //deployLink: ""
    },

    {
      title: (
        <div className="flex flex-col">
          <span className="">Inventory Management System</span>
          <span className="text-xl">A Full-Stack Web Application</span>
        </div>
      ),
      description: [
        "Developed a full-stack inventory management system using React, Node.js, Express.js, and MySQL, enabling efficient product and category management.",
        "Implemented real-time search and dynamic filtering using React and MySQL, improving inventory retrieval efficiency and user experience.",
        "Designed and integrated RESTful APIs with Axios, ensuring seamless data communication between the frontend and backend for optimized performance."
      ],
      techStack: [
        { name: 'React', icon: '/icons/react.png' },
        { name: 'NodeJS', icon: '/icons/nodejs.png' },
        { name: 'MySQL', icon: '/icons/mysql.png' },
        { name: 'Firebase', icon: '/icons/firebase.png' },

      ],
      githubLink: "https://github.com/surajgodse/inventory-management-react-express",
      //deployLink: ""
    },
    // Add more projects...
  ];

  return (
    <div className={`min-h-screen ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    } transition-colors duration-200`}>
      {/* Intro Section with Video */}
      <div className="max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          {/* Video Section */}
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl">
            <video 
              ref={videoRef}
              className="w-full h-full object-cover"
              playsInline
              muted
              onEnded={(e) => e.target.pause()}
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Right Content Section */}
          <div className={`${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300`}>
            <div className="text-center space-y-6">
              {/* Modern Projects Heading */}
              <h1 className={`text-5xl md:text-6xl font-extrabold tracking-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              } font-sans`}>
                <span className="inline-block transform hover:scale-105 transition-transform duration-200">
                  Projects
                </span>
              </h1>

              {/* Stylish Underline */}
              <div className="flex justify-center">
                <div className={`h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transform hover:scale-x-110 transition-transform duration-200`}></div>
              </div>

              {/* Modern Description */}
              <div className="space-y-4">
                <p className={`text-lg md:text-xl leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                } font-light`}>
                  Turning innovative ideas into reality through elegant code and cutting-edge technology.
                </p>
                <p className={`text-base md:text-lg ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Each project represents a unique challenge tackled with passion and precision.
                </p>
              </div>

              {/* Optional: Add a subtle design element */}
              <div className="flex justify-center gap-2 mt-6">
                <span className={`w-2 h-2 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-500'} animate-pulse`}></span>
                <span className={`w-2 h-2 rounded-full ${darkMode ? 'bg-purple-400' : 'bg-purple-500'} animate-pulse delay-100`}></span>
                <span className={`w-2 h-2 rounded-full ${darkMode ? 'bg-pink-400' : 'bg-pink-500'} animate-pulse delay-200`}></span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

