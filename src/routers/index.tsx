import Catalog from "pages/catalog";
import BookDetails from "pages/bookDetails";
import { Routes, Route } from "react-router-dom";

const Routers = () => (
  <Routes>
    <Route path="/" element={<Catalog />} />
    <Route path="/book/:id" element={<BookDetails />} />
  </Routes>
);

export default Routers;
