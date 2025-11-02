import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import TechStack from '../components/TechStackScroll';

// Skills Component remains the same
const Skills = ({ darkMode }) => {
  const skills = [
    'JavaScript', 'ReactJS', 'NodeJS', 
    'Python', 'Django', 'MongoDB', 'MySQL',
    'Git', 'Docker', 'REST APIs', 'AWS', 'Cloud Computing', 'Power BI'
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill, index) => (
        <span
          key={index}
          className={`px-6 py-3 rounded-xl text-base md:text-lg font-medium
            ${darkMode 
              ? 'bg-gray-800 text-gray-200 border border-gray-700 hover:bg-gray-700 hover:border-blue-500' 
              : 'bg-gray-100 text-gray-800 border border-gray-200 hover:bg-gray-200 hover:border-blue-500'
            } transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer`}
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

const Home = ({ darkMode }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = darkMode ? '/v2-dark.mp4' : '/v1-light.mp4';
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${
      darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-blue-50'
    } transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className={`text-5xl md:text-7xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              } leading-tight animate-fade-in`}>
                Hello <span className="inline-block animate-wave">👋</span>
              </h1>
              <div className="space-y-4">
                <p className={`text-2xl md:text-3xl ${
                  darkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  I'm <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-bold">Suraj Godse</span>
                </p>
                <p className={`text-xl md:text-2xl ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                } leading-relaxed`}>
                  MERN Stack Developer | Full-Stack Engineer
                </p>
                <p className={`text-lg md:text-xl ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Based in Chicago, Illinois
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-8">
              <a 
                href="https://github.com/surajgodse" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`transform hover:scale-110 transition-transform ${
                  darkMode ? 'text-white hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'
                }`}
              >
                <Github size={32} />
              </a>
              <a 
                href="https://www.linkedin.com/in/suraj-godse/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transform hover:scale-110 transition-transform"
              >
                <Linkedin size={32} />
              </a>
              <a 
                href="mailto:godsesuraj2140@gmail.com" 
                className={`transform hover:scale-110 transition-transform ${
                  darkMode ? 'text-white hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'
                }`}
              >
                <Mail size={32} />
              </a>
              <a 
                href="https://drive.google.com/file/d/1csMUKzkx94MoYGLnuhSyN_XtXebtDwM5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={`transform hover:scale-110 transition-transform ${
                  darkMode ? 'text-white hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'
                }`}
                aria-label="Download Resume"
              >
                <FileText size={32} />
              </a>
            </div>

            {/* Projects Link */}
            <div className={`text-lg md:text-xl ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Checkout my {' '}
              <Link 
                to="/projects" 
                className={`relative inline-block group font-semibold
                  ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}
                `}
              >
                Projects
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </Link>
            </div>
          </div>

          {/* Right Column - Theme-based Video */}
          <div className="hidden lg:flex justify-center md:justify-end">
            <div className="w-full max-w-lg rounded-lg overflow-hidden shadow-xl">
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                playsInline
                muted
                onEnded={(e) => e.target.pause()}
              >
                <source src={darkMode ? '/v2-dark.mp4' : '/v1-light.mp4'} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* About Me and Skills Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* About Me Column */}
          <div className="space-y-6">
            <h2 className={`text-3xl md:text-4xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            } pb-6`}>
              About Me
            </h2>
            <div className={`space-y-6 text-base md:text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <p className="leading-relaxed">
                Hi, I'm Suraj Godse, a Computer Science Master's student at Illinois Institute of Technology. 
                My passion lies in full-stack development – I love bringing ideas to life by coding entire apps 
                from backend to frontend.
              </p>
              <p className="leading-relaxed">
                As I pursue my degree, I'm constantly honing my programming skills, focusing on technologies 
                like React, Node.js, and cloud solutions. In my free time, I work on personal projects, 
                from expense trackers to food delivery platforms, to gain hands-on experience.
              </p>
              <p className="leading-relaxed">
                This portfolio showcases my journey in tech and the projects I'm proud of. I'm excited to 
                take on more complex challenges and expand my skills as I progress in my career. Feel free 
                to explore my work and connect with me!
              </p>
            </div>
          </div>

          {/* Skills Column */}
          <div className="space-y-6">
            <h2 className={`text-3xl md:text-4xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            } pb-6`}>
              Skills
            </h2>
            <Skills darkMode={darkMode} />
          </div>
        </div>

        {/* TechStack Component */}
        <div className="mt-20">
          <TechStack darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default Home;