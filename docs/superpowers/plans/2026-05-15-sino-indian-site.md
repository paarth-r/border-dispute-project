# Sino-Indian Border Report Site — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page Next.js 14 static site presenting the Sino-Indian border dispute report in a CFR editorial style, deployable to GitHub Pages.

**Architecture:** Next.js 14 App Router with `output: 'export'` for static generation. All content lives in `lib/content.ts` as structured data. Components are small and focused — one per visual unit.

**Tech Stack:** Next.js 14, Tailwind CSS, TypeScript, next/font (Lora + Inter), gh-pages for deployment.

---

## File Map

| File | Responsibility |
|---|---|
| `app/layout.tsx` | Root layout, fonts, `<html>` metadata |
| `app/page.tsx` | Composes all section components |
| `app/globals.css` | Tailwind directives + prose overrides |
| `components/Hero.tsx` | Full-width hero with gradient overlay + title |
| `components/StickyNav.tsx` | Sticky top nav, smooth-scroll, scroll-spy active state |
| `components/StatCards.tsx` | Row of three key stat callout cards |
| `components/ArticleSection.tsx` | Reusable section wrapper: id anchor + header + prose slot |
| `components/Sources.tsx` | Linked citations list |
| `lib/content.ts` | All report text + sources as typed data |
| `next.config.js` | `output: 'export'`, `basePath`, `images.unoptimized` |
| `tailwind.config.ts` | Font family extension |
| `public/` | Static assets (empty — hero uses CSS gradient) |

---

## Task 1: Scaffold Next.js project

**Files:**
- Create: `package.json`, `next.config.js`, `tailwind.config.ts`, `tsconfig.json`, `app/globals.css`, `app/layout.tsx`, `app/page.tsx`

- [ ] **Step 1: Scaffold with create-next-app**

```bash
cd /Users/paarth-r/Code/School
npx create-next-app@14 sino-indian-border-report \
  --typescript \
  --tailwind \
  --app \
  --no-src-dir \
  --no-eslint \
  --import-alias "@/*"
cd sino-indian-border-report
```

- [ ] **Step 2: Verify dev server starts**

```bash
npm run dev &
sleep 4
curl -s http://localhost:3000 | grep -o "<html" | head -1
kill %1
```

Expected output: `<html`

- [ ] **Step 3: Replace next.config.js with static export config**

Replace the contents of `next.config.js` with:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/sino-indian-border-report',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

- [ ] **Step 4: Verify static build works**

```bash
npm run build
```

Expected: Build completes, `out/` directory created with `out/index.html`.

- [ ] **Step 5: Init git and commit scaffold**

```bash
git init
git add .
git commit -m "feat: scaffold Next.js 14 static export project"
```

---

## Task 2: Configure fonts and global styles

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Install and configure Google Fonts in layout.tsx**

Replace `app/layout.tsx` with:

```tsx
import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'
import './globals.css'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Sino-Indian Border Dispute',
  description: 'A report on the Line of Actual Control and the conflict between India and China.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <body className="bg-[#f9f7f4] text-[#1a1a1a]">{children}</body>
    </html>
  )
}
```

- [ ] **Step 2: Set font families in tailwind.config.ts**

Replace `tailwind.config.ts` with:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 3: Set global styles in globals.css**

Replace `app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-lora), Georgia, serif;
}

.prose-article p {
  font-size: 1.125rem;
  line-height: 1.85;
  margin-bottom: 1.25rem;
  color: #2d2d2d;
}

.prose-article h2 {
  font-family: var(--font-inter), system-ui, sans-serif;
  font-size: 1.375rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #d4cfc8;
  color: #1a1a1a;
}
```

- [ ] **Step 4: Build and verify no font errors**

```bash
npm run build 2>&1 | tail -5
```

Expected: `✓ Compiled successfully` with no font-related errors.

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: configure Lora/Inter fonts and global styles"
```

---

## Task 3: Add content data

**Files:**
- Create: `lib/content.ts`

- [ ] **Step 1: Create lib/content.ts with all report text and sources**

```bash
mkdir -p lib
```

Create `lib/content.ts`:

```ts
export const meta = {
  title: 'The Sino-Indian Border Dispute',
  subtitle: 'How a line Britain never finished drawing became one of Asia\'s most dangerous flashpoints',
  date: 'May 2026',
  course: 'Contemporary Conflicts — World History',
}

