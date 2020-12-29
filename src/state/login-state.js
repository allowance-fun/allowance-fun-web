import React from 'react';
import jwtDecode from 'jwt-decode';

function isAuthenticated(state) {
    if(state === null || state === undefined) {
        return false;
    }
    if(state.token === null) {
        return false;
    }
    let now = new Date();
    if(state.expires !== null && now.getTime() >= state.expires.getTime()) {
        return false;
    }
    return true;
}

const loginStateDefault = {
    token: null,
    user: null,
    familyId: null,
    isParent: null,
    expires: null,
};

function readStateFromLocalStorage() {
    let value = loginStateDefault;
    let token = localStorage.getItem('token');
    if(token !== null && token !== "") {
        let jwtContents = jwtDecode(token);
        value = {
            token: token,
            user: jwtContents.User,
            familyId: jwtContents.FamilyID,
            isParent: jwtContents.IsParent,
            expires: new Date(jwtContents.exp * 1000),
        }
    }
    return value;
}

const LoginStateContext = React.createContext({value: loginStateDefault});

function useLoginState() {
    const context = React.useContext(LoginStateContext);
    if(!context) {
        throw new Error('useLoginState() must be used within a LoginStateProvider')
    }
    return context
}

function LoginStateProvider(props) {

    let [state, updateState] = React.useState(readStateFromLocalStorage());
    function reloadLoginState() {
        updateState(readStateFromLocalStorage());
    }
    return (
        <LoginStateContext.Provider value={{loginState: state, reloadLoginState}} {...props} />
    )
}

export {
    LoginStateProvider,
    useLoginState,
    isAuthenticated,
}