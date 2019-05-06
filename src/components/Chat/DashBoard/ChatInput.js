import React from "react";
import EmojiPicker from "emoji-picker-react";
import ContentEditable from "react-contenteditable";

class ChatInput extends React.Component {
    state = {
        displayEmoji: false,
        html: ""
    };
    handleSubmit = e => {
        e.preventDefault();
    };

    handleEmojiChange = (code, object) => {
        this.setState(prev => ({
            html: prev.html + getHtml(code)
        }));
    };

    handleClick = () => {
        if (!this.state.displayEmoji) {
            this.setState({ displayEmoji: true });
        }
    };

    handleChange = e => {
        this.setState({ html: e.target.value });
    };

    render() {
        let component = this.state.displayEmoji ? (
            <EmojiPicker onEmojiClick={this.handleEmojiChange} />
        ) : null;
        return (
            <div className="chat-bottom">
                <form
                    action=""
                    className="chat-window"
                    onSubmit={this.handleSubmit}
                >
                    <ContentEditable
                        innerRef={this.contentEditable}
                        html={this.state.html} // innerHTML of the editable div
                        disabled={false} // use true to disable editing
                        onChange={this.handleChange} // handle innerHTML change
                        tagName="article"
                        className="chat-input"
                    />

                    <button className="emoji-button" onClick={this.handleClick}>
                        <i className="fa fa-smile-o" aria-hidden="true" />
                        {component}
                    </button>
                </form>
            </div>
        );
    }
}

let getHtml = code => {
    let img = `https://cdn.jsdelivr.net/emojione/assets/3.0/png/32/${code}.png`;
    return `<img class="emoji" src=${img}>`;
};

export default ChatInput;
