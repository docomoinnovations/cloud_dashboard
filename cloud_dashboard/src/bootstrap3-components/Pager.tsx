type PagerProps = Omit<
  JSX.IntrinsicElements['nav'],
  'children'
> & {
  children: React.ReactNode;
};

type ItemProps = Omit<
  JSX.IntrinsicElements['li'],
  'children'
> & {
  children: React.ReactNode;
};

const Item = ({ children, ...props }: ItemProps) => {
  return <li {...props}>{children}</li>;
}

const Pager: (({ children, ...props }: PagerProps) => JSX.Element) & {
  Item: ({ children, ...props }: ItemProps) => JSX.Element,
} = ({ children, ...props }) => {
  return <nav {...props}>
    <ul className="pagination">
      {children}
    </ul>
  </nav>;
}
Pager.Item = Item;

export default Pager;
