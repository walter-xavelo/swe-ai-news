<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# AI Developer News Terminal

An AI Developer News aggregator featuring a retro, terminal-style user interface. This repository serves as the frontend for displaying news articles automatically updated by an AI agent.

## Current UI features

- news feed with tag filters
- visible news counter on the homepage
- AI summary panel toggled from a button on the homepage
- summary content sourced from `src/content/summary.md`

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Content notes

- news entries live in `src/content/news/`
- the AI summary block is defined in `src/content/summary.md`
- the homepage automatically counts all items in the `news` collection
