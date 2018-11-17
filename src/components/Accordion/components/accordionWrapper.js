import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AccordionContext } from '../context/AccordionContext';

const accordionWrapper = (Comp) => {
  return class extends Component {
    static propTypes = {
      accordion: PropTypes.bool,
      onChange: PropTypes.func,
      className: PropTypes.string
    };
    static defaultProps = {
      accordion: true,
      onChange: () => {}
    };
    render() {
      const { accordion, onChange, ...rest } = this.props;
      return (
        <AccordionContext.Provider accordion={accordion} onChange={onChange}>
          <AccordionContext.Consumer>
            {(ctx) => <Comp accordion={ctx.accordion} {...rest} />}
          </AccordionContext.Consumer>
        </AccordionContext.Provider>
      );
    }
  };
};

export default accordionWrapper;
