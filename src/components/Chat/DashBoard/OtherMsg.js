import React from "react";

class OtherMsg extends React.Component {
    render() {
        return (
            <div className="other-msg">
                <img
                    src={this.props.profile_picture}
                    alt=""
                    className="other-msg__image"
                />
                <div className="other-msg__main">
                    <div className="other-msg__info">
                        <span className="other-msg__name">
                            {this.props.name}{" "}
                        </span>
                        <span className="other-msg__timestamp">
                            {parseTime(this.props.timestamp)}
                        </span>
                    </div>
                    <p
                        className="other-msg__message"
                        dangerouslySetInnerHTML={{
                            __html: this.props.message
                        }}
                    />
                </div>
            </div>
        );
    }
}

function parseTime(timestamp) {
    let time = new Date(timestamp);
    return padd0(time.getHours()) + ":" + padd0(time.getMinutes());
}

function padd0(str) {
    console.log(str);
    if (str < 10) {
        return "0" + str;
    }
    return str;
}

export default OtherMsg;
