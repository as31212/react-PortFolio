import Project from "./Project";

const Projects = () => {
  return (
    <>
      <div className="flex flex-col m-10">
        <Project
          img="/Shop-IT-Project.png"
          link="https://shop-it-beta.netlify.app/"
          description="Experience the showcase of my front-end expertise with this Mock E-commerce. Seamlessly blending sleek design with intuitive functionality, this project demonstrates my ability to create immersive online experiences. Explore curated products, captivating visuals, and seamless navigation, reflecting my commitment to excellence in front-end development."
          stack="React, React-Router, Bootstrap CSS"
        />
      </div>
    </>
  );
};
export default Projects;
