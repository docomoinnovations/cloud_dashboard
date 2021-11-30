import React from 'react';

/**
 * Title bar of entity detail info panel.
 *
 * @param titleKey key string of title.
 * @param title Title text.
 */
const PanelHeadingTitle = ({ titleKey, title }: {
  titleKey: string,
  title: string
}) => {
  return <div className="panel-heading">
    <a aria-controls={titleKey} aria-expanded="true" aria-pressed="true"
      data-toggle="collapse" role="button" className="panel-title"
      href={`#${titleKey}`}>{title}</a>
  </div>;
}

export default PanelHeadingTitle;
