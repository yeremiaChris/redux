import { BUY_CAKE } from "./cakeTypes";

const initialValues = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialValues, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
