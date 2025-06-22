import { useMemo, useRef, useEffect } from "react";
import { Node } from "./Node";

export function OrbitingNode({
  label,
  radius,
  speed,
  content,
  onClick,
  isActive,
}: any) {
  const angle = useMemo(() => Math.random() * 360, []);
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = orbitRef.current;
    if (!node) return;

    let start = Date.now();
    const animate = () => {
      const elapsed = (Date.now() - start) / 1000;
      const currentAngle =
        ((angle + (elapsed * 360) / speed) % 360) * (Math.PI / 180);
      const x = Math.cos(currentAngle) * radius;
      const y = Math.sin(currentAngle) * radius;
      node.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(animate);
    };
    animate();
  }, [radius, speed]);

  return (
    <div
      ref={orbitRef}
      className="absolute left-1/2 top-1/2"
      style={{ transform: "translate(0, 0)", transformOrigin: "center" }}
    >
      <Node
        label={label}
        onClick={onClick}
        isActive={isActive}
        content={content}
        id={`node-${label}`}
      />
    </div>
  );
}
