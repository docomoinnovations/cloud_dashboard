import React from 'react';

type BlockProps = {
  position?: 'left' | 'right';
  children: React.ReactNode;
};

type DropdownProps = {
  menuName: string;
  children: React.ReactNode;
};

type ItemProps = Omit<
  JSX.IntrinsicElements['li'],
  'children'
> & {
  children: React.ReactNode;
};

type NavBarProps = Omit<
  JSX.IntrinsicElements['header'],
  'children' | 'className'
> & {
  className?: string;
  children: React.ReactNode;
};

/**
 * Body parts in NavBar.
 *
 * @param children Children Node.
 * @param position Position of Body parts.
 */
const Block = ({ children, position = 'left' }: BlockProps) => {

  return <nav role="navigation" className="contextual-region">
    <ul className={`nav navbar-nav${position === 'right' ? ' navbar-right' : ''}`} role="menu">
      {children}
    </ul>
  </nav>;

}

/**
 * Body parts in NavBar.
 *
 * @param children Children Node.
 */
const Body = ({ children }: { children: React.ReactNode }) => {
  return <div className="navbar-collapse collapse" id="navbar-collapse">
    {children}
  </div>;
}

const Dropdown = ({ children, menuName }: DropdownProps) => {

  return <li className="dropdown">
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
      {
        `${menuName}`
      } <span className="caret"></span>
    </a>
    <ul className="dropdown-menu" role="menu">
      {children}
    </ul>
  </li>;

}

/**
 * Header parts in NavBar.
 *
 * @param children Children Node.
 * @param className Added text of className.
 */
const Header = ({ children }: { children: React.ReactNode }) => {

  return <div className="navbar-header">{children}</div>;

}

/**
 * Navigation item parts in NavBar.
 *
 * @param children Children Node.
 */
const Item = ({ children, ...props }: ItemProps) => {

  return <li {...props}>{children}</li>;

}

/**
 * The Navigation Bar Block.
 *
 * @param children Children Node.
 * @param className Added text of className.
 */
const NavBar: (({ children, className, ...props }: NavBarProps) => JSX.Element) & {
  Block: ({ children, position }: BlockProps) => JSX.Element,
  Body: ({ children }: { children: React.ReactNode }) => JSX.Element,
  Dropdown: ({ children, menuName }: DropdownProps) => JSX.Element,
  Header: ({ children }: { children: React.ReactNode }) => JSX.Element,
  Item: ({ children, ...props }: ItemProps) => JSX.Element,
}
  = ({ children, className, ...props }) => {

    return <header
      className={`navbar navbar-default${className ? ' ' + className : ''}`}
      {...props}>
      <div className="container-fluid">
        {children}
      </div>
    </header>;

  };
NavBar.Block = Block;
NavBar.Body = Body;
NavBar.Dropdown = Dropdown;
NavBar.Header = Header;
NavBar.Item = Item;

export default NavBar;
