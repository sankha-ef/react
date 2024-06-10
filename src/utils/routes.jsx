import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import SignIn from "../pages/SignIn.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import RootLayout from "../components/layout/RootLayout.jsx";
import Dashboard from "../pages/Dashboard.jsx";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />}>
      <Route index element={<SignIn />} />
      <Route path={"/forgot-password"} element={<ForgotPassword />} />
      <Route path="app" element={<RootLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Route>
  )
);
