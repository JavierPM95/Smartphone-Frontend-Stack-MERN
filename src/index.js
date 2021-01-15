import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

//
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootswatch/dist/pulse/bootstrap.min.css'

//Routes
import smartphoneList from "./components/Smartphone/SmartphoneList";
import Navbar from "./components/Navbar/Navbar";
import {Provider} from "react-redux";
import generateStore from "./Redux/Store";


const store = generateStore();

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Provider store= {store}>
            <div className="container">
              <Route path="/" component={smartphoneList} />
            </div>
          </Provider>
        </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
