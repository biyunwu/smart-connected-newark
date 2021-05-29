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
import GridItem from "./Grid/GridItem";
// import mayor from "../images/mayor.webp";
// import newark from "../images/newark_google.webp";
import GridContainer from "./Grid/GridContainer";
// import mayor from "../images/mayor.webp";
// import newark from "../images/newark_google.webp";
// import Footer from "./Footer/Footer";
import Avatar from '@material-ui/core/Avatar';
import { teamData } from "../data/team/teamData";
import { withPrefix } from 'gatsby';
const useStyles = makeStyles(styles);

const customStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    textAlign: "center",
    color: "rgb(60, 72, 88)",
    '& > *': {
      margin: "0 auto",
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  instituteContainer: {
    paddingBottom: "30px",
    // borderBottom: "rgba(0,0,0,0.1) 1px solid",
  }
}));

export default function Cards() {
  const classes = useStyles();
  const customClasses = customStyles();
  return (
    <div
      className={classes.sections}
      style={{ paddingTop: 20, fontWeight: 400 }}
    >
      {teamData.map(organizationObj =>
        <div className={[classes.container, customClasses.instituteContainer].join(" ")}>
          <h3 style={{ borderBottom: "rgb(154, 154, 154) 1px solid", marginBottom: "30px" }}>{organizationObj.organization}</h3>
          <GridContainer>
            <GridItem container  spacing={3}>
              {organizationObj.profiles.map(profile =>
                <GridItem item justify = "center" xs={6} sm={4} md={3}>
                  <a className={customClasses.root} href={profile.url} target="_blank"  rel="noreferrer">
                  {/*<div> style={{ textAlign: "center !important" }}*/}
                    {profile.image !== null ?
                        <Avatar alt={[profile.name, profile.role, profile.department, organizationObj.organization].join(",")}
                                // src={`${profile.image}`}
                                src={withPrefix(organizationObj.directory + profile.image)}
                                className={customClasses.large}
                                style={{alignSelf: 'center'}}
                        />
                        :
                        <Avatar alt={[profile.name, profile.role, profile.department, organizationObj.organization].join(",")}
                                className={customClasses.large}
                                style={{alignSelf: 'center'}}
                        >
                          {profile.name}
                        </Avatar>
                    }
                    <p style={{ margin: "5px auto 10px auto"}}>
                      {profile.name}
                      <br/>
                      {profile.role}
                      <br/>
                      {profile.department}
                    </p>
                  </a>
                </GridItem>
              )}
            </GridItem>
          </GridContainer>
        </div>
      )}
      {/*<div className={classes.container}>*/}
      {/*  <h2>Rutgers</h2>*/}
      {/*  <GridContainer>*/}
      {/*    <GridItem container spacing={1}>*/}
      {/*      <GridItem container item justify = "center" xs={4} sm={3} md={3}>*/}
      {/*        <div style={{ textAlign: "center"}}>*/}
      {/*          <Avatar alt="Desheng Zhang" src="https://www.cs.rutgers.edu/~dz220/Desheng.png" className={customClasses.large} />*/}
      {/*          <br/>*/}
      {/*          Desheng Zhang*/}
      {/*          <br/>*/}
      {/*          Lead PI*/}
      {/*        </div>*/}
      {/*      </GridItem>*/}
      {/*    </GridItem>*/}
      {/*  </GridContainer>*/}

      {/*  /!*<iframe*!/*/}
      {/*  /!*  sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-pointer-lock"*!/*/}
      {/*  /!*  className="_3S5H9"*!/*/}
      {/*  /!*  title="htmlComp-iframe"*!/*/}
      {/*  /!*  name="htmlComp-iframe"*!/*/}
      {/*  /!*  width="100%"*!/*/}
      {/*  /!*  height="100%"*!/*/}
      {/*  /!*  data-src=""*!/*/}
      {/*  /!*  src="https://gy1211-wixsite-com.filesusr.com/html/f218d2_7bf0ae2044ddd934af42faa4c1a4b3ac.html"*!/*/}
      {/*  /!*></iframe>*!/*/}
      {/*</div>*/}
    </div>
  );
}
