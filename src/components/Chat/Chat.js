import React from "react";
import Action from "./Action/Action";
import DashBoard from "./DashBoard/DashBoard";
import "./Chat.css";

class Chat extends React.Component {
    render() {
        return (
            <section className="chat">
                <Action userInfo={this.props.userInfo} />
                <DashBoard userInfo={this.props.userInfo} />
            </section>
        );
    }
}

export default Chat;
