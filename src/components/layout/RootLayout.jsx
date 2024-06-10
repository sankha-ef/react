// src/components/DashboardLayout.js
import { useState } from "react";
import Header from "../common/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import { Grid } from "@mui/material";

// eslint-disable-next-line react/prop-types
const RootLayout = ({ children }) => {
  // const [isSidebar, setIsSidebar] = useState(true);

  return (
    <Grid
      container
      sx={{ width: "100vw", height: "100vh" }}
    >
      <Header />

      <Grid
        item
        sx={{
          display: "flex",
          width: "100vw",
          marginTop: "4rem",
        }}
      >
        <Sidebar />
        <Grid item sx={{ padding: "1rem"}}>
          <Outlet />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RootLayout;
