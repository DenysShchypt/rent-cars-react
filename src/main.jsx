import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./components/App.jsx";
import { GlobalStyle } from "./components/GlobalStyle.js";
import { persistor, store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <PersistGate persistor={persistor}>
          <App />
          <GlobalStyle />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
