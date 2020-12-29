import Confetti from "react-confetti";
import {Box} from "grommet";
import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";


export default function (props) {
    let { children } = props;
    const {width, height } = useWindowSize();
    return (
        <div>
            <Confetti
                style={{zIndex: -1, position: "fixed", width: width, height: height}}
                width={width}
                height={height}
                numberOfPieces={100}
                gravity={0.05}
            />
            <Box style={{
                    zIndex: 1, position: "fixed", top: 0, left: 0,
                    width: width, height: height
            }}>
                {children}
            </Box>
        </div>
    );

}