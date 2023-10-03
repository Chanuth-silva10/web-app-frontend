import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-aiezb711py1z0qes.us.auth0.com"
      clientId="VhQ1kvizkcyynOBx3vWZ4GUOll51EBUr"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}>
      <App />
    </Auth0Provider>
  </Provider>,
  document.getElementById("root")
);
