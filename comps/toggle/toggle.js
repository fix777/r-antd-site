import * as React from "react";
import { Row, Col, Icon } from "antd";
export default class Toggle extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            visible: false,
        };
        this.handleToggle = () => {
            this.setState(({ visible }) => ({ visible: !visible }));
        };
        this.renderTitle = () => {
            const { title } = this.props;
            if (!title)
                return null;
            return (React.createElement("div", { className: "toggle-title" }, title));
        };
        this.renderDescription = () => {
            const { description } = this.props;
            if (!description)
                return null;
            return (React.createElement("div", { className: "toggle_description--wrapper" }, description));
        };
        this.renderChildren = () => {
            const { on, off } = this.props;
            const { visible } = this.state;
            if (visible) {
                return on;
            }
            return off;
        };
    }
    render() {
        const { visible, } = this.state;
        return (React.createElement("div", { className: "toggle_container" },
            this.renderTitle(),
            React.createElement(Row, { className: "toggle_des-action--wrapper" },
                React.createElement(Col, { span: 20 }, this.renderDescription()),
                React.createElement(Col, { className: "toggle_action--wrapper", span: 4 },
                    React.createElement(Icon, { style: { cursor: "pointer", fontSize: 16, }, type: visible ? "tag" : "tag-o", onClick: this.handleToggle }))),
            React.createElement(Row, null, this.renderChildren()),
            React.createElement("style", null, `
          .toggle_container {
            position: relative;
          }

          .toggle-title {
            font-size: .9375rem;
            font-weight: bold;
            background: #fff;
            position: absolute;
            top: -1.5rem;
          }

          .toggle_des-action--wrapper {
            padding: .425rem 0;
          }

          .toggle_action--wrapper {
            text-align: right;
          }

          .toggle_description--wrapper {
            color: #777;
          }
        `)));
    }
}
Toggle.defaultProps = {
    off: null,
};
