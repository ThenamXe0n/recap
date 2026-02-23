import { useEffect, useRef, useState } from "react";
import "./App.css";
import Container from "./component/Container";
import QuotesTable from "./component/QuotesTable";
import useFetchQuotes from "./hooks/useFetchQuotes";

function App() {
  const {quoteList} = useFetchQuotes()
 


  // useEffect(() => {
  //   fetchQuoteDataAPI();
  // }, [limit]);

  // console.log("limit is ", limit);


  return (
    <>
     
      {/* <button onClick={handleLoadMoreData}>load more</button> */}
      <h1>Quotes List</h1>
      <div>
        {quoteList.map((quote, quoteIdx) => (
          <QuoteDisplayTile
            key={quoteIdx}
            id={quote.id}
            author={quote.author}
            quote={quote.quote}
          />
        ))}
      </div>
      <QuotesTable/>

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

