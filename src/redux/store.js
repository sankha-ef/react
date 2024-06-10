import { configureStore } from '@reduxjs/toolkit';
import { authApiService} from "./api/authQueries";
import rootReducer from './rootReducer';
import { setupListeners } from "@reduxjs/toolkit/query";
import { groupApiService } from './api/groupQueries';


// Middleware for RTK Query
const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(authApiService.middleware, groupApiService.middleware);

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: import.meta.env.DEV,  // Enable Redux DevTools in development mode
});

setupListeners(store.dispatch);