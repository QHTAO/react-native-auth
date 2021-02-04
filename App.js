import React, { Component } from "react";

import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import reducer from "./src/reducers";
import Navigation from "./src/routes";

const store = createStore(reducer, compose(applyMiddleware(thunk)));
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
export default App;
