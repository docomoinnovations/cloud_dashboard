import React from 'react';

type BodyProps = Omit<
  JSX.IntrinsicElements['div'],
  'children' | 'className'
> & {
  className?: string;
  children: React.ReactNode;
};

type PanelProps = Omit<
  JSX.IntrinsicElements['div'],
  'children' | 'className'
> & {
  className?: string;
  children: React.ReactNode;
};

/**
 * Body parts in Panel.
 * @param children Children Node.
 */
const Body = ({ children, className, ...props }: BodyProps) => {

  return <div className={`panel-body${className ? ' ' + className : className}`} {...props}>
    {children}
  </div>;

}

/**
 * Header parts in Panel.
 * @param children Children Node.
 */
const Header = ({ children }: { children: React.ReactNode }) => {

  return <div className="panel-heading">
    {children}
  </div>;

}

const Panel: (({ children, className, ...props }: PanelProps) => JSX.Element) & {
  Body: ({ children }: BodyProps) => JSX.Element,
  Header: ({ children }: { children: React.ReactNode }) => JSX.Element,
} = ({ children, className, ...props }) => {

  return <div className={`panel panel-default${className ? ' ' + className : ''}`} {...props}>{children}</div>;

};
Panel.Body = Body;
Panel.Header = Header;

export default Panel;
