import React from "react";
import { buyIceCream } from "../redux/iceCream/iceCreamAction";
import { connect } from "react-redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h1>num of ice - {props.numOfIceCream}</h1>
      <button onClick={props.buyIceCream}>buy ice cream</button>
    </div>
  );
}
// access redux state in component
const mapStateToProps = (state) => {
  //   console.log(state);
  return {
    // selector return some state information from redux store
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};
// select what is required
// to map actions creator to props our component
const mapDispatchToProps = (dispatch) => {
  return {
    // action creator
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
