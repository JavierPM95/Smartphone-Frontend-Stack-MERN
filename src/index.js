import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// Main
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import generateStore from "./Redux/Store";

// Thirds Packages
import "bootswatch/dist/pulse/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

//Routes
import smartphoneList from "./components/Smartphone/SmartphoneList";
import Navbar from "./components/Navbar/Navbar";

const store = generateStore();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Switch>
          <div className="container">
            <Route path="/" component={smartphoneList} />
          </div>
        </Switch>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
