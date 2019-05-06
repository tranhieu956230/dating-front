import React from "react";
import Chat from "./Chat/Chat";
import Aside from "./Aside/Aside";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Login from "./Login/Login";
import "./App.css";

class App extends React.Component {
    state = {
        loggedIn: false
    };

    handleLogin = loggedIn => {
        this.setState({ loggedIn: loggedIn });
    };
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Route path="/">
                        <Switch>
                            <Route
                                exact
                                path="/login"
                                render={() =>
                                    this.state.loggedIn ? (
                                        <Redirect to="/home" />
                                    ) : (
                                        <Login handleLogin={this.handleLogin} />
                                    )
                                }
                            />
                            <Route
                                path="/"
                                render={() =>
                                    this.state.loggedIn ? (
                                        <React.Fragment>
                                            <Aside />
                                            <Chat />
                                        </React.Fragment>
                                    ) : (
                                        <Redirect to="/login" />
                                    )
                                }
                            />
                        </Switch>
                    </Route>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
