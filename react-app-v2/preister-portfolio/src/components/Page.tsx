import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import orangeBg from "../assets/orange-bg.jpg";
import multiBg from "../assets/multi-color-bg.jpg";
import pinkBg from "../assets/pink-bg.jpg";
import bluepurpleBg from "../assets/blue-purple-bg.jpg";

export default function Page({
  title,
  child,
}: {
  title: string;
  child: React.ReactNode;
}) {
  let pageBg = "";

  if (title === "Technologies") {
    pageBg = orangeBg;
  } else if (title === "Experience") {
    pageBg = multiBg;
  } else if (title === "Education") {
    pageBg = pinkBg;
  } else if (title === "Projects") {
    pageBg = bluepurpleBg;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${pageBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[80%] h-[80%] bg-white/20 backdrop-blur-lg rounded-2xl p-8 shadow-lg text-black flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold futuristic">{title}</h1>
          <Link
            to="/"
            aria-label="Go back home"
            className="text-black text-3xl font-bold hover:text-gray-700 transition-colors"
          >
            ×
          </Link>
        </div>

        <div className="flex-1 overflow-auto">{child}</div>
      </div>
    </motion.div>
  );
}
