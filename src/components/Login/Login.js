import React from "react";
import "./Login.css";

const appId = "538073136708397";
const redirect_uri = "http://localhost:3001/user/callback";
const state = "hello";

class Login extends React.Component {
    handleClick = () => {
        window.location.replace(
            `https://www.facebook.com/v3.3/dialog/oauth?client_id=${appId}&redirect_uri=${redirect_uri}&state=${state}`
        );
    };

    render() {
        const patt = /login\?token=(.*)#_=_/;
        const token = patt.exec(window.location.href);

        if (token) {
            this.props.handleLogin(token[1]);
        }
        return (
            <div className="login">
                <button className="login-button" onClick={this.handleClick}>
                    <i className="fa fa-facebook-square" aria-hidden="true" />
                    Login with Facebook
                </button>
            </div>
        );
    }
}

export default Login;
