import React from "react";
import Header from "./Header/Header.js";
import HeaderLinks from "./Header/HeaderLinks.js";
import Footer from "./Footer/Footer.js";

const Layout = (props) =>
    <div id="main-content" style={{ minHeight: "100vh" }}>
        <Header
            brand="Smart & Connected Newark"
            rightLinks={<HeaderLinks />}
            fixed
            color="transparent"
            changeColorOnScroll={{
                height: 100,
                color: "white",
            }}
            {...null}
        />
        {props.children}
        <Footer />
    </div>

export default Layout