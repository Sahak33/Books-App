import { render, screen } from "@testing-library/react";
import Catalog from "pages/catalog";
import { helpRouter } from "test/App.test";
import "@testing-library/jest-dom/extend-expect";

describe("catalog", () => {
  beforeEach(() => {
    render(helpRouter(<Catalog />));
  });
  afterEach(() => {});
  it("should render Filter and Clear Filters buttons", () => {
    expect(screen.getByText("Filter")).toBeInTheDocument();
    expect(screen.getByText("Clear Filters")).toBeInTheDocument();
  });
});
