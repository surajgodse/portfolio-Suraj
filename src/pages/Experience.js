import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = ({ darkMode }) => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Radical AI",
      type: "Internship",
      location: "New York, USA",
      duration: "August 2024 – December 2024",
      technologies: "JavaScript, Node, React, Material-UI, OpenAI GPT-3.5 API, RESTful APIs",
      achievements: [
        "Constructed a modular, reusable component library with React and Redux, reducing development time by 35% while ensuring an intuitive UI/UX experience across the educational web application platform.",
        "Established real-time data synchronization using WebSockets, decreasing response latency by 60% and enabling seamless features. ",
        "Optimized MongoDB queries through indexing and aggregation pipelines, reducing database load by 40% during peak usage. ",
        "Partnered with the team to conduct code reviews, debug issues, and implement best practices, collaborating effectively with team members to achieve project goals while ensuring a scalable and maintainable codebase."
      ]
    },
    {
      title: "Co-Founder - Software Engineer",
      company: "Bug Busters",
      location: "India",
      duration: "June 2021 – July 2023",
      technologies: "JavaScript, React, Firebase, Firebase Cloud Functions, Firestore",
      achievements: [
        "Co-founded and scaled a 600+ member tech community, delivering career mentorship, resume workshops, and networking programs that connected students with 50+ recruiters and industry professionals, directly enhancing job placement rates.",
        "Designed and developed a platform providing real-time job listings and hackathon updates, boosting engagement by 40%.",
        "Engineered a weekly automated job notification system with Firebase Cloud Functions and Firestore, improving visibility for 100+ subscribers and reducing operational costs through a scalable, serverless architecture.",
        "Designed Firebase Security Rules and Express middleware to enforce granular user permissions (admin, recruiter, student), preventing unauthorized data access and reducing support tickets by 50%.",
        "Configured GitHub Actions to automate testing, build React apps, and deploy to Firebase Hosting, reducing manual deployment errors."
      ]
    },
    {
      title: "Software Engineer - Data Analyst",
      type: "Internship",
      company: "Excelerate",
      location: "Chicago, USA",
      duration: "June 2023 - July 2023",
      technologies: "Python, PowerBI, MySQL, Pandas, NumPy, Matplotlib, Seaborn, SQL queries",
      achievements: [
        "Analyzed 11 ad campaigns using PowerBI, delivering a 20% improvement in click-through rates and achieving $2,333 in savings by integrating data-driven insights into marketing strategies.",
        "Directed PowerBI for the Superhero U Event, increasing engagement by 15% through strategic communication and leadership.",
        "Created interactive visualizations that improved decision-making, increased team efficiency by 25% and campaign outcomes by 30%."
      ]
    },
    {
      title: "Software Engineer",
      type: "Internship",
      company: "MindScript",
      location: "India",
      duration: "June 2022 - May 2023",
      technologies: "JavaScript, Node, React, MySQL, MongoDB, Redis, AWS, Bitbucket",
      achievements: [
        "Developed 10+ microservices, leveraging agile methods and cross-functional teams for smooth AWS deployment.",
        "Built over 30 Restful APIs for catalog search, product checkout, distributor management, and admin dashboard by collaborating with product management and analyzing user feedback, serving 10k requests daily.",
        "Optimized over 20 critical MySQL and MongoDB queries, resulting in a 50% reduction in database instances through indexing, denormalization, and redis based in-memory caching.",
        "Redesigned a responsive e-commerce platform with scalable, secure, and maintainable code, boosting user engagement by 40% and improving conversion rates by 25% through the integration of interactive features."
      ]
    }
  ];

  return (
    <div className={`min-h-screen ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    } transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
        {/* Animated Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          {/* Left Side - Animated Briefcase */}
          <div className={`${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } p-8 rounded-xl shadow-lg flex flex-col items-center justify-center space-y-6 transform hover:scale-105 transition-all duration-300`}>
            <div className="relative">
              <Briefcase 
                size={160} 
                className={`${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                } animate-bounce`}
              />
              <div className="absolute -top-4 -right-4">
                <div className={`w-8 h-8 rounded-full ${
                  darkMode ? 'bg-green-400' : 'bg-green-500'
                } animate-ping`}></div>
              </div>
            </div>
            <div className="text-center space-y-4">
              <h2 className={`text-3xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>Professional Journey</h2>
              <p className={`text-lg ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>A track record of innovation and impact</p>
            </div>
          </div>

          {/* Right Side - Summary */}
          <div className={`${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } p-8 rounded-xl shadow-lg`}>
            <div className="space-y-6">
              <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Experience
              </h1>
              <p className={`text-xl ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Over 2+ years of experience in software development, with a focus on full-stack development
                and cloud technologies.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <span className={`px-4 py-2 rounded-full ${
                  darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                }`}>4 Companies</span>
                <span className={`px-4 py-2 rounded-full ${
                  darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                }`}>2 Countries</span>
                <span className={`px-4 py-2 rounded-full ${
                  darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                }`}>Multiple Roles</span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102`}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h1 className={`text-2xl font-bold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>{exp.title}</h1>
                    {exp.type && (
                      <span className={`inline-block px-3 py-1 text-sm rounded-full mb-2 ${
                        darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-600'
                      }`}>
                        {exp.type}
                      </span>
                    )}
                    <p className={`text-xl ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={20} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                    <span className={`${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>{exp.duration}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2">
                  <MapPin size={20} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                  <span className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{exp.location}</span>
                </div>

                {/* Technologies */}
                <div className={`p-4 rounded-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{exp.technologies}</p>
                </div>

                {/* Achievements */}
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className={`mt-1.5 ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>•</span>
                      <p className={`${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>{achievement}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;