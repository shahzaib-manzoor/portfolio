import ayla from '/public/image/ayla.jpg';
import Quantum from '/public/image/Quantum.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Quantum (AI-Powered Data Project)',
        description: "Led development of a big data project involving data scraping from multiple websites. Architected a RESTful API using Nest.js, PostgreSQL, and OpenAI API. Deployed on AWS EC2 with PM2 and Nginx. Utilized Zod for validation and developed a cron job for task scheduling. Implemented frontend with React, Redux, and React Hook Forms. Built a generic query builder for dynamic data retrieval.",
        tools: ['Node.js', 'PostgreSQL', 'OpenAI API', 'AWS (EC2, S3)', 'Nest.js', 'Zod', 'React', 'Redux', 'Material UI', 'Cronjob', 'JWT'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: Quantum,
    },
    {
        id: 2,
        name: 'Packrat (Cross-Platform Mobile App)',
        description: 'Developed a cross-platform mobile app, Packrat, using React Native, Expo, and Firebase. Implemented backend with Hono and Drizzle ORM. Integrated Tamagui and Solito for enhanced client-side functionality. Utilized Zod for data validation, and React Native Maps for map features. Setup CI/CD workflows with GitHub Actions.',
        tools: ['React Native', 'Expo', 'Firebase', 'Hono', 'Drizzle ORM', 'Tamagui', 'Solito', 'Zod', 'React Native Maps', 'GitHub Actions'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Sizzld (Web3 Gaming Platform)',
        description: 'Led a team in developing Sizzld, a web3 gaming platform. Utilized React, Material UI, and React Hook Forms for frontend, and Express, MongoDB, and cronjobs for backend. Integrated Stripe for payments and implemented a complex referral and lottery system for rewards.',
        tools: ['React', 'Material UI', 'React Hook Forms', 'Express', 'TypeScript', 'MongoDB', 'Stripe', 'Cronjob', 'JWT'],
        code: '',
        role: 'Team Lead Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Soccerbx (Sports Social Media Platform)',
        description: "Contributed to the development of Soccerbx, a sports social media platform. Utilized Next.js, Material UI, and Redux with server-side rendering. Implemented a backend architecture with Node.js and Express. Integrated a text editor for sports blogs management and a calendar for event scheduling.",
        tools: ['Next.js', 'Material UI', 'Redux', 'Text Editor', 'Calendar'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id:5,
        name: 'Talk CMS (Content Management System)',
        description:"Architected a content management system from scratch using React for frontend and Node.js for backend, integrating Gmail APIs for communication.",
        tools: ['React', 'Node.js', 'Gmail API'],
        role: 'Full Stack Developer',
    },
    {
        id:6,
        name:"Orderingo (Food Delivery App)", 
        description:"Developed Orderingo, a food delivery app using React, Material UI, and Apollo Client for frontend, and GraphQL for backend. Integrated Google Maps for location tracking and Stripe for payments.",
        tools: ['React', 'Material UI', 'Apollo Client', 'GraphQL', 'Google Maps', 'Stripe'],
        role: 'Full Stack Developer',
    },
    {
        id:7,
        name:"Maat'inc (E-commerce Platform)",
        description:"Contributed to Maat'inc, an e-commerce platform, using React, Material UI, and Apollo Client for frontend, and GraphQL for backend. Integrated Google Maps for location tracking and Stripe for payments.",
        tools: ['React', 'Material UI', 'Apollo Client', 'GraphQL', 'Google Maps', 'Stripe'],
        role: 'Full Stack Developer',
    },{
        id:8,
        name :"Portfolio (Developer Portfolio)",
        description:"Designed and developed a personal portfolio using Next.js, Tailwind CSS, and Framer Motion. Integrated Google Tag Manager for analytics and React Toastify for notifications.",
        tools: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Google Tag Manager', 'React Toastify'],
        role: 'Frontend Developer',
    }
];



// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: Quantum,
// },