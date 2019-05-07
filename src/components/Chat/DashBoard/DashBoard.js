import React from "react";
import OtherMsg from "./OtherMsg";
import MyMsg from "./MyMsg";
import ChatInput from "./ChatInput";
import "./DashBoard.css";
import { receiveMsg } from "../../../api/socket";

class DashBoard extends React.Component {
    state = {
        messages: []
    };
    componentDidMount = () => {
        receiveMsg(msg => {
            // console.log(msg);
            console.log(this.state.messages);
            let arr = this.state.messages;
            arr.unshift(msg);
            this.setState({ messages: arr });
        });
    };
    render() {
        return (
            <section className="dashboard">
                <div className="dashboard-chat">
                    {this.state.messages.map((message, i) =>
                        handleMsg(this.props.userInfo, message, i)
                    )}
                </div>

                <ChatInput userInfo={this.props.userInfo} />
            </section>
        );
    }
}

function handleMsg(userInfo, message, i) {
    console.log(userInfo);
    if (i % 2 == 0) {
        return <MyMsg timestamp={message.timestamp} message={message.msg} />;
    }
    return (
        <OtherMsg
            profile_picture={message.profile_picture}
            name={message.name}
            timestamp={message.timestamp}
            message={message.msg}
        />
    );
}

export default DashBoard;
