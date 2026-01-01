# Learn Tanstack Start In 60 Minutes

https://www.youtube.com/watch?v=KsHbs5RMVYU

```sh
npm create @tanstack/start@latest tanstack-start-todo-list
```

## Setup shadcn

https://ui.shadcn.com/docs/installation/vite

```sh
npx shadcn@latest init

npx shadcn@latest add badge button empty table checkbox action-button
```

## Setup drizzle

https://orm.drizzle.team/docs/get-started/postgresql-new

```sh
npm i drizzle-orm pg dotenv
npm i -D drizzle-kit @types/pg

```

Modify .cta.json

```json
  "addOnOptions": {
    "drizzle": { "database": "postgresql" }
  },
```

Create drizzle.config.ts

```js
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})
```

Add script

```json
    "db:generate": "drizzle-kit generate",
    "db:migrate": "drizzle-kit migrate",
    "db:push": "drizzle-kit push",
    "db:pull": "drizzle-kit pull",
    "db:studio": "drizzle-kit studio"
```
