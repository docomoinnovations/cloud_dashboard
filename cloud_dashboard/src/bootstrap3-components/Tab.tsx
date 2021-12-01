import React from 'react';

type TabProps = Omit<
  JSX.IntrinsicElements['li'],
  'children'
> & {
  children: React.ReactNode;
};

type TabGroupProps = {
  children: React.ReactNode;
};

/**
 * TabGroup parts in form.
 * @param children Children Node.
 */
const TabGroup = ({ children }: TabGroupProps) => {

  return <nav className="tabs" role="navigation" aria-label="Tabs">
    <ul className="tabs--primary nav nav-tabs">
      {children}
    </ul>
  </nav>;

}

const Tab: (({ children, ...props }: TabProps) => JSX.Element) & {
  Group: ({ children }: TabGroupProps) => JSX.Element,
} = ({ children, ...props }) => {

  return <li {...props}>{children}</li>;

};
Tab.Group = TabGroup;

export default Tab;
