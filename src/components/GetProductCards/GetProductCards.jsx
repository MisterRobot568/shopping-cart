import { useEffect, useState, useRef } from "react";

// css modules styling
import styles from "./GetProductCards.module.css";
// function useFetchProducts(category = "") {
//   //   const [title, setTitle] = useState(null);
//   //   const [price, setPrice] = useState(null);
//   //   const [description, setDescription] = useState(null);
//   //   const [imageURL, setImageURL] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // for in memory cache
//   const cache = useRef({});

//   useEffect(() => {
//     if (cache.current[category]) {
//       // use cached data if available
//       setProducts(cache.current[category]);
//       setLoading(false);
//       return;
//     }

//     setLoading(true);

//     fetch(
//       category // if given a category, then we fetch results for onlythat category instead
//         ? `https://fakestoreapi.com/products/category/${category}`
//         : "https://fakestoreapi.com/products",
//       { mode: "cors" }
//     )
//       .then((response) => {
//         if (response.status >= 400) {
//           throw new Error("server error");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         cache.current[category] = data; //store fetched data in cache
//         setProducts(data);
//       })
//       .catch((error) => setError(error))
//       .finally(() => setLoading(false));
//   }, [category]);

//   return { products, error, loading };

// }

const GetProductCards = ({ productsList }) => {
  // const { products, error, loading } = useFetchProducts(category);
  // const { products } = category;

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>A network error was encountered</p>;

  return (
    <div>
      {productsList &&
        productsList.map((product) => (
          <div key={product.id}>
            <img
              className={styles.img}
              src={product.image}
              alt={product.title}
            />
            <h2>{product.title}</h2>
            <p>price: {product.price}</p>
            {/* <p>Product Description:{product.description}</p> */}
          </div>
        ))}
    </div>
  );
};

export default GetProductCards;
