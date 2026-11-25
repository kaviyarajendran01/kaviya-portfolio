import { Instagram } from "lucide-react";

export const profile = {
  name: 'Kaviya R',
  location: 'Salem, Tamil Nadu, India',
  email: 'rkaviya9297@gmail.com',
  phone: '+91 9487459297',

  linkedin:
    'https://www.linkedin.com/in/kaviya-rajendran1304',

  github:
    'https://github.com/kaviyarajendran01/',

  instagram:
  'https://www.instagram.com/kavi_5451/',

  heroHeadline:
    'Computer Science Graduate Building Modern Digital Experiences',

  heroRoles:
    'UI/UX • Frontend Development • Full-Stack Development • Software Development',

  heroIntro:
    "I'm a Computer Science Engineering graduate with hands-on experience across UI/UX design, frontend development, and full-stack development through internships, training, and academic projects. I enjoy combining creative problem-solving with technology to build intuitive, responsive, and user-focused digital solutions.",
};

export const aboutText =
  "I'm a Computer Science Engineering graduate with an interest in UI/UX design, frontend development, full-stack development, and software development. Through my UI/UX internship, full-stack development training, and academic projects, I've worked on wireframes, prototypes, responsive interfaces, and web applications. I enjoy understanding user needs, solving technical problems, and translating ideas into clean, practical digital solutions. I'm currently strengthening my skills in Java, JavaScript, React.js, Node.js, SQL, and modern web development.";

export const navLinks = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Education',
    href: '#education',
  },
  {
    label: 'Achievements',
    href: '#achievements',
  },
  {
    label: 'Certifications',
    href: '#achievements',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

/* =========================
   SKILLS
========================= */

export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages & Programming',
    icon: 'Code2',
    skills: [
      'Java',
      'JavaScript',
      'SQL',
      'Python',
    ],
  },

  {
    title: 'Frontend & Web',
    icon: 'Globe',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
    ],
  },

  {
    title: 'Backend & Full-Stack',
    icon: 'Server',
    skills: [
      'Node.js',
      'MongoDB',
    ],
  },

  {
    title: 'Database',
    icon: 'Database',
    skills: [
      'MySQL',
      'DBMS',
    ],
  },
{
  title: 'UI/UX & Design TEST',
  icon: 'PenTool',
  skills: [
    'Figma',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'UI/UX Design',
    'Wireframing',
    'Prototyping',
    'Responsive Web Design',
    'Canva',
  ],
},
  {
    title: 'Development Tools',
    icon: 'Terminal',
    skills: [
      'VS Code',
      'Git',
      'GitHub',
      'NetBeans',
    ],
  },

  {
    title: 'Productivity Tools',
    icon: 'FileText',
    skills: [
      'Microsoft Word',
      'Microsoft Excel',
      'Microsoft PowerPoint',
    ],
  },

  {
    title: 'Soft Skills',
    icon: 'Users',
    skills: [
      'Problem Solving',
      'Teamwork',
      'Communication',
      'Adaptability',
      'Attention to Detail',
      'Time Management',
    ],
  },
];

/* =========================
   PROJECTS
========================= */

export type Project = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  image: string | null;
  liveUrl: string | null;
  repoUrl: string | null;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 'irctc',

    name: 'IRCTC App Redesign',

    category: 'UI/UX Case Study',

    tagline:
      'Redesigned the IRCTC mobile app experience to improve booking flow, navigation, and overall usability.',

    description:
      'A focused UX case study rethinking the IRCTC mobile booking journey. Identified friction points in the existing flow and proposed a cleaner, more intuitive interface guided by user research and iterative prototyping.',

    highlights: [
      'Analyzed usability issues and redesigned the booking experience with a focus on clearer navigation and user interaction.',
      'Created user flows, wireframes, and UI prototypes using Figma.',
      'Applied UX principles including user research, ideation, and prototyping.',
    ],

    tech: [
      'Figma',
      'Wireframing',
      'Prototyping',
      'User Research',
    ],

    image: '/images/irctc.png',

    liveUrl:
      'https://www.figma.com/proto/tz2V0ssGUEu6LHuuy3LqPv/Untitled?node-id=10-212&p=f&t=2aQhcebxaPu7uFrs-0&scaling=scale-down&content-scaling=fixed&page-p=0%3A1',

    repoUrl: null,

    featured: true,
  },

  {
    id: 'ecommerce',

    name: 'E-Commerce Website',

    category: 'UI/UX Design',

    tagline:
      'Designed a user-focused e-commerce interface covering key shopping interactions from product discovery to checkout.',

    description:
      'An end-to-end e-commerce interface design spanning product discovery, cart, and checkout. Prioritized intuitive navigation and a frictionless shopping experience across the full purchase journey.',

    highlights: [
      'Designed product listing, cart, and checkout experiences.',
      'Created wireframes and prototypes using Figma and Canva.',
      'Focused on intuitive navigation and user experience.',
    ],

    tech: [
      'Figma',
      'Canva',
    ],

    image: '/images/ecommerce.png',

    liveUrl:
      'https://www.figma.com/proto/8q0sfHutCwAGdj0RkS5OsK/E-commerce?node-id=0-1&t=EWjWxLAx9XezroyV-1',

    repoUrl: null,

    featured: false,
  },

  {
    id: 'reservation',

    name: 'Online Reservation System',

    category: 'Full-Stack Development',

    tagline:
      'Developed a railway ticket booking web application supporting essential reservation workflows.',

    description:
      'A full-stack web application implementing the core railway reservation workflow — from user authentication through train search, seat booking, and cancellation. Built with a responsive frontend and a Node.js backend.',

    highlights: [
      'Implemented user login, train search, seat booking, and cancellation features.',
      'Built a responsive frontend and backend using JavaScript and Node.js.',
      'Created a web-based reservation experience focused on practical booking functionality.',
    ],

    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'Node.js',
    ],

    image: null,

    liveUrl: null,

    repoUrl: null,

    featured: false,
  },
];

