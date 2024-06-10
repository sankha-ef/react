import { combineReducers } from "@reduxjs/toolkit";

// api services
import { authApiService } from "./api/authQueries";
import { groupApiService } from "./api/groupQueries";

// reducers
import  authReducer  from "./slices/authSlice";

const rootReducer = combineReducers({
  // reducers for rtk queries
  [authApiService.reducerPath]: authApiService.reducer,
  [groupApiService.reducerPath]: groupApiService.reducer,

  // reducers for state management
  auth: authReducer,
});

export default rootReducer;
