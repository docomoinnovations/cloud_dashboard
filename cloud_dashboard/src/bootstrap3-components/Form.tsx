import React from 'react';

type DivProps = Omit<
  JSX.IntrinsicElements["div"],
  "children" | "className"
> & {
  className?: string;
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

  return <div className={`form-group ${className}`} {...props}>{children}</div>;

}

/**
 * Input parts in form.
 * @param children Children Node.
 */
const Input = ({ className, ...props }: InputProps) => {

  return <input className={`form-control ${className}`} {...props} />;

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

  return <select className={`form-control ${className}`} {...props}>{children}</select>;

}

const Form = {
  Group,
  Input,
  Label,
  Select,
};

export default Form;
