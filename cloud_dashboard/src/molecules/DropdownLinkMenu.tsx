import MenuLink from 'atoms/MenuLink';
import React from 'react';

/**
 * Dropdown menu for MenuLink.
 *
 * @param menuName name of menu column.
 * @param linkPropsList List of props of MenuLink.
 */
const DropdownLinkMenu = ({ menuName, linkPropsList }: {
  menuName: string,
  linkPropsList: {
    to: string,
    onClick?: React.MouseEventHandler<HTMLAnchorElement>,
    children: React.ReactNode
  }[]
}) => {

  return <li className="dropdown">
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
      {
        `${menuName}`
      } <span className="caret"></span>
    </a>
    <ul className="dropdown-menu" role="menu">
      {
        linkPropsList.map((linkProps, index) => {
          return <MenuLink key={index} to={linkProps.to} onClick={linkProps.onClick}>
            {linkProps.children}
          </MenuLink>;
        })
      }
    </ul>
  </li>;

}

export default DropdownLinkMenu;
