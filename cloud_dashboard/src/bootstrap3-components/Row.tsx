type RowProps = Omit<
  JSX.IntrinsicElements['div'],
  'children' | 'className'
> & {
  className?: string,
  children: React.ReactNode;
};

const Row = ({ children, className, ...props }: RowProps) => {

  return <div className={`row${className ? ' ' + className : ''}`} {...props}>{children}</div>;

};

export default Row;
