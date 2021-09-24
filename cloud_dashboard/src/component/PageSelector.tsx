import { ITEMS_PER_PAGE } from 'constant';
import React from 'react';

/**
 * Page selector
 * @param pageIndex Entity item's page index.
 * @param setPageIndex Setter of pageIndex.
 * @param itemCount Entity item's count.
 */
const PageSelector: React.VFC<{
  pageIndex: number,
  setPageIndex: (n: number) => void,
  itemCount: number
}> = ({pageIndex, setPageIndex, itemCount}) => {
  const pageCount = Math.floor(1.0 * (itemCount + ITEMS_PER_PAGE - 1) / ITEMS_PER_PAGE);

  return <nav>
    <ul className="pagination">
      <li>
        <a href="#" aria-label="最初のページへ" onClick={() => {
          setPageIndex(0);
        }}>
          <span aria-hidden="true">«</span>
        </a>
      </li>
      <li>
        <a href="#" aria-label="前のページへ" onClick={() => {
          setPageIndex(Math.max(0, pageIndex - 1));
        }}>
          <span aria-hidden="true">＜</span>
        </a>
      </li>
      <li><a href="#">{pageIndex + 1}</a></li>
      <li className={pageIndex !== pageCount - 1 ? '' : 'disabled'}>
        <a href="#" aria-label="次のページへ" onClick={() => {
          setPageIndex(Math.min(pageIndex + 1, pageCount - 1));
        }}>
          <span aria-hidden="true">＞</span>
        </a>
      </li>
      <li className={itemCount !== 0 && pageIndex !== pageCount - 1 ? '' : 'disabled'}>
        <a href="#" aria-label="最後のページへ" onClick={() => {
          setPageIndex(pageCount - 1);
        }}>
          <span aria-hidden="true">»</span>
        </a>
      </li>
    </ul>
  </nav>;
}

export default PageSelector;
