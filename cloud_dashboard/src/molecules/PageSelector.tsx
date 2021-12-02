import PageSelectorButton from 'atoms/PageSelectorButton';
import GlyphIcon from 'bootstrap3-components/GlyphIcon';
import Pager from 'bootstrap3-components/Pager';
import { ITEMS_PER_PAGE } from 'constant';
import React from 'react';

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

  if (pageCount <= 1) {
    return <></>;
  }

  return <Pager className="pager-nav text-center" role="navigation" aria-labelledby="pagination-heading">
    <Pager.Item className={disabledPageBack ? 'disabled' : ''}>
      <PageSelectorButton ariaLabel="First" onClick={() => {
        setPageIndex(0);
      }}>
        <GlyphIcon iconName="step-backward" aria-hidden="true" />
      </PageSelectorButton>
    </Pager.Item>
    <Pager.Item className={disabledPageBack ? 'disabled' : ''}>
      <PageSelectorButton ariaLabel="Previous" onClick={() => {
        setPageIndex(Math.max(0, pageIndex - 1));
      }}>
        <GlyphIcon iconName="triangle-left" aria-hidden="true" />
      </PageSelectorButton>
    </Pager.Item>
    <Pager.Item>
      <span>{pageIndex + 1}</span>
    </Pager.Item>
    <Pager.Item className={disabledPageForward ? 'disabled' : ''}>
      <PageSelectorButton ariaLabel="Next" onClick={() => {
        setPageIndex(Math.min(pageIndex + 1, pageCount - 1));
      }}>
        <GlyphIcon iconName="triangle-right" aria-hidden="true" />
      </PageSelectorButton>
    </Pager.Item>
    <Pager.Item className={disabledPageForward ? 'disabled' : ''}>
      <PageSelectorButton ariaLabel="Last" onClick={() => {
        setPageIndex(pageCount - 1);
      }}>
        <GlyphIcon iconName="step-forward" aria-hidden="true" />
      </PageSelectorButton>
    </Pager.Item>
  </Pager>;

}

export default PageSelector;
