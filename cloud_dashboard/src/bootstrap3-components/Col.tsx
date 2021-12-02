type ColProps = Omit<
  JSX.IntrinsicElements['div'],
  'children' | 'className'
> & {
  className?: string,
  children: React.ReactNode;
};

const Col = ({ children, className, ...props }: ColProps) => {

  return <div className={`col${className ? ' ' + className : ''}`} {...props}>{children}</div>;

};

export default Col;
