import React from 'react';

type DivProps = Omit<
  JSX.IntrinsicElements["div"],
  "children" | "className"
> & {
  className?: string;
  children: React.ReactNode;
};

type FormProps = Omit<
  JSX.IntrinsicElements["form"],
  "children" | "className"
> & {
  children: React.ReactNode;
};

type InputProps = Omit<
  JSX.IntrinsicElements["input"],
  "children" | "className"
> & {
  className?: string;
};

type LabelProps = Omit<
  JSX.IntrinsicElements["label"],
  "children" | "className"
> & {
  children: React.ReactNode;
};

type SelectProps = Omit<
  JSX.IntrinsicElements["select"],
  "children" | "className"
> & {
  className?: string;
  children: React.ReactNode;
};

/**
 * Group parts in form.
 * @param children Children Node.
 */
const Group = ({ children, className, ...props }: DivProps) => {

  return <div className={`form-group${className ? ' ' + className : ''}`} {...props}>{children}</div>;

}

/**
 * Input parts in form.
 * @param children Children Node.
 */
const Input = ({ className, ...props }: InputProps) => {

  return <input className={`form-control${className ? ' ' + className : ''}`} {...props} />;

}

/**
 * Label parts in form.
 * @param children Children Node.
 */
const Label = ({ children, ...props }: LabelProps) => {

  return <label {...props}>{children}</label>;

}

/**
 * Select parts in form.
 * @param children Children Node.
 */
const Select = ({ children, className, ...props }: SelectProps) => {

  return <select className={`form-control${className ? ' ' + className : ''}`} {...props}>{children}</select>;

}

const Form: (({ children, ...props }: FormProps) => JSX.Element) & {
  Group: ({ children, className, ...props }: DivProps) => JSX.Element,
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
