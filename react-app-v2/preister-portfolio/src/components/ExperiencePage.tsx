import { motion } from "framer-motion";
import { floatAnimation } from "./projects";
import leidosLogo from "../assets/leidos-logo.png";

const technologies = ["Python", "Bash", "Git", "Docker", "Kubernetes", "Helm"];

export default function ExperiencePage() {
  return (
    <div className="h-full w-full overflow-hidden flex items-center justify-center px-6 futuristic">
      <motion.div
        animate={floatAnimation}
        className="backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-12 w-full max-w-5xl flex flex-col sm:flex-row items-center gap-12"
      >
        {/* Leidos Logo */}
        <img
          src={leidosLogo}
          alt="Leidos"
          className="w-40 h-40 sm:w-48 sm:h-48 object-contain"
        />

        {/* Experience Info */}
        <div className="text-left flex-1">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Software Engineer Intern
          </h2>
          <p className="text-xl sm:text-2xl text-black mb-1 font-semibold">
            Leidos &nbsp;|&nbsp; Omaha, NE
          </p>
          <p className="text-lg text-gray-700 mb-6">May 2025 - August 2025</p>

          <p className="text-md sm:text-lg text-black leading-relaxed mb-6">
            Worked on developing and maintaining software applications focused
            on defense and intelligence systems, collaborating closely with
            cross-functional teams to deliver scalable, secure solutions.
          </p>

          {/* Technologies Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-2xl p-4 flex items-center justify-center text-purple-800 font-semibold select-none"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
