import React from "react";
import Panel from "./panel";
import {Box, Text} from "grommet";

export default function (props) {
    return (
        <Panel direction="row" margin="medium" pad="medium">
            <Box>
                <Text size="xlarge">{props.account.Name}:</Text>
            </Box>
            <Box flex="grow">
                <Text size="xlarge" textAlign="end">${props.account.Balance.toFixed(2)}</Text>
            </Box>
        </Panel>
    );
}