import Link from 'next/link'
import { researcher, news, publications } from '../data/site'

export default function Home() {
  const recentPubs = publications.slice(0, 1)

  return (
    <div className="page">

      {/* ── Header ── */}
      <header className="home-header">
        <div>
          <h1 className="home-name">{researcher.name}</h1>
          <p className="home-title">{researcher.title}</p>
          <p className="home-institution">{researcher.department}<br />{researcher.institution}</p>
          <div className="home-contact">
            <div>{researcher.email}</div>
          </div>
          <div className="home-links">
            {/*<a href={researcher.cv} className="btn-link primary" target="_blank" rel="noopener noreferrer">*/}
            {/*  Curriculum Vitae*/}
            {/*</a>*/}
            {/*{researcher.links.googleScholar && (*/}
            {/*  <a href={researcher.links.googleScholar} className="btn-link" target="_blank" rel="noopener noreferrer">Google Scholar</a>*/}
            {/*)}*/}
            {/*{researcher.links.semanticScholar && (*/}
            {/*  <a href={researcher.links.semanticScholar} className="btn-link" target="_blank" rel="noopener noreferrer">Semantic Scholar</a>*/}
            {/*)}*/}
            {/*{researcher.links.github && (*/}
            {/*  <a href={researcher.links.github} className="btn-link" target="_blank" rel="noopener noreferrer">GitHub</a>*/}
            {/*)}*/}
            {/*{researcher.links.twitter && (*/}
            {/*  <a href={researcher.links.twitter} className="btn-link" target="_blank" rel="noopener noreferrer">Twitter / X</a>*/}
            {/*)}*/}
            {/*{researcher.links.orcid && (*/}
            {/*  <a href={researcher.links.orcid} className="btn-link" target="_blank" rel="noopener noreferrer">ORCID</a>*/}
            {/*)}*/}
          </div>
        </div>

        <div className="avatar" aria-label="Profile photo">
           <img src="/pic.jpg" alt={researcher.name} />
          {/*{researcher.name.split(' ').map(w => w[0]).join('').slice(0, 2)}*/}
        </div>
      </header>

      {/* ── Bio ── */}
      <section aria-label="Biography">
        <div className="bio-text">
          {researcher.bio.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {/* ── News ── */}
      <section aria-label="News">
        <h2 className="section-title">News</h2>
        <ul className="news-list">
          {news.map((item, i) => (
            <li key={i} className="news-item">
              <span className="news-date">{item.date}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Recent Publications ── */}
      <section aria-label="Recent publications">
        <h2 className="section-title">Selected Publications</h2>
        <ul className="pub-list">
          {recentPubs.map((pub, i) => (
            <li key={i} className="pub-item">
              <div className="pub-title">{pub.title}</div>
                <div className="pub-authors">
                    {pub.authors.split(' +').map((author, idx, arr) => {
                        const isYou = /Williams/.test(author)
                        return (
                            <span key={idx}>
                            {isYou ? <strong style={{ color: 'var(--ink)' }}>{author}</strong> : author}
                                                    {idx < arr.length - 1 && ' '}
                          </span>
                        )
                    })}
                </div>
              <div className="pub-venue">
                <em>{pub.venue}</em>
                {pub.year && <strong>, {pub.year}</strong>}
              </div>
              <div className="pub-meta">
                {pub.award && <span className="pub-award">★ {pub.award}</span>}
                {pub.links?.pdf && <a href={pub.links.pdf} className="pub-link">PDF</a>}
                {pub.links?.arxiv && <a href={pub.links.arxiv} className="pub-link">arXiv</a>}
                {pub.links?.code && <a href={pub.links.code} className="pub-link">Code</a>}
                {pub.tags?.map(tag => <span key={tag} className="pub-tag">{tag}</span>)}
                {pub.note?.map(note => <span key={note} className="pub-note"><em> {note} </em> </span>)}
              </div>
            </li>
          ))}
        </ul>
        <p style={{ marginTop: '1.25rem', fontSize: '0.9rem' }}>
          <Link href="/publications">View all publications →</Link>
        </p>
      </section>

    </div>
  )
}
