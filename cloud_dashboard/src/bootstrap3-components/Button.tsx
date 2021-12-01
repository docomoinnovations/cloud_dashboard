import React from 'react';

type ButtonProps = Omit<
  JSX.IntrinsicElements['button'],
  'children' | 'className'
> & {
  className?: string;
  children: React.ReactNode;
};


type GroupProps = Omit<
  JSX.IntrinsicElements['div'],
  'children' | 'className' | 'role'
> & {
  className?: string;
  children: React.ReactNode;
};

/**
 * Group of Button.
 *
 * @param children Children Node.
 * @param className Added text of className.
 */
const Group = ({ children, className, ...props }: GroupProps) => {

  return <div className={`btn-group${className ? ' ' + className : ''}`} role="group" {...props}>{children}</div>;

}

/**
 * Button parts in form.
 *
 * @param children Children Node.
 * @param className Added text of className.
 */
const Button: (({ children, className, ...props }: ButtonProps) => JSX.Element) & {
  Group: ({ children, className, ...props }: GroupProps) => JSX.Element
} = ({ children, className, ...props }) => {

  return <button type="button"
    className={`btn btn-default${className ? ' ' + className : ''}`} {...props}>
    {children}
  </button>;

}
Button.Group = Group;

export default Button;
