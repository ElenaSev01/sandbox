import React from "react";
import ItemList from "./ItemList";

export default function FetchComics({ items, loading }) {
  return loading ? (
    <div className="spinner-border m-5" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  ) : (
    <section className="contents">
      {items.map((item) => (
        <ItemList key={item.id} item={item} />
      ))}
    </section>
  );
}
