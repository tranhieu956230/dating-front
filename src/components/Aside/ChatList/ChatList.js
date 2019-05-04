import React from "react";
import Matched from "./Matched/Matched";
import Recent from "./Recent/Recent";
import SwitchTab from "./SwitchTab/SwitchTab";
import "./ChatList.css";

class ChatList extends React.Component {
    state = {
        current: 0
    };

    handleClick = id => {
        this.setState({ current: id });
    };

    render() {
        return (
            <div className="chat-list">
                <SwitchTab handleClick={this.handleClick} />
                <div className="chat-tab">
                    <Matched current={this.state.current} />
                    <Recent current={this.state.current} />
                </div>
            </div>
        );
    }
}

export default ChatList;
