import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../material_style/partial_style/componentsSections/basicsStyle.js";
import { Divider} from "@material-ui/core";

const useStyles = makeStyles(styles);


export default function Licenses() {
    const classes = useStyles();
    return (
        <div
            className={classes.sections}
            style={{ paddingTop: "0.5em", fontWeight: 400, minHeight: "70vh" }}
        >
            <div className={classes.container}>
                <div style={{margin: "2em 0"}}>
                    <h3>Open Source Credits</h3>
                    <ul>
                        <li><a href='https://www.gatsbyjs.com' target='_blank' rel="noreferrer">Gatsby.js</a></li>
                        <li><a href='https://reactjs.org' target='_blank' rel="noreferrer">React.js</a></li>
                        <li><a href='https://material-ui.com' target='_blank' rel="noreferrer">Material UI</a></li>
                        <li><a href='https://www.creative-tim.com/product/material-kit-react' target='_blank' rel="noreferrer">Material Kit React</a></li>
                        <li><a href='https://github.com/remarkjs/react-markdown' target='_blank' rel="noreferrer">react-markdown</a></li>
                    </ul>
                </div>
                <Divider/>
                <div style={{margin: "2em 0"}}>
                    <h3>Image License</h3>
                    <p>Background images by <a href='https://www.freepik.com' target='_blank' rel="noreferrer">Freepik</a>.</p>
                </div>
                <Divider/>
                <div style={{margin: "2em 0"}}>
                    <h3>Developer</h3>
                    <h4>Biyun Wu</h4>
                    <ul>
                        <li><a href='https://github.com/biyunwu' target='_blank' rel="noreferrer">Github</a></li>
                        <li><a href='https://www.linkedin.com/in/biyunwu' target='_blank' rel="noreferrer">LinkedIn</a></li>
                        <li><a href='https://biyunwu.com' target='_blank' rel="noreferrer">Personal Website</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}