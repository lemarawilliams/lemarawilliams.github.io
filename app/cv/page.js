'use client'
import { useState } from 'react'
import { researcher } from '../../data/site'

export default function CV() {
    const [failed, setFailed] = useState(false)

    return (
        <div className="page">
            <div className="page-header">
                <h1>Curriculum Vitae</h1>
            </div>

            <div className="cv-frame-wrap">
                <div className="cv-toolbar">
                    <span>{researcher.name} — CV</span>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href={researcher.cv} target="_blank" rel="noopener noreferrer">Open in new tab ↗</a>
                        <a href={researcher.cv} download>Download ↓</a>
                    </div>
                </div>

                {failed ? (
                    <div className="cv-fallback">
                        <p>PDF preview is not available in this browser.</p>
                        <p style={{ marginTop: '0.75rem' }}>
                            <a href={researcher.cv} target="_blank" rel="noopener noreferrer">Open CV in new tab →</a>
                        </p>
                    </div>
                ) : (
                    <object
                        data={researcher.cv}
                        type="application/pdf"
                        className="cv-embed"
                        aria-label="Curriculum Vitae"
                        onError={() => setFailed(true)}
                    >
                        <div className="cv-fallback">
                            <p>PDF preview unavailable.</p>
                            <p style={{ marginTop: '0.75rem' }}>
                                <a href={researcher.cv} target="_blank" rel="noopener noreferrer">Open CV in new tab →</a>
                            </p>
                        </div>
                    </object>
                )}
            </div>
        </div>
    )
}