import { AccordionItemBody as AccBody } from 'react-accessible-accordion';
import cx from 'classnames';

const AccordionItemBody = ({ className, children }) => {
  return (
    <AccBody
      hideBodyClassName="Accordion__body--hidden"
      className={cx('Accordion__body', className)}
    >
      {children}
    </AccBody>
  );
};

export default AccordionItemBody;
