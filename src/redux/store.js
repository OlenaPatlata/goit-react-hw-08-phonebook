import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const incrementType = 'INCREMENT';
const decrementType = 'DECREMENT';
const resetType = 'RESET';
const initialiazerType = 'INIT';

// СOЗДАЕМ ACTION
const increment = value => ({ type: incrementType, payload: value });
const decrement = () => ({ type: decrementType });
const reset = () => ({ type: resetType });
const init = value => ({ type: initialiazerType, payload: value });

const initialState = { count: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case incrementType:
      return { ...state, count: state.count + action.payload };
    case decrementType:
      return { ...state, count: state.count - 1 };
    case resetType:
      return initialState;
    case initialiazerType:
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

// const reducer = (state = { count: 0 }, action) => state;
const store = createStore(reducer, composeWithDevTools());
export const actions = { increment, decrement, reset, init };

export default store;
