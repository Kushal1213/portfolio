export const SITE = {
  name: 'Kushal Choudhary',
  title: 'Software Engineer',
  tagline: 'Full Stack · AI/ML · Problem Solver',
  email: 'kushalchoudhary1213@gmail.com',
  phone: '+91 8619299156',
  location: 'Chennai, India',
  availability: 'Open to internships & full-time roles · Remote-friendly',
  resumeUrl: '/resume.pdf',
  urls: {
    github: 'https://github.com/Kushal1213',
    linkedin: 'https://www.linkedin.com/in/kushal-choudhary-8044a227b/',
    leetcode: 'https://leetcode.com/u/kushal_choudhary/',
    portfolio: 'https://kushalchoudhary.dev',
  },
} as const

export const HERO_STATS = [
  { value: '4', label: 'Production Projects', suffix: '+' },
  { value: '36', label: 'GitHub Repositories', suffix: '' },
  { value: '20', label: 'Technologies', suffix: '+' },
  { value: '282', label: 'DSA Problems Solved', suffix: '' },
  { value: '4', label: 'Years Learning', suffix: '+' },
] as const

export const ROLES = [
  'Software Engineer',
  'Full Stack Developer',
  'AI/ML Engineer',
  'Problem Solver',
] as const

export const PROJECTS = [
  {
    id: 'fraud-detection',
    featured: true,
    title: 'Temporal Motif-Aware Fraud Detection',
    subtitle: 'GNN + XGBoost Ensemble on 500K+ Transactions',
    summary:
      'Hybrid fraud detection engine modeling transactions as temporal graphs to capture multi-hop fraud rings that rule-based systems miss.',
    problem:
      'Rule-based fraud systems fail on evolving, multi-hop fraud patterns across 500K+ IEEE CIS transactions.',
    solution:
      'Engineered a temporal graph pipeline combining GNN embeddings with XGBoost, SHAP explainability, and Pinecone vector search for sub-second similarity lookup.',
    architecture: {
      frontend: ['Jupyter Notebooks', 'SHAP Visualizations', 'Evaluation Dashboards'],
      backend: ['Python Pipeline', 'Feature Engineering', 'Ensemble Classifier'],
      database: ['Pinecone Vector DB', 'Graph Embeddings Index'],
      deployment: ['Batch Inference', 'Model Serialization'],
      ai: ['Graph Neural Networks', 'XGBoost', 'SHAP XAI'],
      infrastructure: ['500K+ Transaction Dataset', 'Temporal Graph Construction'],
    },
    features: [
      'Temporal Graph Construction',
      'GNN Embedding Layer',
      'XGBoost Ensemble Stacking',
      'SHAP Per-Transaction Explainability',
      'Pinecone Similarity Search',
      '25% Accuracy Improvement',
    ],
    metrics: [
      { value: '500K+', label: 'Transactions Processed' },
      { value: '25%', label: 'Accuracy Improvement' },
      { value: '<1s', label: 'Similarity Search' },
    ],
    challenges: [
      'Modeling temporal fraud motifs across heterogeneous transaction graphs',
      'Balancing precision vs. recall on highly imbalanced fraud data',
      'Making black-box GNN predictions interpretable for analysts',
    ],
    results: [
      '25% detection accuracy improvement over baseline models',
      'Sub-second similarity search via Pinecone vector indexing',
      'Per-transaction SHAP explanations for audit compliance',
    ],
    caseStudy: {
      research: 'Studied temporal motif patterns in IEEE CIS fraud dataset and GNN approaches for graph-structured financial data.',
      approach: 'Built temporal graphs from transaction sequences, trained GNN for embeddings, stacked XGBoost for final classification.',
      tradeoffs: 'GNN adds latency vs. pure tree models but captures relational fraud rings baseline models cannot detect.',
      optimizations: 'Indexed embeddings in Pinecone for O(1)-like similarity lookup instead of full graph recomputation.',
      learnings: 'Ensemble stacking of graph embeddings with gradient boosting outperforms either model alone on fraud detection.',
      future: 'Real-time streaming graph updates, online learning for concept drift, and production API deployment.',
    },
    tags: ['Python', 'GNN', 'XGBoost', 'SHAP', 'Pinecone', 'Pandas'],
    github: 'https://github.com/Kushal1213/fraud-detection',
    demo: null,
    gradient: 'from-indigo-500/20 via-violet-500/10 to-cyan-500/20',
    icon: '🔗',
  },
  {
    id: 'xeno-analytics',
    featured: true,
    title: 'Xeno Analytics Platform',
    subtitle: 'ML-Powered E-Commerce Intelligence',
    summary:
      'Real-time analytics platform with Random Forest forecasting and K-Means segmentation deployed on a Node.js + MongoDB backend.',
    problem:
      'Merchants lack data-driven inventory planning and customer segmentation from live transaction streams.',
    solution:
      'Built and deployed Random Forest sales forecasting and K-Means customer segmentation models with real-time analytics via event-driven Node.js backend.',
    architecture: {
      frontend: ['Analytics Dashboards', 'Merchant Insights UI'],
      backend: ['Node.js', 'Express.js', 'REST APIs', 'Webhooks'],
      database: ['MongoDB', 'Aggregation Pipelines'],
      deployment: ['Production Model Serving', 'Real-time Event Processing'],
      ai: ['Random Forest', 'K-Means Clustering', 'Model Benchmarking'],
      infrastructure: ['Event-Driven Pipeline', 'Idempotency Keys'],
    },
    features: [
      'Random Forest Sales Forecasting',
      'K-Means Customer Segmentation',
      'Real-time Event Processing',
      'MongoDB Aggregation Pipelines',
      'Multi-Model Benchmarking',
      '5+ RESTful API Endpoints',
    ],
    metrics: [
      { value: '5+', label: 'REST APIs' },
      { value: 'Real-time', label: 'Analytics Pipeline' },
      { value: '0', label: 'Data Loss Events' },
    ],
    challenges: [
      'Processing high-volume webhook events with guaranteed delivery',
      'Selecting optimal ML model from multiple benchmarks on live data',
      'Designing aggregation pipelines for sub-second dashboard queries',
    ],
    results: [
      'Deployed top-performing models to production for merchant analytics',
      'Enabled data-driven inventory planning and targeted marketing',
      'Zero data loss with idempotency keys and retry logic',
    ],
    caseStudy: {
      research: 'Evaluated forecasting and clustering approaches on live merchant transaction data.',
      approach: 'Benchmarked multiple ML models, deployed winners via Node.js API with MongoDB aggregation.',
      tradeoffs: 'Batch model retraining vs. real-time inference — chose periodic retraining for stability.',
      optimizations: 'MongoDB aggregation pipelines for pre-computed dashboard metrics.',
      learnings: 'Production ML requires robust data pipelines before model sophistication.',
      future: 'A/B testing framework, automated retraining triggers, and predictive inventory alerts.',
    },
    tags: ['Python', 'Node.js', 'MongoDB', 'Random Forest', 'K-Means'],
    github: 'https://github.com/Kushal1213/shopify',
    demo: null,
    gradient: 'from-emerald-500/20 via-teal-500/10 to-cyan-500/20',
    icon: '📊',
  },
  {
    id: 'querycraft',
    featured: true,
    title: 'QueryCraft — AI Text-to-SQL',
    subtitle: 'Natural Language Database Queries on GCP',
    summary:
      'AI platform enabling non-technical users to query databases in plain English with schema-aware prompt engineering on Google Cloud.',
    problem:
      'Non-technical stakeholders cannot access structured data without SQL expertise, creating bottlenecks in enterprise analytics.',
    solution:
      'Developed Text-to-SQL system with schema grounding, prompt engineering, and query validation pipelines on Google Cloud AI.',
    architecture: {
      frontend: ['Query Interface', 'Results Visualization'],
      backend: ['Python API', 'Query Validation', 'Schema Parser'],
      database: ['Enterprise DB Schemas', 'Multi-tenant Support'],
      deployment: ['Google Cloud Platform', 'Cloud AI Services'],
      ai: ['LLM Generation', 'RAG', 'Prompt Engineering', 'Schema Grounding'],
      infrastructure: ['Validation Pipeline', 'Hallucination Reduction'],
    },
    features: [
      'Schema-Aware Prompt Engineering',
      'Query Validation Pipeline',
      'Multi-Schema NLP Evaluation',
      'Hallucination Reduction',
      '30% SQL Accuracy Improvement',
      'Enterprise Schema Support',
    ],
    metrics: [
      { value: '30%', label: 'SQL Accuracy Boost' },
      { value: 'GCP', label: 'Cloud Infrastructure' },
      { value: 'Multi', label: 'Schema Evaluation' },
    ],
    challenges: [
      'Preventing hallucinated table/column names in generated SQL',
      'Grounding LLM outputs to diverse enterprise database schemas',
      'Evaluating NLP pipeline accuracy across heterogeneous schemas',
    ],
    results: [
      '30% improvement in SQL generation accuracy over baseline',
      'Validated query execution before surfacing results to users',
      'Evaluated across multiple enterprise database schemas',
    ],
    caseStudy: {
      research: 'Analyzed Text-to-SQL benchmarks and schema grounding techniques for enterprise databases.',
      approach: 'Schema-aware prompts with validation pipeline before query execution.',
      tradeoffs: 'Strict validation reduces false positives but may reject valid edge-case queries.',
      optimizations: 'Schema grounding reduced hallucinated column references significantly.',
      learnings: 'Prompt engineering with schema context is more impactful than model size for SQL accuracy.',
      future: 'Multi-turn conversational queries, query explanation, and fine-tuned domain models.',
    },
    tags: ['Python', 'Google Cloud', 'LLM', 'RAG', 'SQL'],
    github: 'https://github.com/Kushal1213/querycraft',
    demo: null,
    gradient: 'from-violet-500/20 via-purple-500/10 to-fuchsia-500/20',
    icon: '🤖',
  },
  {
    id: 'sleep-oracle',
    featured: false,
    title: 'Sleep Oracle',
    subtitle: 'Health & Lifestyle Prediction System',
    summary:
      'End-to-end ML pipeline predicting Insomnia and Sleep Apnea from 400+ patient records, deployed as a Flask web application.',
    problem:
      'Sleep disorders often go undiagnosed; early detection through health data can improve patient outcomes.',
    solution:
      'Trained Random Forest classifier on 13 engineered features, selected via Precision/Recall/F1 benchmarks, deployed via Flask API.',
    architecture: {
      frontend: ['Flask Web UI', 'Prediction Interface'],
      backend: ['Flask API', 'Model Serving'],
      database: ['400+ Patient Records', 'Feature Store'],
      deployment: ['Flask Web App', 'Real-time Inference'],
      ai: ['Random Forest', 'Feature Engineering', 'Model Selection'],
      infrastructure: ['3-Class Classification', 'Cross-Validation'],
    },
    features: [
      'Random Forest Classifier',
      '13 Engineered Health Features',
      '3-Class Disorder Prediction',
      'Precision/Recall/F1 Selection',
      'Flask Web Deployment',
      'Real-time Risk Scoring',
    ],
    metrics: [
      { value: '400+', label: 'Patient Records' },
      { value: '13', label: 'Engineered Features' },
      { value: '3', label: 'Disorder Classes' },
    ],
    challenges: [
      'Small dataset requiring careful feature engineering and validation',
      'Class imbalance across sleep disorder categories',
      'Selecting optimal model from 3+ baseline comparisons',
    ],
    results: [
      'Best Precision, Recall, and F1 among all evaluated models',
      'Deployed as interactive Flask web application',
      'Real-time sleep disorder risk prediction for end users',
    ],
    caseStudy: {
      research: 'Reviewed sleep disorder classification literature and health feature correlations.',
      approach: 'Feature engineering on lifestyle data, benchmarked 3+ models, deployed winner via Flask.',
      tradeoffs: 'Random Forest chosen over neural nets for interpretability on small dataset.',
      optimizations: 'Feature selection reduced overfitting on limited patient records.',
      learnings: 'Model selection metrics must align with clinical use case (recall for screening).',
      future: 'Larger dataset integration, mobile app, and clinician dashboard.',
    },
    tags: ['Python', 'scikit-learn', 'Flask', 'Pandas', 'Random Forest'],
    github: 'https://github.com/Kushal1213/Sleep-Oracle',
    demo: null,
    gradient: 'from-blue-500/20 via-indigo-500/10 to-violet-500/20',
    icon: '😴',
  },
] as const

