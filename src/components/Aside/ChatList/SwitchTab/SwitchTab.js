import React from "react";
import TabItem from "./TabItem";
import Selected from "./Selected";
import "./SwitchTab.css";

class SwitchTab extends React.Component {
    state = {
        offset: 0,
        width: 0
    };

    handleClick = (offset, width, id) => {
        this.setState({ offset, width });
        this.props.handleClick(id);
    };

    render() {
        return (
            <div className="switch-tab">
                <ul className="switch-tab__list">
                    <Selected
                        offset={this.state.offset}
                        width={this.state.width}
                    />
                    {["Matched", "Recent"].map((item, index) => {
                        return (
                            <TabItem
                                key={index}
                                active={
                                    index == this.state.active ? true : false
                                }
                                name={item}
                                id={index}
                                handleClick={this.handleClick}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default SwitchTab;
