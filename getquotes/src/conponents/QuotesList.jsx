import QuotesCard from './QuotesCard'

const QuotesList = ({quotes}) => {
  return (
    <div className="quotes-container">
        {quotes.map((quote)=>(
            <QuotesCard key={quote.id} quotes={quote}/>
        ))}
    </div>
  )
}

export default QuotesList
