# Clever Frontend Challenge

![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

## Introduction

This project was developed based on the Clever Frontend Challenge. I've used Next.js, error handling with error boundaries, and unit/integration tests with Vitest and React Testing Library. This project was bootstraped using [pnpm](https://pnpm.io/).

## Installation

First, we should install the project dependencies. To do that, we use the following command:

```bash
npm install
# or
yarn
# or
pnpm install
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
#or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Every page in the application is inside the `pages` folder.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Testing

You can check for tests using the `test` command:

```bash
npm run test
# or
yarn test
# or
pnpm test
```

This should start Vitest and run all tests inside the `__tests__` folder. If you need to run in watch mode instead, just run `test:watch`:

```bash
npm run test:watch
# or
yarn test:watch
# or
pnpm test:watch
```

## Production server

If you wish to run the production server, first we need to build the project:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Then, just run the start command:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

The server should be up in [http://localhost:3000](http://localhost:3000). If it isn't, check if there isn't any applications currently running on port 3000. Alternatively, you can always provide the port with the `--port` flag:

```bash
npm run start --port 1234
# or
yarn start --port 1234
# or
pnpm start --port 1234
```

Should open the server on port 1234 instead.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
