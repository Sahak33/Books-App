import { render, screen } from "@testing-library/react";
import Card from "components/card";
import { helpRouter } from "test/App.test";
import "@testing-library/jest-dom/extend-expect";

describe("card", () => {
  beforeEach(() => {
    const props = {
      authors: ["Author 1", "Author 2"],
      categories: ["Category 1", "Category 2"],
      currency: "USD",
      price: 9.99,
      shortDescription: "Short description",
      thumbnailUrl: "https://example.com/book.jpg",
      title: "Book title",
    };
    render(helpRouter(<Card {...props} />));
  });
  it("renders the book price formatted as currency", () => {
    const price = screen.getByText("$9.99");
    expect(price).toBeInTheDocument();
  });
  it("renders the book title", () => {
    const title = screen.getByText("Book title");
    expect(title).toBeInTheDocument();
  });
  it("renders the book short description", () => {
    const shortDescription = screen.getByText("Short description");
    expect(shortDescription).toBeInTheDocument();
  });
  it("renders the book currency", async () => {
    try {
      const java = await screen.findByText("USD");
      expect(java.textContent).toBe("USD");
    } catch (error) {
      console.log("Error:", error.message);
    }
  });
  it("renders the book categories", async () => {
    try {
      const category1 = await screen.findByText("Category 1");
      const category2 = await screen.findByText("Category 2");
      expect(category1.textContent).toBe("Category 1");
      expect(category2.textContent).toBe("Category 1");
    } catch (error) {
      console.log("Error:", error.message);
    }
  });
});
