export type Project = {
  id: string;
  title: string;
  short: string;
  category: string;
  tags: string[];
  description: string;
  objectives: string[];
  role: string;
  status: string;
  github?: string;
  demo?: string;
  screenshots: string[];
  process: string;
  lessons: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  category: string;
  file: string;
  credentialId?: string;
  verification?: string;
  topics: string[];
};

export const portfolio = {
  name: 'Cliven James L. Macaranas',
  shortName: 'Cliven Macaranas',
  initials: 'CM',
  title: 'Aspiring Cybersecurity Specialist',
  university: 'PHINMA University of Pangasinan',
  degree: 'Bachelor of Science in Information Technology',
  specialization: 'Computer Security',
  location: 'Philippines',
  email: '',
  photo: '/assets/cliven-profile.jpg',
  resume: '',
  socials: { github: '', linkedin: '', facebook: '' },
  introduction:
    "I’m Cliven, an Information Technology student specializing in Computer Security. I’m learning how to build practical systems, understand networks, and make security part of the development process. Curiosity drives my work; careful thinking shapes how I approach it.",
  roles: [
    'Aspiring Cybersecurity Specialist',
    'IT Student · Computer Security',
    'Security-Focused Developer',
    'Network Security Enthusiast',
  ],
  // Set confirmed:true only after reviewing your skills. No proficiency levels are assumed.
  skills: [
    {
      name: 'Cybersecurity',
      items: [
        'Network Security',
        'Authentication & Authorization',
        'Access Control',
        'Secure Software Development',
        'Security Monitoring Fundamentals',
      ],
      confirmed: false,
    },
    {
      name: 'Programming & Development',
      items: [
        'JavaScript',
        'Node.js',
        'REST API Development',
        'Web Development',
        'Database Integration',
      ],
      confirmed: false,
    },
    {
      name: 'Networking & Infrastructure',
      items: [
        'TCP/IP Fundamentals',
        'Network Design',
        'Cisco Networking',
        'Network Troubleshooting',
        'Network Segmentation',
      ],
      confirmed: false,
    },
    {
      name: 'Databases',
      items: ['MongoDB', 'MongoDB Atlas', 'Database Fundamentals'],
      confirmed: false,
    },
    {
      name: 'Developer Tools',
      items: [
        'Visual Studio Code',
        'Git',
        'Postman',
        'Docker',
        'Windows',
        'Linux / Ubuntu',
        'WSL',
      ],
      confirmed: false,
    },
  ],
  stack: [
    { category: 'Languages', items: ['JavaScript'] },
    { category: 'Frontend', items: ['Web Development'] },
    { category: 'Backend', items: ['Node.js', 'REST APIs'] },
    { category: 'Databases', items: ['MongoDB', 'MongoDB Atlas'] },
    { category: 'Security & Networking', items: ['Cisco Networking', 'TCP/IP'] },
    { category: 'Development Tools', items: ['Git', 'Postman', 'Docker', 'VS Code'] },
    { category: 'Operating Systems', items: ['Windows', 'Ubuntu', 'WSL'] },
  ],
  projects: [
    {
      id: 'trahodoc',
      title: 'TrahoDoc',
      short: 'Making the internship journey more organized.',
      category: 'Development',
      tags: ['OJT Management', 'Document Verification', 'Security'],
      description:
        'An academic OJT management and document verification system focused on document submission, employer vetting, and application tracking.',
      objectives: [
        'Organize internship applications and documents',
        'Support document verification and employer vetting',
        'Explore authentication and role-based access concepts',
      ],
      role: 'Group academic project. Individual contributions to be added.',
      status: 'Academic project · implementation details pending',
      screenshots: [],
      process: 'Add the verified development process, implemented features, and screenshots here.',
      lessons: 'Results, challenges, and lessons will be documented after review.',
    },
    {
      id: 'network',
      title: 'ITS 201 Network Security Plan',
      short: 'Designing a more secure connected classroom.',
      category: 'Networking',
      tags: ['Cisco', 'Network Design', 'Access Control'],
      description:
        'An academic network plan for the ITS 201 computer laboratory, covering topology, security planning, hardware requirements, segmentation, and infrastructure budgeting.',
      objectives: [
        'Plan an organized laboratory network',
        'Explore segmentation and access control',
        'Document hardware requirements and a practical budget',
      ],
      role: 'Academic team project. Role and individual contributions to be confirmed.',
      status: 'Academic planning project',
      screenshots: [],
      process: 'Add the final topology, simulation steps, and validated configuration.',
      lessons: 'Add verified simulation results and the reasoning behind design decisions.',
    },
    {
      id: 'cloudstock',
      title: 'CloudStock API',
      short: 'Exploring the foundations of backend development.',
      category: 'Development',
      tags: ['Node.js', 'MongoDB Atlas', 'Postman'],
      description:
        'Backend laboratory development involving Node.js, MongoDB Atlas, REST API concepts, and API testing tools.',
      objectives: [
        'Practice backend application development',
        'Explore database integration',
        'Document and test API behavior',
      ],
      role: 'Laboratory work. Specific implemented endpoints to be documented.',
      status: 'Learning project · completed features not yet listed',
      screenshots: [],
      process: 'Add endpoint documentation and test evidence. Planned functionality should be identified separately.',
      lessons: 'Add actual challenges, fixes, and lessons from the laboratory.',
    },
  ] as Project[],
  certificates: [] as Certificate[],
  certificateCategories: [
    'All',
    'Cybersecurity',
    'Networking',
    'Programming',
    'Cloud / DevOps',
    'Seminars & Workshops',
    'Academic Achievements',
  ],
  education: [
    {
      date: 'Current studies',
      title: 'BS Information Technology',
      subtitle: 'PHINMA University of Pangasinan',
      description:
        'Specialization in Computer Security. Exploring secure development, networking, and practical computing.',
    },
    {
      date: 'Academic projects',
      title: 'Learning through building',
      subtitle: 'Development & network planning',
      description:
        'TrahoDoc, ITS 201 network planning, and CloudStock API laboratory work.',
    },
    {
      date: 'Next chapter',
      title: 'Internship & continuous learning',
      subtitle: 'Open to learning and opportunities',
      description:
        'Seeking opportunities to apply classroom learning, contribute to a team, and grow through mentorship.',
    },
  ],
  labs: [
    {
      title: 'Network configuration',
      tools: 'Cisco · TCP/IP',
      objective: 'Understand network topology and access control.',
    },
    {
      title: 'Secure API development',
      tools: 'Node.js · Postman',
      objective: 'Explore input validation and authentication concepts.',
    },
    {
      title: 'Linux practice',
      tools: 'Ubuntu · WSL',
      objective: 'Practice the command line and operating system fundamentals.',
    },
    {
      title: 'Database integration',
      tools: 'MongoDB Atlas',
      objective: 'Understand application-to-database connections.',
    },
  ],
  careerObjective:
    'To grow into a cybersecurity professional through practical experience, responsible development, and continuous learning.',
};
