import React, { Component } from "react";
import "./Selected.css";

export default class Selected extends Component {
    render() {
        console.log(this.props.offset);
        return (
            <div
                style={{
                    width: this.props.width,
                    transform: `translateX(${this.props.offset}px)`
                }}
                className="selected"
            />
        );
    }
}
