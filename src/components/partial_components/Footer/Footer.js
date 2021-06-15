/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// import Favorite from "@material-ui/icons/Favorite";

import styles from "../../../material_style/partial_style/footerStyle.js";
import { Link } from "gatsby";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div>
          <List className={classes.list}>
            {/*<ListItem className={classes.inlineBlock}>*/}
            {/*  <a*/}
            {/*    href="https://www.creative-tim.com/?ref=mkr-footer"*/}
            {/*    className={classes.block}*/}
            {/*    target="_blank"*/}
            {/*  >*/}
            {/*    Creative Tim*/}
            {/*  </a>*/}
            {/*</ListItem>*/}
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/team"
                className={classes.block}
              >
                About us
              </Link>
            </ListItem>
            {/*<ListItem className={classes.inlineBlock}>*/}
            {/*  <a*/}
            {/*    href=".."*/}
            {/*    className={classes.block}*/}
            {/*    target="_blank"*/}
            {/*  >*/}
            {/*    Link*/}
            {/*  </a>*/}
            {/*</ListItem>*/}
            <ListItem className={classes.inlineBlock}>
              <Link
                to="/"
                className={classes.block}
              >
                Licenses & Privacy
              </Link>
            </ListItem>
          </List>
        </div>
        <div style={{ paddingBottom: "1em" }}>
          &copy; {1900 + new Date().getYear()} {" "}
          Rutgers, The State University of New Jersey. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
