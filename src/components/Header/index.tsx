"use client";
import { usePathname } from "next/navigation";
import { appRoute } from "@/constant/router";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const isActiveLink = (path:string) => {
    return path === pathname ? "text-primary" : "";
  }

  return(

    <nav className="w-full h-fit max-w-6xl mx-auto relative flex justify-between lg:justify-center items-center my-4 px-7 lg:px-0">
      <div className="relative flex bg-secondary dark:bg-tertiary outline-neutral-200 dark:outline-stroke outline-1 hover:outline-2 outline w-fit rounded-full font-semibold text-xs md:text-sm text-neutral-800 dark:text-secondary">
        {appRoute.map((nav, index) => (
          <Link
            key={index}
            href={nav.path}
            className={`relative h-10 px-4 flex items-center rounded-lg z-10 ${isActiveLink(nav.path)}`}
          >
            <span>{nav.name}</span>
          </Link>
        ))}
      </div>
      <ThemeToggle/>
    </nav>
  )
}