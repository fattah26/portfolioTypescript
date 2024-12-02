"use client";
import Image from "next/image";
import icons from "@/constant/icons";



function Experience() {
  return (
    <section>
      <div className="flex items-center justify-center gap-3">
        <Image
          src={icons.experience}
          alt="experience"
          width={0}
          height={0}
          className="w-6 h-6 md:w-10 md:h-10"
        />
        <h1 className="text-xl md:text-3xl md:font-semibold">
          My <span className="text-primary">Experience</span>
          </h1>
        {/* <span className="w-full rounded-full h-0.5 bg-white"/> */}
      </div>
    </section>
  );
}

export default Experience;
