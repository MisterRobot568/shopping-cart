import { useParams } from "react-router-dom"; // so that we can dynamically swap pages
import GetProductCards from "../GetProductCards/GetProductCards";

const Mens = () => {
  return (
    <div>
      <GetProductCards category="men's clothing" />
      <p>MENS SELECTION </p>
    </div>
  );
};

export default Mens;
