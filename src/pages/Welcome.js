import { Fragment } from "react";
import { Route } from "react-router-dom";

const Welcome = () => {
    return (
        <Fragment>
            <h1>Welcome page</h1>
            <Route path="/welcome/new-user">
                <p>New user</p>
            </Route>
        </Fragment>
    )
}

export default Welcome;