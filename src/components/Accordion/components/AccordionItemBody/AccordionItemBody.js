import { AccordionItemBody as AccBody } from 'react-accessible-accordion';
import classNames from 'classnames';

const AccordionItemBody = ({ className, children }) => {
  return (
    <AccBody hideBodyClassName="Accordion__body--hidden" className={classNames('Accordion__body', className)}>
      {children}
    </AccBody>
  );
};

export default AccordionItemBody;
