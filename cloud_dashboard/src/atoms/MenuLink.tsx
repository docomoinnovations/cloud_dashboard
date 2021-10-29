import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Link menu in MenuBar.
 *
 * @param to Link path.
 * @param onClick Attribute of onClick.
 * @param className Attribute of class.
 * @param children Children Node.
 */
const MenuLink = ({ to, onClick, className, children } : {
  to: string,
  onClick?: React.MouseEventHandler<HTMLAnchorElement>,
  className?: string,
  children: React.ReactNode
}) => {

  return <li className={className}>
    <Link to={to} onClick={onClick}>{children}</Link>
  </li>;

}

export default MenuLink;
