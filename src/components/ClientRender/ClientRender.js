import React, { Component } from 'react';
import T from 'prop-types';

const Def = () => <span />;

class ClientRender extends Component {
  static propTypes = {
    onSSR: T.node,
  };

  static defaultProps = {
    onSSR: <Def />,
  };

  state = {
    canRender: false,
  };

  componentDidMount = () => this.setState({ canRender: true });

  render = () =>
    this.state.canRender ? this.props.children : this.props.onSSR;
}

export default ClientRender;
