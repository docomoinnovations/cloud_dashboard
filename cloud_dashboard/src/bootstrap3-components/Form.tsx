import React from 'react';

type FormProps = Omit<
  JSX.IntrinsicElements['form'],
  'children'
> & {
  children: React.ReactNode;
};

type GroupProps = Omit<
  JSX.IntrinsicElements['div'],
  'children' | 'className'
> & {
  className?: string;
  children: React.ReactNode;
};

type InputProps = Omit<
  JSX.IntrinsicElements['input'],
  'className'
> & {
  className?: string;
};

type LabelProps = Omit<
  JSX.IntrinsicElements['label'],
  'children'
> & {
  children: React.ReactNode;
};

type SelectProps = Omit<
  JSX.IntrinsicElements['select'],
  'children' | 'className'
> & {
  className?: string;
  children: React.ReactNode;
};

/**
 * Group parts in form.
 *
 * @param children Children Node.
 * @param className Added text of className.
 */
const Group = ({ children, className, ...props }: GroupProps) => {

  return <div className={`form-group${className ? ' ' + className : ''}`} {...props}>{children}</div>;

}

/**
 * Input parts in form.
 *
 * @param className Added text of className.
 */
const Input = ({ className, ...props }: InputProps) => {

  return <input className={`form-control${className ? ' ' + className : ''}`} {...props} />;

}

/**
 * Label parts in form.
 *
 * @param children Children Node.
 */
const Label = ({ children, ...props }: LabelProps) => {

  return <label {...props}>{children}</label>;

}

/**
 * Select parts in form.
 *
 * @param children Children Node.
 * @param className Added text of className.
 */
const Select = ({ children, className, ...props }: SelectProps) => {

  return <select className={`form-control${className ? ' ' + className : ''}`} {...props}>{children}</select>;

}

/**
 * The <form> tag.
 *
 * @param children Children Node.
 */
const Form: (({ children, ...props }: FormProps) => JSX.Element) & {
  Group: ({ children, className, ...props }: GroupProps) => JSX.Element,
  Input: ({ className, ...props }: InputProps) => JSX.Element,
  Label: ({ children, ...props }: LabelProps) => JSX.Element,
  Select: ({ children, className, ...props }: SelectProps) => JSX.Element,
} = ({ children, ...props }) => {

  return <form {...props}>{children}</form>;

};
Form.Group = Group;
Form.Input = Input;
Form.Label = Label;
Form.Select = Select;

export default Form;
