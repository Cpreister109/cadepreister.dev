import { motion } from "framer-motion";

export function Node({
  label,
  onClick,
  style = {},
  id,
  content,
  isActive = false,
  disableAnimation = false,
}: {
  label: string;
  onClick: () => void;
  style?: React.CSSProperties;
  id?: string;
  content?: string;
  isActive?: boolean;
  disableAnimation?: boolean;
}) {
  return (
    <motion.div
      id={id}
      onClick={!isActive ? onClick : undefined}
      className={`flex items-center justify-center fixed rounded-full transition-all duration-500 ease-in-out futuristic text-sm ${
        isActive && label
          ? "w-[4000px] h-[4000px] bg-white text-black z-50"
          : content
      }`}
      style={{ transformOrigin: "center", ...style }}
      initial={disableAnimation ? false : { scale: 0, x: "-50%", y: "-50%" }}
      animate={
        disableAnimation
          ? { scale: 1, x: "-50%", y: "-50%" }
          : { scale: 1, x: "-50%", y: "-50%" }
      }
      transition={
        disableAnimation
          ? { duration: 0 }
          : { type: "spring", stiffness: 260, damping: 20 }
      }
    >
      {isActive ? null : label}
    </motion.div>
  );
}
