import { motion } from "framer-motion";
import { techFloatAnimation } from "./projects";

const techStack = {
  languages: [
    "devicon-javascript-plain colored",
    "devicon-typescript-plain colored",
    "devicon-html5-plain colored",
    "devicon-css3-plain colored",
    "devicon-python-plain colored",
    "devicon-csharp-plain colored",
    "devicon-c-plain colored",
    "devicon-java-plain colored",
    "devicon-postgresql-plain colored",
    "devicon-bash-plain colored",
  ],
  frameworks: [
    "devicon-react-original",
    "devicon-svelte-plain colored",
    "devicon-flask-original colored",
    "devicon-dotnetcore-plain colored",
    "devicon-maven-plain colored",
  ],
  devops: [
    "devicon-docker-plain colored",
    "devicon-kubernetes-plain colored",
    "devicon-helm-plain colored",
    "devicon-git-plain colored",
    "devicon-amazonwebservices-plain",
  ],
};

function TechSection({ title, icons }: { title: string; icons: string[] }) {
  return (
    <section className="mb-20 futuristic">
      <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-6 justify-items-center">
        {icons.map((icon, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={techFloatAnimation}
            animate="animate"
            initial={{ y: Math.sin(idx) * -10 }}
            className="backdrop-blur-md bg-white/20 border border-white/20 shadow-lg rounded-2xl p-6 w-32 h-32 flex items-center justify-center hover:scale-105 transition-transform"
          >
            <i className={`${icon} text-7xl text-black`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function TechPage() {
  return (
    <div className="min-h-screen px-6 py-16 from-gray-900 to-black text-white">
      <TechSection title="Languages" icons={techStack.languages} />
      <TechSection title="Frameworks" icons={techStack.frameworks} />
      <TechSection title="DevOps" icons={techStack.devops} />
    </div>
  );
}
