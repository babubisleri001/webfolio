import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, githubLink }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <a
         href={githubLink }
         target="_blank "
         rel="noopener noreferrer "
         className="`text-2xl font-playfair underline"
         >
          View On GitHub.
         </a>
      </div>
      <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  );
};  

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="mt-20"> {/* Added this margin */}
  <p className="font-playfair font-semibold text-4xl">
    <span className="text-red">PRO</span>JECTS
  </p>
  <div className="flex justify-center mt-14">
    <LineGradient width="w-2/3" />
  </div>
</div>
   
       
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center mt-10">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Project 1" githubLink="https://github.com/babubisleri001/FinTrack" />
          <Project title="Project 2" githubLink="https://github.com/babubisleri001/inv-mgmt-system" />

          {/* ROW 2 */}
          <Project title="Project 3" githubLink="https://github.com/babubisleri001/msg-app" />
          <Project title="Project 4" githubLink="https://github.com/babubisleri001/file-sharing-application" />
          <Project title="Project 5" githubLink="https://github.com/babubisleri001/serene" />

          
         
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
