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
import mayor from "../images/mayor.webp";
import newark from "../images/newark_google.webp";
import { withPrefix } from "gatsby";

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();
  // For pagination control in `Updates`
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const itemsPerPage = 4

  return (
    <div
      className={classes.sections}
      style={{ paddingTop: 20, fontWeight: 400, minHeight: "60vh"}}
    >
      <div className={classes.container}>
        <div style={{ margin: "1em 0" }} className={classes.markdownStyle}>
          <ReactMarkdown children={homeData.intro}/>
        </div>
        <GridContainer>
          <GridItem container spacing={1}>
            <GridItem container item xs={12} sm={12} md={6}>
              <img src={mayor} alt="diagram" style={{ width: "100%" }} />
            </GridItem>
            <GridItem container item xs={12} sm={12} md={6}>
              <img
                src={newark}
                alt="google map of newark city"
                style={{ width: "100%"}}
              />
            </GridItem>
          </GridItem>
        </GridContainer>
        <hr />

        <GridContainer>
          <GridItem container spacing={2}>
            <GridItem container item xs={12} sm={12} md={6}>
              <div
                className={classes.container}
                style={{
                  borderBottom: "1px solid rgb(154, 154, 154)",
                  padding: "0",
                }}
              >
                <div>
                  <h2>
                    Updates
                    <Pagination count={Math.ceil(homeData.updates.length / itemsPerPage)}
                                page={page}
                                onChange={handleChange}
                                variant="outlined"
                                color="primary"
                                style={{marginBottom: "15px", float: "right"}}
                    />
                  </h2>
                  <div style={{paddingTop: "1em"}}>
                    {homeData.updates.map((data, idx) =>
                        idx >= itemsPerPage * (page - 1) && idx < itemsPerPage * page
                        &&
                        <div key={idx} className={classes.markdownStyle} style={{padding: "5px 0"}}>
                          <Badge color="info">{data.time}</Badge>
                          <ReactMarkdown children={data.content} linkTarget="_blank"/>
                        </div>
                    )}
                  </div>
                </div>
              </div>
            </GridItem>
            <GridItem container item xs={12} sm={12} md={6}>
              <div
                className={classes.container}
                style={{
                  borderBottom: "1px solid rgb(154, 154, 154)",
                  padding: "0",
                }}
              >
                <h2>Highlights</h2>
                <div className={classes.markdownStyle}>
                  {homeData.highlights.map((item, key) => (
                      <ReactMarkdown key={key} children={item} linkTarget="_blank"/>
                  ))}
                </div>
              </div>
            </GridItem>

            <GridItem container xs={12} sm={12} md={6}>
              <div
                  className={classes.container}
                  style={{
                    borderBottom: "1px solid rgb(154, 154, 154)",
                    padding: "0",
                  }}
              >
                <h2>Objective</h2>
                <div className={classes.markdownStyle}>
                  <ReactMarkdown children={homeData.objective} linkTarget="_blank"/>
                </div>
              </div>
            </GridItem>
            <GridItem container xs={12} sm={12} md={6}>
              <div
                  style={{
                    borderBottom: "1px solid rgb(154, 154, 154)",
                    padding: "0",
                  }}
              >
                <h2>Innovation</h2>
                <div className={classes.markdownStyle}>
                  <ReactMarkdown children={homeData.innovation} linkTarget="_blank"/>
                </div>
              </div>
            </GridItem>

          </GridItem>
        </GridContainer>

        <h2>Collaboration</h2>
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
  );
}
