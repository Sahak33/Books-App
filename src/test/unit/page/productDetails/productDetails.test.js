import { render, screen, fireEvent } from "@testing-library/react";
import { helpRouter } from "test/App.test";
import "@testing-library/jest-dom/extend-expect";
import ProductDetails from "pages/productDetails";



describe("productDitails", () => {

  beforeEach(() => {
    render(helpRouter(<ProductDetails />));
  });


  it("Back' is clicked", () => {
    // fireEvent.click(screen.getByText("Back"));
    // expect(window.location.pathname).toBe("/");
  });
});
