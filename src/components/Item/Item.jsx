import { useParams, useLocation } from "react-router-dom";
const Item = () => {
  //   const { category } = useParams();
  const { item } = useParams();
  // useParams gives you access to url parameters
  const location = useLocation();
  //   const product = location.state?.product;
  const product = location.state;

  return (
    <div>
      {/* <p>category: {category}</p> */}
      <p>Hello from the item page</p>
      <p>Item: {item}</p>
      <p>{product.title}</p>
      {/* <p>{location}</p> */}
    </div>
  );
};

export default Item;
