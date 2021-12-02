import GlyphIcon from 'bootstrap3-components/GlyphIcon';
import React from 'react';

/**
 * Icon glyph for showing sort direction.
 *
 * @param direction Sort direction.
 */
const SortDirectionIcon = ({ direction }: { direction: "ASC" | "DESC" }) => {

  const iconName = direction === 'ASC' ? 'chevron-up' : 'chevron-down';
  const originalTitle = direction === 'ASC' ? 'descending' : 'ascending';

  return <GlyphIcon className="icon icon-after" iconName={iconName}
    aria-hidden="true" data-toggle="tooltip"
    data-placement="bottom" title=""
    data-original-title={`Sort by ${originalTitle} order`} />;

};

export default SortDirectionIcon;
