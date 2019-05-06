import React from "react";
import FacebookLogin from "react-facebook-login";
import "./Login.css";

class Login extends React.Component {
    handleClick = () => {};

    handleResponse = response => {
        console.log(response);
        if (response.name) {
            this.props.handleLogin(true);
        }
    };

    render() {
        return (
            <div className="login">
                <div className="login-form">
                    <FacebookLogin
                        appId="538073136708397"
                        autoLoad="true"
                        fields="name,email,picture"
                        onClick={this.handleClick}
                        callback={this.handleResponse}
                    />
                </div>
            </div>
        );
    }
}

export default Login;
