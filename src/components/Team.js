import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
// import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
// import GridContainer from "./Grid/GridContainer";
// import GridItem from "./Grid/GridItem.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardFooter from "components/Card/CardFooter.js";
// import Button from "components/CustomButtons/Button.js";
// import Badge from "./Badge/Badge.js";

// import { cardTitle } from "assets/jss/material-kit-react.js";
// import classNames from "classnames";
// import ReactMarkdown from "react-markdown";
// import { newsData } from "../data/home/news";
// import { highlightsData } from "../data/home/highlights";
// import { objectiveData } from "../data/home/objective";
// import { noveltyData } from "../data/home/novelty";

import styles from "../material_style/partial_style/componentsSections/basicsStyle.js";
// import mayor from "../images/mayor.webp";
// import newark from "../images/newark_google.webp";
// import Footer from "./Footer/Footer";

const useStyles = makeStyles(styles);

export default function Cards() {
  const classes = useStyles();
  return (
    <div
      className={classes.sections}
      style={{ paddingTop: 20, fontWeight: 400 }}
    >
      <div className={classes.container}>
        <h2>
          Team
        </h2>
        <p>This is team page.</p>

        {/*<iframe*/}
        {/*  sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-pointer-lock"*/}
        {/*  className="_3S5H9"*/}
        {/*  title="htmlComp-iframe"*/}
        {/*  name="htmlComp-iframe"*/}
        {/*  width="100%"*/}
        {/*  height="100%"*/}
        {/*  data-src=""*/}
        {/*  src="https://gy1211-wixsite-com.filesusr.com/html/f218d2_7bf0ae2044ddd934af42faa4c1a4b3ac.html"*/}
        {/*></iframe>*/}
      </div>
    </div>
  );
}
