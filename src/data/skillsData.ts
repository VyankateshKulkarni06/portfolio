export interface SkillItem {
  name: string;
  category: 'Languages' | 'Backend & Frameworks' | 'Databases & Storage' | 'AI / ML' | 'Security & API' | 'Tools & Infra' | 'Computer Science';
  context: string;
  highlight?: boolean;
}

export const SKILLS_DATA: SkillItem[] = [
  // Languages
  {
    name: 'C++',
    category: 'Languages',
    context: 'Primary language for Data Structures & Algorithms (550+ problems, LeetCode 1671) and low-level performance evaluation.',
    highlight: true,
  },
  {
    name: 'Go',
    category: 'Languages',
    context: 'Developed backend component definitions and core workflow logic for an AI platform at Databahn.ai.',
    highlight: true,
  },
  {
    name: 'Java',
    category: 'Languages',
    context: 'Built enterprise-grade API abstraction layers with Spring Boot handling 220+ configuration models.',
    highlight: true,
  },
  {
    name: 'Python',
    category: 'Languages',
    context: 'Core engine for AI pipelines (MobileNet, YOLO, VLM agents), Pytest automation suites, and FastAPI services.',
    highlight: true,
  },
  {
    name: 'JavaScript',
    category: 'Languages',
    context: 'Full-stack application development, asynchronous Node.js microservices, and interactive web client interfaces.',
  },

  // Backend & Frameworks
  {
    name: 'Spring Boot',
    category: 'Backend & Frameworks',
    context: 'Engineered unified API abstraction layer with dynamic Swagger schemas and public-to-private field transforms.',
    highlight: true,
  },
  {
    name: 'Go Workflows',
    category: 'Backend & Frameworks',
    context: 'Implemented distributed component execution logic within Databahn.ai AI workflow engine.',
    highlight: true,
  },
  {
    name: 'FastAPI',
    category: 'Backend & Frameworks',
    context: 'High-performance Python asynchronous APIs for real-time AI inference and SSE progress streaming.',
  },
  {
    name: 'Pytest',
    category: 'Backend & Frameworks',
    context: 'Built scalable automation test suites, increasing Databahn backend coverage from 8% to 47% in 3 weeks.',
    highlight: true,
  },
  {
    name: 'REST APIs',
    category: 'Backend & Frameworks',
    context: 'Designed robust HTTP contracts, idempotency, rate limiting, and dynamic OpenAPI/Swagger documentation.',
  },
  {
    name: 'Node.js',
    category: 'Backend & Frameworks',
    context: 'Built modular backend services for Chainvote voting platform with dynamic eligibility validation.',
  },

  // Databases & Storage
  {
    name: 'Redis',
    category: 'Databases & Storage',
    context: 'In-memory case state caching and session management to prevent large diagnostic image payloads in heap.',
    highlight: true,
  },
  {
    name: 'Amazon S3',
    category: 'Databases & Storage',
    context: 'Decoupled binary storage for intraoral image sets using presigned URLs to protect API servers.',
    highlight: true,
  },
  {
    name: 'PostgreSQL',
    category: 'Databases & Storage',
    context: 'Relational data modeling for community attributes, election results, and relational business logic.',
  },
  {
    name: 'MySQL',
    category: 'Databases & Storage',
    context: 'Transactional persistence and structured query optimization for academic and production schemas.',
  },
  {
    name: 'MongoDB',
    category: 'Databases & Storage',
    context: 'Document-based storage for polymorphic test case logs and flexible questionnaire schemas.',
  },

  // AI / ML
  {
    name: 'Computer Vision',
    category: 'AI / ML',
    context: 'Multi-perspective intraoral image validation (~98%) and localized tooth spatial segmentation (~95%).',
    highlight: true,
  },
  {
    name: 'Agentic AI',
    category: 'AI / ML',
    context: 'Two-agent legal reasoning in NyayaGPT and automated TestRail case classification agent at Databahn.',
    highlight: true,
  },
  {
    name: 'VLM Agents',
    category: 'AI / ML',
    context: 'Orchestrated 8 parallel Vision-Language Models for tooth-level dental disease classification (~85% acc).',
    highlight: true,
  },
  {
    name: 'Deep Learning',
    category: 'AI / ML',
    context: 'CNN architectures, MobileNet transfer learning, YOLO spatial bounds, and dense vector embeddings.',
  },
  {
    name: 'Machine Learning',
    category: 'AI / ML',
    context: 'Supervised classification, cosine similarity search over 10K+ legal records, and feature preprocessing.',
  },

  // Security & API
  {
    name: 'Swagger / OpenAPI',
    category: 'Security & API',
    context: 'Generated dynamic OpenAPI schemas for 220+ source/destination config variations at Databahn.ai.',
    highlight: true,
  },
  {
    name: 'JWT',
    category: 'Security & API',
    context: 'Stateless token-based authentication and role-based access control for administrative camp portals.',
  },

  // Tools & Infrastructure
  {
    name: 'Docker',
    category: 'Tools & Infra',
    context: 'Containerized microservices and reproducible isolated environments for Pytest automation pipelines.',
    highlight: true,
  },
  {
    name: 'TestRail',
    category: 'Tools & Infra',
    context: 'Automated 270+ test cases and built agentic workflow to classify unmapped test descriptions.',
    highlight: true,
  },
  {
    name: 'GitHub',
    category: 'Tools & Infra',
    context: 'Branching models, pull request reviews, automated CI checks, and release versioning.',
  },
  {
    name: 'Jenkins',
    category: 'Tools & Infra',
    context: 'Automated build and test pipelines for continuous integration and regression testing.',
  },
  {
    name: 'Postman',
    category: 'Tools & Infra',
    context: 'API debugging, contract testing, and automated collection execution for backend endpoints.',
  },
  {
    name: 'Jira & Confluence',
    category: 'Tools & Infra',
    context: 'Agile sprint tracking, technical architecture documentation, and test matrix management.',
  },

  // Computer Science
  {
    name: 'DSA',
    category: 'Computer Science',
    context: '550+ solved problems; deep understanding of graphs, dynamic programming, heaps, trees, and complexity.',
    highlight: true,
  },
  {
    name: 'System Design',
    category: 'Computer Science',
    context: 'Architecting for high availability, decoupled storage, caching tiers, and event streaming.',
    highlight: true,
  },
  {
    name: 'Operating Systems',
    category: 'Computer Science',
    context: 'Concurrency, process vs thread scheduling, memory management, IPC, and POSIX fundamentals.',
  },
  {
    name: 'DBMS',
    category: 'Computer Science',
    context: 'ACID guarantees, indexing strategies (B-Trees, Hash), query planning, and transaction isolation.',
  },
  {
    name: 'OOP',
    category: 'Computer Science',
    context: 'SOLID principles, abstract factories, polymorphic interfaces, and clean domain design.',
  },
];

export const SKILL_CATEGORIES = [
  'All',
  'Languages',
  'Backend & Frameworks',
  'Databases & Storage',
  'AI / ML',
  'Security & API',
  'Tools & Infra',
  'Computer Science',
] as const;
