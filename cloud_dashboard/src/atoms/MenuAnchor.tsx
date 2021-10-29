import React from 'react';

const MenuAnchor = ({ href, className, children } : {
  href: string,
  className?: string,
  children: React.ReactNode
}) => {
  return <li className={className}>
    <a href={href}>{children}</a>
  </li>;
}

export default MenuAnchor;
