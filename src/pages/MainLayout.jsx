import React from "react";
import { Navbar } from "../components/";
import { Outlet } from "react-router-dom";
import useStyles from "../components/styles";

const MainLayout = () => {
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
