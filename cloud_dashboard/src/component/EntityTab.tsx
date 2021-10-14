import React from 'react';
import { Link } from 'react-router-dom';

const EntityTab: React.VFC<{
  isActive: boolean,
  location: string,
  labelName: string,
}> = ({ isActive, location, labelName }) => {
  return <li className={isActive ? 'active' : ''}>
    <Link to={location} className={isActive ? 'is-active' : ''}>{labelName}</Link>
  </li>;
}

export default EntityTab;
