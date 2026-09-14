# The Subreddit Vibe Check

A full-stack web application that analyzes the overall sentiment of a subreddit by examining the titles of its hottest posts.

## Overview

The Subreddit Vibe Check allows users to enter a subreddit and view its top 50 hot posts along with sentiment analysis of each post title.

The dashboard provides a quick overview of the community's mood through:

- Positive, neutral, and negative sentiment counts
- Sentiment percentages
- Visual sentiment distribution
- Individual post sentiment labels
- Post scores and comment counts
- Direct links to original posts
- Responsive dashboard interface

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Axios
- Sentiment.js
- CSS

### Backend
- Node.js
- Express.js
- TypeScript
- Axios
- REST API

## Project Structure

```text
subreddit-vibe-check/
├── backend/
│   ├── controllers/
│   │   └── redditcontroller.ts
│   ├── middleware/
│   │   └── errorhandler.ts
│   ├── routes/
│   │   └── redditroute.ts
│   ├── services/
│   │   └── redditservice.ts
│   ├── types/
│   │   └── reddit.ts
│   ├── app.ts
│   └── server.ts
│
└── frontend/
    └── src/
        ├── components/
        │   ├── postcard.tsx
        │   ├── sentimentchart.tsx
        │   └── summary.tsx
        ├── services/
        │   ├── api.ts
        │   └── sentiment.ts
        ├── types/
        │   ├── post.ts
        │   └── sentiment.ts
        ├── App.tsx
        ├── App.css
        └── main.tsx

