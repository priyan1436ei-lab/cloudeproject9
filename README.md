# CloudMemory AI

CloudMemory AI: A Cloud-Based Personal Knowledge Graph and Intelligent Document Retrieval System

## Tagline
Turn Your Documents Into Knowledge.

## Problem
Students and knowledge workers store important information across PDFs, DOCX files, presentations, notes, project reports, certifications, and personal materials. Traditional cloud storage keeps files separate and disconnected, making it difficult to search, reason, and discover missing knowledge.

## Solution
CloudMemory AI converts scattered documents into a connected personal knowledge graph. It extracts concepts, builds relationships, indexes embeddings, enables semantic search, answers questions using RAG, and surfaces possible knowledge gaps.

## Features
- Document upload and processing pipeline
- Document classification
- AI-based entity extraction
- Relationship extraction and graph construction
- Semantic search
- AI assistant with source citations
- Knowledge gap detection
- Study mode and quiz/flashcard generation
- Admin dashboard
- Demo mode for offline/local development

## Tech stack
- Next.js 14
- TypeScript
- Tailwind CSS
- Firebase-ready configuration
- Lucide icons
- Framer Motion
- Mock AI and demo data for local development

## Architecture overview
- Frontend: Next.js application with professional dashboard UI
- Data layer: Firebase-ready schema and mock demo data
- AI: LLM abstraction layer with mock provider fallback
- Retrieval: semantic search and RAG using local mock results
- Knowledge graph: document and concept relationship modeling

## Getting started
1. Install dependencies:
   npm install
2. Create a local `.env.local` file from `.env.example`.
3. Start the development server:
   npm run dev
4. Open http://localhost:3000

## Demo mode
The project is configured to run in demo mode without external AI credentials by default.

## Security and privacy
- User data should be isolated with Firebase auth + security rules
- Sensitive credentials must remain in environment variables, never committed to Git
- Admin access does not grant access to private user document contents

## Notes
This project includes a functional demo experience, mock AI logic, and a production-oriented architecture designed for extension to Firebase, vector databases, and external AI providers.
