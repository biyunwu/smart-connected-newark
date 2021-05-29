import React from "react";
import Header from "./Header/Header.js";
import HeaderLinks from "./Header/HeaderLinks.js";
import Footer from "./Footer/Footer.js";

const Layout = (props) =>
    <div id="main-content" style={{ minHeight: "100vh" }}>
        <Header
            brand="Smart & Connected"
            rightLinks={<HeaderLinks pageName={props.pageName}/>}
            fixed
            color="transparent"
            changeColorOnScroll={{
                height: 400,
                color: "white",
            }}
            {...null}
        />
        {props.children}
        <Footer />
    </div>

export default Layout