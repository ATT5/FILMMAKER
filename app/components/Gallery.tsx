"use client";
import { useState } from "react";
import { IGallery } from "./interfaces";
import Image from "next/image";
import { projectList } from "../assets/information";
import { FlipLink } from "./FlipLink";

export default function Gallery() {
  const [selectedProject, setSelectedProject] = useState<IGallery>(
    projectList[0]
  );
  const [fade, setFade] = useState<boolean>(true);

  const getProject = (index: number) => {
    setFade(false);
    setTimeout(() => {
      setSelectedProject(projectList[index]);
      setFade(true);
    }, 300);
  };

  return (
    <section className="h-dvh w-full hidden lg:flex  bg-black px-10 text-white">
      <div className=" w-2/5 h-full flex justify-center items-center">
        <h1 className=" absolute top-10 ml-auto mr-auto left-0 right-0 font-bold text-5xl pl-16">
          PROJECT GALERY
        </h1>
        {selectedProject && (
          <div className="flex flex-col items-start pl-5 ">
            <Image
              className={`w-[400px] h-[400px] transition-opacity ease-in-out duration-300  ${
                fade ? "opacity-100" : "opacity-0"
              } `}
              src={selectedProject.image}
              alt="1"
              width={500}
              height={500}
              priority
            />
            <h2 className="self-start py-3 font-bold">
              {selectedProject.title.toUpperCase()}
            </h2>
            <p className="self-start w-2/3">
              {selectedProject.description.toLocaleUpperCase()}
            </p>
          </div>
        )}
      </div>
      <div className=" w-3/5 h-full flex justify-center items-center  cursor-pointer text-7xl">
        <div className="w-full flex flex-col  justify-center  gap-3">
          {projectList.map((item, index) => (
            <FlipLink
              key={index}
              href={`/project/${item.index}`}
              onMouseEnter={() => getProject(index)}
            >
              {item.title}
            </FlipLink>
          ))}
        </div>
      </div>
    </section>
  );
}
