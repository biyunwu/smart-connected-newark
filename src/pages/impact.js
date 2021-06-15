import * as React from "react";
import Parallax from "../components/partial_components/Parallax/Parallax.js";
import GridContainer from "../components/partial_components/Grid/GridContainer.js";
import GridItem from "../components/partial_components/Grid/GridItem.js";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../material_style/components.js";
import "../material_style/scss/material-kit-react.scss?v=1.10.0";
import Layout from "../components/partial_components/Layout";
import Impact from "../components/Impact";
import Seo from "../components/partial_components/Seo";

const useStyles = makeStyles(styles);

export default function ImpactPage(props) {
    const classes = useStyles();
    const pageTitle = `impact`
    return (
        <Layout>
            <Seo
                title={pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)}
                article
            />
            <Parallax
                image={require("../images/impact.webp").default}
                filter={true}
                style={{ maxHeight: "100px" }}
            >
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand} style={{ paddingTop: 40 }}>
                                <h1 className={classes.title}>
                                    { pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)}
                                </h1>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main)}>
                <Impact/>
            </div>
        </Layout>
    );
}