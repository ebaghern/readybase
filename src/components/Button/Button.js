import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Button.scss';

class Button extends Component {
  static defaultProps = {
    loading: false,
    disabled: false,
    expanded: false,
    htmlType: 'button'
  };

  static propTypes = {
    type: PropTypes.string,
    size: PropTypes.oneOf(['large', 'small']),
    htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
    onClick: PropTypes.func,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.string,
    expanded: PropTypes.bool
  };

  handleClick = (e) => {
    const { onClick, loading } = this.props;
    if (!!loading) {
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  render() {
    const {
      type,
      htmlType,
      size,
      className,
      children,
      disabled,
      expanded,
      color,
      loading,
      ...rest
    } = this.props;

    const classes = cx('Button', className, {
      [`Button--${type}`]: type,
      [`Button--${size}`]: size,
      [`Button--${color}`]: color,
      [`Button--loading`]: loading,
      [`Button--disabled`]: disabled,
      [`Button--expanded`]: expanded
    });

    return 'href' in rest ? (
      <a {...rest} className={classes} onClick={this.handleClick}>
        {children}
      </a>
    ) : (
      <button
        {...rest}
        type={htmlType}
        className={classes}
        onClick={this.handleClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;
