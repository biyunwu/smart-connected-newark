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
import GridItem from "./partial_components/Grid/GridItem";
// import mayor from "../images/mayor.webp";
// import newark from "../images/newark_google.webp";
import GridContainer from "./partial_components/Grid/GridContainer";
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
    padding: "1em",
    '&:hover': {
      background: "rgba(200, 200, 200, 0.1)",
    }
  },
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
  instituteContainer: {
    paddingBottom: "30px",
    // borderBottom: "rgba(0,0,0,0.1) 1px solid",
  },
}));

export default function Team() {
  const classes = useStyles();
  const customClasses = customStyles();
  return (
    <div
      className={classes.sections}
      style={{ paddingTop: "0.5em", fontWeight: 400, minHeight: "60vh"}}
    >
      <div className={classes.firstContainer}>
        {/*<h1 className={classes.pageTitle}>Team</h1>*/}
        {teamData.map(organizationObj =>
          <div className={[classes.container, customClasses.instituteContainer].join(" ")} key={organizationObj.organization}>
            <h2 style={{ borderBottom: "rgb(154, 154, 154) 1px solid", marginBottom: "30px" }}>{organizationObj.organization}</h2>
            <GridContainer>
              <GridItem container spacing={1}>
                {organizationObj.profiles.map(profile =>
                  <React.Fragment key={profile.name}>
                    <GridItem item xs={6} md={4} lg={3}>
                      <a className={customClasses.root}
                         href={profile.url}
                         target="_blank"
                         rel="noreferrer"
                      >
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
                        <div className={classes.markdownStyle}>
                          <p style={{ margin: "5px auto 10px auto"}} >
                            {profile.name}
                            <br/>
                            {profile.role}
                            <br/>
                            {profile.department}
                          </p>
                        </div>
                      </a>
                    </GridItem>
                  </React.Fragment>
                )}
              </GridItem>
            </GridContainer>
          </div>
        )}
      </div>
    </div>
  );
}
