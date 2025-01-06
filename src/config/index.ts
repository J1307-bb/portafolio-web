import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Jair Badillo - Mobile & Web Developer",
  author: "Jair Badillo",
  description:
    "Ing. en Desarrollo de software con sede en Kuzamil, México. Me especializo en diseño de UI, desarrollo y mantenimiento de aplicaciones web y móviles.",
  lang: "es",
  siteLogo: "/yoperfil.jpeg",
  navLinks: [
    { text: "Experencia", href: "#experience" },
    { text: "Proyectos", href: "#projects" },
    { text: "Tecnologias", href: "#techs" },
    { text: "Sobre mi", href: "#about" },
  ],
  socialLinks: [
    { text: "WhatsApp", href: "https://w.app/qsuS5m" },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/edgar-jair-badillo-ba%C3%B1uelos-33a31a200/",
    },
    { text: "Github", href: "https://github.com/J1307-bb" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Jair Badillo",
    specialty: "Desarrollo Web y Móvil",
    summary:
      "Desarrollador Full Stack con experiencia en la creación de aplicaciones web y móviles, abarcando tanto el diseño de interfaces intuitivas como el desarrollo de backend robustos y escalables. Mi objetivo es ofrecer soluciones integrales y modernas para cada proyecto.",
    email: "ebadillobanuelos13@gmail.com",
    github: "https://github.com/J1307-bb",
    linkedin:
      "https://www.linkedin.com/in/edgar-jair-badillo-ba%C3%B1uelos-33a31a200/",
  },
  experience: [
    {
      company: "SISEC",
      position: "Desarrollador Frontend",
      startDate: "Mayo 2023",
      endDate: "Marzo 2024",
      summary: [
        "Diseño y desarrollo una aplicacion movil para el control de acceso de zonas residenciales, usando tecnologias como: Ionic y Angular",
      ],
    },
  ],
  projects: [
    {
      name: "Delicias Web App",
      summary:
        "Una aplicación web diseñada para facilitar la cotización y reservación de banquetes para eventos sociales, ofreciendo una experiencia personalizada y ágil.",
      linkPreview: "https://deliciasapp.netlify.app/",
      image: "/delicias.png",
      techs: [
        { name: "React", icon: "react" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: ".NET", icon: "dotnet" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Mercado Pago", icon: "mercadolibre" },
      ],
    },
    {
      name: "Smart Code Access",
      summary:
        "Aplicación móvil que permite a los residentes de zonas residenciales gestionar y controlar el acceso de manera segura y eficiente.",
      image: "/SCA-banner.png",
      techs: [
        { name: "Ionic", icon: "ionic" },
        { name: "Angular", icon: "angular" },
        { name: "SASS", icon: "sass" },
        { name: "TypeScript", icon: "typescript" },
      ],
    },
    {
      name: "Tasky",
      summary:
        "Herramienta web para gestionar tareas y proyectos, ayudando a los usuarios a organizar y priorizar sus actividades diarias de manera efectiva.",
      image: "/tasky.png",
      techs: [
        { name: "Vue", icon: "vue" },
        { name: "NestJS", icon: "nestjs" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "TypeScript", icon: "typescript" },
      ],
    },
    {
      name: "Campus Connect",
      summary:
        "Aplicación móvil centrada en la gestión académica de estudiantes y profesores, mejorando la organización de tareas, calificaciones, recursos y encuestas.",
      image: "/campus-connect-banner.png",
      techs: [
        { name: "React", icon: "react" },
        { name: "Expo", icon: "expo" },
        { name: "Nativewind", icon: "tailwindcss" },
        { name: "Node.js", icon: "nodejs" },
        { name: "Firebase", icon: "firebase" },
      ],
    },
    {
      name: "ARqueologia",
      summary:
        "Aplicación móvil que ofrece una experiencia enriquecida sobre zonas arqueológicas de México, brindando información detallada y elementos de realidad aumentada (AR) sobre sitios icónicos.",
      linkPreview: "https://arquelogiamexicoar.netlify.app/home/principal",
      image: "/arqueologia-banner.png",
      techs: [
        { name: "Ionic", icon: "ionic" },
        { name: "Angular", icon: "angular" },
        { name: "SASS", icon: "sass" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Firebase", icon: "firebase" },
      ],
    },
  ],
  techs: 
    {
      skills: [
        { name: "HTML", icon: "html" },
        { name: "CSS", icon: "css" },
        { name: "JavaScript", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
        { name: "React", icon: "react" },
        { name: "Angular", icon: "angular" },
        { name: "Tailwind", icon: "tailwindcss" },
        { name: ".NET", icon: "dotnet" },
        { name: "NestJS", icon: "nestjs" },
        { name: "Ionic", icon: "ionic" },
        { name: "Expo", icon: "expo" },

      ],
      tools: [
        { name: "Node.js", icon: "nodejs" },
        { name: "SQLServer", icon: "microsoftsqlserver" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "Firebase", icon: "firebase" },
        { name: "AWS", icon: "aws-logo" },
        { name: "Docker", icon: "docker" },
        { name: "Git", icon: "git" },
        { name: "Postman", icon: "postman" },
        { name: "Figma", icon: "figma" },
      ],
    },
  about: {
    description: `
      ¡Hola! soy Jair Badillo, un desarrollador apasionado por crear soluciones digitales innovadoras y funcionales. Con experiencia en desarrollo web y móvil, disfruto enfrentando desafíos y construyendo aplicaciones que combinan rendimiento, accesibilidad y diseño intuitivo. Siempre busco aprender y explorar nuevas tecnologías para seguir creciendo profesional y personalmente.
    `,
    image: "/yomerengues.jpg",
  },
};

// #5755ff
