import React from 'react';
import { Link } from 'react-router-dom';
import callcarr from "../../assets/callcarr.png";
import onlinecode from "../../assets/onlinecoderunner.png";
import Reposheet from "../../assets/reposheet.png";
import StudyNotion from "../../assets/studynotion.png";
import musical from "../../assets/musical.png";

const projects = [
  {
    id: 1,
    title: 'Callcarr',
    description: 'A video calling application that enables users to connect with each other in real-time. Built with WebRTC and React, it offers high-quality video and audio communication features.',
    link: '#', // This can be removed since the link is handled by routing now
    imageUrl: callcarr,
  },
  {
    id: 2,
    title: 'StudyNotion',
    description: 'A study management edtech platform designed to help students organize track their study progress. Developed using modern web technologies for a seamless user experience.',
    link: '#', // This can be removed since the link is handled by routing now
    imageUrl: StudyNotion,
  },
  {
    id: 3,
    title: 'Reposheet',
    description: 'A repository management tool that allows users to view and manage their GitHub repositories in a single place. Utilizes GitHub API and features a clean, intuitive interface.',
    link: '#', // This can be removed since the link is handled by routing now
    imageUrl: Reposheet,
  },
  {
    id: 4,
    title: 'Online Code Compiler',
    description: 'An online code compiler that supports multiple programming languages. It allows users to write, compile, and run code snippets directly in the browser.',
    link: '#', // This can be removed since the link is handled by routing now
    imageUrl: onlinecode,
  },
  {
    id: 5,
    title: 'Musical Showcase',
    description: 'An interactive platform for showcasing and discovering musical talents. Users can upload their music, create playlists, and explore new tracks from various artists.',
    link: '#', // This can be removed since the link is handled by routing now
    imageUrl: musical,
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-6 py-12">
      <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-12">My Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Link
                to={`/projects/${project.id}`}
                className="inline-block px-4 py-2 bg-black text-white text-center rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

