import { useEffect, useState } from "react";

function useFetchProducts(category = "") {
  //   const [title, setTitle] = useState(null);
  //   const [price, setPrice] = useState(null);
  //   const [description, setDescription] = useState(null);
  //   const [imageURL, setImageURL] = useState(null);
  const [products, setProducts] = useState([]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      category // if given a category, then we fetch results for that category instead
        ? `https://fakestoreapi.com/products/category/${category}`
        : "https://fakestoreapi.com/products",
      { mode: "cors" }
    )
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        setProducts(response);
        // setImageURL(response[1].image);
        // setTitle(response[0].title);
        // setPrice(response[0].price);
        // setDescription(response[0].description);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [category]);
  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>A network error was encountered</p>;
  return { products, error, loading };
  //   (
  //     <div>
  //       <h1>Product Card Test</h1>
  //       <p>Title: {title}</p>
  //       <p>Price: {price}</p>
  //       <p>Description: {description}</p>
  //       <img src={imageURL} alt={"placeholder text"} />
  //     </div>
  //   );
}

const GetProductCards = ({ category = "" }) => {
  const { products, error, loading } = useFetchProducts(category);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div>
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>price: {product.price}</p>
            <p>Product Description:{product.description}</p>
            <img src={product.image} alt={product.title} />
          </div>
        ))}
    </div>
  );
};

export default GetProductCards;
