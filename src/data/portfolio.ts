export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  techStack: string[];
  image?: string[];
  video?: string[];
  platforms?: string[];
  company?: string;
  year?: string;
  achievements?: string[];
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

export const aboutData = {
  name: "Tarun Kumar",
  title: "Senior Software Engineer",
  summary: "Senior Software Engineer with 9+ years of experience creating game and app experiences for Android, iOS, PC, and VR platforms. Expertise in C#, JavaScript & TypeScript programming, multiplayer game development, web-socket and RESTful API integration, third-party SDKs, and performance optimization for scalable solutions.",
  email: "tarun7827@gmail.com",
  phone: "+91 7503503956",
  linkedin: "https://www.linkedin.com/in/tarun7827/",
  education: {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Krishna Engineering College, AKTU",
    year: "2011–2015"
  }
};

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "Scalable Architectures",
    description: "Implemented reusable code structures and modular services, improving maintainability and performance across multiple applications.",
    icon: "🏗️"
  },
  {
    id: "2",
    title: "Performance Optimization",
    description: "Reduced crash rates by 35%, load times by 25%, and improved session stability by 40% through profiling and targeted optimizations.",
    icon: "⚡"
  },
  {
    id: "3",
    title: "Mentorship & Leadership",
    description: "Guided engineering teams in adopting best practices, improving onboarding processes, and reducing development cycle times.",
    icon: "👥"
  },
  {
    id: "4",
    title: "End-to-End Development",
    description: "Spearheaded projects from ideation through deployment, integrating tools such as Jenkins, Git, and automated testing frameworks.",
    icon: "🚀"
  },
  {
    id: "5",
    title: "Cross-Functional Collaboration",
    description: "Aligned technical solutions with business priorities alongside product managers, designers, and DevOps.",
    icon: "🤝"
  }
];

export const techStack = {
  "Engines & Frameworks": ["Unity 3D", "React Native", "React.js", "Next.js", "Node.js"],
  "Programming Languages": ["C# (Unity, game development)", "JavaScript", "TypeScript", "Java", "Kotlin"],
  "Platforms": ["Android", "iOS", "PC", "VR (Quest, HTC Vive, GearVR)"],
  "Tools": ["Cursor", "Visual Studio", "JetBrains Rider", "Android Studio", "Git", "Jenkins", "JIRA"],
  "Networking": ["Web Sockets", "Photon Networking", "RESTful APIs", "Socket.io"],
  "Database": ["MySQL", "PostgreSQL", "MongoDB"],
  "Core Competencies": ["Architecture Design", "Performance Optimization", "CI/CD", "Team Leadership", "Rapid Prototyping", "Agile Development"]
};

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
      "Collaborated with cross-functional teams to review project specifications and design technology solutions"
    ],
    projects: ["Ludo Gold Rush", "Tez Rummy", "Cricket Tambola", "Zupee Khelo Jeeto", "Ludo", "Zupee Super Over", "Carrom", "Snakes and Ladders Plus"]
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
      "Focused on enhancing user engagement through seamless app functionality and immersive design solutions"
    ]
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
      "Coordinated with the team to create plans, set deadlines, and ensure timely delivery of projects"
    ],
    projects: ["Epic Cricket"]
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
      "Worked extensively on various VR devices, including Android, Oculus Quest, HTC Vive, GearVR, Cardboard, and PICO"
    ],
    projects: ["Human Heart", "Simple Machines", "Relative Motion", "The Human Brain", "Virtual Reality in Education"]
  }
];

