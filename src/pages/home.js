import React, {useState} from "react";
import {isAuthenticated, useLoginState} from "../state/login-state";
import {Box, Header, Text} from "grommet";
import Panel from "../components/panel";

function getCurrentAccounts(loginState, familyObject) {
    if(isAuthenticated(loginState) && familyObject.Children) {
        return familyObject.Children.filter(child => child.Identity.Email === loginState.user.Email)[0].Accounts;
    }
    return [];
}

export default function HomePage(props) {
    let {loginState} = useLoginState();
    let [familyObject, updateFamilyObject] = useState({});
    if(isAuthenticated(loginState) && !familyObject.Children) {
        fetch("/api/family/" + loginState.familyId, {headers: {"Authorization": "Bearer " + loginState.token}}).then((response) => {
            response.json().then((familyData) => {
                updateFamilyObject(familyData);
            });
        });
    }



    return (
        <Box fill="vertical" overflow={{vertical: "auto"}} background="url(/pennies.jpg)">
            <Header pad="small" background="brand" fill="horizontal">
                <Text>Welcome {loginState.user.FullName}</Text>
            </Header>
            <Panel margin="medium" pad="small" width="xlarge">
                Your accounts:
                {getCurrentAccounts(loginState, familyObject).map((account) => {
                    return (
                        <Box key={account.Id} pad={{left: "medium"}}>
                            {account.Name}: ${account.Balance.toFixed(2)}
                        </Box>
                    );
                })}
            </Panel>

        </Box>
    )
}