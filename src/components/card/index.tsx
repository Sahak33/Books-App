import { FC } from "react";
import "./Card.scss";
import { formatCurrency } from "helpers/currency";
import { Link } from "react-router-dom";
import AddComma from "components/addComma";

interface ICard {
  authors: string[];
  categories: string[];
  currency: string;
  id: number;
  price: number;
  shortDescription: string;
  thumbnailUrl: string;
  title: string;
}

const Card: FC<ICard> = ({ authors, categories, currency, id, price, shortDescription, thumbnailUrl, title }) => {
  return (
    <div className="card">
      <div className="card_main">
        <Link to={`catalog/${id}`} className="card_main_img">
          <img src={thumbnailUrl} alt="book" />
        </Link>
        <Link to={`catalog/${id}`} className="card_main_title">
          {title}
        </Link>
        {authors?.length > 0 && (
          <p className="card_main_authors">
            By <AddComma data={authors} />
            <span className="card_main_description">{shortDescription}</span>
          </p>
        )}
      </div>
      <div className="card_footer">
        <p className="card_footer_categories">
          <AddComma data={categories} />
        </p>
        {price && currency && <p className="card_footer_price">{formatCurrency(price, currency)}</p>}
      </div>
    </div>
  );
};

export default Card;
