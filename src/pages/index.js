import * as React from "react";
// import Header from "../components/Header/Header.js";
// import HeaderLinks from "../components/Header/HeaderLinks.js";
import Parallax from "../components/Parallax/Parallax.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Home from "../components/Home";
// import Footer from "../components/Footer/Footer.js";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../material_style/components.js";
import "../material_style/scss/material-kit-react.scss?v=1.10.0";
import Layout from "../components/Layout.js";

const useStyles = makeStyles(styles);

export default function IndexPage(props) {
  const classes = useStyles();
  // const { ...rest } = props;
  // return (
  //   <>
  //     <main>
  //       <Header
  //         brand="Smart & Connected"
  //         rightLinks={<HeaderLinks />}
  //         fixed
  //         color="transparent"
  //         changeColorOnScroll={{
  //           height: 400,
  //           color: "white",
  //         }}
  //         {...rest}
  //       />
  //       <Parallax
  //         image={require("../images/smart_city.png").default}
  //         filter={true}
  //       >
  //         <div className={classes.container}>
  //           <GridContainer>
  //             <GridItem>
  //               <div className={classes.brand} style={{ paddingTop: 40 }}>
  //                 <h1 className={classes.title}>
  //                   Smart & Connected Newark Project.
  //                 </h1>
  //               </div>
  //             </GridItem>
  //           </GridContainer>
  //         </div>
  //       </Parallax>
  //       <div className={classNames(classes.main)}>
  //         <Home />
  //       </div>
  //     </main>
  //     <Footer />
  //   </>
  // );
  return (
    <Layout pageName = "home">
      <Parallax
          image={require("../images/smart_city.png").default}
          filter={true}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand} style={{ paddingTop: 40 }}>
                <h1 className={classes.title}>
                  Smart & Connected Newark Project.
                </h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <Home />
      </div>
    </Layout>
  );
}
