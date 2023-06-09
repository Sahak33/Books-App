import "./BookDetails.scss";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as ArrowLeftIcon } from "assets/arrowLeft.svg";
import { formatCurrency } from "helpers/currency";
import { formatDate } from "helpers/date";
import AddComma from "components/addComma";
import { useEffect } from "react";
import { useAppDispatch } from "hooks/useAppDispatch";
import { fetchBookThunk } from "store/slices/book/thunk";
import { useAppSelector } from "hooks/useAppSelector";
import { bookSelector } from "store/selectors/book";
import Loading from "components/loading";
import Error from "components/error";

const BookDetails = () => {
  const { book, loading, error } = useAppSelector(bookSelector);
  const dispatch = useAppDispatch();

  const date = new Date(book?.published?.date);

  const navigate = useNavigate();
  const { id } = useParams();

  const navigateToBack = () => navigate("/");

  useEffect(() => {
    dispatch(fetchBookThunk(id as string));
  }, []);

  return (
    <div className="bookDetails custom_scroll">
      {loading && <Loading />}
      {!loading && error && <Error error={error} />}
      {!loading && !error && book && (
        <>
          <div className="bookDetails_back" onClick={navigateToBack}>
            <ArrowLeftIcon className="bookDetails_back_icon" />
            <p className="bookDetails_back_text">Back</p>
          </div>
          <div className="bookDetails_container">
            <div className="bookDetails_container_img">
              <img src={book?.thumbnail_url} alt="book" />
            </div>
            <div className="bookDetails_container_info">
              <div>
                <span className="title">Title:</span>
                {book?.title ? <span className="value">{book?.title}</span> : "-"}
              </div>
              <div>
                <span className="title">Authors:</span>
                {book?.authors?.length ? (
                  <span className="value">
                    <AddComma data={book?.authors} />
                  </span>
                ) : (
                  "-"
                )}
              </div>
              <div>
                <span className="title">Categories:</span>
                {book?.categories?.length ? (
                  <span className="value">
                    <AddComma data={book?.categories} />
                  </span>
                ) : (
                  "-"
                )}
              </div>
              {book?.published?.currency && (
                <div>
                  <span className="title">Price:</span>
                  {book?.published?.currency && book?.published?.price ? (
                    <span className="value">{formatCurrency(book?.published?.price, book?.published?.currency)}</span>
                  ) : (
                    "-"
                  )}
                </div>
              )}
              <div>
                <span className="title">Date:</span>
                {date ? <span className="value">{formatDate(date)}</span> : "-"}
              </div>
              <div>
                <span className="title">Status:</span>
                {book?.status ? <span className="value">{book?.status}</span> : "-"}
              </div>
            </div>
          </div>
          <div className="bookDetails_description">
            <p className="title">Description</p>
            <p className="value">{book?.long_description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default BookDetails;
