import { FC } from "react";
import "./Card.scss";
import { formatCurrency } from "helpers/currency";
import { Link } from "react-router-dom";

interface ICard {
  authors: string[];
  categories: string[];
  currency: string;
  price: number;
  shortDescription: string;
  thumbnailUrl: string;
  title: string;
}

const Card: FC<ICard> = ({ authors, categories, currency, price, shortDescription, thumbnailUrl, title }) => {
  return (
    <div className="card">
      <div className="card_main">
        <Link to="/catalog/5" className="card_main_img">
          <img src={thumbnailUrl} alt="book" />
        </Link>
        <Link to="/catalog/5" className="card_main_title">
          {title}
        </Link>
        <p className="card_main_authors">
          By{" "}
          {authors?.map((author) => (
            <span key={author}>{author}</span>
          ))}
          <span className="card_main_description">{shortDescription}</span>
        </p>
      </div>
      <div className="card_footer">
        <p className="card_footer_categories">
          {categories?.map((categori) => (
            <span key={categori}>{categori}</span>
          ))}
        </p>
        <p className="card_footer_price">{formatCurrency(price, currency)}</p>
      </div>
    </div>
  );
};

export default Card;
