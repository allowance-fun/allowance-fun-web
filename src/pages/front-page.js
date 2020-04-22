
import ConfettiBackground from '../components/confetti-background';
import Logo from '../components/logo';
import React, {useState} from "react";
import {Box, Button, Footer, Paragraph, ResponsiveContext, Text} from "grommet";
import {isAuthenticated, useLoginState} from "../state/login-state";

export default function (props) {
    const size = React.useContext(ResponsiveContext);
    let webVersion = "dev";
    if(process.env.NODE_ENV === 'production') {
        webVersion = "1.0.0-" + process.env.BUILD;
    }
    let boxMargin = "large";
    if(size === "small") {
        boxMargin = "medium";
    }
    let loginButtonLabel = "Login";
    let loginButtonHref = "/api/login";
    let {loginState} = useLoginState();
    console.log(loginState);
    console.log(isAuthenticated(loginState));
    if(isAuthenticated(loginState)) {
        loginButtonLabel = "Launch";
        loginButtonHref = "/app/Home";
    }
    let [serverVersion, updateServerVersion] = useState("unknown");
    fetch("/api/version").then((response) => {
        response.json().then((versionInfo) => {
            updateServerVersion(versionInfo["ServerVersion"]);
        });
    })
    return (
        <ConfettiBackground>
        <div style={{overflowY: "auto", marginBottom: ".2in"}}>
            <Box direction="row">
                <Logo/>
                <Box flex="grow" justify="start" align="end" pad="small">
                    <Button primary={true} href={loginButtonHref} label={loginButtonLabel} />
                </Box>
            </Box>
            <Box margin="small" align="center">
                <Box margin={{top: boxMargin}} pad={"medium"}
                     alignContent="center" width="xlarge"
                     background={{color: "black", opacity: "strong", dark: true}}
                     round="medium"
                     style={{backdropFilter: "blur(5px)"}}
                >
                    <Paragraph size="large" fill={true}>
                        Allowance.Fun is a app to help families manage allowances and keep track of how much the children
                        have saved and spent.
                    </Paragraph>
                    <ul style={{fontSize: "1.25em", marginBlockStart: 0, marginBlockEnd: 0}}>
                        <li>Do you ever give them cash, and they lose it?</li>
                        <li>Don't have the cash on allowance day?</li>
                        <li>Kids begging you for the latest game and you do not know how much money they "have"?</li>
                    </ul>
                    <Paragraph size="large" fill={true}>
                        This app might be for you.  Allowance.fun is a pretend digital ledger to help you and your
                        kids keep track of allowances.  No real money here, it is all virtual.  But you can choose how many
                        accounts they have and what those accounts are used for.  Perhaps you want them to have a virtual
                        savings?  With this app you can create them 2 accounts and do an automatic split between them
                        with each deposit.  You, as the parent, are in full control.
                    </Paragraph>
                </Box>
            </Box>
        </div>
        <Footer style={{position: "absolute", bottom: 0, minWidth: "100%"}} background="brand" direction="row-reverse">
            <Box>Server Version: {serverVersion}</Box>
            <Box flex="grow">Web Version: {webVersion}</Box>
        </Footer>
    </ConfettiBackground>
    );
}