export const projects = [
  {
    heading: "Find Real Estate & Get Your Dream Place",
    date: "Mar 15, 2024",
    link: "https://xestate.vercel.app/",
    projectType: "Major Project",
    description: `XESTATE is a comprehensive real estate web application offering features like property search, listing, and real-time chat functionality. Built using React, Express, Prisma, and Socket.io, the project showcases:
  
      - A React-based UI developed with Vite, featuring interactive maps using Leaflet and efficient state management with Zustand.
      - Real-time chat functionality enabling users to communicate instantly.
      - Enhanced security measures, including input sanitization and JWT authentication integration, ensuring user data protection.`,
    imgSrc: "/assets/xestate-screenshot.png",
    tag: [
      "React",
      "Express",
      "Prisma",
      "Socket.io",
      "Vite",
      "Leaflet",
      "Zustand",
    ],
  },
  {
    heading: "FORKIFY - Recipe App with Modern JavaScript",
    date: "Jan 10, 2024",
    link: "https://sumanth-forkify.netlify.app/",
    projectType: "Practice Project",
    description: `FORKIFY is a modern JavaScript application that interacts with the Forkify API to fetch and display recipe ingredients. Key features include:
  
      - Utilization of ES6+ features with Parcel for module bundling and Babel for ES5 conversion, ensuring compatibility across all browsers.
      - MVC (Model View Controller) architecture to maintain a clean and organized codebase.
      - Features like recipe search, bookmarking, and adjustable servings, all stored in local storage for persistent user experience.`,
    imgSrc: "/assets/forkify-screenshot.png",
    tag: ["JavaScript", "MVC", "API", "Parcel", "Babel"],
  },
  {
    heading: "MAPTY - Workout Logger with Geolocation and Maps",
    date: "Dec 5, 2023",
    link: "https://sumanth-mapty.netlify.app/",
    projectType: "Practice Project",
    description: `MAPTY is a web application designed to log workouts like running or cycling at the user's desired location, complete with specifications for each workout. Built using advanced JavaScript and the Leaflet library, the app includes:
  
      - Object-Oriented Programming principles applied for a modular and maintainable code structure.
      - Geolocation APIs to fetch and display the user's location on the map.
      - Integration of the Leaflet library and API to display maps, with data stored in local storage for persistent workout logs.`,
    imgSrc: "/assets/mapty-screenshot.png",
    tag: ["JavaScript", "OOP", "Leaflet", "Geolocation", "API"],
  },
];
