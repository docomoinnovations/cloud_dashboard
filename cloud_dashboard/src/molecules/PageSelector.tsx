import React from 'react';
import PageSelectorButton from 'atoms/PageSelectorButton';
import { ITEMS_PER_PAGE } from 'constant';

/**
 * Page selector for EntityForm.
 * @param pageIndex Entity item's page index.
 * @param setPageIndex Setter of pageIndex.
 * @param itemCount Entity item's count.
 */
const PageSelector = ({ pageIndex, setPageIndex, itemCount }: {
  pageIndex: number,
  setPageIndex: (n: number) => void,
  itemCount: number
}) => {

  const pageCount = Math.floor(1.0 * (itemCount + ITEMS_PER_PAGE - 1) / ITEMS_PER_PAGE);
  const disabledPageBack = pageIndex === 0;
  const disabledPageForward = itemCount === 0 || pageIndex === pageCount - 1;

  return <nav>
    <ul className="pagination">
      <li className={disabledPageBack ? 'disabled' : ''}>
        <PageSelectorButton ariaLabel="First" onClick={() => {
          setPageIndex(0);
        }}>
          <span className="glyphicon glyphicon-step-backward" aria-hidden="true"></span>
        </PageSelectorButton>
      </li>
      <li className={disabledPageBack ? 'disabled' : ''}>
        <PageSelectorButton ariaLabel="Previous" onClick={() => {
          setPageIndex(Math.max(0, pageIndex - 1));
        }}>
          <span className="glyphicon glyphicon-triangle-left" aria-hidden="true"></span>
        </PageSelectorButton>
      </li>
      <li><span>{pageIndex + 1}</span></li>
      <li className={disabledPageForward ? 'disabled' : ''}>
        <PageSelectorButton ariaLabel="Next" onClick={() => {
          setPageIndex(Math.min(pageIndex + 1, pageCount - 1));
        }}>
          <span className="glyphicon glyphicon-triangle-right" aria-hidden="true"></span>
        </PageSelectorButton>
      </li>
      <li className={disabledPageForward ? 'disabled' : ''}>
        <PageSelectorButton ariaLabel="Last" onClick={() => {
          setPageIndex(pageCount - 1);
        }}>
          <span className="glyphicon glyphicon-step-forward" aria-hidden="true"></span>
        </PageSelectorButton>
      </li>
    </ul>
  </nav>;

}

export default PageSelector;
