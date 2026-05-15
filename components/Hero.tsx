import { meta } from '@/lib/content'

export default function Hero() {
  return (
    <div className="relative w-full h-[70vh] min-h-[480px] flex items-end">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(160deg, #1a2744 0%, #2d3f6b 25%, #3d5a8a 45%, #4a6741 60%, #5a7a4a 70%, #8a9a6a 80%, #c4b89a 90%, #d4c8a8 100%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
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
