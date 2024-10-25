import { Link } from "react-router-dom";
import arrowLeft from "../assets/img/products/arrowLeft.png"

const ArrowLeft = ({ to }) => {
  return (
    <Link to={to} className="flex justify-center">
        <img src={arrowLeft} className="xl:w-[50px] lg:w-[40px] w-[35px]" />
    </Link>
  );
};

export default ArrowLeft;
