# Laser Guided Job Seeker

A React single-page app that queries the Adzuna Jobs API to find roles by keyword, location, and minimum salary, then presents the results with company, location, salary floor, and links back to the original listing.

## Features
- Search by keyword, location, and minimum salary slider.
- Adzuna-powered results (20 per search) with deep links to each posting.
- Sanitized HTML descriptions via `dompurify`.
- Loading indicator wired through `react-promise-tracker`.

## Tech Stack
- React 17 (Create React App)
- react-promise-tracker
- dompurify

## Getting Started
Prerequisite: Node 14+ and npm.

1) Install deps  
`npm install`

2) Run the dev server  
`npm start`  
The app starts on `http://localhost:3000`.

3) Run tests (CRA defaults)  
`npm test`

4) Build for production  
`npm run build`

## API Configuration
Provide your Adzuna credentials via environment variables (Create React App requires the `REACT_APP_` prefix):
- `REACT_APP_ADZUNA_APP_ID`
- `REACT_APP_ADZUNA_API_KEY`

Create a `.env` file in the project root (do not commit it) and add:
```
REACT_APP_ADZUNA_APP_ID=your-adzuna-app-id
REACT_APP_ADZUNA_API_KEY=your-adzuna-api-key
```

The app will throw a clear error if these are missing at runtime.

## Project Structure
- `src/App.js` — main app shell; wires search input to results list.
- `src/Components/JobsSearch.js` — search form and salary slider.
- `src/Components/JobsList.js` / `src/Components/Jobs.js` — render result cards and sanitize descriptions.
- `src/Util/jobApi.js` — Adzuna fetch wrapper.

## Notes
- Built assets live under `build/` after `npm run build`.
- Job data comes from Adzuna’s public API; ensure your usage complies with their terms.
