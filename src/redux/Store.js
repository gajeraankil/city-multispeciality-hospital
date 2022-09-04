import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../saga/rootSaga";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./reducer/rootReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [thunk, sagaMiddleware];

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
