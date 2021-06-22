/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
// import { Apps, CloudDownload } from "@material-ui/icons";

// core components
// import CustomDropdown from "./CustomDropdown.js";
import Button from "./Button.js";
import {siteInfo} from "../../../data/site/siteInfo";

import styles from "../../../material_style/partial_style/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  // const pageName = props.pageName;
  return (
    <List className={classes.list}>
      {/*<ListItem className={classes.listItem}>*/}
      {/*  <CustomDropdown*/}
      {/*    noLiPadding*/}
      {/*    buttonText="Components"*/}
      {/*    buttonProps={{*/}
      {/*      className: classes.navLink,*/}
      {/*      color: "transparent",*/}
      {/*    }}*/}
      {/*    buttonIcon={Apps}*/}
      {/*    dropdownList={[*/}
      {/*      <Link to="/" className={classes.dropdownLink}>*/}
      {/*        All components*/}
      {/*      </Link>,*/}
      {/*      <a*/}
      {/*        href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"*/}
      {/*        target="_blank"*/}
      {/*        className={classes.dropdownLink}*/}
      {/*      >*/}
      {/*        Documentation*/}
      {/*      </a>,*/}
      {/*    ]}*/}
      {/*  />*/}
      {/*</ListItem>*/}
        {siteInfo.pageNames.map(name =>
            <ListItem className={classes.listItem} key={name}>
              <Link to={name === siteInfo.pageNames[0] ? "/" : "/" + name}
                    className={classes.listItem}
                    activeStyle={{ textDecoration: "underline" }}
              >
                <Button
                    // href={name === siteInfo.pageNames[0] ? siteInfo.domain : siteInfo.domain + name}
                    color="transparent"
                    className={classes.navLink}
                >
                  { name }
                </Button>
              </Link>
            </ListItem>
        )}
      {/*<ListItem className={classes.listItem}>*/}
      {/*  <Button*/}
      {/*    href="./"*/}
      {/*    color="transparent"*/}
      {/*    className={classes.navLink}*/}
      {/*    style={pageName === "home" && { textDecoration: "underline" }}*/}
      {/*  >*/}
      {/*    Home*/}
      {/*  </Button>*/}
      {/*</ListItem>*/}
      {/*  <ListItem className={classes.listItem}>*/}
      {/*      <Button*/}
      {/*          href="./team"*/}
      {/*          color="transparent"*/}
      {/*          className={classes.navLink}*/}
      {/*          style={pageName === "home" && { textDecoration: "underline" }}*/}
      {/*      >*/}
      {/*          Team*/}
      {/*      </Button>*/}
      {/*  </ListItem>*/}
      {/*<ListItem className={classes.listItem}>*/}
      {/*  <Button*/}
      {/*    href="./"*/}
      {/*    color="transparent"*/}
      {/*    className={classes.navLink}*/}
      {/*  >*/}
      {/*    Research*/}
      {/*  </Button>*/}
      {/*</ListItem>*/}
      {/*<ListItem className={classes.listItem}>*/}
      {/*  <Button*/}
      {/*    href="./"*/}
      {/*    color="transparent"*/}
      {/*    className={classes.navLink}*/}
      {/*  >*/}
      {/*    Publication*/}
      {/*  </Button>*/}
      {/*</ListItem>*/}
      {/*<ListItem className={classes.listItem}>*/}
      {/*  <Button*/}
      {/*    href="./"*/}
      {/*    color="transparent"*/}
      {/*    className={classes.navLink}*/}
      {/*  >*/}
      {/*    Study*/}
      {/*  </Button>*/}
      {/*</ListItem>*/}
      {/*<ListItem className={classes.listItem}>*/}
      {/*  <Button*/}
      {/*    href="./"*/}
      {/*    color="transparent"*/}
      {/*    className={classes.navLink}*/}
      {/*  >*/}
      {/*    Impact*/}
      {/*  </Button>*/}
      {/*</ListItem>*/}
    </List>
  );
}
