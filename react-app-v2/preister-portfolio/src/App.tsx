import { useMemo, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { OrbitingNode } from "./components/OrbitingNode";
import { Node } from "./components/Node";
import { ShootingStar } from "./components/ShootingStar";
import { motion, AnimatePresence } from "framer-motion";
import gitSat from "./assets/git-sat.png";
import linAst from "./assets/lin-ast.png";
import RocketLoader from "./components/RocketLoader";
import generateStars from "./stars";
import nodeData from "./NodeData";
import "./App.css";

function App() {
  const stars = useMemo(
    () => generateStars(200, window.innerWidth, window.innerHeight),
    []
  );

  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showFadeOverlay, setShowFadeOverlay] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setShowFadeOverlay(false);
    }, 2000); // adjust fade duration
    return () => clearTimeout(fadeTimer);
  }, []);

  useEffect(() => {
    if (activeNode) {
      const expansionTimer = setTimeout(() => {
        setLoading(true);
        const navigationTimer = setTimeout(() => {
          navigate(`/${activeNode.toLowerCase()}`);
          setLoading(false);
        }, 2300);
        return () => clearTimeout(navigationTimer);
      }, 100);
      return () => clearTimeout(expansionTimer);
    }
  }, [activeNode, navigate]);

  return (
    <div className="starry-bg relative w-full h-screen overflow-hidden">
      {loading && <RocketLoader />}

      {/* Initial fade overlay */}
      <AnimatePresence>
        {showFadeOverlay && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="fixed top-0 left-0 w-full h-full bg-white z-[9999]"
          />
        )}
      </AnimatePresence>

      <div className="absolute top-20 left-20 z-20 text-white text-2xl md:text-3xl font-bold futuristic drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
        <u>
          The Preister-tary
          <br />
          System
        </u>
      </div>

      <div id="starry-background">
        <ShootingStar />
      </div>

      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            left: `${star.left}px`,
            top: `${star.top}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      <div
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden"
      >
        {!activeNode && (
          <>
            {/* Github Satellite */}
            <div className="absolute left-25/32 top-1/8 w-48 h-48 z-16 animate-float">
              <a
                href="https://github.com/Cpreister109"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={gitSat} alt="GitHub Satellite" />
              </a>
            </div>

            {/* LinkedIn Astronaut */}
            <div className="absolute left-2/32 top-11/16 w-48 h-48 z-16 animate-drift">
              <div className="animate-float">
                <a
                  href="https://www.linkedin.com/in/cade-preister-45752928a/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={linAst} alt="LinkedIn Astronaut" />
                </a>
              </div>
            </div>

            {/* Orbit Rings */}
            {nodeData.map(({ label, radius, speed }) => (
              <div
                key={label}
                className="orbit-ring"
                style={{
                  width: radius * 2,
                  height: radius * 2,
                  animation: `spin ${speed}s linear infinite`,
                }}
              />
            ))}

            {/* Center Node */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
              <Node
                label="Cade Preister"
                onClick={() => null}
                content="w-24 h-24 bg-yellow-400 text-center text-orange-600 cursor-pointer drop-shadow-[0_0_20px_rgba(255,255,255,1)] ring-2 ring-orange-400"
                disableAnimation={true}
              />
            </div>
          </>
        )}

        {/* Orbiting Nodes */}
        {nodeData.map(({ label, radius, speed, content }) => {
          if (activeNode === label || !activeNode) {
            return (
              <OrbitingNode
                key={label}
                label={label}
                radius={radius}
                speed={speed}
                content={content}
                onClick={() => setActiveNode(label)}
                isActive={activeNode === label}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
