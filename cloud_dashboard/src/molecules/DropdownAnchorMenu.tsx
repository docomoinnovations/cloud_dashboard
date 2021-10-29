import MenuAnchor from 'atoms/MenuAnchor';
import React from 'react';

/**
 * Dropdown menu for MenuAnchor.
 *
 * @param anchorPropsList List of props of MenuAnchor.
 */
const DropdownAnchorMenu = ({ anchorPropsList }: {
  anchorPropsList: {
    href: string,
    children: React.ReactNode
  }[]
}) => {

  return <ul className="dropdown-menu" role="menu">
      {
        anchorPropsList.map((anchorProps, index) => {
          return <MenuAnchor key={index} href={anchorProps.href}>
            {anchorProps.children}
          </MenuAnchor>;
        })
      }
    </ul>;

}

export default DropdownAnchorMenu;
