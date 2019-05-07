import React from "react";
import Main from "./Main";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Login from "./Login/Login";
import "./App.css";

class App extends React.Component {
    state = {
        access_token: ""
    };

    handleLogin = access_token => {
        this.setState({ access_token });
        localStorage.setItem("access_token", access_token);
    };

    componentDidMount = () => {
        let access_token = localStorage.getItem("access_token");
        if (access_token) this.setState({ access_token });
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
                                    this.state.access_token ? (
                                        <Redirect to="/home" />
                                    ) : (
                                        <Login handleLogin={this.handleLogin} />
                                    )
                                }
                            />
                            <Route
                                path="/"
                                render={() =>
                                    this.state.access_token ? (
                                        <Main
                                            access_token={
                                                this.state.access_token
                                            }
                                        />
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
