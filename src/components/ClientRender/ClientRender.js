import React, { Component } from 'react';
import T from 'prop-types';

const Def = () => <span />;

class ClientRender extends Component {
  static propTypes = {
    onSSR: T.node,
    timeout: T.number,
  };

  static defaultProps = {
    onSSR: <Def />,
    timeout: 0,
  };

  state = {
    canRender: false,
  };

  setRenderState = () => this.setState({ canRender: true });

  componentDidMount = () => {
    const { timeout } = this.props;
    if (timeout > 0) {
      setTimeout(this.setRenderState, timeout);
    } else {
      this.setRenderState();
    }
  };

  componentWillUnmount() {
    clearTimeout(this.setRenderState);
  }

  render = () =>
    this.state.canRender ? this.props.children : this.props.onSSR;
}

export default ClientRender;
