type TableProps = {
  children: React.ReactNode;
  hover?: boolean;
  responsive?: boolean;
  striped?: boolean;
};

const Table = ({ children, hover = false, responsive = false, striped = false }: TableProps) => {
  let className = 'table';
  if (hover) {
    className += ' table-hover';
  }
  if (striped) {
    className += ' table-striped';
  }
  if (responsive) {
    className += ' responsive-enabled';
  }
  if (responsive) {
    return <div className="table-responsive">
      <table data-striping={className ? '1' : undefined} className={className}>
        {children}
      </table>
    </div>;
  } else {
    return <table data-striping={className ? '1' : undefined} className={className}>
      {children}
    </table>;
  }
}

export default Table;
