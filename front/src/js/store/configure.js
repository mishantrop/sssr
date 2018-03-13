import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

export default rootReducer => {
  const helpers = {};
  const middleware = [thunk.withExtraArgument(helpers)];

  let enhancer;
  if (process.env.NODE_ENV !== 'production') {
    let devToolsExtension = f => f
    if (window.devToolsExtension && __DEV__) {
      devToolsExtension = window.devToolsExtension();
    }

    enhancer = compose(
      applyMiddleware(...middleware),
      devToolsExtension,
    );
  } else {
    enhancer = applyMiddleware(...middleware);
  }
  return createStore(combineReducers(rootReducer), {}, enhancer);
}
