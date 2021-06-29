import { container, title } from "../../material-kit-react.js";
import customCheckboxRadioSwitch from "../customCheckboxRadioSwitch.js";

const basicsStyle = {
  pageTitle: {
    textAlign: "center",
    fontWeight: "700",
    color: "rgb(60, 72, 88)",
    marginTop: "1.8em",
  },

  firstContainer : {
    padding: "0",
    marginTop: "7em",
    // ...container,
  },
  markdownStyle: {
    // '& > p, & > ul > li > p ': {
    //   fontSize: "1em",
    // },
    '& p ': {
      fontSize: "1em",
    },
    "& span": {
      fontSize: "14px",
    },
    "& h5": {
      fontSize: "20px",
      fontWeight: "400",
    },
    "& *": {
      fontWeight: "400",
    }
  },
  inlineMarkdownStyle: {
    '& p ': {
      fontSize: "1em",
      display: "inline",
      paddingLeft: "0.5em",
    },
    "& span": {
      fontSize: "14px",
    },
    "& h5": {
      fontSize: "18px",
      fontWeight: "400",
    },
    "& *": {
      fontWeight: "400",
    }
  },
  sections: {
    padding: "70px 0",
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  space50: {
    height: "50px",
    display: "block",
  },
  space70: {
    height: "70px",
    display: "block",
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF",
  },
  ...customCheckboxRadioSwitch,
};

export default basicsStyle;
