import React from "react";
import { indum } from "data-indum";

const Products = () => {
  return (
    <div class="row card-group">
      {indum.map((p, i) => (
        <div class="col-md-3 py-1" key={i}>
          <img
            src={p.images.map((img) => img.urls.url_1)}
            class="card-img-top "
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{p.name}</h5>
            <p class="card-text">{p.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
