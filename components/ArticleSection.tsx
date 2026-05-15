interface Props {
  id: string
  title: string
  paragraphs: string[]
}

export default function ArticleSection({ id, title, paragraphs }: Props) {
  return (
    <section id={id} className="max-w-3xl mx-auto px-6 py-8 prose-article scroll-mt-12">
      <h2>{title}</h2>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </section>
  )
}
