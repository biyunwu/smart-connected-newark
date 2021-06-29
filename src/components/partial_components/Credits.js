import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../material_style/partial_style/componentsSections/basicsStyle.js";
import { Divider} from "@material-ui/core";

const useStyles = makeStyles(styles);


export default function Credits() {
    const classes = useStyles();
    return (
        <div
            className={classes.sections}
            style={{ paddingTop: "0.5em", fontWeight: 400, minHeight: "90vh" }}
        >
            <div className={classes.container}>
                <div style={{margin: "7em 0 2em 0"}}>
                    <h2>Open Source Credits</h2>
                    <Divider/>
                    <ul>
                        <li><a href='https://www.gatsbyjs.com' target='_blank' rel="noreferrer">Gatsby.js</a></li>
                        <li><a href='https://reactjs.org' target='_blank' rel="noreferrer">React.js</a></li>
                        <li><a href='https://material-ui.com' target='_blank' rel="noreferrer">Material UI</a></li>
                        <li><a href='https://www.creative-tim.com/product/material-kit-react' target='_blank' rel="noreferrer">Material Kit React</a></li>
                        <li><a href='https://github.com/remarkjs/react-markdown' target='_blank' rel="noreferrer">react-markdown</a></li>
                    </ul>
                </div>
                <div style={{margin: "2em 0"}}>
                    <h2>Developer</h2>
                    <Divider/>
                    <h3><a href='https://github.com/biyunwu' target='_blank' rel="noreferrer" style={{color: "black"}}>Biyun Wu</a></h3>
                    <ul>
                        <li><a href='https://github.com/biyunwu' target='_blank' rel="noreferrer">Github</a></li>
                        <li><a href='https://www.linkedin.com/in/biyunwu' target='_blank' rel="noreferrer">LinkedIn</a></li>
                        <li><a href='https://biyunwu.com' target='_blank' rel="noreferrer">Personal website</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}