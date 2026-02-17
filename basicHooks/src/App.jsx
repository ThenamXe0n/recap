import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quoteList, setQuoteList] = useState([]);
  const [limit, setLimit] = useState(5);

  async function fetchQuoteDataAPI() {
    let apiUrl = `https://dummyjson.com/quotes?limit=${limit}`;
    try {
      let response = await fetch(apiUrl);
      let data = await response.json();
      console.log("data is : ", data.quotes);
      setQuoteList(data.quotes);
    } catch (error) {
      alert(error.message);
    }
  }

  function handleLoadMoreData() {
    setLimit((prev) => prev + 5);
  }
  useEffect(() => {
    fetchQuoteDataAPI();
  }, [limit]);

  console.log("limit is ", limit);

  return (
    <>
      <button onClick={handleLoadMoreData}>load more</button>
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
