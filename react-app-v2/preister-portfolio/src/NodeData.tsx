type NodeInfo = {
  label: string;
  radius: number;
  speed: number;
  content: string;
};

const nodeData: NodeInfo[] = [
  {
    label: "Tech",
    radius: 105,
    speed: 15,
    content:
      "w-12 h-12 bg-[linear-gradient(135deg,_#7c2d12,_#f97316)] text-white cursor-pointer shadow-xl shadow-orange-500/40 ring-2 ring-orange-500/50 hover:brightness-75 hover:saturate-200 hover:shadow-2xl",
  },
  {
    label: "Experience",
    radius: 195,
    speed: 22,
    content:
      "w-22 h-22 bg-[linear-gradient(135deg,_#065f46,_#a78bfa)] text-white cursor-pointer shadow-xl shadow-purple-500/40 ring-2 ring-gray-500/50 hover:brightness-75 hover:saturate-200 hover:shadow-2xl",
  },
  {
    label: "Education",
    radius: 295,
    speed: 24,
    content:
      "w-18 h-18 bg-[linear-gradient(135deg,_#831843,_#f472b6)] text-white cursor-pointer shadow-xl shadow-pink-500/40 ring-2 ring-pink-500/50 hover:brightness-75 hover:saturate-200 hover:shadow-2xl",
  },
  {
    label: "Projects",
    radius: 380,
    speed: 32,
    content:
      "w-15 h-15 bg-[linear-gradient(135deg,_#1e40af,_#a78bfa)] text-white cursor-pointer shadow-xl shadow-purple-500/40 ring-2 ring-blue-500/50 hover:brightness-75 hover:saturate-200 hover:shadow-2xl",
  },
];

export default nodeData;
export type { NodeInfo };
