"use client";
import { projectList } from "@/app/assets/information";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectDetails = ({ params }: { params: { projectId: string } }) => {
  const project = projectList[parseInt(params.projectId)];

  return (
    <section className=" w-full h-screen flex  justify-center items-center  bg-[#fff9ec] text-[#f9443e] overflow-hidden">
      <h2 className="absolute top-0  mx-auto text-xl font-bold  lg:text-7xl ">
        FILMMAKER{" "}
      </h2>
      <div className="w-full flex flex-col  lg:flex-row justify-center  items-center  gap-5  pl-10">
        <motion.h1
          className="lg:self-start pr-6 text-5xl lg:text-3xl font-bold"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 100, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <span className="text-lg lg:text-sm pr-1">0{project.index + 1}</span>
          {project.title.toUpperCase()}
        </motion.h1>
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative group"
        >
          <Image
            src={project.image}
            alt="1"
            width={500}
            height={500}
            priority
            className="items-center w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-sm"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-35 transition-opacity duration-300 rounded-sm flex justify-center items-center">
            <p className="text-3xl font-bold text-gray-300">VIEW</p>
          </div>
        </motion.a>
        <motion.p
          className="  lg:self-end pl-6 text-xl w-[400px] lg:w-72"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 100, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {project.description}
        </motion.p>
        <motion.a href="">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="lg:hidden w-[100px] bg-red-600 text-red-100 px-5 py-2 rounded-md font-bold active:bg-red-800"
          >
            VIEW
          </motion.button>
        </motion.a>
      </div>
    </section>
  );
};

export default ProjectDetails;
