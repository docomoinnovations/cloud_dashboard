import React from 'react';

/**
 * Button parts for PageSelector.
 * @param ariaLabel Attribute of aria-label.
 * @param onClick Attribute of onClick.
 * @param children Children Node.
 */
const PageSelectorButton = ({ariaLabel, onClick, children}: {
  ariaLabel: string,
  onClick: React.MouseEventHandler<HTMLSpanElement>,
  children: React.ReactNode
}) => {

  return <span aria-label={ariaLabel} onClick={onClick}>
    <span aria-hidden="true">{children}</span>
  </span>;

}

export default PageSelectorButton;
