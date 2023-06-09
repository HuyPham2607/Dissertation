import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './Cartredux';
import UserReducer from './Userredux';
import ProductReducer from './ProductsRedux';
import GetUser from './GetUser';

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import GetOrder from './GetOrder';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    user: UserReducer,
    cart: cartReducer,
    products: ProductReducer,
    getuser: GetUser,
    Order: GetOrder,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);
