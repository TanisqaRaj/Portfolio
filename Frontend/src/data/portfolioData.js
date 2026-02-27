// Portfolio data - customize this with your own information

export const personalInfo = {
  name: "Tanisqa Raj",
  title: "Full Stack Developer",
  tagline: "Designing with Joy, Developing with Precision.",
  bio: "I am a B.Tech Computer Science and Engineering student at Maharishi Markandeshwar Deemed to Be University, Haryana, maintaining a CGPA of 8.85. I have a strong interest in full-stack development, real-time systems, and scalable backend architecture.\n\nI enjoy building impactful web applications using the MERN stack, Spring Boot, and modern technologies. From developing healthcare platforms to creating real-time collaborative applications using WebRTC and Socket.IO, I focus on writing clean, maintainable code and designing smooth user experiences.\n\nI am passionate about solving real-world problems through technology and continuously exploring AI-driven and performance-optimized solutions to grow as a developer.",
  email: "rajtanisqa@example.com",
  phone: "+91 9523709895",
  location: "India",
  resumeLink: "/resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/TanisqaRaj",
  linkedin: "https://www.linkedin.com/in/tanisqa-raj-0a3280270/",
  portfolio: "https://yourportfolio.com",
};

export const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "from-primary-orange to-primary-red",
    items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "from-primary-blue to-cartoon-purple",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"]
  },
  {
    category: "Tools & Others",
    icon: "🛠️",
    color: "from-primary-yellow to-primary-orange",
    items: ["Git", "GitHub", "VS Code", "Postman",]
  },
  {
    category: "Soft Skills",
    icon: "💡",
    color: "from-cartoon-purple to-primary-red",
    items: ["Problem Solving", "Team Collaboration", "Communication", "Time Management" ,"Adaptability"]
  }
];

export const projects = [
  {
    id: 1,
    title: "MediMentor - Healthcare Platform",
    description:
      "A full-stack healthcare platform designed to streamline online and offline appointment booking, authentication, and medical assistance. Integrated map services allow users to locate clinics and hospitals efficiently. Built using MERN stack with secure authentication and scalable backend architecture.",
    image: "🏥",
    tags: ["React", "Node.js", "MongoDB", "Express", "REST API" , "JWT Authentication" ,"Map Integration" , "Socket.IO"],
    liveLink: "https://medimentor.netlify.app/",
    githubLink: "https://github.com/TanisqaRaj/Medimentor",
    color: "from-primary-blue to-primary-red"
  },
  {
    id: 2,
    title: "Bageasy - AI Travel Assistant",
    description:
      "An AI-powered travel companion that suggests essential items to pack based on destination and trip details. Integrated AI APIs to generate smart, contextual recommendations for travelers.",
    image: "🎒",
    tags: ["React", "Node.js", "Gemini API", "MongoDB"],
    liveLink: "https://bag-easy.vercel.app/",
    githubLink: "https://github.com/TanisqaRaj/Bageasy",
    color: "from-primary-blue to-cartoon-purple"
  },
  {
    id: 3,
    title: "S2 E-Commerce Website",
    description:
      "A live freelance e-commerce website for construction materials. Features product management, cart functionality, authentication, and responsive UI design tailored to client requirements.",
    image: "🛍️",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redis" , "Email Notifications" , "Socket.IO"],
    liveLink: "https://www.bcgsmart.in/",
    githubLink: "https://github.com/anuragkumar1903/s2-services",
    color: "from-primary-yellow to-primary-orange"
  },
  {
    id: 4,
    title: "Animated Portfolio Website",
    description:
      "A modern, fully responsive personal portfolio built with React, Tailwind CSS, and Framer Motion. Features smooth animations, playful UI, and optimized performance.",
    image: "🎨",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://portfolio-five-kohl-m5932efrjx.vercel.app/",
    githubLink: "https://github.com/TanisqaRaj/Portfolio",
    color: "from-cartoon-purple to-primary-red"
  }
];

export const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "VI Soft Tech",
    duration: "May 2024",
    description: "Developed responsive web applications and improved user experience."
  },
  {
    role: "Web Developer Intern",
    company: "Startup Inc",
    duration: "2022 - 2023",
    description: "Developed features for client projects and learned modern web technologies."
  }
];

// Education data
export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    university: "Maharishi Markandeshwar Deemed to Be University",
    location: "Haryana, India",
    duration: "2023 - 2027",
    cgpa: "8.85",
    description: "Focused on full-stack development, data structures, algorithms, and software engineering principles."
  },
  {
    degree: "Diploma in Computer Science and Engineering",
    university: "Government Womens Polytechnic ",
    location: "Patna, Bihar",
    duration: "2020 - 2023",
    cgpa: "87%",
    description: "Computer Science stream with focus on Computer Science."
  }
];

// Internship data
export const internships = [
  {
    company: "VI Soft Tech",
    role: "Full Stack Developer Intern",
    duration: "May 2024 - July 2024",
    location: "Remote",
    responsibilities: [
      "Developed responsive web applications using React and Node.js",
      "Implemented RESTful APIs and integrated with MongoDB database",
      "Collaborated with design team to improve user experience",
      "Optimized application performance and reduced load time by 30%",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Git", "REST APIs"],
    color: "from-primary-orange to-primary-red"
  },
  {
    company: "NIELIT Patna",
    role: "Web Development Intern",
    duration: "March 2022 - Apr 2022",
    location: "Patna, Bihar",
    responsibilities: [
      "Developed a responsive college website during my internship using HTML, CSS, and JavaScript.",
      "Documented code and created technical documentation"
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    color: "from-primary-blue to-cartoon-purple"
  }
];

// Certifications data
export const certifications = [
  {
    name: "Smart Bihar Hackathon ",
    organization: "IIT Patna",
    year: "2023",
    certificateLink: "#",
    description: "Participated in the Smart Bihar Hackathon organized by IIT Patna, where I developed an innovative solution to address a real-world problem. I developed an Automatic Gas Detection System. Collaborated with a team to design and implement a functional prototype, showcasing my skills in problem-solving, teamwork, and technical expertise.",
    color: "from-primary-orange to-primary-red"
  },
  {
    name: "Smart India Hackathon",
    organization: "Government of India",
    year: "2025",
    certificateLink: "#",
    description: "Participated in the Smart India Hackathon organized by the Government of India.",
    color: "from-primary-blue to-cartoon-purple"
  },
  // {
  //   name: "Node.js Backend Development",
  //   organization: "LinkedIn Learning",
  //   year: "2023",
  //   certificateLink: "#",
  //   description: "Backend development with Node.js, Express, and MongoDB",
  //   color: "from-primary-yellow to-primary-orange"
  // },
  // {
  //   name: "JavaScript Algorithms and Data Structures",
  //   organization: "freeCodeCamp",
  //   year: "2023",
  //   certificateLink: "#",
  //   description: "Problem-solving and algorithmic thinking with JavaScript",
  //   color: "from-cartoon-purple to-primary-red"
  // }
];