export const EXPERIENCE = [
  {
    date: 'Jan 2026 – Present',
    role: 'Open Source Contributor',
    company: 'AMD Lemonade SDK',
    companyUrl: 'https://github.com/lemonade-sdk/lemonade',
    location: 'Remote',
    highlight: true,
    bullets: [
      'Contributed to AMD\'s production LLM inference server — backend improvements, documentation, and test coverage.',
      'Merged 2 PRs into main: production endpoint test coverage + LangChain integration documentation.',
      'Raised 5 actionable issues identifying bugs, silent test shadowing, and race condition gaps — 3 fixed by core team.',
      'Proposed CI architecture improvement (env-var gated integration tests) adopted by maintainers.',
    ],
  },
  {
    date: 'May 2025 – Jul 2025',
    role: 'Generative AI Trainee',
    company: 'SmartBridge × Google Cloud',
    companyUrl: null,
    location: 'Remote',
    highlight: false,
    bullets: [
      'Selected for competitive externship building production Generative AI applications on Google Cloud.',
      'Architected QueryCraft — AI Text-to-SQL platform enabling natural language database queries.',
      'Led prompt engineering and schema grounding, achieving 30% SQL accuracy improvement over baseline.',
      'Implemented query validation pipelines reducing hallucinated column/table names before execution.',
    ],
  },
] as const

