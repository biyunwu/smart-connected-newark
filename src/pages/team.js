import * as React from "react";
import Parallax from "../components/partial_components/Parallax/Parallax.js";
import GridContainer from "../components/partial_components/Grid/GridContainer.js";
import GridItem from "../components/partial_components/Grid/GridItem.js";
import Team from "../components/Team.js";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../material_style/components.js";
import "../material_style/scss/material-kit-react.scss?v=1.10.0";
import Layout from "../components/partial_components/Layout";
import Seo from "../components/partial_components/Seo";

const useStyles = makeStyles(styles);

export default function TeamPage() {
  const classes = useStyles();
  const pageName = "team"
  return (
    <Layout>
        <Seo
            title={pageName.charAt(0).toUpperCase() + pageName.slice(1)}
            description="Team members from research universities, industry and NGOs."
        />
        <Parallax
          image={require("../images/team_5k.webp").default}
          filter={true}
          style={{ maxHeight: "100px" }}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand} style={{ paddingTop: 40 }}>
                  <h1 className={classes.title}>
                      { pageName.charAt(0).toUpperCase() + pageName.slice(1)}
                  </h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main)}>
          <Team />
        </div>
    </Layout>
  );
}
