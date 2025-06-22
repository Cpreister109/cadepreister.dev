import { motion } from "framer-motion";
import { floatAnimation } from "./projects";
import unoLogo from "../assets/uno-logo.png";

export default function EducationPage() {
  return (
    <div className="h-full w-full overflow-hidden flex items-center justify-center px-6 futuristic">
      <motion.div
        animate={floatAnimation}
        className="backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-12 w-full max-w-5xl flex flex-col sm:flex-row items-center gap-12"
      >
        {/* UNO Logo */}
        <img
          src={unoLogo}
          alt="University of Nebraska at Omaha"
          className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
        />

        {/* Education Info */}
        <div className="text-left">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            University of Nebraska at Omaha
          </h2>
          <p className="text-xl sm:text-2xl text-black mb-1">
            <strong>Bachelor of Science</strong> in
            <br />
            <strong>Computer Science</strong> &{" "}
            <strong>Artificial Intelligence</strong>
          </p>
          <p className="text-lg text-gray-700 mb-2">
            Aug 2022 - Dec 2026 &nbsp;|&nbsp; Grade: Junior
          </p>
          <p className="text-xl text-black font-semibold mb-6">
            Cumulative GPA: 3.677
          </p>

          <div className="text-md sm:text-lg text-black leading-relaxed grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
            <p>🎖️ 2023 Spring: Dean's List</p>
            <p>🎖️ 2023 Fall: Chancellor's List</p>
            <p>🎖️ 2024 Spring: Dean's List</p>
            <p>🎖️ 2024 Fall: Dean's List</p>
            <p>🎖️ 2025 Spring: Dean's List</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
