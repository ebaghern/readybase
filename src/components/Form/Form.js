import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form as Frm } from 'formik';
import cx from 'classnames';
import Button from 'components/Button';

class Form extends PureComponent {
  static propTypes = {
    buttonText: PropTypes.string,
    children: PropTypes.func.isRequired,
    className: PropTypes.string,
    onSubmit: PropTypes.func,
    initialValues: PropTypes.object
  };

  static defaultProps = {
    buttonText: 'Submit',
    onSubmit: () => {},
    initialValues: {}
  };

  render() {
    const {
      children,
      className,
      schema,
      initialValues,
      onSubmit,
      buttonText
    } = this.props;
    return (
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={onSubmit}
        render={(props) => (
          <Frm className={cx('Form', className)}>
            {children(props)}
            <Button htmlType="submit" className="Form__button">
              {buttonText}
            </Button>
          </Frm>
        )}
      />
    );
  }
}

export default Form;
