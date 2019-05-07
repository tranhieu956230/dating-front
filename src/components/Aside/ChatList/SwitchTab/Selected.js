import React, { Component } from "react";
import "./Selected.css";

export default class Selected extends Component {
    render() {
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
