import { FC } from "react";
import "./Card.scss";
import { formatCurrency } from "helpers/currency";

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
        <div className="card_main_img">
          <img src={thumbnailUrl} alt="book" />
        </div>
        <p className="card_main_title">{title}</p>
        <p className="card_main_authors">
          By{" "}
          {authors?.map((author) => (
            <span>{author}</span>
          ))}
          <p className="card_main_description">{shortDescription}</p>
        </p>
      </div>
      <div className="card_footer">
        <p className="card_footer_categories">
          {categories?.map((categori) => (
            <span>{categori}</span>
          ))}
        </p>
        <p className="card_footer_price">{formatCurrency(price, currency)}</p>
      </div>
    </div>
  );
};

export default Card;
