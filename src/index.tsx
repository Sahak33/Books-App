import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "styles/index.scss";
import App from "App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
