import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Jair Badillo - Mobile & Web Developer",
  author: "Jair Badillo",
  description:
    "Ing. en Desarrollo de software con sede en Kuzamil, México. Me especializo en diseño de UI, desarrollo y mantenimiento de aplicaciones web y móviles.",
  lang: "es",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experencia", href: "#experience" },
    { text: "Proyectos", href: "#projects" },
    { text: "Sobre mi", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/edgar-jair-badillo-ba%C3%B1uelos-33a31a200/" },
    { text: "Github", href: "https://github.com/J1307-bb" },
    { text: "Youtube", href: "" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Jair Badillo",
    specialty: "Mobile & Web Developer",
    summary:
      "Desarrollador de software con sede en Kuzamil, México. Me especializo en diseño de UI, desarrollo y mantenimiento de aplicaciones web y móviles.",
    email: "ebadillobanuelos13@gmail.com",
    github: "https://github.com/J1307-bb",
    linkedin: "https://www.linkedin.com/in/edgar-jair-badillo-ba%C3%B1uelos-33a31a200/",
  },
  experience: [
    {
      company: "SISEC",
      position: "Desarrollador Frontend",
      startDate: "Mayo 2023",
      endDate: "Marzo 2024",
      summary: [
          "Diseño y desarrollo una aplicacion movil para el control de acceso de zonas residenciales, usando tecnologias como: Ionic y Angular"
        ],
    },

  ],
  projects: [
    {
      name: "Delicias Web App",
      summary: "Una aplicación web diseñada para facilitar la cotización y reservación de banquetes para eventos sociales, ofreciendo una experiencia personalizada y ágil.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/delicias.png",
      techs: [
        { name: "React", icon: "react" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: ".NET", icon: "dotnet" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Mercado Pago", icon: "mercado-libre" },
      ],
    },
    {
      name: "Smart Code Access",
      summary: "Aplicación móvil que permite a los residentes de zonas residenciales gestionar y controlar el acceso de manera segura y eficiente.",
      linkPreview: "/",
      image: "/SCA1.jpg",
      techs: [
        { name: "Ionic", icon: "ionic" },
        { name: "Angular", icon: "angular" },
        { name: "SASS", icon: "sass" },
        { name: "TypeScript", icon: "typescript" },
      ],
    },
    {
      name: "Tasky",
      summary: "Herramienta web para gestionar tareas y proyectos, ayudando a los usuarios a organizar y priorizar sus actividades diarias de manera efectiva.",
      linkPreview: "/",
      linkSource: "/",
      image: "/tasky.png",
      techs: [
        { name: "Vue", icon: "vue" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "NestJS", icon: "nestjs" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "TypeScript", icon: "typescript" },
      ],
    },
    {
      name: "Campus Connect",
      summary: "Aplicación móvil centrada en la gestión académica de estudiantes y profesores, mejorando la organización de tareas, calificaciones, recursos y encuestas.",
      linkPreview: "/",
      linkSource: "/",
      image: "/campus-connect.jpg",
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
      summary: "Aplicación móvil que ofrece una experiencia enriquecida sobre zonas arqueológicas de México, brindando información detallada y elementos de realidad aumentada (AR) sobre sitios icónicos.",
      linkPreview: "https://arquelogiamexicoar.netlify.app/home/principal",
      linkSource: "/",
      image: "/arqueologia.jpg",
      techs: [
        { name: "Ionic", icon: "ionic" },
        { name: "Angular", icon: "angular" },
        { name: "SASS", icon: "sass" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Firebase", icon: "firebase" },
      ],
    }
  ],
  about: {
    description: `
      ¡Hola! soy Jair Badillo, un desarrollador apasionado por crear soluciones digitales innovadoras y funcionales. Con experiencia en desarrollo web y móvil, disfruto enfrentando desafíos y construyendo aplicaciones que combinan rendimiento, accesibilidad y diseño intuitivo. Siempre busco aprender y explorar nuevas tecnologías para seguir creciendo profesional y personalmente.
    `,
    image: "/yomerengues.jpg",
  },
};

// #5755ff
