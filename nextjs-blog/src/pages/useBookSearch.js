import { useEffect, useState } from "react";

function useBookSearch(query, pageNum) {
  const url = "http://openlibrary.org/search.json";
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
      q: query,
      page: pageNum,
    }),
  };
 
  fetch(url, options)
    .then((res) => res.json())
    .then((data) => console.log("data", data));

  useEffect(() => {}, [query, pageNum]);
  return null;
}

export default useBookSearch;
