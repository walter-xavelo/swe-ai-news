# AI Developer News Terminal

An AI Developer News aggregator featuring a retro, terminal-style user interface. This repository serves as the frontend for displaying news articles automatically updated by an AI agent.

## Current UI features

- news feed with tag filters
- visible news counter on the homepage
- AI summary modal triggered from a button on the homepage
- animated open/close behavior for the summary panel
- visible "last updated" timestamp for the summary
- summary content sourced from `src/content/summary.md`

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`
3. Before pushing changes, verify the build:
   `npm run build`

## Content notes

- news entries live in `src/content/news/`
- the AI summary block is defined in `src/content/summary.md`
- the homepage automatically counts all items in the `news` collection
- news should be capped at **3 items per day**

## CI

This repo now includes a GitHub Actions workflow that runs on pushes and pull requests to `main` and verifies:

- dependency installation
- production build (`npm run build`)