export const stats = [
  { label: 'Line of Actual Control', value: '3,488 km', note: 'never formally demarcated' },
  { label: 'Galwan Valley', value: '20 killed', note: 'June 2020 — first deaths since 1975' },
  { label: 'Last major war', value: '1962', note: 'China routed India in 3 weeks' },
]

export const sections: { id: string; title: string; paragraphs: string[] }[] = [
  {
    id: 'overview',
    title: 'Overview',
    paragraphs: [
      'The Sino-Indian border dispute centers on the Line of Actual Control (LAC), a roughly 3,488-kilometer de facto boundary that separates Indian and Chinese-controlled territory across the Himalayas. The LAC is not a formally agreed or demarcated border — it is a ceasefire line, and both countries patrol up to their own interpretation of where it sits.',
      'The two primary contested zones are Aksai Chin in the west, a high-altitude plateau that India claims as part of Ladakh but which China has controlled since the 1950s, and Arunachal Pradesh in the east, which India administers but which China claims as "South Tibet." The most recent major flashpoint was the Galwan Valley in eastern Ladakh, where soldiers clashed in June 2020.',
    ],
  },
  {
    id: 'belligerents',
    title: 'Primary Belligerents',
    paragraphs: [
      'India is the world\'s largest democracy and a rising global power. Under Prime Minister Narendra Modi and the BJP, India has taken an increasingly assertive posture on border disputes, framing Chinese incursions as direct violations of sovereign territory.',
      'China is an authoritarian single-party state led by Xi Jinping. China uses what analysts describe as "salami-slicing" — small, incremental territorial encroachments that individually fall below the threshold for a military response but cumulatively shift the facts on the ground. What most fundamentally separates them is political ideology, competing historical narratives around colonial-era borders, and an escalating rivalry for influence across Asia. Both are nuclear powers, which places a hard ceiling on how far any confrontation can go.',
      'Other interested parties include the United States, which actively supports India through the Quad security partnership; Pakistan, China\'s closest regional ally whose CPEC corridor runs through disputed Kashmir; and Russia, historically India\'s arms supplier but now drifting toward China after Ukraine.',
    ],
  },
  {
    id: 'history',
    title: 'Historical Context',
    paragraphs: [
      'The roots of the Sino-Indian border dispute run directly through the period of British imperialism. When Britain governed India, its surveyors produced two incompatible boundary lines in the western sector: the Johnson Line of 1865, which placed Aksai Chin inside British India, and the MacDonald Line of 1899, which placed it inside China. Britain never officially resolved which applied.',
      'In the eastern sector, the British convened the Simla Convention in 1914 and drew the McMahon Line as India\'s border with Tibet. Chinese delegates attended but refused to sign. The People\'s Republic of China has never recognized the McMahon Line, arguing that Tibet had no authority to negotiate borders on China\'s behalf. Every kilometer of the current dispute traces back to these colonial-era decisions made for British strategic convenience, not for the populations living there.',
      'For centuries before British intervention, Tibet existed as an independent buffer state between Indian and Chinese civilization. That changed in 1950, when China annexed Tibet. The buffer disappeared, and India and China became direct neighbors for the first time in the modern era.',
      'India initially responded with accommodation — Nehru\'s policy of "Hindi-Chini bhai bhai" (India and China are brothers). That policy collapsed in October 1962, when China launched a coordinated surprise offensive on both fronts simultaneously. Indian forces were routed: approximately 7,000 soldiers killed or captured in under a month. China declared a unilateral ceasefire and withdrew — but kept Aksai Chin. The 1962 war established the current de facto territorial reality and permanently poisoned the relationship.',
    ],
  },
  {
    id: 'polycrisis',
    title: 'Relation to the Polycrisis',
    paragraphs: [
      'The Sino-Indian border dispute connects to the polycrisis in several reinforcing ways. On climate, the Himalayas are sometimes called the Third Pole — the world\'s largest freshwater reservoir outside the Arctic and Antarctic. The glaciers here are melting at an accelerating rate. As water scarcity grows, the strategic value of the high ground increases, and the border dispute becomes entangled with long-term resource competition for two of the world\'s most water-dependent populations.',
      'On economics, both India and China are competing for the "China+1" manufacturing shift — the global movement of supply chains away from China. After the 2020 Galwan clash, India banned over 200 Chinese apps and restricted Chinese investment, demonstrating how border conflict and economic competition reinforce each other.',
      'On great power rivalry, the dispute sits at the center of the broader democratic-authoritarian divide. The US frames India\'s conflict with China as part of the same global contest as Taiwan, Ukraine, and the South China Sea — and the evidence supports that framing.',
    ],
  },
  {
    id: 'scenarios',
    title: 'Potential Scenarios',
    paragraphs: [
      'The most likely outcome is a frozen conflict. Nuclear deterrence keeps both sides from escalating beyond localized skirmishes, while domestic politics on both sides make any formal territorial concession politically impossible. Corps commander-level disengagement talks continue, achieving partial pullbacks in specific sectors while leaving the underlying claims unresolved.',
      'A negotiated partial settlement is possible. Both governments benefit from stable trade conditions, and Trump\'s global tariff war in 2025 created unusual economic pressure that pushed India and China toward each other — Modi traveled to China in August 2025 for the first time in seven years.',
      'The most dangerous scenario is a miscalculation during a domestic political crisis. The 2020 Galwan clash showed how quickly a local standoff can produce casualties and a full diplomatic rupture. Both countries have strong nationalist movements that pressure leaders to project strength. A clash timed to an election cycle could escalate beyond what either government intends.',
    ],
  },
]

