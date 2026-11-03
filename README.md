# football-app-demo

A premium, white-label football club experience for the web. The prototype presents Apex Football Club across membership, live matchday, merchandise, mobile tickets, and an in-app AI assistant.

## What is included

- Responsive desktop presentation with a realistic mobile device frame
- Full-viewport mobile experience without the mock device chrome
- Home feed, live Match Centre, digital fan ID, official store, ticket wallet, and AI assistant
- Interactive voting, product options, bag, one-tap checkout, ticket wallet, official ticketing hand-off, and sample AI conversations
- Local React state only—no backend services or external runtime APIs
- Tailwind CSS, Lucide React icons, and client-rendered QR codes

## Local development

```bash
npm install
npm start
```

The app runs at `http://localhost:3000`.

## Production build

```bash
npm run build
```

The optimized static output is written to `dist/`. `vercel.json` is configured for direct Vercel deployment.

## Customising the white-label experience

- Club content and demo data: `src/data/demoData.js`
- Brand palette and responsive presentation: `src/index.css` and `tailwind.config.js`
- Generated editorial and product imagery: `public/assets/`
- Screen-level components: `src/screens/`
