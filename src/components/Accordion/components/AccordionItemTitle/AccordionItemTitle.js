import { AccordionItemTitle as AccTitle } from 'react-accessible-accordion';
import classNames from 'classnames';

const AccordionItemTitle = ({ className, children }) => {
  return (
    <AccTitle className={classNames('Accordion__title', className)}>
      {children}
    </AccTitle>
  );
};

export default AccordionItemTitle;
