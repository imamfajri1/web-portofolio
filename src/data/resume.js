export const profile = {
  name: 'Imam Fajri',
  location: 'South Jakarta, Indonesia',
  email: 'imamfajri.ze@gmail.com',
  linkedin: 'linkedin.com/in/imamfajri',
  summary:
    'Information Systems undergraduate at Universitas Indonesia with hands-on experience as a full stack and backend engineer across Python (Django), Golang, and modern JavaScript frameworks (Next.js, Nuxt.js). Comfortable with PostgreSQL, Supabase, and Docker-based deployments, and experienced leading cross-functional teams as a project manager and operations lead.'
}

export const education = [
  {
    school: 'Universitas Indonesia',
    location: 'Depok, West Java',
    degree: 'Bachelor of Information Systems, Faculty of Computer Science',
    gpa: '3.29/4.00',
    period: 'Aug 2023 – Present',
    highlights: [
      'Recipient of Bayan Peduli Scholarship (Batch 1) covering 8 semesters of tuition',
      'Twice-recipient of P2MW (Student Entrepreneurship Development Program) funding; KMI Expo finalist 2024 & 2025',
      'Finalist, Hackathon UI 2025 (Funding Entrepreneurship track) and Satria Data 2024 (Infographic)'
    ]
  },
  {
    school: 'SMAN 1 Kampar Timur',
    location: 'Kampar, Riau',
    degree: 'Natural Sciences (IPA)',
    gpa: null,
    period: 'Jul 2020 – May 2023',
    highlights: [
      'Chairman, Student Council (OSIS) SMAN 1 Kampar Timur — led all student government programs, school events, and cross-division coordination across the student body.',
      'Chairman, Pramuka SMAN 1 Kampar Timur — directed scouting operations, character-building activities, and inter-unit competitions for the school\'s scout unit.',
      'Chairman, Forum GenRe Kabupaten Kampar Generation 4 — led the district-level youth forum dedicated to adolescent health, academic achievement, and moral development across Kampar Regency.',
      'Duta GenRe Putra 1 Kabupaten Kampar (1st Place) — selected as Kampar district\'s top youth ambassador under the national GenRe program; championed healthy lifestyles, educational ambition, and moral integrity among teenagers, and served as a public role model inspiring meaningful and purposeful living.',
      '2nd Place, KSN-K Informatics — ranked second in the district-level National Science Olympiad (Kompetisi Sains Nasional Kabupaten) in the field of informatics.',
      'Pramuka Garuda Penegak, Kabupaten Kampar — attained Garuda Penegak, the highest scouting distinction at the Penegak (senior scout) level, awarded at the district level.',
      'Duta Bahasa Riau Finalist (youngest finalist) — competed in the provincial Language Ambassador program representing Riau; the youngest participant to reach the finalist stage, with a focus on advancing Indonesian language proficiency and fostering a culture of linguistic excellence.'
    ]
  }
]

