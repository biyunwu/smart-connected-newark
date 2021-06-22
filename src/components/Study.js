import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../material_style/partial_style/componentsSections/basicsStyle.js";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Divider} from "@material-ui/core";
import {studyData} from "../data/study/studyData";
import { withPrefix } from 'gatsby';
import GridItem from "./partial_components/Grid/GridItem";
import GridContainer from "./partial_components/Grid/GridContainer";

const customStyles = makeStyles((theme) => ({
    markdownStyle: {
        margin: "20px 0",
        '& > p': {
            fontSize: "16px !important",
        }
    }
}));

const useStyles = makeStyles(styles);

export default function Study() {
    const classes = useStyles();
    const customClasses = customStyles()
    return (
        <div
            className={classes.sections}
            style={{ paddingTop: "0.5em", fontWeight: 400 }}
        >
            <div className={classes.container}>
                <h1 className={classes.pageTitle}>Study</h1>
            </div>
            {
                studyData.map(studyObj =>
                    <div className={classes.container} key={studyObj.study_title}>
                        <h2>{studyObj.study_title}</h2>
                        {/*<Divider/>*/}
                        {
                            studyObj.contentList.map(contentObj =>
                                <div key={contentObj.title}>
                                    <Divider style={{ marginTop: "20px" }}/>
                                    <h3>{contentObj.title}</h3>
                                    <GridContainer>
                                        <GridItem container spacing={0}>
                                            <GridItem item sm={12} md={6} style={{minHeight: "200px"}}>
                                                {/*<h3>{contentObj.title}</h3>*/}
                                                <div className={customClasses.markdownStyle}>
                                                    <ReactMarkdown children={contentObj.detail}
                                                                   linkTatget="_blank"
                                                                   sourcePos={true}
                                                    />
                                                </div>
                                            </GridItem>
                                            <GridItem item sm={12} md={6}>
                                                {/*<div style={{ padding: "20 0 20 0 !important"}}>*/}
                                                    {  // only 1 media is to be displayed
                                                        (contentObj.image &&
                                                            <img src={withPrefix(contentObj.image)}
                                                                 alt={contentObj.title}
                                                                 style={{maxWidth: "min(100vw, 100%)"}}
                                                            />
                                                        )
                                                        ||
                                                        (contentObj.embedHtml &&
                                                            <ReactMarkdown children={contentObj.embedHtml}
                                                                           rehypePlugins={[rehypeRaw]}
                                                                           linkTatget="_blank"
                                                                           sourcePos={true}
                                                            />

                                                        )
                                                    }
                                                {/*</div>*/}
                                            </GridItem>
                                        </GridItem>
                                    </GridContainer>
                                    {/*<Divider style={{ marginTop: "20px" }}/>*/}
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}