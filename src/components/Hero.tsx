// @ts-ignore: Module './components/Particles' has no type declarations
import { useState } from "react";
import Particles from "../components/Particles";
import { siteConfig } from "../config/siteConfig";

export const HeroBackGround = () => {
  return (
    <>
    <Particles/>
    <svg
      aria-hidden="true"
      className="absolute inset-0 -z-10 size-full stroke-gray-200 mask-[radial-gradient(100%_100%_at_top_right,white,transparent)]"
    >
    </svg>
    </>
  );
};

const SocialLinks = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 md:p-24 flex gap-x-4 sm:gap-x-6 md:gap-x-8 text-gray-700 animate-fade-in animation-delay-600">
      {siteConfig.social?.email && (
        <a
          href={`mailto:${siteConfig.social.email}`}
          aria-label="Email"
          className="transition-colors duration-300 hover:text-(--accent-color)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
            <path d="M3 7l9 6l9 -6" />
          </svg>
        </a>
      )}
      {siteConfig.social?.linkedin && (
        <a
          href={siteConfig.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-colors duration-300 hover:text-(--accent-color)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
          >
            <g>
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 11v5" />
              <path d="M8 8v.01" />
              <path d="M12 16v-5" />
              <path d="M16 16v-3a2 2 0 1 0 -4 0" />
              <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
            </g>
          </svg>
        </a>
      )}
      {siteConfig.social?.twitter && (
        <a
          href={siteConfig.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="transition-colors duration-300 hover:text-(--accent-color)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
          >
            <g>
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </g>
          </svg>
        </a>
      )}
      {siteConfig.social?.github && (
        <a
          href={siteConfig.social.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition-colors duration-300 hover:text-(--accent-color)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
          >
            <g>
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </g>
          </svg>
        </a>
      )}
    </div>
  );
};

const ProfilePicture = () => {
  const [showGIF, setshowGIF] = useState(false);

  return (
    <div className="flex flex-col items-center md:items-start w-full">
      {/* 1. The Mask Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="squircle" clipPathUnits="objectBoundingBox">
            <path d="M0.5,0 C0.78,0,1,0.22,1,0.5 C1,0.78,0.78,1,0.5,1 C0.22,1,0,0.78,0,0.5 C0,0.22,0.22,0,0.5,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* 2. The Scalable Container */}
      <div
        className="cursor-pointer animate-fade-in animation-delay-300 
                   w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 
                   transition-transform duration-300 hover:scale-105
                   /* This replaces your 250px margin: centered on mobile, pushed right on desktop */
                   ml-0 md:ml-[250px]" 
        style={{ 
          clipPath: "url(#squircle)", 
          WebkitClipPath: "url(#squircle)" 
        }}
        onClick={() => setshowGIF(!showGIF)}
        onMouseEnter={() => setshowGIF(true)}
        onMouseLeave={() => setshowGIF(false)}
      >
        <img
          src={showGIF && siteConfig.dancingGIF ? siteConfig.dancingGIF : siteConfig.image}
          alt="Profile"
          /* 'object-cover' is the secret—it forces the GIF to fill the squircle 
             completely regardless of the GIF's original size */
          className="w-full h-full object-cover shadow-3xl" 
        />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative isolate overflow-hidden bg-black py-24 md:h-screen"
    >
      {/*<div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(ellipse 800px 1200px at 0% 0%, rgb(var(--accent-color-rgb) / 0.25) 0%, rgb(var(--accent-color-rgb) / 0.145) 20%, rgb(var(--accent-color-rgb) / 0.063) 40%, rgba(255, 255, 255, 0.3) 70%, rgba(255, 255, 255, 0.8) 90%, white 100%)`,
        }}
      ></div>*/}
      <HeroBackGround />
       
      <div className="h-full mx-auto p-8 sm:p-12 md:p-24 flex items-center">
        <div>
          <h2 className="text-pretty text-xl sm:text-2xl md:text-5xl font-bold tracking-tight text-gray-700 animate-fade-in">
            Bonjour 👋
          </h2>
          <h1 className="mt-6 sm:mt-8 md:mt-10 text-pretty text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-gray-800 animate-fade-in animation-delay-200">
            I'm&nbsp;
            <span style={{ color: "var(--accent-color)" }}>
              {siteConfig.name}
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 text-pretty text-base sm:text-lg md:text-xl/8 font-medium text-gray-600 animate-fade-in animation-delay-400">
            {siteConfig.title}
             
          </p>
          <p className="mt-4 sm:mt-6 md:mt-8 text-pretty text-base sm:text-lg md:text-xl/8 font-small text-gray-500 animate-fade-in animation-delay-400">
            {siteConfig.description}</p>
        </div>
        <ProfilePicture />
      </div>
      <SocialLinks />
    </div>
  );
};

export default Hero;