export const projects: Project[] = [
  {
    id: "ludo-gold-rush",
    title: "Ludo Gold Rush",
    shortDescription: "A real-money multiplayer Ludo game with advanced matchmaking and live ops.",
    detailedDescription: "Led the development of Ludo Gold Rush, a flagship mobile game featuring real-money gameplay, advanced matchmaking algorithms, and robust live operations. Implemented scalable architecture for handling thousands of concurrent players with optimized performance and minimal crash rates.",
    techStack: ["Unity 3D", "C#", "Socket.io", "RESTful APIs", "Android Studio", "Xcode"],
    platforms: ["Android", "iOS"],
    company: "Zupee",
    year: "2021-Present",
    achievements: [
      "Reduced crash rates by 35% through profiling and optimization",
      "Improved load times by 25%",
      "Implemented real-time multiplayer with Photon Networking"
    ]
  },
  {
    id: "tez-rummy",
    title: "Tez Rummy",
    shortDescription: "Real-money rummy game with sophisticated AI and tournament systems.",
    detailedDescription: "Developed Tez Rummy, a competitive rummy game featuring sophisticated AI opponents, tournament systems, and real-money gameplay. Built modular architecture for easy feature additions and maintained high performance across Android and iOS platforms.",
    techStack: ["React Native", "JavaScript", "TypeScript", "RESTful APIs", "Socket.io", "Android Studio", "Xcode"],
    platforms: ["Android", "iOS"],
    company: "Zupee",
    year: "2021-Present",
    achievements: [
      "Designed reusable tournament module",
      "Implemented complex game logic with optimal performance",
      "Integrated secure payment systems"
    ]
  },
  {
    id: "cricket-tambola",
    title: "Cricket Tambola",
    shortDescription: "Innovative cricket-themed tambola game combining sports and traditional gaming.",
    detailedDescription: "Created Cricket Tambola, a unique fusion of cricket and traditional tambola (bingo) gameplay. Developed engaging mechanics that appeal to cricket enthusiasts while maintaining the excitement of tambola, with real-time multiplayer capabilities.",
    techStack: ["Unity 3D", "C#", "Socket.io", "Android Studio"],
    platforms: ["Android"],
    company: "Zupee",
    year: "2021-Present"
  },
  {
    id: "zupee-super-over",
    title: "Zupee Super Over",
    shortDescription: "Fast-paced cricket game based on the exciting Super Over format.",
    detailedDescription: "Developed Zupee Super Over, a rapid-fire cricket game that captures the thrill of cricket's Super Over format. Implemented intuitive controls, realistic physics, and competitive multiplayer modes with leaderboards.",
    techStack: ["Unity 3D", "C#", "Socket.io", "Android Studio"],
    platforms: ["Android"],
    company: "Zupee",
    year: "2021-Present"
  },
  {
    id: "cosm-vr-streaming",
    title: "Sports Events Streaming App",
    shortDescription: "Immersive VR app for live sports streaming across multiple VR platforms.",
    detailedDescription: "Built a comprehensive VR sports streaming application supporting multiple VR platforms including Oculus Quest/Quest 2, Samsung GearVR, and Cardboard. Contributed to broadcasting Tokyo Olympics 2020 in VR, implementing social modules, player stats, and immersive viewing experiences.",
    techStack: ["Unity 3D", "C#", "VR SDKs", "Android Studio", "Xcode"],
    platforms: ["Android", "iOS", "Oculus Quest", "Quest 2", "Samsung GearVR", "Cardboard", "PICO"],
    company: "Cosm",
    year: "2020-2021",
    achievements: [
      "Successfully broadcast Tokyo Olympics 2020 in VR",
      "Implemented social features for shared viewing experiences",
      "Optimized performance across multiple VR platforms"
    ]
  },
  {
    id: "epic-cricket",
    title: "Epic Cricket",
    shortDescription: "Feature-rich cricket game with dynamic tournaments and stadiums.",
    detailedDescription: "Developed Epic Cricket, a comprehensive cricket game featuring dynamic tournaments, player abilities, and dynamic stadiums. Created a highly reusable tournament architecture that allowed new tournament types through simple configuration changes.",
    techStack: ["Unity 3D", "C#", "Android Studio"],
    platforms: ["Android"],
    company: "Moonglabs Technologies",
    year: "2018-2019",
    achievements: [
      "Designed modular tournament system",
      "Implemented dynamic stadium generation",
      "Optimized app size and performance for Android"
    ]
  },
  {
    id: "vr-education-human-heart",
    title: "Human Heart VR Simulation",
    shortDescription: "Interactive VR educational experience exploring human heart anatomy.",
    detailedDescription: "Created an immersive VR educational simulation allowing students to explore the human heart in 3D. Developed interactive elements for understanding heart anatomy, blood flow, and cardiovascular system in an engaging way.",
    techStack: ["Unity 3D", "C#", "VR SDKs", "Oculus", "HTC Vive", "GearVR"],
    platforms: ["Android", "Oculus Quest", "HTC Vive", "GearVR", "Cardboard", "PICO"],
    company: "Veative Labs",
    year: "2016-2018"
  },
  {
    id: "vr-education-brain",
    title: "The Human Brain VR",
    shortDescription: "Educational VR experience for exploring brain structure and functions.",
    detailedDescription: "Developed an interactive VR simulation for understanding the human brain's structure and functions. Implemented detailed 3D models, interactive learning modules, and engaging educational content for students.",
    techStack: ["Unity 3D", "C#", "VR SDKs", "Oculus", "HTC Vive", "GearVR"],
    platforms: ["Android", "Oculus Quest", "HTC Vive", "GearVR", "Cardboard", "PICO"],
    company: "Veative Labs",
    year: "2016-2018"
  },
  {
    id: "vr-education-physics",
    title: "Simple Machines & Relative Motion VR",
    shortDescription: "Physics education VR simulations for understanding mechanics.",
    detailedDescription: "Created multiple VR simulations for teaching physics concepts including simple machines and relative motion. Designed interactive experiments allowing students to manipulate objects and observe physics principles in action.",
    techStack: ["Unity 3D", "C#", "VR SDKs", "Oculus", "HTC Vive"],
    platforms: ["Android", "Oculus Quest", "HTC Vive", "GearVR", "Cardboard", "PICO"],
    company: "Veative Labs",
    year: "2016-2018",
    achievements: [
      "Developed 20+ VR educational projects",
      "Led team of 15-20 developers",
      "Ensured cross-platform VR compatibility"
    ]
  }
];
