"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
// import {Switch} from "@nextui-org/react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Pastikan toggle theme berfungsi dengan baik
  const toggleTheme = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    (theme == "dark" ? setTheme("light") : setTheme("dark"));
  };

  const renderIcon = () => {
    return theme === "dark" ? (
      <FiMoon className="text-neutral-200" />
    ) : (
      <FiSun className="text-primary" />
    );
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; 
  }

  return (
    <button
      onClick={toggleTheme}
      className="bg-white dark:bg-neutral-800 outline-neutral-200 dark:outline-neutral-700 outline-1 hover:outline-2 outline rounded-full p-2 lg:absolute lg:right-0 text-neutral-700 dark:text-white"
      aria-label="Toggle theme"
    >
      {renderIcon()}
    </button> 

  //   <Switch
  //   defaultSelected
  //   size="lg"
  //   onClick={toggleTheme}
  //   className="lg:absolute lg:right-0"
  //   aria-label="Toggle theme"
  //   startContent={<FiSun />}
  //   endContent={<FiMoon />}
  // >
  //   {/* Toggle 2 */}
  // </Switch>
  );
}

export default ThemeToggle;
