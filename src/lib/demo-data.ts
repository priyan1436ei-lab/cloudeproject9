export type DocumentItem = {
  id: string;
  title: string;
  category: string;
  summary: string;
  status: 'COMPLETED' | 'PROCESSING' | 'FAILED';
  topics: string[];
  concepts: number;
  connections: number;
  priority: string;
};

export type KnowledgeArea = {
  name: string;
  score: number;
  topics: string[];
};

export type KnowledgeGap = {
  topic: string;
  reason: string;
  relatedTopics: string[];
  suggestedTopics: string[];
};

export type SearchResult = {
  type: 'Project' | 'Document' | 'Concept' | 'Skill' | 'Topic';
  title: string;
  description: string;
  relevance: number;
};

export const documents: DocumentItem[] = [
  {
    id: 'dbms-unit-4',
    title: 'DBMS Unit 4.pdf',
    category: 'Academic',
    summary: 'Transaction management, ACID properties, and serializability in relational databases.',
    status: 'COMPLETED',
    topics: ['DBMS', 'Transactions', 'ACID', 'Serializability'],
    concepts: 27,
    connections: 18,
    priority: 'High',
  },
  {
    id: 'database-notes',
    title: 'Database Notes.pdf',
    category: 'Academic',
    summary: 'Overview of normalization, indexing, SQL, and query optimization.',
    status: 'COMPLETED',
    topics: ['SQL', 'Normalization', 'Indexing', 'Query Optimization'],
    concepts: 31,
    connections: 24,
    priority: 'High',
  },
  {
    id: 'nextjs-firebase',
    title: 'Next.js + Firebase Notes.pdf',
    category: 'Project',
    summary: 'Full-stack application development using Next.js, Firebase, auth, and storage services.',
    status: 'COMPLETED',
    topics: ['Next.js', 'Firebase', 'Authentication', 'Firestore'],
    concepts: 22,
    connections: 19,
    priority: 'High',
  },
  {
    id: 'ml-roadmap',
    title: 'Machine Learning Roadmap.pdf',
    category: 'Research',
    summary: 'Core machine learning concepts including supervised learning and feature engineering.',
    status: 'PROCESSING',
    topics: ['Machine Learning', 'Python', 'Model Evaluation'],
    concepts: 18,
    connections: 14,
    priority: 'Medium',
  },
  {
    id: 'cloud-diary',
    title: 'Cloud Fundamentals.pdf',
    category: 'Academic',
    summary: 'Cloud architecture fundamentals, compute services, and deployment patterns.',
    status: 'COMPLETED',
    topics: ['Cloud Computing', 'AWS', 'Scalability'],
    concepts: 25,
    connections: 17,
    priority: 'Medium',
  },
  {
    id: 'uiux-brief',
    title: 'UI/UX Case Study.pdf',
    category: 'Career',
    summary: 'User-centered design process, wireframes, usability testing, and design thinking.',
    status: 'COMPLETED',
    topics: ['UI/UX', 'Figma', 'Usability', 'Design Systems'],
    concepts: 20,
    connections: 15,
    priority: 'Medium',
  },
];

export const knowledgeAreas: KnowledgeArea[] = [
  { name: 'Programming', score: 84, topics: ['Python', 'JavaScript', 'TypeScript', 'Next.js'] },
  { name: 'AI/ML', score: 61, topics: ['Machine Learning', 'NNs', 'Evaluation', 'Embeddings'] },
  { name: 'Cloud', score: 91, topics: ['Firebase', 'Architecture', 'Storage', 'Scalability'] },
  { name: 'Database', score: 82, topics: ['DBMS', 'SQL', 'Normalization', 'Transactions'] },
  { name: 'UI/UX', score: 76, topics: ['Figma', 'Usability', 'Prototyping', 'Research'] },
];

export const knowledgeGaps: KnowledgeGap[] = [
  {
    topic: 'Query Optimization',
    reason: 'You have several connected database concepts, but limited material related to query optimization and execution plans.',
    relatedTopics: ['SQL', 'Indexing', 'Transactions'],
    suggestedTopics: ['Query Execution Plans', 'Cost-Based Optimization', 'Index Selection'],
  },
  {
    topic: 'Deep Learning',
    reason: 'Your ML materials are present, but the coverage does not yet include model architecture and optimization depth.',
    relatedTopics: ['Machine Learning', 'Python', 'Model Evaluation'],
    suggestedTopics: ['Neural Networks', 'Backpropagation', 'Hyperparameter Tuning'],
  },
  {
    topic: 'Microservices Design',
    reason: 'Cloud and app architecture coverage exists, but service decomposition and distributed boundaries are lightly represented.',
    relatedTopics: ['Cloud Computing', 'Next.js', 'Firebase'],
    suggestedTopics: ['API Design', 'Service Boundaries', 'Resilience Patterns'],
  },
];

