import React from "react";

export default function ItemList({ item }) {
  return (
    <div className="content">
      <div className="content-inner">
          <img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt="" />
          <div className="content-back">
          <div className="content-info"><b>Título</b>: {item.title}<br/><br/>
          <b>Páginas</b>: {item.pageCount}</div><br/>
          <b>Origen</b>: {item.series.name}</div>
      </div>
    </div>
  );
}
