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
