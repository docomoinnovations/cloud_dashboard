import Button from 'bootstrap3-components/Button';
import React from 'react';

/**
 * Groups of button.
 *
 * @param buttonList List of buttons.
 */
const FormButtonGroup = ({ buttonList }: {
  buttonList: {
    disabled: boolean,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    value: string
  }[]
}) => {

  return <Button.Group>
    {
      buttonList.map((button, index) => {
        return <Button key={index} disabled={button.disabled} onClick={button.onClick}>
          {button.value}
        </Button>;
      })
    }
  </Button.Group>;

}

export default FormButtonGroup;
