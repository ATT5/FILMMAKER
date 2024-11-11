import { motion } from "framer-motion";

export const FlipLink = ({
  children,
  href,
  onMouseEnter,
}: {
  children: string;
  href: string;
  onMouseEnter?: () => void;
}) => {
  const DURATION = 0.25;
  const STAGGER = 0.025;

  return (
    <motion.a
      initial="initial"
      animate={"initial"}
      whileHover="hovered"
      href={href}
      onMouseEnter={onMouseEnter}
      className="relative block overflow-hidden whitespace-nowrap font-bold  py-1"
    >
      <div className="text-red-300 ">
        {children.split("").map((l, i) => (
          <motion.span
            className="inline-block"
            key={i}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            className="inline-block  text-[#f9443e] "
            key={i}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
