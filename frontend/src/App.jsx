import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    // const response=  await axios.get();
    (async () => {
      try {
        setError(false);
        const response = await axios.get("/api/products");
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        setError(true);
      }
    })();
  }, []);

  return (
    <>
      <h1>React Query</h1>
      <h2>Number of products are:{products.length}</h2>
    </>
  );
}

export default App;
