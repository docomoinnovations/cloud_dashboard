type GlyphIconProps = Omit<
  JSX.IntrinsicElements['li'],
  'className' | 'iconName'
> & {
  className?: string;
  iconName: string;
};

const GlyphIcon = ({ className, iconName, ...props }: GlyphIconProps) => {
  let className2 = `glyphicon glyphicon-${iconName}${className ? ' ' + className : ''}`;
  return <span className={className2} {...props}></span>;
}

export default GlyphIcon;
