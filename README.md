# MidiPredict

MidiPredict is a front-end prototype for a smart symptom checker. It lets users enter symptoms as tags, receive AI-inspired diagnostic insights, and review a full history with analytics. The app is designed with a calm medical UI, includes ethical safety notices, and saves diagnoses to local storage for persistence.

## Key Features
- **Smart Symptom Checker**: Tag-based input, AI-style analysis, condition prediction, confidence score, explanations, action steps, medications, and precautions.
- **Diagnosis History**: Stored results with timestamps, expandable detail views, and a chart of the top 5 diagnoses.
- **Professional UI/UX**: Clean teal/blue palette, responsive layout, and Framer Motion animations.
- **Safety Features**: Prominent medical disclaimer and medication usage notice.

## Tech Stack
- **Frontend**: React + Vite + Tailwind CSS
- **Animations**: Framer Motion
- **Data Visualization**: Recharts
- **Storage**: LocalStorage (can be replaced with a database later)

## Setup Guide

### Prerequisites
- Node.js 18+ and npm

### Install
```bash
npm install
```

### Run Locally
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure
```
src/
  components/    # UI components
  pages/         # Home, Diagnose, History
  utils/         # Analysis + storage utilities
```

## Notes for Major Project
- Replace the `analyzeSymptoms` mock with a real LLM API call.
- Swap LocalStorage for a database-backed API to persist diagnoses.
- Add authentication if you need user-specific history.
- Add clinical guardrails and additional disclaimers before deployment.

## Disclaimer
This project provides AI-assisted insights and is **not** a medical device. It does **not** replace professional medical advice. Always consult a qualified healthcare provider.
