import React from "react";
import {Box} from "grommet";


export default function (props) {
    return (
        <Box
            background={{color: "black", opacity: "strong", dark: true}}
            round="medium"
            style={{backdropFilter: "blur(5px)"}}
            {...props}
        />
    );

}