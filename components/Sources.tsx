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
            <span className="font-sans text-xs text-[#8a847e] mt-0.5 min-w-[1.5rem]">{i + 1}.</span>
            <div>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-sm text-[#1a2744] underline underline-offset-2 decoration-[#d4cfc8] hover:decoration-[#1a2744] transition-colors"
              >
                {source.title}
              </a>
              <span className="font-sans text-xs text-[#8a847e] ml-2">— {source.outlet}</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
