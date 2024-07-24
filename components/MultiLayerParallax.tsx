import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Typewriter from "typewriter-effect";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ 
          y: textY, 
          zIndex:100,
          backgroundPosition: "top"
        }}
        className="font-bold text-white text-7xl md:text-9xl relative z-10 drop-shadow-2xl"
      >
        <div style={{ backdropFilter: 'blur(2px)'}}>
        <Typewriter
          options={{
            strings: ['Hello, Welcome to...', 'Team 3 ESG Report 🌎'],
            autoStart: true,
            loop: true,
            
          }}
            />
          
        </div>
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/db-only-sky.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
          backdropFilter: 'blur(100px)'
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/db-building-cut-out.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
