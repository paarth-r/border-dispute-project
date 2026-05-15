import { meta } from '@/lib/content'

export default function Hero() {
  return (
    <div className="relative w-full h-[70vh] min-h-[480px] flex items-end">
      {/* Real Himalayan aerial photo — Rohit Tandon / Unsplash (free license) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-9wg5jCEPBsw?auto=format&w=1600&q=80")`,
        }}
      />
      {/* Fallback gradient shown while image loads */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(160deg, #1a2744 0%, #2d3f6b 25%, #3d5a8a 45%, #4a6741 60%, #8a9a6a 80%, #d4c8a8 100%)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
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
