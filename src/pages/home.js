import React, {useState} from "react";
import {isAuthenticated, useLoginState} from "../state/login-state";
import {Box, Header, Image, Text} from "grommet";
import AccountBalance from "../components/account-balance";
import Panel from "../components/panel";
import moment from "moment";
import {Redirect} from "react-router";

function getCurrentUser(loginState, familyObject) {
    if(isAuthenticated(loginState) && familyObject.Children) {
        return familyObject.Children.filter(child => child.Identity.Email === loginState.user.Email)[0];
    }
    return {
        Accounts: [],
        Scheduled: [],
    };
}

export default function HomePage(props) {
    let {loginState} = useLoginState();
    let [familyObject, updateFamilyObject] = useState({});
    if(isAuthenticated(loginState) && !familyObject.Children) {
        fetch("/api/family/" + loginState.familyId, {headers: {"Authorization": "Bearer " + loginState.token}}).then((response) => {
            if(response.status === 200) {
                response.json().then((familyData) => {
                    updateFamilyObject(familyData);
                });
            } else if(response.status === 401) {
                return <Redirect to="/" />;
            } else {
                console.log(response);
            }
        });
    }
    if(!isAuthenticated(loginState)) {
        return (<Redirect to="/" />);
    }

    let user = getCurrentUser(loginState, familyObject);


    return (
        <Box fill="vertical" overflow={{vertical: "auto"}} background="url(/pennies.jpg)">
            <Header pad="small" background="brand" fill="horizontal">
                <Box direction="row"><Image margin={{right: "small"}} src={loginState.user.AvatarUrl} /> <Text size="xxlarge" alignSelf="center">{loginState.user.FullName}</Text></Box>
            </Header>
            <Box direction="row-responsive">
                <Box flex="grow">
                    {user.Accounts.map((account) => {
                        return (
                            <AccountBalance key={account.Id} account={account} />
                        );
                    })}
                </Box>
                <Box flex="grow">
                    {user.Scheduled.map((sched) => {
                        return (
                            <Panel key={sched.Id} margin="medium" pad="medium">
                                <Box margin={{bottom: "small"}}><Text size="xlarge"><u>{sched.Name}</u></Text></Box>
                                <Box direction="row">
                                    <Box><Text size="xlarge">Next Deposit:</Text></Box>
                                    <Box flex="grow"><Text size="xlarge" textAlign="end">{moment().day(7).fromNow()}</Text></Box>
                                </Box>
                                <Box direction="row">
                                    <Box><Text size="xlarge">Amount:</Text></Box>
                                    <Box flex="grow"><Text size="xlarge" textAlign="end">${sched.Amount.toFixed(2)}</Text></Box>
                                </Box>
                                <Box margin={{top: "small"}} pad={{left: "medium"}}>
                                    <table>
                                        <tbody>
                                            {user.Accounts.map((account) => {
                                                let percentage = account.Split;
                                                if(percentage === 0.0 && account.RemainderOfSplit) {
                                                    percentage = 0.8; // hack till the backend is fixed
                                                }
                                                let amount = sched.Amount * percentage;
                                                return (
                                                    <tr key={account.Id}>
                                                        <td width="100%"><Text size="large">{account.Name} ({percentage * 100}%)</Text></td>
                                                        <td align="right"><Text color="brand">+${amount.toFixed(2)}</Text></td>
                                                        <td align="right">${(account.Balance + amount).toFixed(2)}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </Box>
                            </Panel>
                        );
                    })}
                </Box>
            </Box>

        </Box>
    )
}