import React, { useEffect, useState } from "react";
import API from "../api/api";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {products.map((p) => (
        <div key={p.id} style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
          <h3>{p.name}</h3>
          <p>₹ {p.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
