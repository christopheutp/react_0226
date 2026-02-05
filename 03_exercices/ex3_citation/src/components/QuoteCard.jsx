import React from 'react'

export default function QuoteCard({quote,onCopy,onNew}) {
  return (
    <div className="quote-card">
      <p className="quote-text">"{quote.text}"</p>
      <p className="quote-author">{quote.author}</p>

      <div className="quote-actions">
        <button
          className="quote-button primary"
          onClick={onNew}
        >
          Nouvelle citation
        </button>

        <button
          className="quote-button secondary"
          onClick={() =>
            onCopy(`${quote.text} — ${quote.author}`)
          }
        >
          Copier la citation
        </button>
      </div>
    </div>
  )
}
