# sveltekit-auth-prisma

Sveltekit user auth template using lucia, prisma, and pico css
[TypeScript](https://www.typescriptlang.org/), [Svelte](https://svelte.dev), [SvelteKit](https://kit.svelte.dev), [Lucia](https://lucia-auth.com/), [Prisma](https://www.prisma.io/), [SQLite](https://www.sqlite.org/), and [Pico CSS](https://picocss.com/).

## Get started

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/moolenbeek/sveltekit-auth.git sveltekit-auth
cd sveltekit-auth
```

If you would like to remove existing `.git` repository and re-initialize Git locally:

```bash
rm -rf .git
git init
```

Once you've cloned the project, install dependencies with NPM:

```bash
npm install # or `npm i`
```

Add the following to your `.env`

```bash
DATABASE_URL="file:./dev.db"
```

Migrate database

```bash
npx prisma migrate dev --name init
```

Start development server:

```bash
npm run dev
```
