import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import styles from "../../../material_style/partial_style/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const pageNames = ["home", "team", "research", "publication", "study", "impact"]
  return (
    <List className={classes.list}>
        {pageNames.map(name =>
            <ListItem className={classes.listItem} key={name}>
              <Link to={name === pageNames[0] ? "/" : "/" + name}
                    className={`${classes.listItem} ${classes.navLink}`}
                    activeStyle={{ textDecoration: "underline", color: "black" }}
              >
                {name}
              </Link>
            </ListItem>
        )}
    </List>
  );
}
