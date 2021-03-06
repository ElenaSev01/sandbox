import React, { useState, useEffect } from "react";
import "./App.css";
import FetchComics from "./components/FetchComics";
import Pagination from "./components/Pagination";
import Header from "./components/Header";

export default function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPage] = useState(9);
  const api = "";
  const hash = "";

  useEffect(() => {
    fetch(
      "https://gateway.marvel.com/v1/public/comics?ts=1000&apikey=$api&hash=$hash&limit=100&offset=100"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data.results);
        setItems(data.data.results);
        setLoading(false);
      });
  }, []);

  // Obtener la página actual
  const indexLastItem = currentPage * itemsPage;
  const indexFirstItem = indexLastItem - itemsPage;
  const currentItem = items.slice(indexFirstItem, indexLastItem);

  // cambiar la página

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <Header />
      <FetchComics items={currentItem} loading={loading} />
      <Pagination
        itemsPage={itemsPage}
        totalItems={items.length}
        paginate={paginate}
      />
    </div>
  );
}
