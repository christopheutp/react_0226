import React from 'react'

export default function QuoteCard({quote,onCopy,onNew}) {
  return (
    // <div>
    //     <p>{quote.text}</p>
    //     <p>{quote.author}</p>
    //     <div>
    //         <button onClick={onNew}>
    //             Nouvelle Citation
    //         </button>
    //         <button onClick={() => onCopy(`${quote.text} Auteur : ${quote.author}`)}>
    //             Copier la citation
    //         </button>
    //     </div>
    // </div>
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
