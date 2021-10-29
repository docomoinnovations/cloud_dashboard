import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Tab for select entity.
 *
 * @param isActive Flg that this tab is active.
 * @param location Link path of this tab.
 * @param children Children Node.
 */
const EntityTab = ({ isActive, location, children }: {
  isActive: boolean,
  location: string,
  children: React.ReactNode
}) => {

  return <li className={isActive ? 'active' : ''}>
    <Link to={location} className={isActive ? 'is-active' : ''}>{children}</Link>
  </li>;

}

export default EntityTab;
