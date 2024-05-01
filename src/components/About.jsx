import "@fortawesome/fontawesome-free/css/all.css";
import { RiTailwindCssFill } from "react-icons/ri";

const About = () => {
  return (
    <>
      <div id="about" className="flex flex-wrap flex-col gap-10">
          <div
            id="introduction"
            className="flex flex-wrap flex-row justify-center p-11 gap-44"
          >
            <img
              className=" w-96 h-96 rounded-full shadow"
              src="/ahmad.jpg"
              alt="picture of the developer"
            />
            <div id="img-text" className="flex flex-col gap-10 w-1/6">
              <h2 className="font-bold text-5xl ">Front-End Engineer</h2>
              <p>
                Hello, I'm Ahmad Searcy. A passionate Front-End Engineer and Data
                Analyst from Chicago, IL
              </p>
              <div id="linkedin-github" className="flex gap-5">
                <a target="_blank" href="https://github.com/as31212">
                  <i className="fa-brands fa-linkedin text-4xl hover:text-cyan-500 ease-in-out duration-300"></i>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/ahmad-searcy/">
                  <i className="fa-brands fa-github text-4xl hover:text-cyan-500 ease-in-out duration-300"></i>
                </a>
              </div>
            </div>
            </div>
            <div className="flex justify-center items-center" id="tech-stack">
    <p className="font-bold text-2xl">Tech-Stack:</p>
    <div  className="icons text-4xl ml-20 flex flex-wrap">
        <i className="fa-brands fa-html5 text-blue-900 mr-20"></i>
        <i className="fa-brands fa-css3-alt text-orange-700 mr-20"></i>
        <i className="fa-brands fa-js text-yellow-400 mr-20"></i>
        <i className="fa-brands fa-react text-blue-400 mr-20"></i>
        <RiTailwindCssFill className="mr-20 text-blue-400" />
        <i class="fa-brands fa-python text-yellow-400 mr-20"></i>
        
    </div>
</div>

      </div>
    </>
  );
};
export default About;
