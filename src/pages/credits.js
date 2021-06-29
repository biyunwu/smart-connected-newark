import * as React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../material_style/components.js";
import "../material_style/scss/material-kit-react.scss?v=1.10.0";
import Layout from "../components/partial_components/Layout";
import Credits from "../components/partial_components/Credits";
import Seo from "../components/partial_components/Seo";

const useStyles = makeStyles(styles);

export default function ImpactPage(props) {
    const classes = useStyles();
    const pageTitle = `Licenses`
    return (
        <Layout>
            <Seo
                title={pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)}
                description="Licenses | Credits | Developed by Biyun Wu"
            />
            <div className={classNames(classes.main)}>
                <Credits/>
            </div>
        </Layout>
    );
}