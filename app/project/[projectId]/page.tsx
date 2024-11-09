"use client";
import { projectList } from "@/app/assets/information";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectDetails = ({ params }: { params: { projectId: string } }) => {
  const project = projectList[parseInt(params.projectId)];

  return (
    <section className=" w-full h-screen flex  justify-center items-center">
      <div className="w-full flex justify-center ">
        <motion.h1
          className="self-start pr-6 text-3xl font-bold"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 100, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {project.title.toUpperCase()}
        </motion.h1>
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <Image
            src={project.image}
            alt="1"
            width={500}
            height={500}
            priority
            className="items-center w-[500px] h-[500px]"
          />
        </motion.a>
        <motion.p
          className="self-end pl-6 text-xl"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 100, x: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {project.description}
        </motion.p>
      </div>
    </section>
  );
};

export default ProjectDetails;
