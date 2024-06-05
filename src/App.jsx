import React, { useState } from 'react'
import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import SignIn from "./pages/SignIn.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import {createTheme, ThemeProvider} from "@mui/material";

const defaultTheme = createTheme(
    {
        palette: {
            background: {
                default: '#d0cece',
            },
        }
    }
);

function App() {

    const routes = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" errorElement={<ErrorPage />}>

                <Route index element={<SignIn />} />
                <Route path={"/forgot-password"} element={<ForgotPassword />} />
            </Route>

        )
    );
  return (
    <>
        <ThemeProvider theme={defaultTheme}>
            <RouterProvider router={routes} />
        </ThemeProvider>
    </>
  )
}

export default App
