import React from 'react';

const About = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-6 py-12">
      {/* Introduction Section */}
      <section className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">About Me</h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Hi, I'm Priyansh, a dedicated Full-Stack (MERN) Developer with a passion for building dynamic and responsive web applications that address real-world challenges.
        </p>
      </section>
      
      {/* Biography Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Biography</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          My journey in web development began with a keen interest in both front-end and back-end technologies. Over the years, I have developed expertise in React, Node.js, and other tools, creating applications that are not only functional but also provide an exceptional user experience.
        </p>
      </section>
      
      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Skills & Achievements</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <li className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">React.js</h3>
            <p className="text-gray-700">Experienced in creating interactive and dynamic user interfaces with React.</p>
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Node.js</h3>
            <p className="text-gray-700">Skilled in building server-side applications and RESTful APIs using Node.js.</p>
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">MongoDB</h3>
            <p className="text-gray-700">Proficient in designing and managing databases with MongoDB for efficient data handling.</p>
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Express.js</h3>
            <p className="text-gray-700">Experienced in using Express.js to build robust and scalable server-side applications.</p>
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Socket.io</h3>
            <p className="text-gray-700">Skilled in real-time communication and implementing WebSocket protocols with Socket.io.</p>
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">WebRTC</h3>
            <p className="text-gray-700">Proficient in using WebRTC for real-time peer-to-peer communication and streaming applications.</p>
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">JavaScript</h3>
            <p className="text-gray-700">Expert in writing clean and efficient JavaScript code for both front-end and back-end development.</p>
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">HTML & CSS</h3>
            <p className="text-gray-700">Skilled in creating responsive designs with HTML and CSS, ensuring a seamless user experience across devices.</p>
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Responsive Design</h3>
            <p className="text-gray-700">Experienced in developing designs that adapt to various screen sizes and devices, enhancing usability and accessibility.</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;

