import * as React from "react";
import { Row, Col, Icon } from "antd";

export default class Toggle extends React.Component<any, any> {
  static defaultProps: any = {
    off: null,
  };

  state = {
    visible: false,
  };

  handleToggle = () => {
    this.setState(
      ({ visible }: any) => ({ visible: !visible })
    );
  }

  renderTitle = () => {
    const { title } = this.props;

    if (!title) return null;

    return (
      <div className="toggle-title">{ title }</div>
    );
  }

  renderDescription = () => {
    const { description } = this.props;

    if (!description) return null;

    return (
      <div className="toggle_description--wrapper">
        { description }
      </div>
    );
  }

  renderChildren = () => {
    const { on, off } = this.props;
    const { visible } = this.state;

    if (visible) {
      return on;
    }
    
    return off;
  }

  render() {
    const {
      visible,
    } = this.state;

    return (
      <div className="toggle_container">
        { this.renderTitle() }
        <Row className="toggle_des-action--wrapper">
          <Col span={20}>
            { this.renderDescription() }
          </Col>
          <Col className="toggle_action--wrapper" span={4}>
            <Icon
              style={{ cursor: "pointer", fontSize: 16, }}
              type={visible ? "tag" : "tag-o"}
              onClick={this.handleToggle}
            />
          </Col>
        </Row>
        <Row>
          { this.renderChildren() }
        </Row>
        <style>{`
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
        `}</style>
      </div>
    );
  }
}
