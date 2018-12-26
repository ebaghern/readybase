import React, { PureComponent } from 'react';
import cx from 'classnames';
import T from 'prop-types';

class SliderDots extends PureComponent {
  static defaultProps = {
    appendDots: dots => <ul>{dots}</ul>,
    clickHandler: () => ({}),
    customPaging: i => <button>{i + 1}</button>,
    dotsClass: 'slick-dots',
    infinite: true,
    pauseOnDotsHover: false,
    slidesToScroll: 1,
    slidesToShow: 3,
  };

  static propTypes = {
    appendDots: T.func,
    clickHandler: T.func,
    currentSlide: T.number,
    customPaging: T.func,
    dotsClass: T.string,
    infinite: T.bool,
    onMouseEnter: T.func,
    onMouseLeave: T.func,
    onMouseOver: T.func,
    pauseOnDotsHover: T.bool,
    slideCount: T.number.isRequired,
    slidesToScroll: T.number,
    slidesToShow: T.number,
  };

  _getDotCount = () => {
    const {
      infinite,
      responsive,
      slideCount,
      slidesToScroll,
      slidesToShow,
    } = this.props;
    return infinite
      ? Math.ceil(slideCount / slidesToScroll)
      : Math.ceil((slideCount - slidesToShow) / slidesToScroll) + 1;
  };

  clickHandler(options, e) {
    // In Autoplay the focus stays on clicked button even after transition
    // to next slide. That only goes away by click somewhere outside
    e.preventDefault();
    this.props.clickHandler(options);
  }

  render() {
    const {
      appendDots,
      currentSlide,
      customPaging,
      dotsClass,
      onMouseEnter,
      onMouseLeave,
      onMouseOver,
      pauseOnDotsHover,
      slidesToScroll,
    } = this.props;
    const dotCount = this._getDotCount();
    const mouseEvents = pauseOnDotsHover
      ? { onMouseEnter, onMouseOver, onMouseLeave }
      : {};

    // Apply join & split to Array to pre-fill
    // Credit: http://stackoverflow.com/a/13735425/1849458
    const dots = Array.apply(
      null,
      Array(dotCount + 1)
        .join('0')
        .split('')
    ).map((x, index) => {
      const leftBound = index * slidesToScroll;
      const rightBound = index * slidesToScroll + (slidesToScroll - 1);
      const dotOptions = {
        message: 'dots',
        index,
        slidesToScroll,
        currentSlide,
      };
      const onClick = this.clickHandler.bind(this, dotOptions);
      return (
        <li
          key={index}
          className={cx({
            'slick-active':
              currentSlide >= leftBound && currentSlide <= rightBound,
          })}
        >
          {React.cloneElement(customPaging(index), { onClick })}
        </li>
      );
    });

    return React.cloneElement(appendDots(dots), {
      className: dotsClass,
      ...mouseEvents,
    });
  }
}

export default SliderDots;
