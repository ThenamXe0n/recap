import { useRef } from "react";
import "./App.css";
import Container from "./component/Container";
import QuotesTable from "./component/QuotesTable";
import useFetchQuotes from "./hooks/useFetchQuotes";

function App() {
  const { filter, handleIncrementLimit, handleQuoteFilter } = useFetchQuotes();
  const filterValueRef = useRef();

  return (
    <>
      <button onClick={handleIncrementLimit}>load more</button>
      <h1>Quotes List</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <input
          ref={filterValueRef}
          style={{ padding: "10px", borderRadius: "10px", margin: "20px" }}
          placeholder="search quote by quote or author name"
        />
        <button onClick={() => handleQuoteFilter(filterValueRef.current.value)}>
          Search quote
        </button>
        <button
          onClick={() => {
            handleQuoteFilter("");
            filterValueRef.current.value = "";
          }}
        >
          reset filter
        </button>
      </div>
      <div>
        {filter.map((quote, quoteIdx) => (
          <QuoteDisplayTile
            key={quoteIdx}
            id={quote.id}
            author={quote.author}
            quote={quote.quote}
          />
        ))}
      </div>
      {/* <QuotesTable/> */}
    </>
  );
}

export default App;

function QuoteDisplayTile({
  id = 1,
  quote = "no quote is provided",
  author = "none",
}) {
  return (
    <div
      style={{
        border: "1px solid black",
        backgroundColor: "slategray",
        borderRadius: "8px",
        padding: "15px",
      }}
    >
      <p>
        <strong>{id} </strong>
        {quote}
      </p>
      <span style={{ float: "right", transform: "translateY(-10px)" }}>
        ~ {author}
      </span>
    </div>
  );
}
