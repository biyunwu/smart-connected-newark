import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "./partial_components/Grid/GridContainer";
import GridItem from "./partial_components/Grid/GridItem.js";
import Badge from "./partial_components/Badge/Badge.js";
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw'
import { homeData } from "../data/home/homeData";
import styles from "../material_style/partial_style/componentsSections/basicsStyle.js";
import { withPrefix } from "gatsby";
// import LongTitle from "./partial_components/LongTitle";
import {Divider} from "@material-ui/core";
import Slideshow from "../components/partial_components/Slideshow"
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles(styles);

class HomeComponent extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isBrowserReady: false,
      viewportWidth: 0,
      readMore: false,
      isHover: false,
    };
  }

  updateWindowSize = () => {
    this.setState(
        { isBrowserReady: typeof window !== 'undefined',
          viewportWidth: typeof window !== 'undefined' ? window.innerWidth : 0
        }
    )
  }

  handleChange = (event) => {
    this.setState(prevState => ({
      readMore: ! prevState.readMore
    }));
  }

  onMoveEnter(event){
    event.target.style.textDecoration = 'underline';
  }

  onMoveLeave(event){
    event.target.style.textDecoration = 'none';
  }

  componentDidMount() {
    this.updateWindowSize();
    window.addEventListener('resize', this.updateWindowSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowSize);
  }

  render() {
    const classes = this.props.classes;
    const initialItems = 4
    const backgroundImage = require("../images/Newark_Penn_Station_June_2015_001.webp").default
    const backgroundStyle = {
      marginTop: "4em",
      background: "rgb(70, 110, 180)",
      backgroundImage: `url(${backgroundImage})`,
      // background: `url(${backgroundImage})`,
      width: "100%",
      height: "100%",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      padding: "1em"
    }
    const cardStyle = {
      background: "linear-gradient(to top, transparent, rgba(0, 0, 0, 0.8))",
      backdropFilter: "blur(3px)",
      margin: "1em auto",
      // padding: "1em",
      maxWidth: "500px",
      color: "white",
    }

    const {isBrowserReady, viewportWidth, readMore, isHover} = this.state

    const [breakpointExtraSmall, breakpointSmall, breakpointMiddle] = [320, 420, 768]

    const getFontSize = (width) =>
        width > breakpointMiddle
            ? "3em"
            : width > breakpointSmall
            ? "2.5em"
            : width > breakpointExtraSmall
                ? "2em"
                : "1.5em"

    return (
        isBrowserReady &&
        <>
          <div style={backgroundStyle}>
            <div style={{margin: "4em auto 0 auto"}}>
              <div className={classes.container}
                   style={{
                     color: "white",
                     padding: "1em",
                     // background: "rgba(0, 0, 0, 0.2)",
                     // backdropFilter: "blur(1.5px)",
                     // borderLeft: "10px solid rgba(255, 255, 0, 0.6)",
                     // border: "1px solid rgba(255, 255, 255, 0.6)",
                   }}
              >
                {/*<LongTitle*/}
                {/*    title={"Harmony: Empowering Newark Residents with Smart and Inclusive Service Integration"}*/}
                {/*/>*/}
                <h1 style={{ fontSize: getFontSize(viewportWidth), fontWeight: "700", margin: "0" }}>
                  "Harmony: Empowering Newark Residents with Smart and Inclusive Service Integration"
                </h1>
                <div style={{
                  margin: "1em 0",
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
                          style={cardStyle}
                      >
                        <h3 style={{
                          fontWeight: "400",
                          textAlign: "center",
                          background: "rgba(255, 0, 0, 0.6)",
                          margin: "0",
                          padding: "0.5em 0"
                        }}>Highlights</h3>
                        <div className={classes.markdownStyle} style={{padding: "1em"}}>
                          {homeData.highlights.map((item, key) => (
                              <ReactMarkdown key={key} children={item} linkTarget="_blank"/>
                          ))}
                        </div>
                      </div>
                    </GridItem>
                    <GridItem container item xs={12} sm={6} md={4}>
                      <div
                          style={cardStyle}
                      >
                        <h3 style={{
                          fontWeight: "400",
                          textAlign: "center",
                          background: "rgba(0, 255, 0, 0.6)",
                          margin: "0",
                          padding: "0.5em 0"
                        }}>Objective</h3>
                        <div className={classes.markdownStyle} style={{padding: "1em"}}>
                          <ReactMarkdown children={homeData.objective} linkTarget="_blank"/>
                        </div>
                      </div>
                    </GridItem>
                    <GridItem container item xs={12} sm={6} md={4}>
                      <div
                          style={cardStyle}
                      >
                        <h3 style={{
                          fontWeight: "400",
                          textAlign: "center",
                          background: "rgba(0, 0, 255, 0.6)",
                          margin: "0",
                          padding: "0.5em 0"
                        }}>Innovation</h3>
                        <div className={classes.markdownStyle} style={{padding: "1em"}}>
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
              style={{paddingTop: 20, fontWeight: 400, minHeight: "60vh"}}
          >
            <div className={classes.container}>
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
                        <h2>News</h2>
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
                                onClick={this.handleChange}
                                onMouseEnter={this.onMoveEnter}
                                onMouseLeave={this.onMoveLeave}
                                style={{
                                  color: "rgb(60, 72, 88)",
                                  border: "none",
                                  textDecoration: isHover && "underline",
                                  background: "none",
                                  fontSize: "14px",
                                  marginTop: "0.3em",
                                  padding: "0.3em 0",
                                  cursor: "pointer",
                                  display: "flex",
                                  justifyContent: "center", /* align horizontal */
                                  alignItems: "center", /* align vertical */
                                }}
                            >
                              {readMore && <ExpandLessIcon/>}
                              {/*{!readMore && <ChevronRightIcon/>}*/}
                              {!readMore && <ExpandMoreIcon/>}
                              {readMore ? "Show less" : "Read more"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GridItem>
                </GridItem>
              </GridContainer>

              <h2 style={{marginTop: "1em"}}>Media</h2>
              <Divider style={{color: "transparent", marginBottom: "1em"}}/>
              {/*<Divider />*/}
              <GridContainer>
                <GridItem container spacing={1}>
                  <GridItem container item sm={12} md={6}>
                    <div style={{
                      height: "100%",
                      width: "100%",
                      minHeight: "300px",
                      border: "1px rgb(238, 238, 238) solid"
                    }}>
                      <ReactMarkdown
                          rehypePlugins={[rehypeRaw]}
                          children={homeData.videoHtml}
                          linkTarget="_blank"
                          sourcePos={true}
                      />
                    </div>
                  </GridItem>
                  <GridItem container item sm={12} md={6}>
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
                        <GridItem container item xs={4} sm={3} md={2} key={collaborator.name}>
                          <a href={collaborator.url} target="_blank" rel="noreferrer">
                            <img
                                src={withPrefix(homeData.collaborators.image_directory + collaborator.icon_filename)}
                                alt={collaborator.name}
                                style={{width: "100%", height: "100%"}}
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
}

const Home = () => {
  const classes = useStyles();
  return (
      <HomeComponent classes={classes} />
  )
}

export default Home;
