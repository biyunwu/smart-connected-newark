import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "./partial_components/Grid/GridContainer";
import GridItem from "./partial_components/Grid/GridItem.js";
import Badge from "./partial_components/Badge/Badge.js";
import Pagination from '@material-ui/lab/Pagination';
import ReactMarkdown from "react-markdown";
import { homeData } from "../data/home/homeData";
import styles from "../material_style/partial_style/componentsSections/basicsStyle.js";
import { withPrefix } from "gatsby";
import LongTitle from "./partial_components/LongTitle";
import {Divider} from "@material-ui/core";
import Slideshow from "../components/partial_components/Slideshow"
// import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();
  // For pagination control in `Updates`
  const [readMore, setReadMore] = React.useState(false);
  const handleChange = (event) => {
    setReadMore(! readMore);
  };
  const initialItems = 4

  const backgroundImage = require("../images/Newark_Penn_Station_June_2015_001.jpg").default
  const backgroundStyle = {
    marginTop: "4em",
    background: `url(${backgroundImage})`,
    width: "100%",
    height: "100%",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    padding: "1em"
  }

    const cardStyle = {
        background: "linear-gradient(to top, transparent, rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(3px)",
        margin: "1em auto",
        // padding: "1em",
        maxWidth: "500px",
        color: "white",
    }

  return (
    <>
      <div style={backgroundStyle}>
        <div style={{margin: "4em auto 0 auto"}}>
          <div className={classes.container}
               style={{ color: "white",
                        padding: "1em",
                        // background: "rgba(0, 0, 0, 0.2)",
                        // backdropFilter: "blur(1.5px)",
                        // borderLeft: "10px solid rgba(255, 255, 0, 0.6)",
                        // border: "1px solid rgba(255, 255, 255, 0.6)",
               }}
          >
            <LongTitle
                title={"Harmony: Empowering Newark Residents with Smart and Inclusive Service Integration"}
            />
            <div style={{ margin: "1em 0",
                          padding: "0.5em 1em",
                          background: "rgba(0, 0, 0, 0.2)",
                          backdropFilter: "blur(3px)"
                        }}
                 className={classes.markdownStyle}
            >
              <ReactMarkdown children={homeData.intro}/>
            </div>
          </div>
          <div style={{background: "none", margin: "2em auto", maxWidth: "1700px"}}>
            <GridContainer>
              <GridItem container spacing={0}>
                <GridItem item xs={12} sm={6} md={4}>
                  <div
                      // className={classes.container}
                      style={cardStyle}
                  >
                    <h2 style={{textAlign: "center", background: "rgba(255, 0, 0, 0.6)", margin: "0 0 0.5em 0"}}>Highlights</h2>
                    <div className={classes.markdownStyle} style={{padding: "0 10px"}}>
                      {homeData.highlights.map((item, key) => (
                          <ReactMarkdown key={key} children={item} linkTarget="_blank"/>
                      ))}
                    </div>
                  </div>
                </GridItem>
                <GridItem container item xs={12} sm={6} md={4}>
                  <div
                      // className={classes.container}
                      style={cardStyle}
                  >
                    <h2 style={{textAlign: "center", background: "rgba(0, 255, 0, 0.6)", margin: "0 0 0.5em 0"}}>Objective</h2>
                    <div className={classes.markdownStyle} style={{padding: "0 10px"}}>
                      <ReactMarkdown children={homeData.objective} linkTarget="_blank"/>
                    </div>
                  </div>
                </GridItem>
                <GridItem container item xs={12} sm={6} md={4}>
                  <div
                      // className={classes.container}
                      style={cardStyle}
                  >
                    <h2 style={{textAlign: "center", background: "rgba(0, 0, 255, 0.6)", margin: "0 0 0.5em 0"}}>Innovation</h2>
                    <div className={classes.markdownStyle} style={{padding: "0 10px"}}>
                      <ReactMarkdown children={homeData.innovation} linkTarget="_blank"/>
                    </div>
                  </div>
                </GridItem>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>

      <div
        className={classes.sections}
        style={{ paddingTop: 20, fontWeight: 400, minHeight: "60vh"}}
      >
        <div className={classes.container}>
          {/*<div style={{ margin: "1em 0" }} className={classes.markdownStyle}>*/}
          {/*  <ReactMarkdown children={homeData.intro}/>*/}
          {/*</div>*/}
          {/*<GridContainer>*/}
          {/*  <GridItem container spacing={1}>*/}
          {/*    <GridItem container item xs={12} sm={12} md={6}>*/}
          {/*      <img src={mayor} alt="diagram" style={{ width: "100%" }} />*/}
          {/*    </GridItem>*/}
          {/*    <GridItem container item xs={12} sm={12} md={6}>*/}
          {/*      <img*/}
          {/*        src={newark}*/}
          {/*        alt="google map of newark city"*/}
          {/*        style={{ width: "100%"}}*/}
          {/*      />*/}
          {/*    </GridItem>*/}
          {/*  </GridItem>*/}
          {/*</GridContainer>*/}
          {/*<hr />*/}

          <GridContainer>
            <GridItem container spacing={2}>
              <GridItem container item xs={12}>
                <div
                  className={classes.container}
                  style={{
                    // borderBottom: "1px solid rgb(154, 154, 154)",
                    padding: "0",
                  }}
                >
                  <div>
                    <h2>
                      News
                      {/*<Pagination count={Math.ceil(homeData.updates.length / itemsPerPage)}*/}
                      {/*            page={page}*/}
                      {/*            onChange={handleChange}*/}
                      {/*            variant="outlined"*/}
                      {/*            color="primary"*/}
                      {/*            style={{marginBottom: "15px", float: "right"}}*/}
                      {/*/>*/}
                    </h2>
                    <Divider/>
                    <div style={{paddingTop: "1em"}}>
                      {homeData.updates.map((data, idx) =>
                          (idx < initialItems || readMore)
                          &&
                          <div key={idx} className={classes.inlineMarkdownStyle} style={{padding: "5px 0"}}>
                              <Badge color="info">{data.time + "  "}</Badge>
                              <ReactMarkdown children={data.content} linkTarget="_blank"/>
                          </div>
                      )}
                      <div style={{textAlign: "center"}}>
                        <button
                            onClick={handleChange}
                            style={{color: "rgb(60, 72, 88)",
                              border: "none",
                              background: "none",
                              fontSize: "14px",
                              marginTop: "0.3em",
                              padding: "0.3em 0 0.3em 0.5em",
                              cursor: "pointer",
                              display: "flex",
                              justifyContent: "center", /* align horizontal */
                              alignItems: "center", /* align vertical */
                            }}
                        >
                            {readMore ? "Show less" : "Read more"}
                            {readMore && <ExpandLessIcon/>}
                            {!readMore && <ChevronRightIcon/>}
                        </button>
                      </div>

                      {/*<Pagination count={Math.ceil(homeData.updates.length / itemsPerPage)}*/}
                      {/*            page={page}*/}
                      {/*            onChange={handleChange}*/}
                      {/*            variant="outlined"*/}
                      {/*            color="primary"*/}
                      {/*            style={{marginBottom: "15px"}}*/}
                      {/*/>*/}
                    </div>
                  </div>
                </div>
              </GridItem>
              {/*<GridItem container item xs={12} sm={12} md={6}>*/}
              {/*  <div*/}
              {/*    className={classes.container}*/}
              {/*    style={{*/}
              {/*      borderBottom: "1px solid rgb(154, 154, 154)",*/}
              {/*      padding: "0",*/}
              {/*    }}*/}
              {/*  >*/}
              {/*    <h2>Highlights</h2>*/}
              {/*    <div className={classes.markdownStyle}>*/}
              {/*      {homeData.highlights.map((item, key) => (*/}
              {/*          <ReactMarkdown key={key} children={item} linkTarget="_blank"/>*/}
              {/*      ))}*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</GridItem>*/}

              {/*<GridItem container xs={12} sm={12} md={6}>*/}
              {/*  <div*/}
              {/*      className={classes.container}*/}
              {/*      style={{*/}
              {/*        borderBottom: "1px solid rgb(154, 154, 154)",*/}
              {/*        padding: "0",*/}
              {/*      }}*/}
              {/*  >*/}
              {/*    <h2>Objective</h2>*/}
              {/*    <div className={classes.markdownStyle}>*/}
              {/*      <ReactMarkdown children={homeData.objective} linkTarget="_blank"/>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</GridItem>*/}
              {/*<GridItem container xs={12} sm={12} md={6}>*/}
              {/*  <div*/}
              {/*      style={{*/}
              {/*        borderBottom: "1px solid rgb(154, 154, 154)",*/}
              {/*        padding: "0",*/}
              {/*      }}*/}
              {/*  >*/}
              {/*    <h2>Innovation</h2>*/}
              {/*    <div className={classes.markdownStyle}>*/}
              {/*      <ReactMarkdown children={homeData.innovation} linkTarget="_blank"/>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</GridItem>*/}

            </GridItem>
          </GridContainer>

          <h2 style={{marginTop: "1em"}}>Media</h2>
          <Divider style={{color: "transparent", marginBottom: "1em"}}/>
          {/*<Divider />*/}
          <GridContainer>
            <GridItem container spacing={1}>
              <GridItem container item sm={12} md={6}>
                <div style={{height: "100%", width: "100%", minHeight: "300px", border: "1px rgb(238, 238, 238) solid"}}>
                  <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/ryHSMTRY2wM"
                          title="YouTube video player" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                  />
                </div>
              </GridItem>
              <GridItem container item sm={12} md={6}>
                {/*<img*/}
                {/*    src={newark}*/}
                {/*    alt="google map of newark city"*/}
                {/*    style={{ width: "100%"}}*/}
                {/*/>*/}
                <div style={{height: "100%", width: "100%", border: "1px rgb(238, 238, 238) solid "}}>
                  <Slideshow/>
                </div>
              </GridItem>
            </GridItem>
          </GridContainer>

          <h2 style={{marginTop: "1em"}}>Collaboration</h2>
          <Divider style={{color: "transparent", marginBottom: "1em"}}/>
          <GridContainer>
            <GridItem container spacing={5}>
              {
                homeData.collaborators.collaborator_list.map(collaborator =>
                  <GridItem container item xs={4} sm={3} md={2} key={ collaborator.name }>
                    <a href={collaborator.url} target="_blank" rel="noreferrer">
                      <img
                          src={ withPrefix(homeData.collaborators.image_directory + collaborator.icon_filename) }
                          alt={ collaborator.name }
                          style={{ width: "100%", height: "100%" }}
                      />
                    </a>
                  </GridItem>
              )}
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </>
  );
}
