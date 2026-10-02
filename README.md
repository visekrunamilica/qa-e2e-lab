# QA E2E Lab — Cypress + TypeScript + Playwright

Mali projekat za obnavljanje Cypress-a i TypeScript-a, uz paralelno poređenje sa Playwright-om.

## Šta je unutra

- mala Vite + TypeScript aplikacija
- login ekran
- jednostavna lista taskova
- Cypress E2E testovi
- isti login scenario u Playwright-u
- fixture koji ćemo koristiti u sledećoj lekciji

## Preduslovi

Koristi Node.js 22.x, 24.x ili 26.x+ zbog Cypress 16 zahteva.

Proveri:

```bash
node -v
npm -v
```

## Instalacija

```bash
npm install
npx playwright install
```

## Pokreni aplikaciju

```bash
npm run dev
```

Otvori:

```text
http://localhost:5173
```

Demo nalog:

```text
email: qa@example.com
password: cypress123
```

## Cypress

Dok aplikacija radi u jednom terminalu:

```bash
npm run cy:open
```

ili headless:

```bash
npm run cy:run
```

Počni od:

```text
cypress/e2e/01-login.cy.ts
```

## Playwright

Playwright sam pokreće Vite dev server preko `webServer` podešavanja:

```bash
npm run pw:test
```

UI mode:

```bash
npm run pw:ui
```

Počni od:

```text
playwright/tests/01-login.spec.ts
```

## Lesson 01 — šta gledamo prvo

1. `src/main.ts` — osnovni TypeScript: `type`, `interface`, union tipovi, generički `querySelector`.
2. `cypress/e2e/01-login.cy.ts` — `describe`, `it`, `cy.visit`, `cy.get`, `type`, `click`, `should`.
3. `playwright/tests/01-login.spec.ts` — isti test sa `async/await`, `page` i `expect`.
4. Poređenje Cypress command chain-a sa Playwright Promise/async modelom.

## Sledeće lekcije

Planirano je da na istom projektu dodamo:

- Cypress fixtures
- `beforeEach`
- custom commands
- TypeScript modele
- API pozive
- `cy.intercept()`
- aliases i `cy.wait()`
- negative login scenario
- Page Object primer, ali tek kada vidimo zašto nam treba
- Playwright fixtures i `page.route()`

Nemoj unapred refaktorisati projekat. Namerno je jednostavan da bismo videli osnove pre apstrakcija.
