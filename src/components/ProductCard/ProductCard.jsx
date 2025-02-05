import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  // const [title, setTitle] = useState(null);
  // const [price, setPrice] = useState(null);
  // const [description, setDescription] = useState(null);
  // const [imageURL, setImageURL] = useState(null);

  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products", { mode: "cors" })
  //     .then((response) => {
  //       if (response.status >= 400) {
  //         throw new Error("server error");
  //       }
  //       return response.json();
  //     })
  //     .then((response) => {
  //       setImageURL(response[1].image);
  //       setTitle(response[0].title);
  //       setPrice(response[0].price);
  //       setDescription(response[0].description);
  //     })
  //     .catch((error) => setError(error))
  //     .finally(() => setLoading(false));
  // }, []);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>A network error was encountered</p>;
  // return (
  //   <div>
  //     <h1>Product Card Test</h1>
  //     <p>Title: {title}</p>
  //     <p>Price: {price}</p>
  //     <p>Description: {description}</p>
  //     <img src={imageURL} alt={"placeholder text"} />
  //   </div>
  // );

  return (
    <div className={styles.container}>
      <Link
        to={`/item/${product.id}`}
        state={product}
        className={styles.linkContainer}
      >
        <div className={styles.productCard}>
          <div className={styles.imgContainer}>
            <img
              className={styles.img}
              src={product.image}
              alt={product.title}
            />
          </div>

          {/* <p>Product Description:{product.description}</p> */}
          <div className={styles.textContainer}>
            <p className={styles.title}>{product.title}</p>
            <p className={styles.price}>${product.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
