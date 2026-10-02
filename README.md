# QA E2E Lab

A hands-on end-to-end test automation project built with **Cypress** and **TypeScript**.

The goal of this repository is to practice and reinforce core test automation concepts through a small local web application and progressively build a clean, maintainable Cypress test suite.

## Tech Stack

- **Cypress**
- **TypeScript**
- **Vite**
- **HTML / CSS**
- **Git & GitHub**

## Project Goals

This project focuses on practical E2E automation fundamentals, including:

- Writing and organizing Cypress tests
- Working with stable selectors
- Cypress command chaining
- Assertions and automatic retry behavior
- Positive and negative test scenarios
- Test isolation
- Cypress hooks such as `beforeEach`
- Aliases
- Fixtures and test data
- Custom commands
- Network interception with `cy.intercept()`
- API testing with Cypress
- Improving test structure and maintainability
- Practicing TypeScript in a real automation project

The project is intentionally kept small so that the focus stays on **test automation concepts rather than application complexity**.


## Getting Started

### Prerequisites

Make sure you have a recent Node.js version installed.

Check your installation with:

```bash
node -v
npm -v
```

This project uses **Node.js 24** during development.

### Install dependencies

Clone the repository and install dependencies:

```bash
git clone <https://github.com/visekrunamilica/qa-e2e-lab>
cd qa-e2e-lab
npm install
```

## Run the Application

Start the local development server:

```bash
npm run dev
```

The application should be available at:

```text
http://localhost:5173
```

Test credentials:

```text
Email: qa@example.com
Password: cypress123
```

Keep the development server running while executing the Cypress tests.

## Run Cypress

Open Cypress in interactive mode:

```bash
npm run cy:open
```

Choose **E2E Testing**, select an available browser, and run the desired spec.

Tests can also be executed from the command line with:

```bash
npx cypress run
```


## Testing Approach

Tests are written with a few important principles in mind:

- Tests should be independent from one another.
- Each test should start from a known application state.
- Stable `data-*` attributes are preferred over styling-based selectors.
- Hard waits such as `cy.wait(3000)` should be avoided when Cypress retry behavior can be used instead.
- Assertions should validate meaningful user-visible behavior.
- Reusable abstractions should be introduced only when they make tests easier to understand and maintain.

## Roadmap

As the project grows, the test suite will cover:

- Fixtures and typed test data
- Form validation
- Custom Cypress commands
- Reusable helper functions
- API requests with `cy.request()`
- Network interception and mocking with `cy.intercept()`
- Loading and error states
- Task management scenarios
- More advanced TypeScript usage
- Test refactoring and maintainable project structure

## Why This Project Exists

This repository is a practical sandbox for strengthening Cypress and TypeScript skills through incremental, real-world automation exercises.

Rather than starting with a large automation framework, the project grows step by step—from basic selectors and assertions to reusable test architecture, API testing, and network control.

## Author

Created as a hands-on QA automation learning and practice project.