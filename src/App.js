import React from 'react';
import {Grommet} from 'grommet';
import FrontPage from './pages/front-page';
import LoginPage from './pages/login-page';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


function App() {
    return (
        <Grommet theme={{
            global: {
                colors: {
                    brand: '#179614'
                }
            }
        }}>
            <Router>
                <Switch>
                    <Route exact path="/" component={FrontPage} />
                    <Route path="/app/login" component={LoginPage} />
                </Switch>
            </Router>
        </Grommet>
    );
}

export default App;
