import "../styles/ProductList.scss";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductList = ({ products }) => {
  return (
    <div className="products">
      <div className="container">
        <div className="product-list gridview">
          {products?.map((product) => {
            return (
              <Link
                to={`/products/${product?.id}`}
                className="product-item"
                key={product?.id}
              >
                <div className="product-item-img">
                  <img
                    src={product?.image}
                    alt={product?.title}
                    className="img-cover"
                  />
                </div>
                <div className="product-item-body">
                  <span className="product-category">{product?.category}</span>
                  <span className="product-title">{product?.title}</span>

                  <div className="product-price">
                    <span className="fw-6 fs-16">$ &nbsp;{product?.price}</span>
                  </div>

                  <div className="product-item-bottom fs-12 flex align-center">
                    <div>
                      <span className="fw-6">Ratings:</span> {product?.rating.count}
                    </div>
                    <div className="product-rating flex align-center">
                      <AiOutlineStar />
                      {product?.rating.rate}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

ProductList.propTypes = {
  products: PropTypes.array,
};
