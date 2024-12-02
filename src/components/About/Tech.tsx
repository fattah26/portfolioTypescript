"use client";

import { TECH } from "@/constant/icons";
import { Image } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";

function Tech() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="mt-20 lg:mt-40">
      <div className="flex flex-wrap w-full gap-10 lg:gap-20 justify-center">
        {TECH.map((tech) => (
          <motion.div
            key={tech.id}
            className="relative cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: Number(tech.id) * 0.1 
            }}
            onMouseEnter={() => setHoveredId(tech.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Tooltip 
              showArrow 
              content={tech.name} 
            >
              <Image
                src={hoveredId === tech.id && tech.hover ? tech.hover : tech.src}
                alt={tech.alt}
                width={80}
                height={80}
                className="w-10 h-10 lg:w-20 lg:h-20 
                  transition-all 
                  duration-300 
                  ease-in-out 
                  hover:scale-110 // Added scale effect on hover
                  !rounded-none"
              />
            </Tooltip>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Tech;