import QuoteCard from './components/QuoteCard';
import useQuote from './hooks/useQuote';
import useClipboard from './hooks/useClipboard';


function App() {
  const { quote, loading, erroMsg, getQuote } = useQuote();
  const { copy } = useClipboard();

  return (
    <>
       <div className="app-container">
      <h1 className="app-title">Générateur de Citations</h1>

      {loading && (
        <p className="status-message">Chargement...</p>
      )}

      {!loading && erroMsg && (
        <div className="error-message">
          <p>{erroMsg}</p>
        </div>
      )}

      {!loading && !erroMsg && (
        <QuoteCard
          quote={quote}
          onCopy={copy}
          onNew={getQuote}
        />
      )}
    </div>
    </>
  )
}

export default App
