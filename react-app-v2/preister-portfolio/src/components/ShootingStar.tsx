import { useEffect } from "react";

export const ShootingStar: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById("starry-background");
    if (!container) return;

    const spawnShootingStar = () => {
      const star = document.createElement("div");
      star.className = "shooting-star";

      star.style.top = `${Math.random() * window.innerHeight * 0.5}px`;
      star.style.left = `${window.innerWidth + 100}px`;

      container.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 1000); // Match animation duration
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        spawnShootingStar();
      }
    }, 2000 + Math.random() * 4000); // Every 2–6s

    return () => clearInterval(interval);
  }, []);

  return null; // No visible JSX
};
