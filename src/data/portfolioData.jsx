import React from 'react';
import {
  FaCode,
  FaShieldAlt,
  FaDatabase,
  FaServer,
  FaCloud,
  FaUsers,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn
} from 'react-icons/fa';

export const personalInfo = {
  name: {
    first: 'Karpagamainthan',
    last: 'Mylsamy',
    monogram: 'KM'
  },
  roles: [
    'Software Engineer',
    'Full-Stack Developer',
    'Java Developer',
    'Node.js Engineer',
  ],
  bioHero: (
    <>
      Solution-driven developer currently working as a Software Engineer at{' '}
      <strong>PSG Software Technologies</strong>, with professional experience at{' '}
      <strong>Zoho Corporation</strong>.
      Building scalable, secure, and elegant full-stack applications.
    </>
  ),
  bioAbout: [
    <>
      I'm a <strong>solution-driven software developer</strong> with professional experience at{' '}
      <strong>PSG Software Technologies</strong> and <strong>Zoho Corporation</strong>,
      specialising in full-stack development with expertise in both frontend and backend technologies.
    </>,
    <>
      My technical skills encompass the complete software development lifecycle — from requirement
      analysis to deployment. I've delivered projects involving{' '}
      <strong>payment gateway integration</strong> (Paytm, Billdesk),{' '}
      <strong>cloud storage</strong> (AWS S3), and{' '}
      <strong>secure authentication</strong> systems.
    </>
  ],
  contact: {
    email: 'karpagamainthan@gmail.com',
    phone: '+91 93610 78721',
    location: 'Tirupur, Tamil Nadu, India'
  },
  resumeUrl: '/assets/pdf/Karpagamainthan_Resume.pdf'
};

export const assets = {
  profileImages: {
    hero: '/assets/img/profile/profile.jpg',
    about: '/assets/img/profile/my-profile-img.jpg'
  },
  logo: {
    light: '/assets/img/logo/km_logo.png',
    dark: '/assets/img/logo/km_logo-white.png'
  }
};

export const socialLinks = {
  github: 'https://github.com/karpagamainthan',
  linkedin: 'https://www.linkedin.com/in/karpagamainthan-m-515a1722b',
  email: 'mailto:karpagamainthan@gmail.com'
};

export const aboutData = {
  highlights: [
    { icon: <FaCode />, title: 'Full-Stack Dev', desc: 'End-to-end with Java, Node.js & modern frameworks' },
    { icon: <FaServer />, title: 'API Design', desc: 'RESTful APIs for efficient system communication' },
    { icon: <FaDatabase />, title: 'Databases', desc: 'MongoDB query tuning & MySQL optimization' },
    { icon: <FaShieldAlt />, title: 'Security', desc: 'JWT auth with role-based access control' },
    { icon: <FaCloud />, title: 'Cloud', desc: 'AWS S3 integration for scalable storage' },
    { icon: <FaUsers />, title: 'Agile', desc: 'Collaborative teams at PSG Tech & Zoho' },
  ],
  techStack: [
    'Java', 'Node.js', 'React', 'Angular', 'JavaScript',
    'MongoDB', 'MySQL', 'Redis', 'AWS S3', 'Docker',
    'JWT', 'REST APIs', 'Git', 'HTML5', 'CSS3',
  ],
  stats: [
    { num: '2+', label: 'Years Exp.' },
    { num: '4+', label: 'Projects' },
    { num: '2', label: 'Companies' },
    { num: '7.9', label: 'CGPA' },
  ],
  education: {
    year: '2019 – 2023',
    degree: 'B.Tech in Information Technology',
    institution: 'Sri Shakthi Institute of Engineering and Technology',
    cgpa: '7.9 CGPA'
  },
  certification: 'Certified in Java — KICE Infosystems, 2019'
};

export const experiencesData = [
  {
    role: 'Software Engineer',
    company: 'PSG Software Technologies',
    period: 'July 2023 – Present',
    location: 'Coimbatore, India',
    type: 'Full-time',
    yearLabel: '2023',
    points: [
      'Built and maintained backend APIs using Node.js',
      'Integrated payment gateways (Paytm, BillDesk) for secure transactions',
      'Implemented JWT-based authentication with role-based access control (RBAC)',
      'Optimized performance using Redis caching',
      'Set up observability and monitoring using Grafana, Loki, Tempo, and Alloy for logs, metrics, and traces',
      'Collaborated in Agile teams and conducted API testing using Postman',
    ],
    tech: ['Node.js', 'MongoDB', 'Redis', 'JWT', 'Grafana', 'Loki', 'Tempo', 'Postman'],
  },
  {
    role: 'Software Developer Intern',
    company: 'Zoho Corporation',
    period: 'September 2022 – April 2023',
    location: 'Chennai, India',
    type: 'Internship',
    yearLabel: '2022',
    points: [
      'Contributed to development and maintenance of internal web applications',
      'Worked closely with senior developers in an Agile environment',
      'Improved debugging skills and learned database management best practices',
      'Participated in code reviews and followed software engineering standards',
    ],
    tech: ['Java', 'MySQL'],
  },
];

