import { Link } from "react-router-dom";
import { Fragment } from "react";

const Products = () => {
    return (
        <Fragment>
            <ul>
                <li><Link to="/products/1">Book</Link></li>
                <li><Link to="/products/2">Game</Link></li>
                <li><Link to="/products/3">Harry</Link></li>
            </ul>
        </Fragment>
    )
}

export default Products;