import type { SiteConfig } from "../types";

export const siteConfig: SiteConfig = {
  name: "Moloti Kgaphola",
  title: "Computer Science Student & Full-Stack Developer",
  description: "You have the power to shape your destinity; Trust in yourself and code your future. I love you",
  image: "/MELODY6.jpg",
  dancingGIF: "/itachi-uchiha-fortnite.gif",
  social: {
    email: "lotimelody@gmail.com",
    linkedin: "https://linkedin.com/in/moloti-kgaphola",
    github: "https://github.com/paradoxmelody",
  },
  aboutMe: "Salut mon amie, Welcome to my little corner of the internet! I'm Moloti, a passionate Computer Science student and full-stack developer. I love crafting beautiful and functional web applications that make a difference. When I'm not coding, you can find me exploring new tech trends, hiking, or indulging in my love for philosophy and art. Connect if you want to explore the depths of the universe together!",
  skills: [
    "Java",
    "TypeScript",
    "Spring Boot",
    "React.js",
    "Node.js",
    "MongoDB",
    "React Native",
    "JavaScript",
    "Git",
    "AWS",
    "Python",
    "MySQL",
  ],
  projects: [
    {
      name: "Vintage Game",
      description: `A vintage game remniscent of classic arcade games.`,
      link: "https://paradoxmelody.github.io/GAME/mel.html",
      technologies: ["JavaScript", "HTML", "CSS"],
    },
    {
      name: "FoodGo",
      description: `A food ordering application that allows users to browse menus, place orders, and make payments seamlessly.`,
      link: "https://exquisite-tulumba-314fbe.netlify.app/",
      technologies: ["React", "Node.js", "Express", "Firebase", "JavaScript"],
    },
  ],
  experience: [
    {
      company: "UWC GBV IMS",
      title: "System Administrator",
      dateRange: "February 2025 - August 2025",
      bullets: [
        "Developed and maintained web applications using React.js and Node.js, improving user engagement by 15%.",
        "Collaborated with cross-functional teams to design and implement new features, resulting in a 10% increase in customer satisfaction.",
        "Optimized database queries, reducing load times by 20% and enhancing overall application performance.",
      ],
    },
    {
      company: 'F.A.S.D (NGO)',
      title: 'Full-Stack Developer',
      dateRange: 'February 2025 - July 2025',
      bullets: [
        'Developed and maintained web applications using React.js and Node.js, improving user engagement by 15%.',
        'Collaborated with cross-functional teams to design and implement new features, resulting in a 10% increase in customer satisfaction.',
        'Optimized database queries, reducing load times by 20% and enhancing overall application performance.',
      ],
    }
  ],
  education: [
    {
      school: "University of the Western Cape",
      degree: "Bachelor of Science in Computer Science and Mathematical Statistics",
      dateRange: "2023 - 2026 (Expected)",
      achievements: [],
    },
  ],
  themeswitch: function (): unknown {
    throw new Error("Function not implemented.");
  },
  blog: false
};