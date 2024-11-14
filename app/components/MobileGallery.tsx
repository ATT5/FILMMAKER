import { projectList } from "../assets/information";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IGallery } from "./interfaces";
export const MobileGallery = () => {
  return (
    <section className="w-full overflow-hidden pb-9 bg-[#fff9ec] text-[#f9443e] relative lg:hidden">
      <h1 className="text-center font-bold text-4xl p-5 lg:hidden flex flex-col">
        FILMMAKER
        <span className="text-xl font-normal">@Edgar Baylon</span>
      </h1>
      {projectList.map((item, index) => (
        <GalleryItem key={index} item={item} index={index} />
      ))}
    </section>
  );
};

const GalleryItem = ({ item, index }: { item: IGallery; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ x: isEven ? -100 : 100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 1 }}
      className={`flex z-10 relative flex-col ${
        isEven ? "items-start pl-4" : "items-end pr-4"
      } w-full lg:hidden p-10`}
    >
      <a href={`/project/${index}`}>
        <Image
          className="w-[350px] h-[300px] rounded-sm"
          src={item.image}
          alt={item.title}
          width={500}
          height={500}
        />
        <h2
          className={`mt-2 text-3xl font-bold ${
            isEven ? "text-left" : "text-right"
          }`}
        >
          <span className="text-sm">0{index + 1}</span>{" "}
          {item.title.toUpperCase()}
        </h2>
        <p
          className={`mt-1 w-80 font-thin ${
            isEven ? "text-left" : "text-right"
          }`}
        >
          {item.description}
        </p>
      </a>
    </motion.div>
  );
};
