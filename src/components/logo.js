import {Zoom} from "react-awesome-reveal";
import {Box, ResponsiveContext} from "grommet";
import React from "react";


export default function () {
    const size = React.useContext(ResponsiveContext);
    let fontSize = "60pt";
    let rotation = "rotate(-15deg)";
    let titleBottomMargin = "medium";
    if(size === "small") {
        rotation = "rotate(-10deg)";
        fontSize = "30pt";
        titleBottomMargin = "xlarge";
    }
    return (
        <Box margin={{bottom: titleBottomMargin, top: "medium"}}
             width="large"
             style={{fontFamily: "Henny Penny", color: "#179614", fontSize: fontSize, transform: rotation}}
             responsive={false}>
            <Zoom direction="top" delay={1000}>Allowance.Fun!</Zoom>
        </Box>
    );
}