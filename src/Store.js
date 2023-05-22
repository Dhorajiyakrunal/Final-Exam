import rootReducer from "./Redux/Reducer/Saga.reducer";
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import saga from "./Redux/Saga/Rootsaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const composeEnhancer =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middleware))
);
sagaMiddleware.run(saga);

export default store;

