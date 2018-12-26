import React, { Component } from 'react';
import T from 'prop-types';
import cx from 'classnames';
import FloatingDonuts from 'components/FloatingDonuts';
import smart from 'lib/utils/smartContent';
import themeOptions from 'lib/propTypes/oneOf-headerTheme';

class PageHeader extends Component {
  static propTypes = {
    className: T.string,
    theme: T.oneOf(themeOptions),
    heading: T.string,
    subHeading: T.string,
    children: T.func,
    content: T.oneOfType([T.string, T.element]),
    showDonuts: T.bool,
    donutCount: T.number,
  };

  static defaultProps = {
    theme: 'light',
  };

  _wrapperEl = React.createRef();

  /* componentDidMount() {
    const { current } = this._wrapperEl;
    if (current) {
    }
  } */

  render() {
    const {
      className,
      theme,
      heading,
      subHeading,
      content,
      children,
      showDonuts,
      donutCount,
    } = this.props;
    return (
      <section
        className={cx(className, 'PageHeader', `PageHeader--${theme}`)}
        ref={this._wrapperEl}
      >
        {showDonuts && <FloatingDonuts num={donutCount} />}
        <div className="PageHeader__contentWrapper">
          {heading && <h1 className="PageHeader__heading">{smart(heading)}</h1>}
          {subHeading && (
            <h2 className="PageHeader__subHeading">{smart(subHeading)}</h2>
          )}
          {content &&
            (React.isValidElement(content) ? (
              <div className="PageHeader__content">{content}</div>
            ) : (
              <p className="PageHeader__content">{smart(content)}</p>
            ))}
          {children && children('PageHeader')}
        </div>
      </section>
    );
  }
}

export default PageHeader;
