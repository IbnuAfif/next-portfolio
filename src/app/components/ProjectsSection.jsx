"use client";
import React, { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Blog Web",
    description: "Created a blog web with CMS.",
    image: "/image/projects/blog.PNG",
    tag: ["All", "Back End"],
    gitUrl: "/",
    previewUrl: "https://my-blogg-kohl.vercel.app/",
  },
  {
    id: 2,
    title: "Company Profile",
    description: "Created a company profile with NextJS.",
    image: "/image/projects/company-profile.PNG",
    tag: ["All", "Front End"],
    gitUrl: "/",
    previewUrl: "https://bengkel-com.vercel.app/",
  },
  {
    id: 3,
    title: "Landing Page",
    description: "Created a landing page with NextJS.",
    image: "/image/projects/landing-page.PNG",
    tag: ["All", "Front End"],
    gitUrl: "/",
    previewUrl: "https://ibnuafif-portfolio.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animated: { y: 0, opacity: 1 },
  };
  return (
    <sections id="projects">
      <h2 className="text-white text-center text-4xl font-bold mt-4 mb-8 md:mb-12">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Front End" isSelected={tag === "Front End"} />
        <ProjectTag onClick={handleTagChange} name="Back End" isSelected={tag === "Back End"} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, i) => (
          <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
        ))}
      </ul>
    </sections>
  );
};
export default ProjectsSection;
