import { useParams } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

const ProductDetail = () => {

    const params = useParams();

    console.log(params)

    return (
        <Fragment>
            <h1>Product detail</h1>
            <p>{params.id}</p>
        </Fragment>
    )
}

export default ProductDetail;