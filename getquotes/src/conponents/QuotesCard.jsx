const QuotesCard = ({quotes}) => {
    

    if(!quotes) return <p className="loading">Loading...</p>;

  return (
    <div className="quote-card">
        <div className="quote-content">
            <p className="quote-text">"{quotes.content}"</p>
        </div>
        <div className="quote-meta">
            <h3 className="quote-author">— {quotes.author}</h3>
            <span className="quote-date">{quotes.dateAdded}</span>
        </div>
    </div>
  )
}

export default QuotesCard