export const sources: { title: string; outlet: string; url: string }[] = [
  {
    title: 'What to Know About the Border Conflict Between China and India',
    outlet: 'Council on Foreign Relations',
    url: 'https://www.cfr.org/articles/what-know-about-border-conflict-between-china-and-india',
  },
  {
    title: 'The China-India Relationship: Between Cooperation and Competition',
    outlet: 'Council on Foreign Relations',
    url: 'https://www.cfr.org/backgrounders/china-india-relationship-between-cooperation-and-competition',
  },
  {
    title: 'Preparing for Heightened Tensions Between China and India',
    outlet: 'Council on Foreign Relations',
    url: 'https://www.cfr.org/reports/preparing-heightened-tensions-between-china-and-india',
  },
  {
    title: "India's Perilous Border Standoff With China",
    outlet: 'Foreign Affairs',
    url: 'https://www.foreignaffairs.com/india/modi-perilous-border-standoff-china',
  },
  {
    title: "China's Sovereignty Concerns Explain the Border Clash With India",
    outlet: 'Foreign Affairs',
    url: 'https://www.foreignaffairs.com/articles/china/2020-06-26/chinas-sovereignty-obsession',
  },
  {
    title: 'How India and China Pulled Back from a Border War — and Why Now',
    outlet: 'Al Jazeera',
    url: 'https://www.aljazeera.com/news/2024/10/22/how-india-and-china-pulled-back-from-a-border-war-and-why',
  },
  {
    title: 'Five Things to Know About the India-China Border Standoff',
    outlet: 'Al Jazeera',
    url: 'https://www.aljazeera.com/news/2020/6/22/five-things-to-know-about-the-india-china-border-standoff',
  },
  {
    title: 'China Admits It Lost Four Soldiers in 2020 India Border Clash',
    outlet: 'Al Jazeera',
    url: 'https://www.aljazeera.com/news/2021/2/19/china-admits-it-lost-four-soldiers-in-2020-india-border-clash',
  },
  {
    title: 'India-China in New Spat over Arunachal Pradesh',
    outlet: 'Al Jazeera',
    url: 'https://www.aljazeera.com/news/2025/11/26/india-china-in-new-spat-over-arunachal-pradesh-whats-it-all-about',
  },
  {
    title: 'McMahon Line',
    outlet: 'Britannica',
    url: 'https://www.britannica.com/event/McMahon-Line',
  },
  {
    title: 'Sino-Indian War',
    outlet: 'Britannica',
    url: 'https://www.britannica.com/topic/Sino-Indian-War',
  },
  {
    title: 'Key Dates in Decades-Long India-China Conflict',
    outlet: 'Al Jazeera',
    url: 'https://www.aljazeera.com/news/2020/6/17/india-china-border-tensions-key-dates-in-decades-long-conflict',
  },
]
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit 2>&1 | head -20
```

Expected: no output (no errors).

- [ ] **Step 3: Commit**

```bash
git add lib/content.ts
git commit -m "feat: add structured content data"
```

---

## Task 4: Build Hero component

**Files:**
- Create: `components/Hero.tsx`

- [ ] **Step 1: Create Hero.tsx**

```bash
mkdir -p components
```

Create `components/Hero.tsx`:

```tsx
import { meta } from '@/lib/content'

