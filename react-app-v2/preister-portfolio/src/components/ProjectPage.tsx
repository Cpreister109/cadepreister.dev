import { motion } from "framer-motion";
import { projects, techFloatAnimation } from "./projects";

export default function ProjectsPage() {
  return (
    <div className="h-screen w-full overflow-auto px-6 futuristic">
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {projects.map(({ name, repoUrl, imageUrl, technologies }, idx) => (
            <motion.a
              key={idx}
              custom={idx}
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={techFloatAnimation}
              animate="animate"
              initial={{ y: Math.sin(idx) * -10 }}
              className="cursor-pointer backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-3xl p-4 flex flex-col justify-between hover:scale-105 transition-transform"
            >
              <div className="mb-4">
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-full h-40 object-cover rounded-xl"
                />
              </div>

              <h2 className="text-2xl font-bold text-black mb-3">{name}</h2>

              {/* Small tech badges */}
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white/20 text-black text-xs font-semibold rounded-full px-2 py-1 select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
