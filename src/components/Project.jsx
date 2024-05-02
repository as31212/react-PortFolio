const Project = ({ img, link, description, stack, title }) => {
    return (
      <>
        <div className="project bg-gray-200 shadow-xl flex flex-row p-5 ease-in-out hover:scale-105 transition duration-300 gap-4 m-20 rounded-lg">
          <a target="_blank" href={link}><img src={img} className="w-1/3 m-0 p-0" alt="Project Img" /></a>
          <div className="gap-10 flex flex-col">
            <h2><b>Title: </b>{title}</h2>
            <p><b>Tech Stack:</b> {stack}</p>
            <p><b>Description:</b> {description}</p>
          </div>
        </div>
      </>
    );
  }
  
  export default Project;
  