export default function Hero() {
  return (
    <div className="relative w-full h-[70vh] min-h-[480px] flex items-end">
      {/* Topographic gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              160deg,
              #1a2744 0%,
              #2d3f6b 25%,
              #3d5a8a 45%,
              #4a6741 60%,
              #5a7a4a 70%,
              #8a9a6a 80%,
              #c4b89a 90%,
              #d4c8a8 100%
            )
          `,
        }}
      />
      {/* Noise texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />
      {/* Dark gradient at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 pb-12">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/60 mb-3">
          Contemporary Conflicts · {meta.date}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          {meta.title}
        </h1>
        <p className="font-serif text-lg text-white/80 leading-relaxed max-w-2xl">
          {meta.subtitle}
        </p>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Build and verify no errors**

```bash
npm run build 2>&1 | tail -8
```

Expected: `✓ Compiled successfully`

- [ ] **Step 3: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: add Hero component with topographic gradient"
```

---

## Task 5: Build StickyNav component

**Files:**
- Create: `components/StickyNav.tsx`

- [ ] **Step 1: Create StickyNav.tsx**

Create `components/StickyNav.tsx`:

```tsx
'use client'

import { useEffect, useState } from 'react'
import { sections } from '@/lib/content'

export default function StickyNav() {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    // Also observe sources section
    const sourcesEl = document.getElementById('sources')
    if (sourcesEl) observer.observe(sourcesEl)

    return () => observer.disconnect()
  }, [])

  const navItems = [...sections.map(s => ({ id: s.id, label: s.title })), { id: 'sources', label: 'Sources' }]

  return (
    <nav className="sticky top-0 z-50 bg-[#f9f7f4]/95 backdrop-blur border-b border-[#d4cfc8]">
      <div className="max-w-3xl mx-auto px-6">
        <ul className="flex gap-0 overflow-x-auto scrollbar-hide">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`
                  block px-3 py-3 font-sans text-xs uppercase tracking-[0.12em] whitespace-nowrap
                  border-b-2 transition-colors
                  ${active === id
                    ? 'border-[#1a2744] text-[#1a2744] font-semibold'
                    : 'border-transparent text-[#6b6560] hover:text-[#1a1a1a]'
                  }
                `}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
```

- [ ] **Step 2: Build and verify**

```bash
npm run build 2>&1 | tail -8
```

Expected: `✓ Compiled successfully`

- [ ] **Step 3: Commit**

```bash
git add components/StickyNav.tsx
git commit -m "feat: add StickyNav with scroll-spy active state"
```

---

## Task 6: Build StatCards and ArticleSection components

**Files:**
- Create: `components/StatCards.tsx`
- Create: `components/ArticleSection.tsx`

- [ ] **Step 1: Create StatCards.tsx**

Create `components/StatCards.tsx`:

```tsx
import { stats } from '@/lib/content'

export default function StatCards() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border border-[#d4cfc8] bg-white rounded px-5 py-4"
          >
            <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-[#8a847e] mb-1">
              {stat.label}
            </p>
            <p className="font-serif text-2xl font-bold text-[#1a2744] mb-1">
              {stat.value}
            </p>
            <p className="font-sans text-xs text-[#6b6560]">{stat.note}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Create ArticleSection.tsx**

Create `components/ArticleSection.tsx`:

```tsx
interface ArticleSectionProps {
  id: string
  title: string
  paragraphs: string[]
}

export default function ArticleSection({ id, title, paragraphs }: ArticleSectionProps) {
  return (
    <section id={id} className="max-w-3xl mx-auto px-6 py-8 prose-article scroll-mt-12">
      <h2>{title}</h2>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </section>
  )
}
```

- [ ] **Step 3: Build and verify**

```bash
npm run build 2>&1 | tail -8
```

Expected: `✓ Compiled successfully`

- [ ] **Step 4: Commit**

```bash
git add components/StatCards.tsx components/ArticleSection.tsx
git commit -m "feat: add StatCards and ArticleSection components"
```

---

## Task 7: Build Sources component

**Files:**
- Create: `components/Sources.tsx`

- [ ] **Step 1: Create Sources.tsx**

Create `components/Sources.tsx`:

```tsx
import { sources } from '@/lib/content'

export default function Sources() {
  return (
    <section id="sources" className="max-w-3xl mx-auto px-6 py-10 scroll-mt-12">
      <h2 className="font-sans text-base uppercase tracking-[0.15em] text-[#6b6560] font-semibold mb-6 pb-3 border-b border-[#d4cfc8]">
        Works Cited
      </h2>
      <ol className="space-y-3">
        {sources.map((source, i) => (
          <li key={i} className="flex gap-3">
            <span className="font-sans text-xs text-[#8a847e] mt-0.5 min-w-[1.5rem]">
              {i + 1}.
            </span>
            <div>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-sm text-[#1a2744] underline underline-offset-2 decoration-[#d4cfc8] hover:decoration-[#1a2744] transition-colors"
              >
                {source.title}
              </a>
              <span className="font-sans text-xs text-[#8a847e] ml-2">
                — {source.outlet}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
```

- [ ] **Step 2: Build and verify**

```bash
npm run build 2>&1 | tail -8
```

Expected: `✓ Compiled successfully`

- [ ] **Step 3: Commit**

```bash
git add components/Sources.tsx
git commit -m "feat: add Sources component"
```

---

## Task 8: Compose the main page

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace app/page.tsx with full composition**

Replace `app/page.tsx` with:

```tsx
import Hero from '@/components/Hero'
import StickyNav from '@/components/StickyNav'
import StatCards from '@/components/StatCards'
import ArticleSection from '@/components/ArticleSection'
import Sources from '@/components/Sources'
import { sections, meta } from '@/lib/content'

export default function Home() {
  return (
    <main>
      <Hero />
      <StickyNav />
      <StatCards />
      <div className="divide-y divide-[#ece8e2]">
        {sections.map((section) => (
          <ArticleSection
            key={section.id}
            id={section.id}
            title={section.title}
            paragraphs={section.paragraphs}
          />
        ))}
        <Sources />
      </div>
      <footer className="max-w-3xl mx-auto px-6 py-8 mt-4 border-t border-[#d4cfc8]">
        <p className="font-sans text-xs text-[#8a847e]">
          {meta.course} · {meta.date}
        </p>
      </footer>
    </main>
  )
}
```

- [ ] **Step 2: Full build**

```bash
npm run build 2>&1 | tail -10
```

Expected: `✓ Compiled successfully` and `out/index.html` generated.

- [ ] **Step 3: Spot-check the output HTML contains key content**

```bash
grep -c "Sino-Indian" out/index.html && grep -c "McMahon" out/index.html
```

Expected: both return `1` or more.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: compose main page with all sections"
```

---

## Task 9: Push to GitHub and enable Pages

**Files:** none (git/GitHub operations)

- [ ] **Step 1: Create GitHub repo**

```bash
gh repo create paarth-r/sino-indian-border-report \
  --public \
  --description "Sino-Indian border dispute report — Contemporary Conflicts" \
  --source . \
  --remote origin \
  --push
```

Expected: repo created and code pushed to `main`.

- [ ] **Step 2: Install gh-pages and add deploy script**

```bash
npm install --save-dev gh-pages
```

Add to `package.json` scripts (open the file and add under `"scripts"`):

```json
"deploy": "npm run build && touch out/.nojekyll && gh-pages -d out"
```

- [ ] **Step 3: Deploy to gh-pages**

```bash
npm run deploy
```

Expected: `Published` message. GitHub Pages will serve from the `gh-pages` branch.

- [ ] **Step 4: Enable GitHub Pages on gh-pages branch**

```bash
gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  repos/paarth-r/sino-indian-border-report/pages \
  -f source='{"branch":"gh-pages","path":"/"}' 2>/dev/null || \
gh api \
  --method PUT \
  -H "Accept: application/vnd.github+json" \
  repos/paarth-r/sino-indian-border-report/pages \
  -f source='{"branch":"gh-pages","path":"/"}'
```

Expected: JSON response with `"status": "enabled"` or similar.

- [ ] **Step 5: Final commit with deploy script**

```bash
git add package.json package-lock.json
git commit -m "feat: add gh-pages deploy script"
git push
```

- [ ] **Step 6: Verify live URL**

Site will be live at: `https://paarth-r.github.io/sino-indian-border-report/`

```bash
echo "Site URL: https://paarth-r.github.io/sino-indian-border-report/"
```

GitHub Pages can take 1-2 minutes to go live after the first deploy.
