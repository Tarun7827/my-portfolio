export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  techStack: string[];
  image?: string[];
  video?: string[];
  platforms?: string[];
  platformLinks?: PlatformLink[];
  company?: string;
  year?: string;
  achievements?: string[];
}

export interface PlatformLink {
  platform: string;
  link: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  projects?: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface About {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  education: Education;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface TechStack {
  category: string;
  technologies: string[];
}

export const aboutData: About = {
  name: "Tarun Kumar",
  title: "Senior Software Engineer",
  summary:
    "AI Powered Senior Software Engineer with 9+ years of experience creating game and app experiences for Android, iOS, PC, and VR platforms. Expertise in C#, JavaScript & TypeScript programming, multiplayer game development, web-socket and RESTful API integration, third-party SDKs, and performance optimization for scalable solutions.",
  email: "tarun7827@gmail.com",
  phone: "+91 7503503956",
  linkedin: "https://www.linkedin.com/in/tarun7827/",
  github: "https://github.com/Tarun7827",
  education: {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Krishna Engineering College, AKTU",
    year: "2011 – 2015",
  },
};

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "Scalable Architectures",
    description:
      "Implemented reusable code structures and modular services, improving maintainability and performance across multiple applications.",
    icon: "🏗️",
  },
  {
    id: "2",
    title: "Performance Optimization",
    description:
      "Reduced crash rates by 35%, load times by 25%, and improved session stability by 40% through profiling and targeted optimizations.",
    icon: "⚡",
  },
  {
    id: "3",
    title: "Mentorship & Leadership",
    description:
      "Guided engineering teams in adopting best practices, improving onboarding processes, and reducing development cycle times.",
    icon: "👥",
  },
  {
    id: "4",
    title: "End-to-End Development",
    description:
      "Spearheaded projects from ideation through deployment, integrating tools such as Jenkins, Git, and automated testing frameworks.",
    icon: "🚀",
  },
  {
    id: "5",
    title: "Cross-Functional Collaboration",
    description:
      "Aligned technical solutions with business priorities alongside product managers, designers, and DevOps.",
    icon: "🤝",
  },
];

