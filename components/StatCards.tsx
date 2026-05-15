import { stats } from '@/lib/content'

export default function StatCards() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="border border-[#d4cfc8] bg-white rounded px-5 py-4">
            <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-[#8a847e] mb-1">
              {stat.label}
            </p>
            <p className="font-serif text-2xl font-bold text-[#1a2744] mb-1">{stat.value}</p>
            <p className="font-sans text-xs text-[#6b6560]">{stat.note}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
