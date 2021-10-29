import React from 'react';

/**
 * Icon glyph for showing sort direction.
 *
 * @param direction Sort direction.
 */
const SortDirectionIcon = ({ direction }: { direction: "ASC" | "DESC" }) => {

  const glyphiconClass = direction === 'ASC' ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down';
  const originalTitle = direction === 'ASC' ? 'descending' : 'ascending';

  return <span
      className={`icon glyphicon ${glyphiconClass} icon-after`}
      aria-hidden="true" data-toggle="tooltip"
      data-placement="bottom" title=""
      data-original-title={`Sort by ${originalTitle} order`}>
    </span>;

};

export default SortDirectionIcon;
