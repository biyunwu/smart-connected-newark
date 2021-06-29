import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../material_style/partial_style/componentsSections/basicsStyle.js";
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import {publicationData} from "../data/publication/publicationData";
import GridContainer from "./partial_components/Grid/GridContainer";
import GridItem from "./partial_components/Grid/GridItem";
import {Divider} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles(styles);

export default function Publication() {
    const classes = useStyles();
    const [isShown, toggleVisibility] = React.useState(false);
    const toggle = () => {
        toggleVisibility(! isShown)
    }
    const buttonStyle = {
        background: "none",
        border: "none",
        padding: "0",
        color: "red",
        fontSize: "16px",
        margin: "0 0 0.5em -5px",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center", /* align horizontal */
        alignItems: "center", /* align vertical */
    }

    function onMouseEnter(event) {
        event.target.style.textDecoration = "underline";
    }

    function onMouseLeave(event) {
        event.target.style.textDecoration = "none";
    }

    return (
        <div
            className={classes.sections}
            style={{ paddingTop: "0.5em", fontWeight: 400, minHeight: "90vh" }}
        >
            <div className={classes.firstContainer}>
                <article className={classes.container}>
                    {publicationData.map((articlesByYear, idx) => (
                        <React.Fragment key={articlesByYear.year}>
                            <GridContainer>
                                <GridItem container spacing={0}>
                                    <GridItem item md={2} style={{margin: "0 auto"}}>
                                        <h2>{ articlesByYear.year }</h2>
                                    </GridItem>
                                    <GridItem item md={10} style={{padding: 0}}>
                                        <div className={classes.markdownStyle} style={{ padding: "1em 0"}}>
                                            {articlesByYear.articles.map(articleObj =>
                                                <React.Fragment>
                                                    <ReactMarkdown
                                                        rehypePlugins={[rehypeRaw]}
                                                        children={articleObj.articleName}
                                                        linkTarget="_blank"
                                                        sourcePos={true}
                                                    />
                                                    { articleObj.clickable &&
                                                        <div style={{marginLeft: "40px"}}>
                                                            <button
                                                                style={buttonStyle}
                                                                onClick={toggle}
                                                                onMouseEnter={onMouseEnter}
                                                                onMouseLeave={onMouseLeave}
                                                            >
                                                                {isShown ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                                                                {articleObj.buttonText}
                                                            </button>
                                                            <div style={{
                                                                    visibility: isShown ? "visible" : "hidden",
                                                                    maxHeight: isShown ? "100%" : "0px",
                                                                }}
                                                            >
                                                                <ReactMarkdown
                                                                    rehypePlugins={[rehypeRaw]}
                                                                    children={articleObj.clickToShow}
                                                                    linkTarget="_blank"
                                                                    sourcePos={true}
                                                                />
                                                            </div>
                                                        </div>
                                                    }
                                                </React.Fragment>
                                            )}
                                        </div>
                                    </GridItem>
                                </GridItem>
                            </GridContainer>
                            { idx === publicationData.length - 1 ? null : <Divider/> }
                        </React.Fragment>
                    ))}
                </article>
            </div>
        </div>
    );
}