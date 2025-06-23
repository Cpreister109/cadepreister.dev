import { easeInOut } from "framer-motion";
import dex from "../assets/pokedex.png";
import game from "../assets/platform-game.png";
import cdev2 from "../assets/cadepreisterdev2.png";
import cdev1 from "../assets/cadepreisterdev1.png";
import nasa from "../assets/nasa-apod.png";
import epi from "../assets/expense-ep.png";
import ccs from "../assets/cade-cs.png";
import mlp from "../assets/mlp-nn.png";
import cc from "../assets/curr-convert.png";
import info from "../assets/info-collect.png";
import lyrics from "../assets/lyric-gen.png";
import dcbot from "../assets/dc-bot.png";

export const projects = [
  {
    name: "Java PokéPrep",
    repoUrl: "https://github.com/Cpreister109/Final-Project-Pokedex.git",
    imageUrl: dex,
    technologies: ["Java", "Maven", "PokéAPI"],
  },
  {
    name: "Platformer Game",
    repoUrl: "https://github.com/Cpreister109/Platformer-Game.git",
    imageUrl: game,
    technologies: ["C#", "Godot"],
  },
  {      
    name: "NASA APOD",
    repoUrl: "https://github.com/Cpreister109/NASA-React.git",
    imageUrl: nasa,
    technologies: ["React", "JavaScript", "Vite"],
  },
  {      
    name: "Expense Epicenter",
    repoUrl: "https://github.com/Cpreister109/Expense-Epicenter.git",
    imageUrl: epi,
    technologies: ["C#", ".NET", "SQL", "Visual Studio"],
  },
  {
    name: "cadepreister .dev\nv2",
    repoUrl: "https://github.com/Cpreister109/preister-portfolio.git",
    imageUrl: cdev2,
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite", "Docker", "AWS"],
  },
  {      
    name: "cadepreister .dev\nv1",
    repoUrl: "https://github.com/Cpreister109/cadepreister.dev.git",
    imageUrl: cdev1,
    technologies: ["Python", "Flask", "AWS", "Docker"],
  },
  {      
    name: "Cade Code Share",
    repoUrl: "https://github.com/Cpreister109/CadeCodeShare.git",
    imageUrl: ccs,
    technologies: ["Sveltekit", "TypeScript", "HTML", "CSS"],
  },
  {      
    name: "MLP Neural Network",
    repoUrl: "https://github.com/Cpreister109/Neural-Network-Preister.git",
    imageUrl: mlp,
    technologies: ["Python", "Scikit-learn", "NumPy", "pandas"],
  },
  {      
    name: "Currency Converter",
    repoUrl: "https://github.com/Cpreister109/currency-converter-java.git",
    imageUrl: cc,
    technologies: ["Java", "Maven", "API"],
  },
  {      
    name: "Info Collection System",
    repoUrl: "https://github.com/Cpreister109/Menu-C.git",
    imageUrl: info,
    technologies: ["C", "Unix"],
  },
  {      
    name: "Lyric Generator",
    repoUrl: "https://github.com/Cpreister109/CSharp-Lyric-Generator.git",
    imageUrl: lyrics,
    technologies: ["C#", "Visual Sudio", "API"],
  },
  {      
    name: "Discord Bot",
    repoUrl: "https://github.com/Cpreister109/MontanaState_Bot.git",
    imageUrl: dcbot,
    technologies: ["Python", "DC library", "API"],
  },
  ];

export const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: easeInOut,
    },
};

export const techFloatAnimation = {
  animate: (i: number) => ({
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: easeInOut,
      delay: i * 0.8,
    },
  }),
};