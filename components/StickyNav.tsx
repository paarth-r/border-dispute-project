'use client'

import { useEffect, useState } from 'react'
import { sections } from '@/lib/content'

const navItems = [...sections.map(s => ({ id: s.id, label: s.title })), { id: 'sources', label: 'Sources' }]

export default function StickyNav() {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-[#f9f7f4]/95 backdrop-blur border-b border-[#d4cfc8]">
      <div className="max-w-3xl mx-auto px-6">
        <ul className="flex overflow-x-auto">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block px-3 py-3 font-sans text-xs uppercase tracking-[0.12em] whitespace-nowrap border-b-2 transition-colors ${
                  active === id
                    ? 'border-[#1a2744] text-[#1a2744] font-semibold'
                    : 'border-transparent text-[#6b6560] hover:text-[#1a1a1a]'
                }`}
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
