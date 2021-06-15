import { container, title } from "../../material-kit-react.js";
import customCheckboxRadioSwitch from "../customCheckboxRadioSwitch.js";

const basicsStyle = {
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
