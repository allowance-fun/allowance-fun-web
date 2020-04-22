import React from "react";
import {useLoginState} from "../state/login-state";
import {Box} from "grommet";


export default function HomePage(props) {
    let {loginState} = useLoginState();

    return (
        <Box>
            Welcome {loginState.user.FullName}
        </Box>
    )
}