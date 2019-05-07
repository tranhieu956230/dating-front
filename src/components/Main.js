import React from "react";
import Chat from "./Chat/Chat";
import Aside from "./Aside/Aside";

import { getUserInfo } from "../api/api";

class Main extends React.Component {
    state = {
        userInfo: {}
    };
    componentDidMount = () => {
        getUserInfo(this.props.access_token).then(data => {
            if (data.success) {
                this.setState({
                    userInfo: data.payload
                });
            }
        });
    };
    render() {
        return (
            <React.Fragment>
                <Aside userInfo={this.state.userInfo} />
                <Chat userInfo={this.state.userInfo} />
            </React.Fragment>
        );
    }
}

export default Main;