export const experience = [
  {
    title: 'Website Administrator',
    company: 'Innovation and Comparative Governance, Faculty of Administration Science',
    location: 'West Java, Indonesia',
    period: 'Dec 2025 – Present',
    points: [
      'Built and deployed a research website on WordPress, designing all pages to match research-team content requirements.',
      'Coordinated with DPER (Research Funding and Ecosystem Department) Universitas Indonesia to align website substance and information architecture.'
    ]
  },
  {
    title: 'Business Development Intern',
    company: 'Blackmount Consultant (Remote)',
    location: 'United Kingdom',
    period: 'Dec 2025 – Apr 2026',
    points: [
      'Identified and evaluated potential consulting projects through targeted market and client research.',
      'Supported client engagement, proposal development, and deal-closing processes for international consulting work.',
      'Created persuasive pitch decks and presentations to communicate strategic value to prospective clients.'
    ]
  },
  {
    title: 'Researcher',
    company: 'Ministry of Transmigration',
    location: 'Central Sulawesi, Indonesia',
    period: 'Aug 2025 – Dec 2025',
    points: [
      'Analyzed business processes and supply chain management for local commodities across transmigration areas.',
      'Built supply and value chain flowcharts mapping production, distribution, and stakeholder roles.',
      'Drafted policy briefs and a digitalization roadmap; co-authored an academic journal article on collaborative rural economies.'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'Bumindo Energi Sejahtera',
    location: 'South Jakarta, Indonesia',
    period: 'Jun 2025 – Dec 2025',
    points: [
      "Redesigned the company's sales recording and warehousing system, replacing manual workflows with a centralized web platform.",
      "Designed the underlying relational database schema in PostgreSQL to align with the company's sales and inventory flow.",
      'Rebuilt the company website on Next.js for improved performance and maintainability.'
    ]
  },
  {
    title: 'Web Developer',
    company: 'UI Student Dormitory, Universitas Indonesia',
    location: 'South Jakarta, Indonesia',
    period: 'May 2025 – Aug 2025',
    points: [
      'Redesigned the UI Student Dormitory website interface and rebuilt the system on a modern web framework.',
      'Coordinated with DSTI (Directorate of Information Systems and Technology) on the campus IT infrastructure used for deployment.'
    ]
  },
  {
    title: 'Teaching Assistant for Integrated Personality Development Skills',
    company: 'Faculty of Computer Science, Universitas Indonesia',
    location: 'Depok, West Java',
    period: 'Jan 2025 – Jun 2025',
    points: [
      'Assisted the lecturer in preparing teaching materials and structuring weekly learning schemes.',
      'Graded student assignments and class participation; mentored students struggling with course material.'
    ]
  }
]

export const projects = [
  {
    name: 'Rimbahari',
    stack: ['Python', 'Django', 'PostgreSQL', 'Docker'],
    role: 'Backend Engineer & DevOps',
    description: 'Knowledge-hub platform for Indonesian indigenous (adat) communities.',
    points: [
      'Built backend exposing REST APIs in Django for content, contributors, and community resources.',
      'Designed and managed the PostgreSQL data model covering communities, articles, and user roles.',
      'Containerized the application with Docker and Docker Compose.',
      'Owned DevOps responsibilities including environment configuration, image builds, and deployment pipelines.'
    ]
  },
  {
    name: 'Wanara',
    stack: ['Golang', 'PostgreSQL', 'Docker'],
    role: 'Backend Engineer',
    description: 'Mobile app connecting urban users with forest conservation through tree-adoption.',
    points: [
      'Developed backend services in Go for user authentication, tree-adoption transactions, and progress tracking.',
      'Implemented REST APIs backed by PostgreSQL.',
      'Containerized services with Docker for consistent build and deployment.'
    ]
  },
  {
    name: 'Rentee',
    stack: ['Next.js', 'Supabase', 'PostgreSQL'],
    role: 'Project Manager & CEO',
    description: 'Multi-vendor rental platform piloted at Universitas Indonesia.',
    points: [
      'Led the product team; received P2MW Digital Business funding (2025).',
      'Defined product scope, milestones, and sprint plans across engineering, design, and business development.',
      'Finalist at KMI Expo 2025 (Tidar University, Magelang).'
    ]
  }
]

export const skills = {
  languages: ['Python', 'Go (Golang)', 'Java', 'JavaScript/TypeScript', 'SQL'],
  frameworks: ['Django', 'Next.js', 'Nuxt.js', 'Node.js'],
  databases: ['PostgreSQL', 'Supabase', 'MySQL'],
  devops: ['Docker', 'Docker Compose', 'Git', 'GitHub', 'Linux'],
  other: ['REST API Design', 'Project Management', 'Supply Chain Management'],
  soft: ['Leadership', 'Communication', 'Time Management', 'Cross-functional Coordination']
}

export const leadership = [
  {
    role: 'Chairman',
    org: 'Pramuka Universitas Indonesia (UI Scout Organization)',
    period: 'Jan 2024 – Dec 2025',
    points: [
      'Led a team of 20+ members across multiple divisions.',
      'Strengthened collaboration with university scout organizations across Indonesia and partner countries including Japan and the United Kingdom.'
    ]
  },
  {
    role: 'Staff, AI Innovation Challenge',
    org: 'CompFest, Faculty of Computer Science Universitas Indonesia',
    period: 'Mar 2024 – Oct 2024',
    points: [
      "Supported judges in validating the functionality of participants' AI projects.",
      'Consolidated scoring data from each judge into structured spreadsheets for final ranking.'
    ]
  }
]
