import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers";
import whitelist from "./whitelist";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import logger from "redux-logger";

import createEncryptor from "redux-persist-transform-encrypt";

const encryptor = createEncryptor({
  secretKey: process.env.REACT_APP_MY_ENCRYPT_KEY,
  onError(error) {
    // Handle the error.
  },
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: whitelist,
  blacklist: [],
  transforms: [encryptor],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: [thunk, logger],
});

const persistor = persistStore(store, {}, () => {});

console.log(store.getState());
export { store, persistor };
