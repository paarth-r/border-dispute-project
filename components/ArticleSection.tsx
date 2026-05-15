interface Props {
  id: string
  title: string
  paragraphs: string[]
  image?: { src: string; caption: string; credit: string }
}

export default function ArticleSection({ id, title, paragraphs, image }: Props) {
  return (
    <section id={id} className="max-w-3xl mx-auto px-6 py-8 prose-article scroll-mt-12">
      <h2>{title}</h2>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {image && (
        <figure className="mt-6 mb-2">
          <img
            src={image.src}
            alt={image.caption}
            className="w-full rounded border border-[#d4cfc8] shadow-sm"
          />
          <figcaption className="mt-2 font-sans text-xs text-[#8a847e] leading-snug">
            {image.caption}{' '}
            <span className="italic">— {image.credit}</span>
          </figcaption>
        </figure>
      )}
    </section>
  )
}
