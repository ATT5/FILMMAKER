import { projectList } from "../assets/information";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { section } from "framer-motion/client";

export const MobileGallery = () => {
  return (
    <section className="w-full overflow-hidden pb-9 bg-black text-white relative ">
      <p className="text-8xl  hidden lg:fixed top-1/2 right-1/2 -z-0 text-center">
        Gallery
      </p>
      <h1 className="text-center font-bold text-4xl p-5 lg:hidden ">GALLERY</h1>
      {projectList.map((item, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref);
        console.log(isInView);
        const isEven = index % 2 === 0;
        return (
          <motion.div
            ref={ref}
            initial={{ x: isEven ? -100 : 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
            key={index}
            className={`flex z-10 relative flex-col ${
              isEven ? "items-start pl-4" : "items-end pr-4"
            } w-full  lg:hidden p-10`}
          >
            <Image
              className=" w-[350px] h-[300px]"
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
            />
            <h2
              className={`mt-2 text-3xl font-bold   ${
                isEven ? "text-left pl-4" : "text-right pr-4"
              }`}
            >
              <span className="text-sm text">0{index + 1}</span>{" "}
              {item.title.toUpperCase()}
            </h2>
            <p
              className={`mt-1 w-80 ${
                isEven ? "text-left pl-4" : "text-right pr-4 "
              } `}
            >
              {item.description}
            </p>
          </motion.div>
        );
      })}
    </section>
  );
};
