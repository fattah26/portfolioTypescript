/* eslint-disable react/no-unescaped-entities */
"use client";

import { Image } from "@nextui-org/react";
import Link from "next/link";
import { SOCIALS } from "@/constant/icons";
import Tech from "@/components/About/Tech";
import { Layout } from "@/components/Layout/Layout";
import { motion } from "framer-motion";
import Experience from "@/components/About/Experience";

function AboutPage() {
  return (
    <Layout className="flex flex-col justify-center">
      <section className="flex flex-col md:flex-row-reverse md:gap-12 lg:gap-16">
        <div className="self-center">
          <motion.div
            className="relative rotate-3 aspect-square w-36 sm:w-40 md:w-48 rounded-lg overflow-hidden outline outline-4 outline-neutral-200 dark:outline-neutral-700 shadow"
            initial={{
              opacity: 0,
              x: 500, 
              rotate: 360,
            }}
            animate={{
              opacity: 1,
              x: 0, 
              rotate: 3, 
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/profile.png"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full"
            />
          </motion.div>
        </div>

        <div className="grow mt-2">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 dark:text-neutral-100">
            "Hey! I'm <span className="text-primary">Fattah Arif</span> and I'm
            a Frontend Developer."
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-justify mt-5 lg:mt-6">
            Hi, I am a Software Engineering student who is delving into the
            world of web development. Although still a beginner, I am starting
            to understand the basics of front-end frameworks such as Next.js
            with JavaScript. I want to continue learning and deepen my knowledge
            of new technologies.
          </p>

          <div className="flex gap-6 w-full md:w-auto md:justify-start mt-5 lg:mt-6">
            {SOCIALS.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                target="_blank"
                aria-label={social.name}
                className="group"
              >
                <Image
                  alt={social.name}
                  src={social.src}
                  width={24}
                  height={24}
                  className="transition-transform duration-300 ease-in-out filter hover:brightness-0 dark:hover:brightness-0 dark:invert"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Tech />
      <Experience/>
    </Layout>
  );
}

export default AboutPage;
