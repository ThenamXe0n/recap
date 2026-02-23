import React, { useEffect, useState } from "react";
import useFetchQuotes from "../hooks/useFetchQuotes";

let data = [
  {
    id: 1,
    quote:
      "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
    author: "Rumi",
  },
  {
    id: 2,
    quote:
      "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
    author: "Abdul Kalam",
  },
  {
    id: 3,
    quote:
      "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
    author: "Abdul Kalam",
  },
  {
    id: 4,
    quote: "If You Can'T Make It Good, At Least Make It Look Good.",
    author: "Bill Gates",
  },
  {
    id: 5,
    quote:
      "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.",
    author: "Rumi",
  },
];

function QuotesTable() {
  const { quoteList } = useFetchQuotes(data);

  return (
    <div>
      <table>
        <tr>
          <th>id</th>
          <th>quotes</th>
          <th>author</th>
        </tr>
        {quoteList.map((quote) => (
          <tr key={quote.id}>
            <td>{quote.id}</td>
            <td>{quote.quote}</td>
            <td>{quote.author}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default QuotesTable;
