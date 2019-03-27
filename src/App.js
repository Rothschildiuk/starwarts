import React, {Component} from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Platet from "./Components/Platet";
import People from "./Components/People";


const routes = [
    {
        path: "/planet",
        component: Platet
    },
    {
        path: "/people",
        component: People

    }
];


function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/planet">Planet</Link>
                            </li>
                            <li>
                                <Link to="/people">People</Link>
                            </li>
                        </ul>

                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}
                    </div>
                </Router>
            </div>
        );
    }
}



export default App;
