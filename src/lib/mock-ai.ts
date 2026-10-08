import { answerExample, documents, knowledgeAreas, knowledgeGaps, searchResults } from './demo-data';

export function searchKnowledge(query: string) {
  const normalized = query.toLowerCase();

  if (!normalized.trim()) {
    return searchResults;
  }

  return searchResults.filter((result) => {
    const haystack = `${result.title} ${result.description} ${result.type}`.toLowerCase();
    return haystack.includes(normalized);
  });
}

export function askAssistant(question: string) {
  const lower = question.toLowerCase();
  const isDbms = lower.includes('acid') || lower.includes('transaction') || lower.includes('dbms');

  if (isDbms) {
    return answerExample;
  }

  return {
    answer: 'I could not find enough information in your knowledge base to answer this confidently. Please upload more relevant documents or ask a question connected to your indexed materials.',
    sources: ['Knowledge base is limited for this topic'],
    relatedConcepts: ['General Concepts'],
    confidence: 'Low',
  };
}

export function getKnowledgeGaps() {
  return knowledgeGaps;
}

export function getDashboardAnalytics() {
  return {
    documents: documents.length,
    areas: knowledgeAreas.length,
    gaps: knowledgeGaps.length,
  };
}

export function getDemoSeed() {
  return {
    documents,
    knowledgeAreas,
    knowledgeGaps,
    searchResults,
  };
}
