This is a project created by following the tutorial: [Next.js 15 Crash Course | Build and Deploy a Production-Ready Full Stack App](https://www.youtube.com/watch?v=Zq5fmkH0T78).<br />
It's a [Next.js](https://nextjs.org) project made from [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).<br />


## Getting Started

Run the development server with:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Useful VS Code Extensions
- [ES7+ React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
  - Use `rafce` in a new file for React functional component snippet

## Video Notes
- Part 0: Initial project setup and folder structure (0:00 - 17:00)
- Part 1: "When to use Server and Client Components?" (17:00 - 22:30)
	- Page mentioned in the video: [https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)
- Part 2.1: Using the page file (22:30 - 30:15)
	- (extra) I used [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/) for the dummy data API
- Part 2.2: Using the layout file (30:15 - 33:08)
- Part 2.3: Using Route Groups (33:08 - 36:04)
- Part 2.4: Loading files (36:04 - 40:23)
- Part 3.1: Server side - Data fetching (40:23 - 46:46)
- Part 3.2: Server side - Incremental Static Regeneration (ISR) (46:46 - 52:00)
	- (extra) I used [https://api.pexels.com/v1/](https://api.pexels.com/v1/) for the photos API
- Part 3.3: Server side - Suspense (PPR) (52:00 - 52:10)
	- (extra) I created an AlbumGrid component wrapped in Suspense to try Partial Pre-rendering (PPR)
