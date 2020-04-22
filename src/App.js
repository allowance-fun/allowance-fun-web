import React from 'react';
import {Grommet} from 'grommet';
import FrontPage from './pages/front-page';
import HomePage from "./pages/home";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {LoginStateProvider} from "./state/login-state";


function App() {
    return (
        <Grommet theme={{
            global: {
                colors: {
                    brand: '#179614'
                }
            }
        }}>
            <LoginStateProvider>
                <Router>
                    <Switch>
                        <Route exact path="/" component={FrontPage} />
                        <Route path="/app/Home" component={HomePage} />
                    </Switch>
                </Router>
            </LoginStateProvider>
        </Grommet>
    );
}

export default App;
