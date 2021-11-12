import React from 'react';

const KeyValuePanel = ({ index, title, record }: { index: number, title: string, record: Record<string, string> }) => {
  const titleKey = index === 0
    ? "bootstrap-panel--content"
    : `bootstrap-panel--${index + 2}--content`;
  return <div className="js-form-wrapper form-wrapper form-item js-form-item panel panel-default" id="bootstrap-panel">
    <div className="panel-heading">
      <a aria-controls={titleKey} aria-expanded="true" aria-pressed="true" data-toggle="collapse" role="button" className="panel-title" href={`#${titleKey}`}>{title}</a>
    </div>
    <div id={titleKey} className="panel-body panel-collapse collapse fade in">
      {
        Object.entries(record).map((keyVal) => {
          return <div className="field field--name-name field--type-string field--label-inline">
            <div className="field--label">{keyVal[0]}</div>
            <div className="field--item">{keyVal[1]}</div>
          </div>;
        })
      }
    </div>
  </div>;
}

export default KeyValuePanel;
