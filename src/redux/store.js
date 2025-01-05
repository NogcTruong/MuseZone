import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

// Tạo rootReducer (sau này sẽ thêm các reducers khác)
const rootReducer = combineReducers({
  // Thêm reducers ở đây
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'] // các reducer cần persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);