import { useEffect, useState } from "react";

function useFetchQuotes(initialValue) {
  const [quote, setSampleData] = useState(
    Array.isArray(initialValue) ? initialValue : [],
  );

  async function fetchQuoteDataAPI() {
    let apiUrl = `https://dummyjson.com/quotes`; //https://dummyjson.com/quotes?limit=10
    try {
      let response = await fetch(apiUrl);
      let data = await response.json();
      console.log("data is : ", data.quotes);
      setSampleData(data.quotes);
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    fetchQuoteDataAPI();
  }, []);

  return {quoteList:quote,setSampleData}
}

export default useFetchQuotes;