export const techStack: TechStack[] = [
  {
    category: "Engines & Frameworks",
    technologies: [
      "Unity 3D",
      "React Native",
      "React.js",
      "Next.js",
      "Node.js",
    ],
  },
  {
    category: "Programming Languages",
    technologies: [
      "C# (Unity, game development)",
      "JavaScript",
      "TypeScript",
      "Java",
      "Kotlin",
    ],
  },
  {
    category: "Platforms",
    technologies: ["Android", "iOS", "PC", "VR (Quest, HTC Vive, GearVR)"],
  },
  {
    category: "Tools",
    technologies: [
      "Cursor",
      "CursorAI",
      "Android Studio",
      "Xcode",
      "Visual Studio",
      "JetBrains Rider",
      "FigmaMCP",
      "Git",
      "Jenkins",
      "JIRA",
      "MCP",
    ],
  },
  {
    category: "Networking",
    technologies: [
      "Web Sockets",
      "Photon Networking",
      "RESTful APIs",
      "Socket.io",
    ],
  },
  {
    category: "Database",
    technologies: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Core Competencies",
    technologies: [
      "Architecture Design",
      "Performance Optimization",
      "CI/CD",
      "Team Leadership",
      "Rapid Prototyping",
      "Agile Development",
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Zupee",
    role: "Senior Software Engineer",
    period: "May 2021 – Present",
    description: [
      "Led the development of Code Architectures and developed systems, improving scalability across all games",
      "Managed the release of complex features for mobile games, ensuring timely delivery and robust performance",
      "Focused on improving user experiences by providing ongoing support and live ops",
      "Developed multiple Prototypes and POCs to evaluate innovative gameplay ideas",
      "Led teams through complete game life cycles for Android and iOS platforms, from concept to release",
      "Built scalable architectures and features to enhance app performance, delivering a smooth and optimized user experience",
      "Collaborated with cross-functional teams to review project specifications and design technology solutions",
    ],
    projects: [
      "Ludo Gold Rush",
      "Tez Rummy",
      "Carrom",
      "Snakes and Ladders Plus",
      "Cricket Tambola",
      "Zupee Khelo Jeeto",
      "Ludo",
      "Zupee Super Over",
    ],
  },
  {
    id: "2",
    company: "Cosm",
    role: "Software Engineer",
    period: "Jan 2020 – May 2021",
    description: [
      "Developed a sports events live streaming app using Unity for Android, iOS, and VR platforms (Oculus Quest/Quest 2, Samsung GearVR, Cardboard)",
      "Contributed to the broadcasting of Tokyo Olympics 2020 in VR by working on social modules, player stats, and other key features",
      "Designed and implemented new features while optimizing various aspects of the app to improve performance",
      "Focused on enhancing user engagement through seamless app functionality and immersive design solutions",
    ],
  },
  {
    id: "3",
    company: "Moonglabs Technologies Pvt Ltd.",
    role: "Unity 3D Game Developer",
    period: "Oct 2018 – Dec 2019",
    description: [
      "Designed and developed a dynamic tournaments module with a highly reusable architecture",
      "Contributed to gameplay enhancements, including new player abilities, game controls, and Dynamic Stadiums",
      "Focused on app optimization and size reduction, ensuring better performance and scalability on Android devices",
      "Coordinated with the team to create plans, set deadlines, and ensure timely delivery of projects",
    ],
    projects: ["Epic Cricket"],
  },
  {
    id: "4",
    company: "Veative Labs Pvt. Ltd.",
    role: "Unity 3D Game Developer",
    period: "Nov 2016 - Oct 2018",
    description: [
      "Developed 20+ VR projects from concept to completion, providing immersive and impactful educational experiences",
      "Led a team of 15–20 developers, ensuring effective collaboration, smooth execution, and timely project delivery",
      "Designed and implemented detailed project plans, clearly communicated deadlines, and maintained a high level of productivity",
      "Mentored cross-functional teams, offering technical guidance and resolving complex issues to drive project success",
      "Worked extensively on various VR devices, including Android, Oculus Quest, HTC Vive, GearVR, Cardboard, and PICO",
    ],
    projects: [
      "Human Heart",
      "Simple Machines",
      "Relative Motion",
      "The Human Brain",
      "Virtual Reality in Education",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "shopkart-shopping-app",
    title: "ShopKart - Shopping App",
    shortDescription:
      "A shopping experience for users to browse and buy products.",
    detailedDescription:
      "ShopKart is a shopping experience for users to browse and buy products. It is a fully responsive shopping app with a modern design and a user-friendly interface.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "CursorAI",
      "Supabase",
      "MongoDB",
      "Netlify",
      "RESTful APIs",
    ],
    platforms: ["Web"],
    platformLinks: [
      {
        platform: "Github",
        link: "https://github.com/Tarun7827/product-catalogue",
      },
      {
        platform: "Website",
        link: "https://shopkart-demo.netlify.appS",
      },
    ],
    company: "Self",
    achievements: [
      "Implemented a fully responsive shopping app with a modern design and a user-friendly interface",
      "Implemented a RESTful API for the shopping app",
      "Implemented a Supabase authentication for the shopping app",
      "Implemented a MongoDB for products listing and PostgreSQL database for orders and transactions management",
      "Implemented a Payment Gateway integration for seamless transactions",
    ],
  },
  {
    id: "tez-rummy",
    title: "Tez Rummy",
    shortDescription:
      "A real-money rummy game with real-time multiplayer and tournament systems.",
    detailedDescription:
      "Tez Rummy is a real-money rummy game with real-time multiplayer and tournament systems. It features a competitive rummy game. The app also includes a KYC and Wallet system for secure and seamless gameplay.",
    techStack: [
      "React Native",
      "JavaScript",
      "TypeScript",
      "CursorAI",
      "FigmaMCP",
      "RESTful APIs",
      "Socket.io",
      "Android Studio",
      "Xcode",
    ],
    platforms: ["Android", "iOS"],
    platformLinks: [
      {
        platform: "Android",
        link: "https://www.tezrummy.in/",
      },
      {
        platform: "iOS",
        link: "https://apps.apple.com/in/app/tez-rummy-online-card-games/id6738627101",
      },
    ],
    company: "Zupee",
    year: "2021 - Present",
    achievements: [
      "Designed reusable tournament module",
      "Implemeented KYC and Wallet system",
      "Integrated secure payment systems",
      "UI optimization and performance improvements for enhanced user experience",
    ],
  },
  {
    id: "ludo-gold-rush",
    title: "Ludo Gold Rush",
    shortDescription:
      "A Free to Play multiplayer Ludo game with advanced matchmaking and live ops.",
    detailedDescription:
      "Ludo Gold Rush is a multiplayer Free to Play Ludo Game with cool features like kingdom building and upgrading, power-ups, daily rewards, and more",
    techStack: [
      "Unity 3D",
      "C#",
      "Socket.io",
      "RESTful APIs",
      "Android Studio",
    ],
    platforms: ["Android", "iOS"],
    video: [
      "https://drive.google.com/file/d/1onWQaQfqQv-69v0U5zqWqFALLZJGBF6n/preview",
    ],
    company: "Zupee",
    year: "2021 - Present",
    achievements: [
      "Implemented ludo game logic and scalable architecture for core feature of power-ups",
      "Led the implementation of socket and event based architecture for real-time multiplayer",
      "Optimized App crash rates and build size",
    ],
  },
  {
    id: "zupee-super-over",
    title: "Zupee Super Over",
    shortDescription:
      "Fast-paced cricket game based on the exciting Super Over format.",
    detailedDescription:
      "Developed Zupee Super Over, a rapid-fire cricket game that captures the thrill of cricket's Super Over format. In the game both user and opponent choose a score desplayed button. User with higher score wins the game.",
    techStack: [
      "React Native",
      "JavaScript",
      "TypeScript",
      "CursorAI",
      "RESTful APIs",
      "Socket.io",
      "Android Studio",
    ],
    platforms: ["Android"],
    platformLinks: [
      {
        platform: "Android",
        link: "https://www.zupee.com/super-over/",
      },
    ],
    video: [
      "https://drive.google.com/file/d/147fzxP3OiJB9Ez_k70ciV1NCaIicP_mT/preview",
    ],
    company: "Zupee",
    year: "2021 - Present",
    achievements: [
      "Led the entire development of the game from ideation to release",
      "Implemented intuitive controls, and competitive multiplayer handling",
      "Implemented game logic for Super Over and score selection",
      "Optimized app performance and crash rates",
      "Implemented UI optimization and performance improvements for enhanced user experience",
    ],
  },
  {
    id: "carrom-ninja",
    title: "Carrom Ninja",
    shortDescription:
      "A fun and challenging carrom game with real-time multiplayer.",
    detailedDescription:
      "Carrom Ninja is a fun and challenging carrom game with real-time multiplayer. It features a competitive carrom game.",
    techStack: [
      "Unity 3D",
      "C#",
      "Socket.io",
      "RESTful APIs",
      "Android Studio",
    ],
    platforms: ["Android"],
    platformLinks: [
      {
        platform: "Android",
        link: "https://www.zupee.com/carrom-ninja/",
      },
    ],
    video: [
      "https://drive.google.com/file/d/1BiuSZOIzBXLTlwYZBmOFLFdCa25C_V0L/preview",
    ],
    company: "Zupee",
    year: "2021 - Present",
    achievements: [
      "Led the entire development of the game from ideation to release",
      "Implemented intuitive controls for striker movement, power for shot",
      "Implemented game logic for Carrom game play",
      "Developed a Headless unity build that validates user moves and token movements and scores to make it hack proof",
      "Optimized app performance and crash rates",
      "Implemented UI optimization and performance improvements for enhanced user experience",
    ],
  },
  {
    id: "snakes-and-ladders-plus",
    title: "Snakes and Ladders Plus",
    shortDescription:
      "A fun and challenging snakes and ladders game with real-time multiplayer.",
    detailedDescription:
      "Snakes and Ladders Plus is a fun and challenging board game with real-time multiplayer. It features a competitive snakes and ladders game.",
    techStack: [
      "React Native",
      "JavaScript",
      "TypeScript",
      "CursorAI",
      "FigmaMCP",
      "RESTful APIs",
      "Socket.io",
      "Android Studio",
    ],
    platforms: ["Android"],
    platformLinks: [
      {
        platform: "Android",
        link: "https://www.zupee.com/snakes-and-ladders-plus/",
      },
      {
        platform: "iOS",
        link: "https://apps.apple.com/in/app/zupee-play-ludo-watch-tv/id1576310504",
      },
    ],
    video: [
      "https://drive.google.com/file/d/1b12bNFpDHAbw9JHnCw_YYikC3VB6bm1V/preview",
    ],
    company: "Zupee",
    year: "2021 - Present",
    achievements: [
      "Implemented game logic for Snakes and Ladders game play",
      "Implemented intuitive controls for player movement and dice roll",
      "Implemented UI optimization and performance improvements for enhanced user experience",
      "Developed features like custom dice, ladders, snakes, and more",
      "Optimized app performance and crash rates",
    ],
  },
  {
    id: "cosm-vr-streaming",
    title: "Sports Events Streaming App",
    shortDescription:
      "Immersive VR app for live sports streaming across multiple VR platforms.",
    detailedDescription:
      "Built a comprehensive VR sports streaming application supporting multiple VR platforms including Oculus Quest/Quest 2, Samsung GearVR, and Cardboard. Contributed to broadcasting Tokyo Olympics 2020 in VR, implementing social modules, player stats, and immersive viewing experiences.",
    techStack: ["Unity 3D", "C#", "VR SDKs", "Android Studio", "Xcode"],
    platforms: [
      "Android",
      "iOS",
      "Oculus Quest",
      "Quest 2",
      "Samsung GearVR",
      "Cardboard",
      "PICO",
    ],
    company: "Cosm",
    year: "2020 - 2021",
    achievements: [
      "Implemened core featured for broadcasting Tokyo Olympics 2020 in VR",
      "Worked on UIs for stats, camera controls, and more",
      "Implemented social features for shared viewing experiences",
      "Optimized performance across multiple VR platforms",
    ],
  },
  {
    id: "epic-cricket",
    title: "Epic Cricket",
    shortDescription:
      "Feature-rich 3D cricket game with dynamic tournaments and stadiums.",
    detailedDescription:
      "Developed Epic Cricket, a comprehensive 3D cricket game featuring dynamic tournaments, player abilities, and dynamic stadiums. Created a highly reusable tournament architecture that allowed new tournament types through simple configuration changes.",
    techStack: ["Unity 3D", "C#", "Android Studio"],
    platforms: ["Android"],
    platformLinks: [
      {
        platform: "Android",
        link: "https://play.google.com/store/apps/details?id=com.moonglabs.epiccricket",
      },
    ],
    company: "Moonglabs Technologies",
    year: "2018 - 2019",
    achievements: [
      "Designed and implemented modular tournament system",
      "Implemented player abilities and animations for different cricket shots",
      "Implemented dynamic stadium generation with asset bundles",
      "Optimized app size and performance for Android",
      "Implemented UI optimization and performance improvements for enhanced user experience",
    ],
  },
  {
    id: "vr-education-human-heart",
    title: "Human Heart VR Simulation",
    shortDescription:
      "Interactive VR educational experience exploring human heart anatomy.",
    detailedDescription:
      "Created an immersive VR educational simulation allowing students to explore the human heart in 3D. Developed interactive elements for understanding heart anatomy, blood flow, and cardiovascular system in an engaging way.",
    techStack: ["Unity 3D", "C#", "VR SDKs", "Oculus", "HTC Vive", "GearVR"],
    platforms: [
      "Android",
      "Oculus Quest",
      "HTC Vive",
      "GearVR",
      "Cardboard",
      "PICO",
    ],
    company: "Veative Labs",
    year: "2016 - 2018",
  },
  {
    id: "vr-education-brain",
    title: "Human Brain VR Simulation",
    shortDescription:
      "Educational VR experience for exploring brain structure and functions.",
    detailedDescription:
      "Created an immersive VR educational simulation allowing students to explore the human brain in 3D. Developed interactive elements for understanding brain anatomy, blood flow, and nervous system in an engaging way.",
    techStack: ["Unity 3D", "C#", "VR SDKs", "Oculus", "HTC Vive", "GearVR"],
    platforms: [
      "Android",
      "Oculus Quest",
      "HTC Vive",
      "GearVR",
      "Cardboard",
      "PICO",
    ],
    company: "Veative Labs",
    year: "2016 - 2018",
  },
  {
    id: "vr-education-physics",
    title: "Simple Machines & Relative Motion VR",
    shortDescription:
      "Physics education VR simulations for understanding mechanics.",
    detailedDescription:
      "Created multiple VR simulations for teaching physics concepts including simple machines and relative motion. Designed interactive experiments allowing students to manipulate objects and observe physics principles in action.",
    techStack: ["Unity 3D", "C#", "VR SDKs", "Oculus", "HTC Vive"],
    platforms: [
      "Android",
      "Oculus Quest",
      "HTC Vive",
      "GearVR",
      "Cardboard",
      "PICO",
    ],
    company: "Veative Labs",
    year: "2016 - 2018",
  },
];
