import ConfettiBackground from "../components/confetti-background";
import Logo from "../components/logo";
import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import { Box, Button } from 'grommet';

function google_signing_button() {
    return (
        <img style={{width: "191px"}} src="/google-signin.png" />
    )

}

export default function () {
    const { height } = useWindowSize();
    return (
        <ConfettiBackground>
            <div style={{overflowY: "auto", minHeight: height - 1}}>
                <Logo/>
                <Box align="center" justify="center" pad="xlarge">
                    <Button as={google_signing_button} />
                </Box>
            </div>
        </ConfettiBackground>
    );
}