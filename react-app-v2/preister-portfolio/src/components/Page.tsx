import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import RocketLoader from "./RocketLoader";
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
  const [isExiting, setIsExiting] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();

  let pageBg = "";
  if (title === "Technologies") pageBg = orangeBg;
  else if (title === "Experience") pageBg = multiBg;
  else if (title === "Education") pageBg = pinkBg;
  else if (title === "Projects") pageBg = bluepurpleBg;

  const handleExit = () => {
    setIsExiting(true);
  };

  const onExitComplete = () => {
    setShowLoader(true);
    setTimeout(() => {
      navigate("/");
    }, 2300);
  };

  return (
    <>
      {showLoader && <RocketLoader />}

      <AnimatePresence mode="wait" onExitComplete={onExitComplete}>
        {!showLoader && !isExiting && (
          <motion.div
            key="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, backgroundColor: "#ffffff" }}
            transition={{ duration: 0.5 }}
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
                <button
                  onClick={handleExit}
                  aria-label="Go back home"
                  className="text-black text-3xl font-bold hover:text-gray-700 transition-colors"
                >
                  x
                </button>
              </div>

              <div className="flex-1 overflow-auto">{child}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
