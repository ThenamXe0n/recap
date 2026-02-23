import { useEffect, useRef, useState } from "react";
import "./App.css";
import Container from "./component/Container";

function App() {
  const [showContainer, setShowContainer] = useState(0);
  // const [quoteList, setQuoteList] = useState([]);
  // const [limit, setLimit] = useState(5);

  // async function fetchQuoteDataAPI() {
  //   let apiUrl = `https://dummyjson.com/quotes?limit=${limit}`; //https://dummyjson.com/quotes?limit=10
  //   try {
  //     let response = await fetch(apiUrl);
  //     let data = await response.json();
  //     console.log("data is : ", data.quotes);
  //     setQuoteList(data.quotes);
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }

  // function handleLoadMoreData() {
  //   setLimit((prev) => prev + 5);
  // }
  // useEffect(() => {
  //   fetchQuoteDataAPI();
  // }, [limit]);

  // console.log("limit is ", limit);

  function toggle() {
  setShowContainer((prev)=>prev+1)
  setShowContainer((prev)=>prev+1)
  setShowContainer((prev)=>prev+1)
  setShowContainer((prev)=>prev+1)
  setShowContainer((prev)=>prev+1)
    console.log("value", showContainer);
  }

  return (
    <>
      <button onClick={toggle}>increase container {showContainer}</button>
      {showContainer && <Container />}
      {/* <button onClick={handleLoadMoreData}>load more</button>
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
      </div> */}
      {/* <Counter initialValue={4} name={"counter 1"}/>
      <Counter initialValue={15} name={"counter 2"} /> */}
    </>
  );
}

export default App;

// function QuoteDisplayTile({
//   id = 1,
//   quote = "no quote is provided",
//   author = "none",
// }) {
//   return (
//     <div
//       style={{
//         border: "1px solid black",
//         backgroundColor: "slategray",
//         borderRadius: "8px",
//         padding: "15px",
//       }}
//     >
//       <p>
//         <strong>{id} </strong>
//         {quote}
//       </p>
//       <span style={{ float: "right", transform: "translateY(-10px)" }}>
//         ~ {author}
//       </span>
//     </div>
//   );
// }

function Counter({ initialValue = 0, name }) {
  console.log(`reading component ${name} `);
  let [count, setCount] = useState(initialValue);

  function increaseCount() {
    setCount(count + 1);
  }
  console.log("initial value of count is ", count);

  console.log("painting the jsx to screeen");
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        background: "slategray",
      }}
    >
      <button>-</button>
      <div style={{ padding: "16px" }}>{count}</div>
      <button onClick={increaseCount}>+</button>
    </section>
  );
}
