import React from "react";
import HomeSectionHeader from "./HomeSectionHeader";
import SkillsContainer from "./SkillsContainer";
import CheckIcon from "../../assets/checkmark.png"; // Your checkmark icon

const HomeExperience = () => {
  // Define your skill sets for reusability
  const frontendSkills = [
    { iconSrc: CheckIcon, skill: "HTML", level: "Advanced" },
    { iconSrc: CheckIcon, skill: "CSS", level: "Advanced" },
    { iconSrc: CheckIcon, skill: "JavaScript", level: "Advanced" },
    { iconSrc: CheckIcon, skill: "React.js", level: "Advanced" },
    { iconSrc: CheckIcon, skill: "Tailwind CSS", level: "Advanced" },
    { iconSrc: CheckIcon, skill: "Daisy UI", level: "Intermdiate" },
    { iconSrc: CheckIcon, skill: "Material UI", level: "Intermdiate" },
    { iconSrc: CheckIcon, skill: "ChakraUI", level: "Intermdiate" },
  ];

  const backendSkills = [
    { iconSrc: CheckIcon, skill: "Node.js", level: "Intermediate" },
    { iconSrc: CheckIcon, skill: "Express.js", level: "Intermediate" },
    { iconSrc: CheckIcon, skill: "MongoDB", level: "Basic" },
    { iconSrc: CheckIcon, skill: "REST APIs", level: "Advanced" },


  ];

  const programmingSkills = [
    { iconSrc: CheckIcon, skill: "JavaScript", level: "Advanced" },
    { iconSrc: CheckIcon, skill: "C++", level: "Advance" },
    { iconSrc: CheckIcon, skill: "C", level: "Advance" },
    { iconSrc: CheckIcon, skill: "Java", level: "Basic" },
  ];

  const otherTechSkills = [
    { iconSrc: CheckIcon, skill: "Socket.io", level: "Intermediate" },
    { iconSrc: CheckIcon, skill: "Webrtc", level: "Intermediate" }, 
    { iconSrc: CheckIcon, skill: "Render", level: "Intermediate" },
    { iconSrc: CheckIcon, skill: "Vercel", level: "Intermediate" },
    { iconSrc: CheckIcon, skill: "Passport.js", level: "Basic" }, 
    { iconSrc: CheckIcon, skill: "AWS", level: "Basic" }, 
    { iconSrc: CheckIcon, skill: "GCP", level: "Basic" }, 
  ];

  

  return (
    <section className="mt-40">
      <HomeSectionHeader subtitle="Explore My" title="Experience" />
      {/* Experience Body 1st section */}
      <div className="flex flex-col sm:flex-row gap-10 mt-16">
        {/* Left: Frontend Skills */}
        <SkillsContainer title="FrontEnd Development" skills={frontendSkills} />
        {/* Right: Backend Skills */}
        <SkillsContainer title="BackEnd Development" skills={backendSkills} />
      </div>
      {/* Experience Body 2nd section*/}
      <div className="flex flex-col sm:flex-row gap-10 mt-10">
        {/* Left: Frontend Skills */}
        <SkillsContainer title="Programming" skills={programmingSkills} />
        {/* Right: Backend Skills */}
        <SkillsContainer title="Other Tech" skills={otherTechSkills} />
        
      </div>
    </section>
  );
};

export default HomeExperience;
