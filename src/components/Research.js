import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../material_style/partial_style/componentsSections/basicsStyle.js";
import {researchInfo} from "../data/research/researchInfo.js";
import ReactMarkdown from 'react-markdown'
import { Divider} from "@material-ui/core";
import { withPrefix } from 'gatsby';

const useStyles = makeStyles(styles);

const customStyles = makeStyles((theme) => ({
    markdownStyle: {
        margin: "20px 0",
        '& > p': {
            fontSize: "1em",
        }
    }
}));

export default function Research() {
    const classes = useStyles();
    const customClasses = customStyles();
    return (
        <div
            className={classes.sections}
            style={{ paddingTop: "0.5em", fontWeight: 400, minHeight: "90vh" }}
        >
            <div className={classes.container}><h1 className={classes.pageTitle}>Research</h1></div>
            {
                researchInfo.map(researchObj =>
                    <div className={classes.container} key={researchObj.title} style={{maxWidth: "50em", minHeight: "60vh"}}>
                        <h2>{researchObj.title}</h2>
                        <Divider/>
                        <div className={customClasses.markdownStyle}>
                            <ReactMarkdown children={researchObj.content} linkTatget="_blank" sourcePos={true}/>
                        </div>
                        <img src={withPrefix(researchObj.image)} alt={researchObj.title} style={{ maxWidth: "min(100%, 50em)"}} />
                    </div>
                )
            }

        </div>
    );
}
