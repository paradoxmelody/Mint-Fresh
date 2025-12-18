import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";

const navLinks = [
  {
    href: "#about",
    label: "About",
    show: true,
  },
  {
    href: "#projects",
    label: "Projects",
    show: Array.isArray(siteConfig.projects) ? siteConfig.projects.length > 0 : Boolean(siteConfig.projects),
  },
  {
    href: "#experience",
    label: "Experience",
    show: Array.isArray(siteConfig.experience) ? siteConfig.experience.length > 0 : Boolean(siteConfig.experience),
  },
  {
    href: "#education",
    label: "Education",
    show: Array.isArray(siteConfig.education) ? siteConfig.education.length > 0 : Boolean(siteConfig.education),
  },
  {
    href: "/portal",
    label: "Portal",
    show: true,
  },
];

const Navbar = ({ hideOnPortal = false}) => {
  if (hideOnPortal) return null;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function setOpen(_arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <header
      id="header"
      className={`
        fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300
        ${isScrolled ? "bg-white/70 backdrop-blur-sm" : "bg-transparent"}
      `}
    >
      <nav className=" max-w-7xl mx-auto px-8 py-4 grid grid-cols-3 items-center">
        <Link to="/" className="font-bold text-xl !text-white">Melo<span className="text-primary-500 dark:text-primary-400">dy.</span></Link>

        <ul className="flex items-center justify-center gap-8">
          {navLinks
            .filter((item) => item.show)
            .map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="!text-white hover:text-gray-200 transition-colors font-medium"
                >
                  {label}
                </a>
              </li>
            ))}
        </ul>

        {/*<div className="flex gap-4 items-center">
          <ThemeSwitch />
          <div className="sm:hidden flex gap-4 items-center">
            <ThemeSwitch iconSize={24} />
            <button onClick={() => setOpen(false)} className="!text-white cursor-pointer">
              <IconMenu2 className="w-2 h-2" />
            </button>
          </div>
        </div>*/}
      </nav>
    </header>
  );
};

export default Navbar;