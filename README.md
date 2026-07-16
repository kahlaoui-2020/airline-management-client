# Airline Client

This project is the frontend for an airline management system built with Vue 3, TypeScript, Vite, Vuetify, Pinia, and Vue Router.

## Overview

The client provides a dashboard-style interface for managing airline-related entities such as aircraft, aircraft models, and manufacturers. It uses a modular structure with dedicated stores, services, and reusable UI components.

## Features

- Aircraft management screens
- Aircraft model management
- Manufacturer management
- Reusable dialog-based confirmation flows
- Type-safe API integration with shared services
- Modern UI built with Vuetify

## Tech Stack

- Vue 3
- TypeScript
- Vite
- Vuetify
- Pinia
- Vue Router
- Axios

## Prerequisites

- Node.js 22 or newer
- Bun (recommended for local development)

## Getting Started

Install dependencies:

```sh
bun install
```

Start the development server:

```sh
bun dev
```

Then open http://localhost:5173 in your browser.

## Available Scripts

- `bun dev` — start the Vite development server
- `bun run build` — type-check and build the production bundle
- `bun run type-check` — run Vue TypeScript checks
- `bun run lint` — lint the project
- `bun run format` — format the source files

## Project Structure

- `src/components` — shared UI components
- `src/modules` — feature-based modules for aircraft and manufacturers
- `src/plugins` — router, Vuetify, and dialog plugin setup
- `src/shared` — shared API helpers and utilities
- `src/stores` — Pinia stores

## Notes

The app expects the corresponding backend API to be available for data operations. API configuration can be adjusted in the shared API layer under `src/shared/api`.
