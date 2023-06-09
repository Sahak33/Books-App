import { render } from "@testing-library/react";
import App from "App";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store";
export const helpRouter = (childe) => {
  return (
    <MemoryRouter>
      <Provider store={store}>{childe}</Provider>
    </MemoryRouter>
  );
};

it("renders App", () => {
  render(helpRouter(<App />));
});
