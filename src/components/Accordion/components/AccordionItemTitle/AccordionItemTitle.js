import { AccordionItemTitle as AccTitle } from 'react-accessible-accordion';
import cx from 'classnames';

const AccordionItemTitle = ({ className, children }) => {
  return (
    <AccTitle className={cx('Accordion__title', className)}>
      {children}
    </AccTitle>
  );
};

export default AccordionItemTitle;
