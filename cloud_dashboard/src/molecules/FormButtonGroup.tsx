import FormButton from 'atoms/FormButton';
import React from 'react';

const FormButtonGroup = ({ buttonList }: {
  buttonList: {
    disabled: boolean,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    value: string
  }[]
}) => {
  return <div className="btn-group" role="group">
    {
      buttonList.map((button, index) => {
        return <FormButton key={index} disabled={button.disabled} onClick={button.onClick}>
          {button.value}
        </FormButton>;
      })
    }
  </div>;
}

export default FormButtonGroup;