/* =========================
   EXPERIENCE
========================= */

export type ExperienceItem = {
  role: string;
  org: string;
  location: string;
  period: string;
  points: string[];
  type: 'internship' | 'training';
};

export const experience: ExperienceItem[] = [
  {
    role: 'UI/UX Design Intern',

    org: 'CodSoft',

    location: 'Virtual',

    period: 'Jun – Jul 2024',

    type: 'internship',

    points: [
      'Completed a 4-week UI/UX internship using Figma.',
      'Designed 5+ UI screens as part of the internship work.',
      'Collaborated with mentors and improved user experience through iterative design.',
    ],
  },

  {
    role: 'Full Stack Development Training',

    org: 'NoviTech R&D',

    location: 'Training',

    period: 'Training',

    type: 'training',

    points: [
      'Hands-on training in HTML, CSS, JavaScript, React.js, Node.js, and MongoDB.',
      'Built responsive web interfaces and practiced full-stack application development.',
    ],
  },
];

/* =========================
   EDUCATION
========================= */

export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  level: 'degree' | 'school';
};

export const education: EducationItem[] = [
  {
    degree: 'B.E. Computer Science and Engineering',

    institution: 'Saranathan College of Engineering',

    location: 'Tiruchirappalli, Tamil Nadu',

    period: '2022 – 2026',

    score: 'CGPA 7.94',

    level: 'degree',
  },

  {
    degree: 'HSC — 12th',

    institution: 'Government Higher Secondary School',

    location: 'Salem, Tamil Nadu',

    period: '2021 – 2022',

    score: '73.5%',

    level: 'school',
  },

  {
    degree: 'SSLC — 10th',

    institution: 'Government Higher Secondary School',

    location: 'Salem, Tamil Nadu',

    period: '2019 – 2020',

    score: '77.8%',

    level: 'school',
  },
];

/* =========================
   CERTIFICATIONS
========================= */

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  detail: string;
};

export const certifications: Certification[] = [
  {
    title: 'Programming in Java — OOP Concepts',

    issuer: 'NPTEL',

    year: '2024',

    detail: 'Silver — 80%',
  },

  {
    title: 'UI/UX Design Development',

    issuer: 'Certification',

    year: '',

    detail:
      'Design fundamentals • Wireframing • Prototyping • Figma',
  },
];

/* =========================
   ACHIEVEMENTS
========================= */

export type Achievement = {
  title: string;
  org: string;
  date: string;
  type: 'technical' | 'chess';
};

export const achievements: Achievement[] = [
  {
    title: 'Paper Presentation',

    org: 'CARE Engineering College',

    date: 'November 2024',

    type: 'technical',
  },

  {
    title: 'Technical Event Participation',

    org: 'PSG College of Technology',

    date: 'March 2024',

    type: 'technical',
  },
];

/* =========================
   CHESS
========================= */

export type ChessAchievement = {
  period: string;
  title: string;
  description: string;
};

export const chessIntro =
  'Chess has been a consistent part of my academic journey, helping me develop strategic thinking, patience, problem-solving, focus, and decision-making.';

export const chessAchievements: ChessAchievement[] = [
  {
    period: 'School',

    title: 'District-Level Participation',

    description:
      'Participated in district-level chess competitions.',
  },

  {
    period: 'College — First Year',

    title: '1st Prize',

    description:
      'Secured 1st Prize in chess.',
  },

  {
    period: 'College — Second Year',

    title: '2nd Prize',

    description:
      'Secured 2nd Prize in chess.',
  },

  {
    period: 'College — Third Year',

    title: '1st Prize',

    description:
      'Secured 1st Prize in chess.',
  },
];

/* =========================
   LANGUAGES
========================= */

export const languages = [
  'English',
  'Tamil',
  'Telugu',
];