export const SKILL_CATEGORIES = [
  {
    label: 'Languages',
    skills: [
      { name: 'Python', level: 'Built multiple projects' },
      { name: 'SQL', level: 'Used in production' },
      { name: 'JavaScript', level: 'Hands-on experience' },
      { name: 'TypeScript', level: 'Hands-on experience' },
      { name: 'C++', level: 'Open source contributions' },
    ],
  },
  {
    label: 'AI / ML',
    skills: [
      { name: 'Graph Neural Networks', level: 'Built multiple projects' },
      { name: 'XGBoost', level: 'Used in production' },
      { name: 'Random Forest', level: 'Deployed to production' },
      { name: 'scikit-learn', level: 'Built multiple projects' },
      { name: 'LangChain', level: 'Hands-on experience' },
      { name: 'RAG', level: 'Built multiple projects' },
      { name: 'SHAP / XAI', level: 'Used in production' },
    ],
  },
  {
    label: 'Generative AI',
    skills: [
      { name: 'LLMs', level: 'Built multiple projects' },
      { name: 'Prompt Engineering', level: 'Used in production' },
      { name: 'Text-to-SQL', level: 'Built multiple projects' },
      { name: 'Embeddings', level: 'Hands-on experience' },
      { name: 'Vector Databases', level: 'Used in production' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', level: 'Deployed to production' },
      { name: 'Express.js', level: 'Built multiple projects' },
      { name: 'Flask', level: 'Deployed to production' },
      { name: 'REST APIs', level: 'Built multiple projects' },
      { name: 'Webhooks', level: 'Used in production' },
    ],
  },
  {
    label: 'Frontend',
    skills: [
      { name: 'React.js', level: 'Built multiple projects' },
      { name: 'Next.js', level: 'Built multiple projects' },
      { name: 'TailwindCSS', level: 'Hands-on experience' },
      { name: 'Framer Motion', level: 'Hands-on experience' },
    ],
  },
  {
    label: 'Databases',
    skills: [
      { name: 'MongoDB', level: 'Deployed to production' },
      { name: 'MySQL', level: 'Hands-on experience' },
      { name: 'SQLite', level: 'Built multiple projects' },
      { name: 'Pinecone', level: 'Used in production' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 'Hands-on experience' },
      { name: 'Google Cloud', level: 'Used in production' },
      { name: 'Oracle OCI', level: 'Certified' },
      { name: 'Docker', level: 'Hands-on experience' },
      { name: 'CI/CD', level: 'Open source contributions' },
    ],
  },
  {
    label: 'Developer Tools',
    skills: [
      { name: 'Git', level: 'Used in production' },
      { name: 'GitHub', level: '36 repositories' },
      { name: 'Postman', level: 'Hands-on experience' },
      { name: 'VS Code', level: 'Daily driver' },
      { name: 'Linux', level: 'Hands-on experience' },
    ],
  },
] as const

export const EDUCATION = {
  degree: 'B.Tech Computer Science Engineering',
  specialization: 'Minors in Artificial Intelligence & Robotics',
  institution: 'Vellore Institute of Technology (VIT) Chennai',
  location: 'Tamil Nadu, India',
  period: '2022 – 2026',
  graduation: 'Expected 2026',
  cgpa: '7.92',
  coursework: [
    'Operating Systems',
    'Database Management Systems',
    'Computer Networks',
    'Object-Oriented Programming',
    'Data Structures & Algorithms',
    'Machine Learning',
    'Software Engineering',
    'Artificial Intelligence',
    'Deep Learning',
    'Cloud Computing',
  ],
} as const

export const LEETCODE = {
  username: 'kushal_choudhary',
  profileUrl: 'https://leetcode.com/u/kushal_choudhary/',
  total: 282,
  easy: 166,
  medium: 108,
  hard: 8,
  ranking: 524170,
} as const

export const GITHUB = {
  username: 'Kushal1213',
  profileUrl: 'https://github.com/Kushal1213',
  publicRepos: 36,
  avatarUrl: 'https://avatars.githubusercontent.com/u/132321061?v=4',
  pinnedRepos: [
    {
      name: 'fraud-detection',
      fullName: 'Kushal1213/fraud-detection',
      description: 'Temporal Motif-Aware Fraud Detection using GNN + XGBoost on 500K+ transactions.',
      language: 'Python',
      url: 'https://github.com/Kushal1213/fraud-detection',
    },
    {
      name: 'querycraft',
      fullName: 'Kushal1213/querycraft',
      description: 'AI-powered Text-to-SQL platform on Google Cloud with schema-aware prompt engineering.',
      language: 'Python',
      url: 'https://github.com/Kushal1213/querycraft',
    },
    {
      name: 'Sleep-Oracle',
      fullName: 'Kushal1213/Sleep-Oracle',
      description: 'ML pipeline for sleep disorder prediction deployed as Flask web application.',
      language: 'Python',
      url: 'https://github.com/Kushal1213/Sleep-Oracle',
    },
    {
      name: 'shopify',
      fullName: 'Kushal1213/shopify',
      description: 'Xeno Analytics — real-time e-commerce analytics with ML forecasting and segmentation.',
      language: 'JavaScript',
      url: 'https://github.com/Kushal1213/shopify',
    },
  ],
} as const

export const OPEN_SOURCE = {
  repo: 'lemonade-sdk/lemonade',
  repoUrl: 'https://github.com/lemonade-sdk/lemonade',
  contributions: [
    {
      type: 'pr' as const,
      title: 'GET /v1/pull/variants test coverage',
      description: 'Added pytest cases covering all code paths for the production endpoint.',
      status: 'merged',
    },
    {
      type: 'pr' as const,
      title: 'LangChain integration documentation',
      description: 'Comprehensive docs with setup instructions and usage examples.',
      status: 'merged',
    },
    {
      type: 'issue' as const,
      title: 'Silent test shadowing in test suite',
      description: 'Identified tests hiding potential bugs from CI coverage reports.',
      status: 'fixed',
    },
    {
      type: 'issue' as const,
      title: 'Race condition detection gaps',
      description: 'Raised missing concurrent execution detection in integration tests.',
      status: 'fixed',
    },
  ],
  stats: [
    { value: '2', label: 'PRs Merged' },
    { value: '5', label: 'Issues Raised' },
    { value: '3', label: 'Issues Fixed' },
  ],
} as const

export const ACHIEVEMENTS = [
  {
    category: 'Certifications',
    items: [
      {
        title: 'OCI 2025 Certified Data Science Professional',
        issuer: 'Oracle Cloud Infrastructure',
        year: '2025',
      },
      {
        title: 'OCI Generative AI Professional',
        issuer: 'Oracle Cloud Infrastructure',
        year: '2025',
      },
      {
        title: 'OCI AI Foundations Associate',
        issuer: 'Oracle Cloud Infrastructure',
        year: '2024',
      },
      {
        title: 'Oracle Agentic AI Certified Foundations Associate',
        issuer: 'Oracle Cloud Infrastructure',
        year: '2025',
      },
      {
        title: 'Google Cloud Skills Boost — Generative AI Learning Path',
        issuer: 'Google Cloud',
        year: '2025',
      },
    ],
  },
  {
    category: 'Open Source',
    items: [
      {
        title: 'AMD Lemonade SDK Contributor',
        issuer: 'AMD · lemonade-sdk/lemonade',
        year: '2026',
      },
    ],
  },
  {
    category: 'Academic',
    items: [
      {
        title: 'B.Tech CSE with AI & Robotics Minor',
        issuer: 'VIT Chennai · CGPA 7.92',
        year: '2026',
      },
    ],
  },
] as const

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
] as const
