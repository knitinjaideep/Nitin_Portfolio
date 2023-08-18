import {
    backend,
    frontend,
    devops,
    design,
    pb,
    intuit,
    sagitec,
    igt,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "System Design",
      icon: design,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "DevOps",
      icon: devops
    },

  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Intuit",
      icon: intuit,
      iconBg: "#383E56",
      date: "January 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "International Game Technology",
      icon: igt,
      iconBg: "#E6DEDD",
      date: "October 2021 - January 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Technical Analyst",
      company_name: "Sagitec Solutions LLC",
      icon: sagitec,
      iconBg: "#383E56",
      date: "August 2016 - October 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Pitney Bowes Inc.",
      icon: pb,
      iconBg: "#E6DEDD",
      date: "Jan 2016 - June 2016",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  export { services, experiences };