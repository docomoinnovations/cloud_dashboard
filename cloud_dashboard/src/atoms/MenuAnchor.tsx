import React from 'react';

/**
 * Anchor menu in MenuBar.
 *
 * @param href Link URL.
 * @param className Attribute of class.
 * @param children Children Node.
 */
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
