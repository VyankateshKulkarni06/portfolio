export interface MetricItem {
  id: string;
  value: string;
  numericValue?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  context: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  location?: string;
  headline: string;
  summary: string;
  bulletPoints: string[];
  metrics: { label: string; value: string; detail: string }[];
  tags: string[];
  architectureFocus: string;
  flowSteps: { step: string; detail: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Applied AI' | 'Distributed Systems' | 'Agentic AI';
  overview: string;
  problem: string;
  architecture: string;
  implementationHighlights: string[];
  engineeringChallenges: string[];
  metrics: { label: string; value: string }[];
  stack: string[];
  pipelineStages?: { name: string; desc: string; latencyOrAcc?: string }[];
}

export const PERSONAL_INFO = {
  name: 'Vyankatesh Kulkarni',
  role: 'Software Engineer',
  focusAreas: ['Backend Systems', 'Distributed Systems', 'Applied AI'],
  headline: 'Software Engineer building Backend Systems, Distributed Software & Applied AI.',
  subheadline: 'I build production-oriented software across backend systems, automation, AI pipelines, and scalable architectures.',
  anchorStatement: 'I like building systems where software, data, infrastructure, and intelligence meet.',
  email: 'kulkarnivyankatesh26@gmail.com',
  github: 'https://github.com/VyankateshKulkarni06',
  linkedin: 'https://www.linkedin.com/in/vyankatesh-kulkarni-30a208292/',
  resumeUrl: '/Vyankatesh_Kulkarni_Resume.pdf',
  location: 'Pune, India',
};

export const VERIFIED_METRICS: MetricItem[] = [
  {
    id: 'dsa-count',
    value: '550+',
    numericValue: 550,
    suffix: '+',
    label: 'DSA Problems Solved',
    context: 'Data structures, graph algorithms, dynamic programming, and systems design fundamentals.',
  },
  {
    id: 'lc-rating',
    value: '1671',
    numericValue: 1671,
    label: 'Peak LeetCode Rating',
    context: 'Demonstrated competitive problem-solving and algorithmic efficiency.',
    highlight: true,
  },
  {
    id: 'configs',
    value: '220+',
    numericValue: 220,
    suffix: '+',
    label: 'Source / Destination Configurations',
    context: 'Unified Spring Boot API abstraction layer with dynamic Swagger schemas at Databahn.ai.',
  },
  {
    id: 'testrail',
    value: '270+',
    numericValue: 270,
    suffix: '+',
    label: 'TestRail Cases Automated',
    context: 'Pytest API and E2E coverage across distributed AI workflow platform.',
  },
  {
    id: 'coverage',
    value: '8% → 47%',
    label: 'Backend Automation Coverage',
    context: 'Achieved in 3 weeks via Pytest suites and agentic test classification at Databahn.ai.',
    highlight: true,
  },
  {
    id: 'req-reduction',
    value: '~3×',
    label: 'Reduction in API Requests',
    context: 'Optimized test automation polling from 10s to 45s, eliminating 25k-scale request floods.',
    highlight: true,
  },
  {
    id: 'view-acc',
    value: '~98%',
    numericValue: 98,
    prefix: '~',
    suffix: '%',
    label: 'View Validation Accuracy',
    context: 'MobileNet vision model categorizing 8 intraoral dental image perspectives.',
  },
  {
    id: 'tooth-acc',
    value: '~95%',
    numericValue: 95,
    prefix: '~',
    suffix: '%',
    label: 'Tooth Detection Accuracy',
    context: 'YOLO-based localized tooth boundary segmentation and identification.',
  },
  {
    id: 'disease-acc',
    value: '~85%',
    numericValue: 85,
    prefix: '~',
    suffix: '%',
    label: 'Disease Classification Accuracy',
    context: '8 specialized Vision-Language Model (VLM) agents evaluating tooth-level pathologies.',
  },
];

export const IDENTITY_PILLARS = [
  {
    id: 'backend',
    title: 'BACKEND',
    subtitle: 'APIs, services, orchestration, automation',
    description: 'High-throughput microservices, robust API gateways, and dynamic schema transformation layers designed for production reliability.',
    technologies: ['Go', 'Spring Boot', 'FastAPI', 'Node.js', 'REST', 'Swagger'],
    stats: '220+ Config Abstractions • 270+ Cases Automated',
  },
  {
    id: 'distributed',
    title: 'DISTRIBUTED SYSTEMS',
    subtitle: 'scalable services, workflows, asynchronous processing',
    description: 'Event-driven architectures, asynchronous task execution, memory-conscious data caching, and real-time streaming interfaces.',
    technologies: ['Redis', 'Amazon S3', 'Server-Sent Events (SSE)', 'Asynchronous Queues'],
    stats: 'SSE Progress Streaming • Decoupled State Storage',
  },
  {
    id: 'ai',
    title: 'APPLIED AI',
    subtitle: 'computer vision, agentic AI, inference pipelines',
    description: 'Multi-stage vision pipelines combining MobileNet, YOLO, and multi-agent VLM orchestration for automated clinical diagnosis and legal reasoning.',
    technologies: ['YOLO', 'MobileNet', 'VLM Agents', 'Embeddings', 'Vector Search'],
    stats: '~98% View Acc • ~95% Detection Acc • ~85% Classification Acc',
  },
  {
    id: 'dsa',
    title: 'PROBLEM SOLVING',
    subtitle: '550+ DSA problems, LeetCode 1671',
    description: 'Rigorous algorithmic foundation in graph theory, dynamic programming, tree traversals, and asymptotic optimization.',
    technologies: ['C++', 'Algorithms', 'Data Structures', 'System Design'],
    stats: '550+ Problems Solved • Peak Rating 1671',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'databahn',
    company: 'Databahn.ai',
    role: 'Software Engineering Intern',
    period: 'Feb 2026 – Aug 2026',
    type: 'Internship',
    headline: 'AI Workflow Platform Backend & Test Automation Engineering',
    summary: 'Engineered core backend components for a Go-based AI workflow platform, built dynamic Spring Boot API abstractions, and accelerated backend test coverage from 8% to 47% in 3 weeks.',
    bulletPoints: [
      'Developed features for a Go-based AI workflow platform, implementing component definitions and core backend logic.',
      'Engineered a Spring Boot API abstraction layer for 220+ source and destination configurations, with dynamic Swagger schemas, validation, and public-to-private field transformation.',
      'Developed Pytest-based API and end-to-end automation, increasing backend automation coverage from 8% to 47% in 3 weeks by automating 270+ TestRail cases.',
      'Optimized API automation polling by increasing the polling interval from 10s to 45s, reducing API requests by ~3X.',
      'Optimized end-to-end test execution by chaining test cases and reusing shared infrastructure across scenarios, eliminating redundant resource creation and activation waits and saving ~5–6 minutes per test case.',
      'Built an agent workflow to classify miscategorized TestRail cases using test descriptions, expected results, and reproduction steps, enabling identification and automation of backend/API test cases.',
    ],
    metrics: [
      { label: 'Coverage Surge', value: '8% → 47%', detail: 'Achieved in 3 weeks' },
      { label: 'API Polling', value: '~3× Less Load', detail: 'Increased interval from 10s to 45s' },
      { label: 'E2E Time Saved', value: '~5–6 min', detail: 'Per test case via infra reuse' },
      { label: 'Configs Handled', value: '220+', detail: 'Dynamic Spring Boot schema layer' },
    ],
    tags: ['Go', 'Spring Boot', 'Pytest', 'Swagger', 'TestRail', 'Agent Workflow', 'API Design'],
    architectureFocus: 'Spring Boot Unified Abstraction Layer & Distributed Pytest Infrastructure',
    flowSteps: [
      { step: '220+ Source/Destination Configs', detail: 'Heterogeneous input definitions requiring uniform handling' },
      { step: 'Unified Abstraction Layer', detail: 'Spring Boot service handling public-to-private transformation' },
      { step: 'Validation & Dynamic Swagger', detail: 'Automated schema generation and runtime validation' },
      { step: 'Agentic Test Classifier', detail: 'Parsed TestRail cases to extract backend automation targets' },
      { step: 'Chained E2E Test Suite', detail: 'Shared infrastructure execution saving 5-6 mins per case' },
    ],
  },
  {
    id: 'bharti-hospitals',
    company: 'Bharti Hospitals (Dental)',
    role: 'Freelancer',
    period: 'Jan 2026 – May 2026',
    type: 'Client Project / Production Delivery',
    headline: 'Multi-Stage AI Dental Diagnosis & Medical Camp Platform',
    summary: 'Architected and delivered an end-to-end AI-powered dental diagnosis platform processing 8 intraoral images and 14 clinical questions to generate tooth-level diagnosis and odontogram reports with real-time SSE progress streaming.',
    bulletPoints: [
      'Architected and delivered a live AI-powered dental diagnosis platform processing 8 intraoral images and 14 clinical questions to generate tooth-wise disease mapping and automated clinical reports.',
      'Built a multistage AI pipeline combining MobileNet-based view validation, YOLO-based tooth detection, and 8 specialized VLM agents for tooth-level disease classification.',
      'Designed image and case-data handling using Amazon S3 and Redis, storing image references and questionnaire state by case ID to minimize large image payloads in backend memory.',
      'Implemented real-time diagnosis progress streaming using SSE across detection, diagnosis, and report-generation stages.',
      'Achieved ~98% view-validation accuracy, ~95% tooth-detection accuracy, and ~85% disease-classification accuracy, with automated DMFT scoring and odontogram-based clinical reports.',
      'Built medical camp management functionality, enabling administrators to create camps, onboard patients through camp credentials, and organize and filter generated reports by disease severity.',
    ],
    metrics: [
      { label: 'View Validation', value: '~98%', detail: 'MobileNet 8-perspective classifier' },
      { label: 'Tooth Detection', value: '~95%', detail: 'YOLO spatial locator' },
      { label: 'Disease Classification', value: '~85%', detail: '8 specialized VLM agents' },
      { label: 'Data Ingestion', value: '8 Images + 14 Questions', detail: 'Multi-modal diagnostic payload' },
    ],
    tags: ['Computer Vision', 'MobileNet', 'YOLO', 'VLM Agents', 'Amazon S3', 'Redis', 'SSE', 'FastAPI/Python'],
    architectureFocus: 'Multistage Vision Pipeline & SSE Stream Processing Architecture',
    flowSteps: [
      { step: '8 Intraoral Images + 14 Questions', detail: 'Uploaded directly to S3 with metadata cached in Redis by case ID' },
      { step: 'MobileNet View Validation (~98%)', detail: 'Verifies correct camera angles for maxillary, mandibular, and occlusal views' },
      { step: 'YOLO Tooth Detection (~95%)', detail: 'Segments and bounds individual teeth across perspectives' },
      { step: '8 Specialized VLM Agents (~85%)', detail: 'Parallel vision-language inference evaluating specific pathologies' },
      { step: 'DMFT Score & Odontogram', detail: 'Aggregates tooth findings into medical standard DMFT clinical index' },
      { step: 'SSE Real-Time Stream', detail: 'Pushes step-by-step progress telemetry directly to client' },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'cariecheck',
    title: 'CarieCheck',
    subtitle: 'AI-Based Dental Caries Detection & Multi-Stage Diagnostic System',
    category: 'Applied AI',
    overview: 'Production-ready clinical dental assessment platform that ingests 8 intraoral photographs and 14 clinical diagnostic questions, routing them through a multi-model vision and VLM pipeline to generate tooth-by-tooth odontogram reports.',
    problem: 'Dental screenings in high-volume camps suffer from inconsistent manual charting, physician fatigue, and memory constraints when transmitting high-resolution clinical photo sets to synchronous backend servers.',
    architecture: 'Client uploads directly to Amazon S3 using pre-signed references. Backend maintains case state and questionnaire answers in Redis. A Python inference pipeline executes view validation (MobileNet), tooth boundary localization (YOLO), and 8 VLM agents, streaming status via Server-Sent Events (SSE) before generating DMFT score reports.',
    implementationHighlights: [
      'Engineered decoupled memory architecture using Amazon S3 for image blobs and Redis for case session state, avoiding backend heap exhaustion.',
      'Implemented real-time Server-Sent Events (SSE) streaming progress across validation, detection, agent classification, and compilation.',
      'Built automated DMFT (Decayed, Missing, Filled Teeth) metric calculator and interactive SVG odontogram generator.',
      'Designed administrative camp management system supporting credentialed batch patient intake and severity triage.',
    ],
    engineeringChallenges: [
      'Managing high-resolution multi-image uploads without starving backend memory: resolved via presigned S3 URLs + Redis metadata keys.',
      'Coordinating latency across 8 VLM inference models: parallelized agent queries and streamed interim confidence states via SSE.',
      'Perspective distortion in handheld mobile shots: MobileNet view validator enforces perspective thresholds (~98% accuracy) before detection.',
    ],
    metrics: [
      { label: 'View Validation Acc', value: '~98%' },
      { label: 'Tooth Detection Acc', value: '~95%' },
      { label: 'Disease Classification Acc', value: '~85%' },
      { label: 'Payload Intake', value: '8 Images + 14 Qs' },
    ],
    stack: ['MobileNet', 'YOLO', 'Vision-Language Models', 'Python', 'FastAPI', 'Amazon S3', 'Redis', 'Server-Sent Events (SSE)'],
    pipelineStages: [
      { name: 'Intraoral Intake', desc: '8 multi-angle dental images + 14 diagnostic questions stored in S3 & Redis', latencyOrAcc: '8 Images' },
      { name: 'View Validation', desc: 'MobileNet checks angle, lighting, and mouth orientation', latencyOrAcc: '~98% Acc' },
      { name: 'Tooth Detection', desc: 'YOLO spatial bounding model locates individual teeth', latencyOrAcc: '~95% Acc' },
      { name: '8 VLM Agents', desc: 'Specialized vision-language models classify tooth pathology', latencyOrAcc: '~85% Acc' },
      { name: 'DMFT Compilation', desc: 'Calculates standardized clinical Decayed/Missing/Filled score', latencyOrAcc: 'Deterministic' },
      { name: 'SSE Stream & Report', desc: 'Progress pushed live; generates complete Odontogram report', latencyOrAcc: 'Real-time SSE' },
    ],
  },
  {
    id: 'chainvote',
    title: 'Chainvote',
    subtitle: 'Blockchain-Based Voting Platform with Configurable Schema Engine',
    category: 'Distributed Systems',
    overview: 'Backend infrastructure for a decentralized voting platform enabling autonomous community creation, configurable member verification schemas, and dynamic eligibility rules for trustless governance elections.',
    problem: 'Traditional election systems enforce rigid member schemas and opaque qualification algorithms, preventing organizations with distinct attribute requirements from executing verifiable decentralized elections.',
    architecture: 'Modular backend built with dynamic schema definition engine, allowing community administrators to specify custom validation rules and member attributes. An evaluation service processes membership sets against election criteria to compute immutable eligibility trees.',
    implementationHighlights: [
      'Engineered configurable community schemas enabling administrators to define custom registration attributes, data types, and validation constraints.',
      'Developed dynamic eligibility filtering algorithms evaluating multi-variable voter and candidate eligibility based on admin criteria.',
      'Designed community lifecycle and election management workflows supporting registration periods, candidate filings, and verifiable voting sessions.',
    ],
    engineeringChallenges: [
      'Handling dynamic, user-defined schema fields without schema migration overhead: modeled with polymorphic data structures and runtime validation.',
      'Efficient multi-attribute qualification filtering across large voter registries: implemented indexed attribute lookups and predicate evaluation.',
    ],
    metrics: [
      { label: 'Schema Flexibility', value: 'Arbitrary Attributes' },
      { label: 'Eligibility Engine', value: 'Dynamic Rules' },
      { label: 'System Type', value: 'Distributed Governance' },
    ],
    stack: ['Node.js', 'PostgreSQL', 'REST APIs', 'JWT', 'System Architecture', 'Blockchain Protocols'],
  },
  {
    id: 'nyayagpt',
    title: 'NyayaGPT',
    subtitle: 'Agentic AI-Powered Legal Chatbot with Two-Stage Reasoning',
    category: 'Agentic AI',
    overview: 'Multi-agent legal query reasoning system combining local vector search over 10,000+ case records with real-time external case-law API synthesis for context-aware legal analysis.',
    problem: 'Direct LLM queries for Indian legal jurisprudence hallucinate case precedents, quote non-existent citations, and fail to distinguish between statutory interpretation and procedural history.',
    architecture: 'Two-agent pipeline: Agent 1 analyzes user intent, extracts legal concepts, and determines retrieval requirements. A vector search engine performs cosine-similarity search over embeddings of 10K+ legal case records to extract top-5 precedents, which are combined with live external case-law API payloads. Agent 2 synthesizes the retrieved corpus into an accurate, citation-backed legal response.',
    implementationHighlights: [
      'Architected two-agent legal reasoning pipeline separating retrieval analysis from final synthesis to mitigate hallucinations.',
      'Implemented Case Law Mode using dense embeddings and cosine similarity search over a curated dataset of 10,000+ legal case records.',
      'Configured top-5 nearest-neighbor precedent retrieval pipeline with dynamic score thresholds.',
      'Integrated external legal case-law APIs into the retrieval loop to fetch active statutory amendments and cross-reference citations.',
    ],
    engineeringChallenges: [
      'Query formulation for legal vector search: implemented query rewrite step in Agent 1 to map colloquial questions into formal legal terminology.',
      'Context window budgeting when combining 10K+ vector match results and external API responses: synthesized top-5 ranking with deduplication.',
    ],
    metrics: [
      { label: 'Vector Corpus', value: '10K+ Case Records' },
      { label: 'Retrieval Depth', value: 'Top-5 Precedents' },
      { label: 'Agent Pipeline', value: '2-Agent Architecture' },
    ],
    stack: ['Python', 'Agentic AI', 'Vector Embeddings', 'Cosine Similarity', 'FastAPI', 'External Legal APIs', 'NLP'],
  },
];

export const HOW_I_BUILD_STEPS = [
  {
    step: '01',
    title: 'Understand Constraints',
    desc: 'Clarify throughput, latency, memory limits, and domain failure modes before writing code.',
    example: 'At Bharti Hospitals: Identified that sending high-res images in HTTP body would exhaust server heap, demanding presigned S3 + Redis caching.',
  },
  {
    step: '02',
    title: 'Design Interfaces & Schemas',
    desc: 'Establish clean contracts, schema validation, and separation between public and private models.',
    example: 'At Databahn.ai: Built Spring Boot abstraction layer for 220+ configurations with dynamic Swagger validation and field transformation.',
  },
  {
    step: '03',
    title: 'Select Architecture',
    desc: 'Choose sync vs. async, event-driven, or streaming mechanisms based on workload characteristics.',
    example: 'In CarieCheck: Replaced blocking endpoints with Server-Sent Events (SSE) to stream multistage model progress in real-time.',
  },
  {
    step: '04',
    title: 'Build & Orchestrate',
    desc: 'Implement core business logic with high-performance languages (Go, Java/Spring, Python) and resilient error handling.',
    example: 'Go-based AI workflow platform component definitions and NyayaGPT two-agent reasoning pipeline.',
  },
  {
    step: '05',
    title: 'Measure & Profile',
    desc: 'Collect concrete metrics: request rates, test cycle times, pipeline accuracy, and resource contention.',
    example: 'Discovered automation polling was creating 25k redundant requests due to a 10s interval.',
  },
  {
    step: '06',
    title: 'Optimize & Automate',
    desc: 'Refactor bottlenecks, chain shared execution states, and introduce agentic automation where manual effort stalls throughput.',
    example: 'Tuned polling to 45s (~3× request reduction), reused E2E infra (~5-6 min saved/test), automated 270+ TestRail cases (8% → 47% coverage).',
  },
  {
    step: '07',
    title: 'Ship & Monitor',
    desc: 'Deliver production-tested, maintainable software with predictable behavior under load.',
    example: 'Medical camp management system deployed with real-time patient onboarding and disease severity filtering.',
  },
];

export const EDUCATION = {
  institution: 'Pune Institute of Computer Technology (PICT), Pune',
  degree: 'Bachelor of Engineering (BE), Information Technology',
  period: 'Sep 2023 – Jul 2027',
  gpa: '9.33 / 10',
  achievement: '9.80+ SGPA in 5 of 6 semesters',
  highlights: [
    'Rigorous curriculum in Operating Systems, Database Management, Computer Networks, and Object-Oriented Design',
    'Consistently ranked top tier of the cohort with 9.80+ SGPA across multiple semesters',
    'Active member of competitive programming and technical systems engineering societies',
  ],
};

export const CERTIFICATIONS = [
  {
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    focus: 'Neural networks, hyperparameter tuning, CNNs, sequence models, and computer vision architectures.',
  },
  {
    title: 'Software Design & Architecture (In Progress)',
    issuer: 'University of Alberta',
    focus: 'Object-oriented design principles, architectural patterns, design patterns, and code smells.',
  },
  {
    title: 'Full Stack Web Development',
    issuer: '100xDevs',
    focus: 'Production backend systems, microservices, containerization, caching strategies, and DevOps.',
  },
  {
    title: 'Machine Learning & Data Science Masterclass',
    issuer: 'Udemy',
    focus: 'Supervised/unsupervised learning, statistical modeling, feature engineering, and inference pipelines.',
  },
];

export const EXTRACURRICULAR = {
  title: 'Competitive Chess',
  achievement: 'State-Level Competitor • Top 10 Finish',
  insight: 'Chess shapes how I design software: evaluating multiple moves ahead, calculating branch trade-offs, preserving piece coordination, and remaining calm under severe positional pressure.',
};
