export const personalInfo = {
  name: "Amit Vaibhav Tiwari",
  logoText: "Amit.",
  imageUrl: "/home_img.jpg",
  //   visible on home page
  shortBio:
    "Software Developer working primarily with JavaScript/TypeScript and Python specializing in Full-Stack development. I've gained experience in building and maintaining large-scale projects from scratch, contributing across the Frontend, Backend, and Deployment. Proficient in modern technologies such as React, Next.js, Node.js, Express.js, PostgreSQL, GraphQL, Docker, and many more.",

  //   visible on about page
  detailedBio: [
    "I'm Amit, a Full Stack Engineer who build things for the web. I have hands-on experience with technologies like React, Next.js, Node.js, Express.js, PostgreSQL, GraphQL, Docker, and many more.",

    "I've built and maintained large scale applications and have worked with a wide range of technologies across the stack. I'm also a big fan of automating everyting around me and love to explore new technologies.",

    "When I'm not writing code or hunting down bugs, you'll probably find me playing basketball, scrolling memes, or catching up on anime.",
  ],
  socials: [
    {
      id: 1,
      name: "LinkedIn",
      link: "https://in.linkedin.com/in/amit-vaibhav-tiwari-23967b306",
    },
    {
      id: 2,
      name: "X",
      link: "https://x.com/im_avt",
    },
    {
      id: 3,
      name: "Mail",
      link: "mailto:amitvaibhavtiwari@gmail.com",
    },
    {
      id: 4,
      name: "GitHub",
      link: "https://github.com/amitVaibhavTiwari",
    },
    {
      id: 5,
      name: "Instagram (I rarely open)",
      link: "https://www.instagram.com/awesome_avt",
    },
  ],
  //   for metadata (help in SEO)
  metadataDescription: "Portfolio Website for Amit Vaibhav Tiwari",
  metadataKeywords: [
    "Amit Vaibhav Tiwari",
    "Amit Tiwari",
    "Lucknow",
    "Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Amit",
    "Developer",
    "Web Developer",
    "Software Engineer",
    "Resume",
  ],
};

export const education = [
  {
    id: 1,
    college: "DSMNRU Lucknow",
    degree: "B.Tech in Computer Science",
    duration: "2022-2026",
    points: [
      "I was an active member of the college's technology and programming club, TechTranzit, and participated in several events and programming contests.",
    ],
  },
  {
    id: 2,
    college: "Pioneer Montessori Inter College",
    degree: "Intermediate",
    duration: "2020-2022",
    points: [
      "I completed my schooling at Pioneer Montessori Inter College in Lucknow, with core subjects including Mathematics, Physics, and Computer Science.",
    ],
  },
];

// if u have no experience just keep the array empty and component will not render
export const experiences: Experience[] = [
  {
    id: 1,
    company: "Brimo Software Solutions",
    role: "Full Stack Developer",
    duration: "June 2024 - Present",
    points: [
      "Worked with tech stack including React, Next.js, Node.js, GraphQL, and PostgreSQL.",
      "Maintained and enhanced the frontend of enterprise-grade e-commerce web application using Next.js and GraphQL APIs. Resolved critical bugs, improved load times, and optimized the user experience across the platform.",
      "Actively contributed to the initial development of Retainley, an advanced Shopify plug-and-play solution designed to improve customer retention through loyalty rewards and engagement programs. The platform is trusted by major D2C brands such as Zouk, Perfora Care, and Soulfower.",
      "Developed a fully functional admin dashboard using React and Material UI, enabling clients to customize product behavior according to their buisness needs and access various metrics related to orders, revenue, and customer engagement.",
      "Developed key features on both the frontend and backend parts of Retainley. Created RESTful APIs using Node.js and PostgreSQL for functionalities such as referral system, gamified user interactions (spin wheels, scratch cards), cashback programs, coupon rewards, and birthday, anniversary based offers.",
      "Created webhooks for various events on shopify related to customers and orders to work in real time with real time customer data.",
    ],
  },
];

export const skills = [
  {
    key: "Frontend",
    value:
      "React, Next.js, Redux Toolkit, Tailwind CSS, SCSS, Material UI, Bootstrap, Figma, HTML5, CSS3",
  },
  {
    key: "Backend",
    value: "Node.js, Express.js, GraphQL, REST APIs",
  },
  {
    key: "Database",
    value: "PostgreSQL, MongoDB, MySQL, SQLite",
  },
  {
    key: "Languages",
    value: "Javascript, TypeScript, Python, SQL, Java",
  },
  {
    key: "Tools and Technologies",
    value: "Git, GitHub, Docker, Postman, Jira, Firebase",
  },
];

// if u don't want this section just keep the array empty and component will not render
export const certificates: Certificates[] = [
  {
    id: 1,
    title: "Problem Solving - HackerRank",
    date: "April 2025",
    link: "https://www.hackerrank.com/certificates/b4f59117a44d",
  },
];

// if u're building some cool project but don't have anything to show now, just keep the array empty (a fallback text will be shown on project page)
export const projects: Project[] = [
  //   {
  //     title: "Portfolio Template",
  //     points: [
  //       "A simple portfolio website template specially made for developers. (the one you've visited now)",
  //       "Built with Next.js, Tailwind CSS, and Framer Motion.",
  //       "Includes a details section, projects showcase, resume and a code snippet section.",
  //     ],
  //     link: "https://github.com/amitVaibhavTiwari/Portfolio-Website",
  //   },
];

type Project = {
  title: string;
  points: string[];
  link: string;
};

type Certificates = {
  id: number;
  title: string;
  date: string;
  link: string;
};

type Experience = {
  id: number;
  company: string;
  role: string;
  duration: string;
  points: string[];
};
