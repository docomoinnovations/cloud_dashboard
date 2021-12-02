type FluidContainerProps = Omit<
  JSX.IntrinsicElements['div'],
  'children' | 'className'
> & {
  className?: string,
  children: React.ReactNode;
};

const FluidContainer = ({ children, className, ...props }: FluidContainerProps) => {

  return <div className={`container-fluid${className ? ' ' + className : ''}`} {...props}>{children}</div>;

};

export default FluidContainer;
