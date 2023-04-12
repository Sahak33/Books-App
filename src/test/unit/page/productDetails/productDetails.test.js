import { render } from "@testing-library/react";
import { helpRouter } from "test/App.test";
import "@testing-library/jest-dom/extend-expect";
import ProductDetails from "pages/productDetails";

const navigate = jest.fn();
const navigateToBack = () => navigate("/");

describe("productDitails", () => {

  beforeEach(() => {
    render(helpRouter(<ProductDetails />));
  });
  it("should navigate to the root path", () => {
    navigateToBack();
    expect(navigate).toHaveBeenCalledWith("/");
  });
});
