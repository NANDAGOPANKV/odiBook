import React, { useEffect, useState } from "react";
// connecting , axios
import { URLBOOK } from "../static/URLs";
import Axios from "axios";
// booksdetails
import BooksCards from "../components/books/BooksCards";
// get book from db *atlas

// css
import "../styles/Books.css";

const handleFetchBook = async () => {
  return await Axios.get(URLBOOK).then((res) => res.data);
};
export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    handleFetchBook().then((res) => setBooks(res.books));
  }, []);
 

  return (
    <div>
      <ul>
        {books?.map((data, index) => {
          return (
            <ol className="book"  key={index}>
              <BooksCards data={data} />
            </ol>
          );
        })}
      </ul>
    </div>
  );
}
