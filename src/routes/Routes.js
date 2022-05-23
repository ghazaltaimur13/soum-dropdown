import React from "react";
import { Route, Switch} from "react-router-dom";
import Home from "../pages/Home";

function Routes() {

    return (<Switch>
        <Route path="/" render={() => <Home />} />
    </Switch>
    );
}

export default Routes;