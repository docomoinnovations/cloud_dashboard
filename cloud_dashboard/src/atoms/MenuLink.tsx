import React from 'react';
import { Link } from 'react-router-dom';

const MenuLink = ({ to, onClick, className, children } : {
  to: string,
  onClick?: React.MouseEventHandler<HTMLSpanElement>,
  className?: string,
  children: React.ReactNode
}) => {
  return <li className={className}>
    <Link to={to} onClick={onClick}>{children}</Link>
  </li>;
}

export default MenuLink;
