import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../material_style/partial_style/componentsSections/basicsStyle.js";
import ReactMarkdown from 'react-markdown';
import { Divider} from "@material-ui/core";
import {impactData} from "../data/impact/impactData";

const useStyles = makeStyles(styles);

const customStyles = makeStyles((theme) => ({
    markdownStyle: {
        margin: "20px 0",
        '& > p': {
            fontSize: "16px",
        },
        maxWidth: "50em",
    }
}));

export default function Impact() {
    const classes = useStyles();
    const customClasses = customStyles();
    return (
        <div
            className={classes.sections}
            style={{ paddingTop: "0.5em", fontWeight: 400, minHeight: "90vh" }}
        >
            <div className={classes.container}>
                <h1 className={classes.pageTitle}>Impact</h1>
            </div>
            {
                impactData.map(impactObj =>
                    <div className={classes.container} key={impactObj.sectionTitle} style={{ maxWidth: "50em" }}>
                        <h2>{impactObj.sectionTitle}</h2>
                        {/*<Divider/>*/}
                        {
                            impactObj.impactList.map(impact =>
                                <div key={impact.subtitle} >
                                    <Divider/>
                                    <h3>{impact.subtitle}</h3>
                                    <div className={customClasses.markdownStyle}>
                                        <ReactMarkdown children={impact.detail}/>
                                    </div>
                                    {/*<Divider/>*/}
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}