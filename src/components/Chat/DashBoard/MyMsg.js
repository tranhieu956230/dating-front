import React from "react";

class MyMsg extends React.Component {
    render() {
        console.log(this.props.message);
        return (
            <div className="my-msg">
                <div className="my-msg__main">
                    <div className="my-msg__info">
                        <span className="my-msg__timestamp">
                            {parseTime(this.props.timestamp)}
                        </span>
                    </div>
                    <p
                        className="my-msg__message"
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

export default MyMsg;
