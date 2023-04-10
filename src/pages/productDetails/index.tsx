import "./ProductDetails.scss";
import { product } from "./data";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeftIcon } from "assets/arrowLeft.svg";
import { formatCurrency } from "helpers/currency";
import { formatDate } from "helpers/date";
import AddComma from "components/addComma";

const ProductDetails = () => {
  const navigate = useNavigate();

  const { authors, categories, published, longDescription, thumbnailUrl, title, status } = product;
  const date = new Date(published?.$date);

  const navigateToBack = () => navigate("/");

  return (
    <div className="productDetails">
      <div className="productDetails_back" onClick={navigateToBack}>
        <ArrowLeftIcon className="productDetails_back_icon" />
        <p className="productDetails_back_text">Back</p>
      </div>
      <div className="productDetails_container">
        <div className="productDetails_container_img">
          <img src={thumbnailUrl} alt="book" />
        </div>
        <div className="productDetails_container_info">
          <div>
            <span className="title">Title:</span>
            <span className="value">{title}</span>
          </div>
          <div>
            <span className="title">Authors:</span>
            <span className="value">
              <AddComma data={authors} />
            </span>
          </div>
          <div>
            <span className="title">Categories:</span>
            <span className="value">
              <AddComma data={categories} />
            </span>
          </div>
          <div>
            <span className="title">Price:</span>
            <span className="value">{formatCurrency(published?.price, published?.currency)}</span>
          </div>
          <div>
            <span className="title">Date:</span>
            <span className="value">{formatDate(date)}</span>
          </div>
          <div>
            <span className="title">Status:</span>
            <span className="value">{status}</span>
          </div>
        </div>
      </div>
      <div className="productDetails_description">
        <p className="title">Description</p>
        <p className="value">{longDescription}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
