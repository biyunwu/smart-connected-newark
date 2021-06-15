import * as React from "react";
// import Header from "../components/Header/Header.js";
// import HeaderLinks from "../components/Header/HeaderLinks.js";
import Parallax from "../components/partial_components/Parallax/Parallax.js";
import GridContainer from "../components/partial_components/Grid/GridContainer.js";
import GridItem from "../components/partial_components/Grid/GridItem.js";
import Home from "../components/Home";
// import Footer from "../components/Footer/Footer.js";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../material_style/components.js";
import "../material_style/scss/material-kit-react.scss?v=1.10.0";
import Layout from "../components/partial_components/Layout.js";
import Seo from '../components/partial_components/Seo.js';
import {homeData} from "../data/home/homeData";
// import {useEffect, useState} from "react";
// import {render} from "react-dom";
// import {withStyles} from "@material-ui/core";
import LongTitle from "../components/partial_components/LongTitle";

const useStyles = makeStyles(styles);

// const [breakpointSmall, breakpointMiddle] = [375, 768]
// const getFontSize = (width) =>
//     width > breakpointMiddle
//         ? "4em"
//         : width > breakpointSmall
//         ? "3em"
//         : "2em"

// class IndexPage extends React.Component{
export default function IndexPage(props){
    const classes = useStyles();
    // const [breakpointSmall, breakpointMiddle] = [375, 768]
    // const isBrowserReady = typeof window !== 'undefined'
    // const [width, setWidth] = useState(isBrowserReady ? window.innerWidth : 0)

    // useEffect(() => {
    //     if (!isBrowserReady) return false
    //     const handleResize = () => setWidth(window.innerWidth)
    //     window.addEventListener('resize', handleResize)
    //     return () => {
    //         window.removeEventListener('resize', handleResize)
    //     }
    // })

    // const getFontSize = () =>
    //     width > breakpointMiddle
    //         ? "4em"
    //         : width > breakpointSmall
    //         ? "3em"
    //         : "2em"

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

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         isBrowserReady: false,
    //         viewportWidth: 0,
    //     }
    // }
    //
    // componentDidMount() {
    //     this.setState(
    //         { isBrowserReady: typeof window !== 'undefined',
    //                 viewportWidth: typeof window !== 'undefined' ? window.innerWidth : 0 }
    //     )
    // }

    // render() {
    //     const classes = useStyles();
    //     const { viewportWidth } = this.state
        return (
            <Layout>
                <Seo title="Home"/>
                <Parallax
                  image={require("../images/smart_city2.webp").default}
                  filter={true}
                  style={{ minHeight: "500px" }}
                >
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand} >
                            {/*<h1 className={classes.title} style={{ fontSize: getFontSize() }}>*/}
                            {/*    {homeData.title}*/}
                            {/*</h1>*/}
                                <LongTitle title={homeData.title} className={classes.title}/>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
                </Parallax>
                <div className={classNames(classes.main)}>
                <Home />
                </div>
                {/*<a href='https://www.freepik.com/photos/business'>digital_transformation: Business photo created by rawpixel.com - www.freepik.com</a>*/}
                {/*<a href='https://www.freepik.com/vectors/background'>smart_city_2: Background vector created by pikisuperstar - www.freepik.com</a>*/}
            </Layout>
        )
    // }
}

// export default withStyles(styles)(IndexPage);