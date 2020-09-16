import React from "react";
import "./App.css";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import HookCakeContainer from "./components/HookCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <IceCreamContainer />
        <HookCakeContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
