import { publications } from '../../data/site'

export const metadata = { title: 'Publications' }

export default function Publications() {
  // Group by year descending
  const byYear = publications.reduce((acc, pub) => {
    const y = pub.year
    if (!acc[y]) acc[y] = []
    acc[y].push(pub)
    return acc
  }, {})
  const years = Object.keys(byYear).sort((a, b) => b - a)

  return (
    <div className="page">
      <div className="page-header">
        <h1>Publications</h1>
      </div>

      {years.map(year => (
        <div key={year} className="pub-year-group">
          <div className="pub-year-label">{year}</div>
          <ul className="pub-list">
            {byYear[year].map((pub, i) => (
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
                  </div>                <div className="pub-venue"><em>{pub.venue}</em></div>
                <div className="pub-meta">
                  {pub.award && <span className="pub-award">★ {pub.award}</span>}
                  {pub.links?.pdf && <a href={pub.links.pdf} className="pub-link">PDF</a>}
                  {pub.links?.arxiv && <a href={pub.links.arxiv} className="pub-link">arXiv</a>}
                  {pub.links?.code && <a href={pub.links.code} className="pub-link">Code</a>}
                  {pub.tags?.map(tag => <span key={tag} className="pub-tag">{tag}</span>)}{pub.note?.map(note => <span key={note} className="pub-note"><em> {note} </em> </span>)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
