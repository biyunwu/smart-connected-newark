import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../material_style/partial_style/componentsSections/basicsStyle.js";
import ReactMarkdown from 'react-markdown'
import {publicationData} from "../data/publication/publicationData";
import GridContainer from "./partial_components/Grid/GridContainer";
import GridItem from "./partial_components/Grid/GridItem";
import {Divider} from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function Publication() {
    const classes = useStyles();
    return (
        <div
            className={classes.sections}
            style={{ paddingTop: "0.5em", fontWeight: 400, minHeight: "70vh" }}
        >
            <div className={classes.container}>
                {publicationData.map((articlesByYear, idx) => (
                    <React.Fragment key={articlesByYear.year}>
                        <GridContainer>
                            <GridItem container spacing={0}>
                                <GridItem item md={2} style={{margin: "auto"}}>
                                    <h2>{ articlesByYear.year }</h2>
                                </GridItem>
                                <GridItem item md={10} style={{padding: 0}}>
                                    <div className={classes.markdownStyle}>
                                        {articlesByYear.articles.map(article => (
                                            <ReactMarkdown
                                                key={article}
                                                children={article}
                                                linkTarget="_blank"
                                                sourcePos={true}
                                            />
                                        ))}
                                    </div>
                                </GridItem>
                            </GridItem>
                        </GridContainer>
                        { idx === publicationData.length - 1 ? null : <Divider/> }
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}