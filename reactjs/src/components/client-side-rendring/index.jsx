import React, { useEffect, useState } from "react";

const ClientSideRendringDeMo = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);

        setProducts(data.products);
      });
  }, []);

  if (!products.length) {
    return <p>Loading products...</p>;
  }
  return (
    <div>
      <ul>
        {products?.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClientSideRendringDeMo;
