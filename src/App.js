import React from "react";
import "./App.css";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import HookCakeContainer from "./components/HookCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <ItemContainer iceCream />
        <ItemContainer />
        <IceCreamContainer />
        <HookCakeContainer />
        <CakeContainer />
        <NewCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
