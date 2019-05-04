import React, { Component } from "react";

class TabItem extends Component {
    componentDidMount = () => {
        this.setState({ id: this.props.id });
    };

    handleClick = e => {
        this.props.handleClick(
            e.target.offsetLeft,
            e.target.offsetWidth,
            this.state.id
        );
    };

    render() {
        return this.props.active ? (
            <li
                className="switch-tab__item"
                onClick={this.handleClick.bind(this)}
            >
                {this.props.name}
            </li>
        ) : (
            <li
                className="switch-tab__item"
                onClick={this.handleClick.bind(this)}
            >
                {this.props.name}
            </li>
        );
    }
}

export default TabItem;
