import React from 'react';
import { GraduationCap, Award, Book, Briefcase } from 'lucide-react';

const Education = ({ darkMode }) => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Illinois Institute of Technology",
      duration: "August 2023 - May 2025",
      gpa: "3.3/4.0",
      relevantCourses: [
        "Advanced Database Organization",
        "Big Data Technologies",
        "Software Project Management",
        "Enterprise Web Application"
      ]
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      school: "University of Mumbai",
      duration: "August 2019 - March 2023",
      gpa: "3.5/4.0",
      relevantCourses: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Database Management System",
        "Software Engineering"
      ]
    }
  ];

  const certifications = [
    "AWS Certified Developer – Associate",
    "JavaScript MERN Full Stack",
    "Django Web Framework & Rest API",
    "Python with Data Structures, Data Bases and Data Science",
  ];

  const volunteerExperience = [
    {
      role: "Membership Coordinator Associate Member",
      organization: "TEDxIllinois Tech",
      duration: "Aug 2024 - Dec 2024",
      responsibilities: [
        "Managed and maintained an up-to-date member database, ensuring seamless communication and engagement",
        "Coordinated event logistics, including venue setup, scheduling, and on-site operations for successful event execution",
        "Collaborated with cross-functional teams to optimize event planning and improve attendee experience",
        "Assisted in organizing speaker sessions, panel discussions, and networking events to drive audience engagement"
      ]
    },
    {
      role: "Placement Coordinator",
      organization: "Bachelor's Program",
      duration: "March 2021",
      responsibilities: [
        "Coordinated the placement process for 200+ students, ensuring smooth registration and participation",
        "Managed student registrations, scheduling, and logistics for aptitude tests and placement drives",
        "Collaborated with recruiters and faculty to streamline interview processes and candidate evaluations",
        "Facilitated communication between students, companies, and placement teams to ensure seamless coordination"
      ]
    }
  ];

  return (
    <div className={`min-h-screen ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    } transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <GraduationCap 
              size={120} 
              className={`${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              } animate-bounce`}
            />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Education
          </h1>
          <p className={`text-xl ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Building a strong foundation through academic excellence and continuous learning
          </p>
        </div>

        {/* Education Details Section */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto`}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <Book className={`${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`} size={32} />
                  <h3 className={`text-2xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>{edu.degree}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-x-8 gap-y-2">
                    <p className={`text-xl ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>{edu.school}</p>
                    <p className={`text-xl ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>{edu.duration}</p>
                    <p className={`text-xl ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>GPA: {edu.gpa}</p>
                  </div>
                  
                  <div className="mt-6">
                    <p className={`text-lg font-semibold mb-4 ${
                      darkMode ? 'text-gray-200' : 'text-gray-800'
                    }`}>Relevant Coursework</p>
                    <div className="flex flex-wrap gap-3">
                      {edu.relevantCourses.map((course, idx) => (
                        <span
                          key={idx}
                          className={`px-4 py-2 rounded-lg text-base ${
                            darkMode 
                              ? 'bg-gray-700 text-gray-300' 
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership & Volunteer Experience Section */}
        <div className={`${
          darkMode ? 'bg-gray-800' : 'bg-white'
        } p-8 rounded-xl shadow-lg mb-16 max-w-4xl mx-auto`}>
          <div className="flex items-center gap-4 mb-8">
            <Briefcase className={`${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            }`} size={32} />
            <h2 className={`text-2xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>Leadership & Volunteer Experience</h2>
          </div>
          
          <div className="space-y-8">
            {volunteerExperience.map((exp, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg ${
                  darkMode 
                    ? 'bg-gray-700' 
                    : 'bg-gray-100'
                } hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="space-y-4">
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap gap-4 items-center">
                      <span className={`font-medium text-lg ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {exp.organization}
                      </span>
                      <span className={`text-lg ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.responsibilities.map((item, idx) => (
                      <li 
                        key={idx}
                        className="flex items-start gap-3"
                      >
                        <span className={`mt-1.5 ${
                          darkMode ? 'text-blue-400' : 'text-blue-600'
                        }`}>•</span>
                        <p className={`text-base ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className={`${
          darkMode ? 'bg-gray-800' : 'bg-white'
        } p-8 rounded-xl shadow-lg mb-16 max-w-4xl mx-auto`}>
          <div className="flex items-center gap-4 mb-8">
            <Award className={`${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            }`} size={32} />
            <h2 className={`text-2xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>Certifications</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  darkMode 
                    ? 'bg-gray-700 text-gray-300' 
                    : 'bg-gray-100 text-gray-700'
                } flex items-center gap-4`}
              >
                <Award size={24} />
                <span className="text-lg">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;