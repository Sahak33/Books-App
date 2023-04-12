import { render } from "@testing-library/react";
import { helpRouter } from "test/App.test";
import "@testing-library/jest-dom/extend-expect";
import BookDetails from "pages/bookDetails";

const navigate = jest.fn();
const navigateToBack = () => navigate("/");

describe("productDitails", () => {

  beforeEach(() => {
    render(helpRouter(<BookDetails />));
  });
  it("should navigate to the root path", () => {
    navigateToBack();
    expect(navigate).toHaveBeenCalledWith("/");
  });
});
