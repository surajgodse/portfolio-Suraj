import React from 'react';

const TechStack = ({ darkMode }) => {
  const techStacks = [
    { name: 'HTML5', icon: '/icons/html.png' },
    { name: 'CSS3', icon: '/icons/css3.png' },
    { name: 'JavaScript', icon: '/icons/javascript.png' },
    { name: 'React', icon: '/icons/react.png' },
    { name: 'NodeJS', icon: '/icons/nodejs.png' },
    { name: 'Python', icon: '/icons/python.png' },
    { name: 'MongoDB', icon: '/icons/mongodb.png' },
    { name: 'MySQL', icon: '/icons/mysql.png' },
    { name: 'Git', icon: '/icons/git.png' },
    { name: 'Docker', icon: '/icons/docker.png' },
    { name: 'Power BI', icon: '/icons/powerbi.png' },
    { name: 'AWS', icon: '/icons/aws.png' },
    { name: 'Firebase', icon: '/icons/firebase.png' }
  ];

  return (
    <div className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {techStacks.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="group relative"
            >
              {/* Hover tooltip */}
              <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-md
                ${darkMode ? 'bg-gray-700' : 'bg-white'} 
                shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200
                pointer-events-none z-10 text-sm whitespace-nowrap
                ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                {tech.name}
                {/* Tooltip arrow */}
                <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45
                  ${darkMode ? 'bg-gray-700' : 'bg-white'}`}></div>
              </div>

              {/* Tech icon card - all with white background */}
              <div 
                className={`w-20 h-20 rounded-xl flex items-center justify-center p-4
                  bg-white
                  shadow-md group-hover:shadow-lg
                  transform group-hover:scale-110
                  transition-all duration-200 ease-out
                  ${darkMode ? 'border border-gray-600' : 'border border-gray-100'}
                `}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 object-contain transition-transform duration-200"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;