export const projectsData = [
  {
    title: 'Laudea Fees',
    category: 'fullstack',
    desc: 'Secure payment gateway integration platform with multi-provider support and cloud storage.',
    highlights: [
      'Integrated Paytm & Billdesk payment processing',
      'JWT authentication with role-based access control',
      'AWS S3 storage with Redis caching pipeline',
    ],
    tech: ['Node.js', 'MongoDB', 'Redis', 'AWS S3', 'JWT'],
    image: '/assets/img/projects/fees.png',
    demo: '',
    code: '',
    featured: true,
  },
  {
    title: 'CO/PO System',
    category: 'backend',
    desc: 'NBA accreditation system automating course outcome calculations for educational institutions.',
    highlights: [
      'Automated outcome calculations',
      'Data visualization dashboard',
      'MySQL database integration',
    ],
    tech: ['Java', 'Servlet', 'JSP', 'MySQL'],
    image: '/assets/img/projects/copo.png',
    demo: '',
    code: 'https://github.com/Karpagamainthan/COPO',
    featured: true,
  },
  {
    title: 'COVID-19 Tracker',
    category: 'frontend',
    desc: 'Real-time pandemic data visualization dashboard with interactive state-wise statistics.',
    highlights: [
      'Interactive state-wise charts',
      'Real-time API integration',
      'Responsive dashboard design',
    ],
    tech: ['JavaScript', 'Node.js', 'REST API'],
    image: '/assets/img/projects/covid19.png',
    demo: '',
    code: 'https://github.com/Karpagamainthan/Covid-19-dashboard',
    featured: false,
  },
  {
    title: 'Employee Management',
    category: 'backend',
    desc: 'Console-based HR records system with full CRUD operations and JDBC connectivity.',
    highlights: [
      'Full CRUD operations',
      'JDBC database connectivity',
      'Modular Java architecture',
    ],
    tech: ['Java', 'JDBC', 'OOP'],
    image: '/assets/img/projects/emp1.png',
    demo: '',
    code: 'https://github.com/Karpagamainthan/employee-mgmt-system',
    featured: false,
  },
];

export const skillsData = {
  skills: [
    { name: 'Node.js',    icon: '/assets/img/skills/nodejs.png',      category: 'backend',  exp: '3 years',   level: 5   },
    { name: 'Java',       icon: '/assets/img/skills/java.png',         category: 'backend',  exp: '2 years',   level: 4   },
    { name: 'C',          icon: '/assets/img/skills/c.png',            category: 'backend',  exp: '1 year',    level: 3.5 },
    { name: 'JavaScript', icon: '/assets/img/skills/java-script.png',  category: 'frontend', exp: '3 years',   level: 5   },
    { name: 'HTML5',      icon: '/assets/img/skills/html.png',         category: 'frontend', exp: '3 years',   level: 5   },
    { name: 'CSS3',       icon: '/assets/img/skills/css.png',          category: 'frontend', exp: '3 years',   level: 4   },
    { name: 'React',      icon: '/assets/img/skills/react.png',        category: 'frontend', exp: '10 months', level: 3.5 },
    { name: 'Angular',    icon: '/assets/img/skills/angular.png',      category: 'frontend', exp: '3 years',   level: 4   },
    { name: 'MongoDB',    icon: '/assets/img/skills/mongodb.png',      category: 'database', exp: '3 years',   level: 5   },
    { name: 'MySQL',      icon: '/assets/img/skills/mysql.png',        category: 'database', exp: '1 year',    level: 3.5 },
    { name: 'Redis',      icon: '/assets/img/skills/redis.png',        category: 'database', exp: '1 year',    level: 3   },
    { name: 'Docker',     icon: '/assets/img/skills/docker.png',       category: 'tools',    exp: null,        level: null },
    { name: 'Git',        icon: '/assets/img/skills/github.png',       category: 'tools',    exp: '3 years',   level: 4   },
    { name: 'VS Code',    icon: '/assets/img/skills/vscode.png',       category: 'tools',    exp: null,        level: null },
    { name: 'IntelliJ',   icon: '/assets/img/skills/intellij.png',     category: 'tools',    exp: null,        level: null },
    { name: 'Eclipse',    icon: '/assets/img/skills/java_eclipse.png', category: 'tools',    exp: null,        level: null },
  ],
  interests: [
    'Full-Stack Development', 'RESTful API Design', 'Cloud Architecture',
    'Database Optimization', 'System Security', 'Microservices',
    'Agile Methodologies', 'UI/UX Principles',
  ]
};
