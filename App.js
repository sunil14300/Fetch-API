import React, { useEffect, useState } from 'react';

const App = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:8080/cart";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response Status: ${response.status}`);
        }
        const data = await response.json();
        setCartData(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
  {cartData.map((item, index) => (
    <li key={index}> 
      <b>Name:</b> {item.name} <br />
      <b>Price:</b> ${item.price} <br />
      <b>Description:</b> {item.description} <br />
      <b>Size:</b> {item.sizes.join(", ")} <br />
      <b>Colors:</b>  
      {item.colors
        .filter((color) => color === "Red") 
        .map((color, a) => (
          <b key={a}> {color} </b> 
        ))}
    </li>
  ))}
</ul>

    </div>
  );
};

export default App;
