import React from 'react';

/**
 * Button parts in form.
 * @param children Children Node.
 */
const FormButton = ({disabled, onClick, children}: {
  disabled?: boolean,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  children: React.ReactNode
}) => {

  return <button type="button" className="btn btn-default"
    disabled={disabled} onClick={onClick}>{children}</button>;

}

export default FormButton;
