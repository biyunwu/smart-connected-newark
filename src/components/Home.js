import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
// import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
import GridContainer from "./Grid/GridContainer";
import GridItem from "./Grid/GridItem.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardFooter from "components/Card/CardFooter.js";
// import Button from "components/CustomButtons/Button.js";
import Badge from "./Badge/Badge.js";

// import { cardTitle } from "assets/jss/material-kit-react.js";
// import classNames from "classnames";
import ReactMarkdown from "react-markdown";
import { newsData } from "../data/home/news";
import { highlightsData } from "../data/home/highlights";
import { objectiveData } from "../data/home/objective";
import { noveltyData } from "../data/home/novelty";

import styles from "../material_style/partial_style/componentsSections/basicsStyle.js";
import mayor from "../images/mayor.webp";
import newark from "../images/newark_google.webp";
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
          Harmony: Empowering Newark Residents with Smart and Inclusive Service
          Integration
        </h2>
        <p>
          Smart city services are deeply embedded in modern cities aiming to
          enhance various aspects of citizens&apos; lives. However, underlying
          expected or unexpected couplings among services due to complex
          interactions of social and physical activities are under-explored,
          which lead to potential conflicts. Using City of Newark in New Jersey
          as a testbed, this project aims to develop ways of reducing conflicts
          for ensuring social inclusion and equity of city services services
          services to achieve a &quot;harmony&quot; among various various
          various services.
        </p>
        <GridContainer>
          <GridItem container spacing={1}>
            <GridItem container item xs={12} sm={12} md={6}>
              <img src={mayor} alt="diagram" style={{ width: "100%" }} />
            </GridItem>
            <GridItem container item xs={12} sm={12} md={6}>
              <img
                src={newark}
                alt="google map of newark city"
                style={{ width: "100%" }}
              />
            </GridItem>
          </GridItem>
        </GridContainer>
        <hr />

        <GridContainer>
          <GridItem container spacing={3}>
            <GridItem container item xs={12} sm={12} md={6}>
              <div
                className={classes.container}
                style={{
                  borderBottom: "1px solid rgb(154, 154, 154)",
                  padding: "0",
                }}
              >
                <h2>Updates</h2>
                {newsData.map((data, key) => (
                  <div key={key}>
                    <Badge color="info">{data.time}</Badge>
                    {/* eslint-disable-next-line react/no-children-prop */}
                    <ReactMarkdown children={data.content} />
                  </div>
                ))}
              </div>
            </GridItem>
            <GridItem container item xs={12} sm={12} md={6}>
              <div
                className={classes.container}
                style={{
                  borderBottom: "1px solid rgb(154, 154, 154)",
                  padding: "0",
                }}
              >
                <h2>Highlights</h2>
                {highlightsData.map((item, key) => (
                  // eslint-disable-next-line ,react/no-children-prop
                  <ReactMarkdown key={key} children={item} />
                ))}
              </div>
            </GridItem>
          </GridItem>
        </GridContainer>

        <GridContainer>
          <GridItem container spacing={3}>
            <GridItem container xs={12} sm={12} md={6}>
              <div
                className={classes.container}
                style={{
                  borderBottom: "1px solid rgb(154, 154, 154)",
                  padding: "0",
                }}
              >
                <h2>Objective</h2>
                {/* eslint-disable-next-line react/no-children-prop */}
                <ReactMarkdown children={objectiveData} />
              </div>
            </GridItem>
            <GridItem container xs={12} sm={12} md={6}>
              <div
                style={{
                  borderBottom: "1px solid rgb(154, 154, 154)",
                  padding: "0",
                }}
              >
                <h2>Innovation</h2>
                {/* eslint-disable-next-line react/no-children-prop */}
                <ReactMarkdown children={noveltyData} />
              </div>
            </GridItem>
          </GridItem>
        </GridContainer>

        <h2>Collaboration</h2>
        <GridContainer>
          <GridItem container spacing={5}>
            <GridItem container item xs={4} sm={3} md={2}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Rutgers_University_with_the_state_university_logo.svg"
                alt="Rutgers logo"
                style={{ width: "100%" }}
              />
            </GridItem>
            <GridItem container item xs={4} sm={3} md={2}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/University_of_Virginia_logo.svg"
                alt="University of Virginia logo"
                style={{ width: "100%" }}
              />
            </GridItem>
            <GridItem container item xs={4} sm={3} md={2}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/6/63/Stony_Brook_U_logo_horizontal.svg"
                alt="Stony Brook University logo"
                style={{ width: "100%" }}
              />
            </GridItem>
            <GridItem container item xs={4} sm={3} md={2}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8f/University_of_Connecticut_logo.svg"
                alt="University of Connecticut logo"
                style={{ width: "100%" }}
              />
            </GridItem>
            <GridItem container item xs={4} sm={3} md={2}>
              <img
                src="https://cdn.worldvectorlogo.com/logos/city-of-newark.svg"
                alt="City of Newark logo"
                style={{ width: "100%" }}
              />
            </GridItem>
            <GridItem container item xs={4} sm={3} md={2}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/12/NSF.svg"
                alt="NSF logo"
                style={{ width: "100%" }}
              />
            </GridItem>
          </GridItem>
        </GridContainer>

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