export const dashboardStats = {
  documents: 48,
  concepts: 342,
  connections: 518,
  knowledgeAreas: 9,
};

export const adminStats = [
  { label: 'Total users', value: 124 },
  { label: 'Documents', value: 1480 },
  { label: 'Failed jobs', value: 6 },
  { label: 'AI requests', value: 28400 },
];

export const graphNodes = [
  { id: 'dbms', label: 'DBMS', type: 'Topic', x: 180, y: 160, color: '#3b82f6' },
  { id: 'sql', label: 'SQL', type: 'Topic', x: 80, y: 280, color: '#60a5fa' },
  { id: 'normalization', label: 'Normalization', type: 'Concept', x: 220, y: 320, color: '#8b5cf6' },
  { id: 'transactions', label: 'Transactions', type: 'Concept', x: 340, y: 250, color: '#a78bfa' },
  { id: 'indexing', label: 'Indexing', type: 'Skill', x: 460, y: 150, color: '#10b981' },
  { id: 'nextjs', label: 'Next.js', type: 'Technology', x: 660, y: 180, color: '#f59e0b' },
  { id: 'firebase', label: 'Firebase', type: 'Technology', x: 780, y: 280, color: '#f97316' },
  { id: 'finfam', label: 'FinFam', type: 'Project', x: 670, y: 430, color: '#f43f5e' },
  { id: 'cloudmemory', label: 'CloudMemory AI', type: 'Project', x: 500, y: 470, color: '#38bdf8' },
];

export const graphEdges = [
  { source: 'dbms', target: 'sql', relation: 'PART_OF' },
  { source: 'dbms', target: 'normalization', relation: 'PART_OF' },
  { source: 'dbms', target: 'transactions', relation: 'PART_OF' },
  { source: 'dbms', target: 'indexing', relation: 'PART_OF' },
  { source: 'nextjs', target: 'finfam', relation: 'USED_IN' },
  { source: 'firebase', target: 'finfam', relation: 'USED_BY' },
  { source: 'cloudmemory', target: 'firebase', relation: 'BUILT_WITH' },
  { source: 'cloudmemory', target: 'nextjs', relation: 'BUILT_WITH' },
];

export const flashcards = [
  { question: 'What does ACID stand for?', answer: 'Atomicity, Consistency, Isolation, Durability.' },
  { question: 'Why is normalization important?', answer: 'It reduces redundancy and improves data integrity in relational databases.' },
  { question: 'What is a primary role of indexing?', answer: 'To improve query performance by speeding access to selected rows.' },
];

export const quiz = [
  { question: 'Which property ensures a transaction is all-or-nothing?', options: ['Atomicity', 'Consistency', 'Durability', 'Isolation'] },
  { question: 'What does SQL stand for?', options: ['Structured Query Language', 'Simple Query Logic', 'System Query Language', 'Storage Query Language'] },
  { question: 'Which database concept reduces redundancy?', options: ['Normalization', 'Caching', 'Encryption', 'Pagination'] },
];

export const studyPath = ['DBMS', 'SQL', 'Normalization', 'Transactions', 'Indexing', 'Query Optimization'];

export const searchResults: SearchResult[] = [
  { type: 'Concept', title: 'Normalization', description: 'Technique for reducing redundancy in relational databases.', relevance: 96 },
  { type: 'Document', title: 'Database Notes.pdf', description: 'Covers normalization and relational schema design.', relevance: 91 },
  { type: 'Project', title: 'FinFam', description: 'A student project built with Next.js and Firebase.', relevance: 88 },
  { type: 'Skill', title: 'Firebase Auth', description: 'Authentication and secure user management in Firebase.', relevance: 82 },
];

export const answerExample = {
  answer: 'ACID properties ensure reliable transaction processing. Atomicity guarantees all steps succeed or none do, consistency maintains valid database state, isolation prevents concurrent interference, and durability ensures committed results persist.',
  sources: ['DBMS Unit 4.pdf - Page 12', 'Transaction Notes.pdf - Page 4'],
  relatedConcepts: ['Transactions', 'Serializability', 'Relational Integrity'],
  confidence: 'High',
};
