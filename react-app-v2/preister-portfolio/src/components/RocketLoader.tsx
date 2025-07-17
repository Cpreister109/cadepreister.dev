import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import type { LottieRefCurrentProps } from "lottie-react";
import rocketAnimation from "../assets/RocketLoader.json";

const RocketLoader = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(3);
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="w-40 h-40 md:w-200 md:h-200">
        <Lottie
          lottieRef={lottieRef}
          animationData={rocketAnimation}
          loop={true}
        />
      </div>
    </div>
  );
};

export default RocketLoader;
