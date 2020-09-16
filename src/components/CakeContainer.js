import React from "react";
import { buyCake } from "../redux/cake/cakeActions";
import { connect } from "react-redux";

function CakeContainer(props) {
  //   console.log(props);
  return (
    <div>
      <h1>number of cakes - {props.numOfCakes}</h1>{" "}
      <button onClick={props.buyCake}>buy cake</button>{" "}
    </div>
  );
}

// access redux state in component
const mapStateToProps = (state) => {
  //   console.log(state);
  return {
    // selector return some state information from redux store
    numOfCakes: state.cake.numOfCakes,
  };
};
// select what is required
// to map actions creator to props our component
const mapDispatchToProps = (dispatch) => {
  return {
    // action creator
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
