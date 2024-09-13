import React from "react";
import ProjectCard from "./ProjectCard"; // Import ProjectCard component
import ProfilePic from "../../assets/profile.jpg";
import callcarr from "../../assets/callcarr.png";
import onlinecode from "../../assets/onlinecoderunner.png";
import Reposheet from "../../assets/reposheet.png";
import StudyNotion from "../../assets/studynotion.png";
import musical from "../../assets/musical.png";


const ProjectCardSection = () => {
  // Array of project cards data
  const projectData = [
    {
      imageSrc: Reposheet,
      title: "Reposheet",
    },
    {
      imageSrc: StudyNotion,
      title: "StudyNotion",
    },
    {
      imageSrc: musical,
      title: "MusicalShowcase",
    },
    {
      imageSrc: callcarr,
      title: "CallCarr",
    },
    {
      imageSrc: onlinecode,
      title: "OnlineCompiler",
    },

    // Add more cards as needed
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {projectData.map((project, index) => (
        <div
          key={index}
          className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
        >
          <ProjectCard imageSrc={project.imageSrc} title={project.title} />
        </div>
      ))}
    </div>
  );
};

export default ProjectCardSection;
