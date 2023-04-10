import Catalog from "pages/catalog";
import ProductDetails from "pages/productDetails";
import { Routes, Route } from "react-router-dom";

const Routers = () => (
  <Routes>
    <Route path="/" element={<Catalog />} />
    <Route path="/:id" element={<ProductDetails />} />
  </Routes>
);

export default Routers;
