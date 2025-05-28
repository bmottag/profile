import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Benjamin Motta — Software Developer",
  author: "Benjamin Motta",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/benjamin-small.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Benjamin Motta",
    specialty: "Software Developer",
    summary:
      "Developer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
    email: "example@email.com",
  },
  experience: [
    {
      company: "Banana Script",
      position: "Software Developer",
      startDate: "June 2023",
      endDate: "June 2024",
      summary: [
        "As part of a large development team for modern healthcare initiative, I contributed to the modernization of a telemedicine web application by leading the migration of the backend from Laravel 8 to Laravel 9. This upgrade improved the system's performance, security, and developer efficiency, while aligning the codebase with the latest industry standards.",
        "On the frontend, I collaborated on building a responsive and dynamic interface using Next.js, enabling a smooth experience for both patients and healthcare professionals. The platform supports online appointment scheduling, virtual consultations, medical record access, and secure communication — all optimized for cross-device usability.",
        "Working closely with backend and frontend developers, I focused on scalable architecture, seamless API integration, and clean UI implementation. This project empowered healthcare providers to offer end-to-end digital consultations, significantly improving accessibility and operational efficiency.",
      ],
    },
    {
      company: "RevStar Consulting",
      position: "Software Developer",
      startDate: "March 2022",
      endDate: "June 2023",
      summary: [
        "Provided ongoing support for a telemedicine platform built with Laravel 8 and MySQL, ensuring system stability, bug resolution, and performance optimization. Worked closely with the development and QA teams to maintain application reliability in a high-availability environment.",
        "In addition to support tasks, I implemented new features that enhanced the platform’s functionality — including improvements to the consultation workflow, user management modules, and patient record handling. Each feature was developed with a strong focus on code quality, user experience, and security.",
        "This role required a deep understanding of the platform’s architecture, strong problem-solving skills, and the ability to quickly adapt to evolving project needs. My contributions helped ensure the system continued to meet the demands of a growing user base in the healthcare sector.",
      ],
    },
    {
      company: "V-Contracting",
      position: "Web Developer",
      startDate: "October 2016",
      endDate: "May 2025",
      summary: [
        "Designed, developed, and implemented a custom web application using PHP and the CodeIgniter framework to support internal operations. The solution leveraged jQuery, AJAX, Bootstrap, and MySQL to provide a responsive and user-friendly interface across multiple modules.",
        "Key functionalities included an employee access control system, a module to request and manage time off, and digital forms for capturing safety information per job site, ensuring compliance with workplace safety regulations. These tools helped streamline daily processes and reduce paperwork.",
        "Additionally, I developed a feature to perform equipment inspections via QR codes, allowing field staff to scan and submit inspection forms directly from mobile devices. A system configuration module was also built to manage parametric tables and update internal references without requiring code changes. This project significantly improved operational efficiency and data accuracy across the organization.",
      ],
    },
  ],
  projects: [
    {
      name: "V-Contracting",
      summary: "Custom web application using CodeIgniter framework.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/v-contracting.ca.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Benjamin Motta, a passionate Web Developer with over a decade of experience building tailored digital solutions.
      From backend architecture in PHP and Laravel to sleek front-end interfaces using JavaScript, HTML5, and CSS, I craft applications that are not only functional, but scalable and user-focused. I thrive on transforming complex ideas into clean, maintainable code — always aiming to merge business goals with seamless user experiences.
      Over the years, I’ve delivered custom software for startups and enterprises alike, focusing on performance, usability, and long-term maintainability. Whether it’s building secure APIs, integrating databases like MySQL or PostgreSQL, or working in agile teams with Git and JIRA — I’m all about creating impact through technology.
    `,
    image: "/benjamin-big.jpeg",
  },
};

// #5755ff
