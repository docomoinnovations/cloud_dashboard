import React from 'react';

const KeyValueTablePanel = ({ index, title, record }: { index: number, title: string, record: Record<string, string> }) => {
  const titleKey = index === 0
    ? "bootstrap-panel--content"
    : `bootstrap-panel--${index + 2}--content`;
  return <div className="js-form-wrapper form-wrapper form-item js-form-item panel panel-default" id="bootstrap-panel">
    <div className="panel-heading">
      <a aria-controls={titleKey} aria-expanded="true" aria-pressed="true" data-toggle="collapse" role="button" className="panel-title" href={`#${titleKey}`}>{title}</a>
    </div>
    <div id={titleKey} className="panel-body panel-collapse collapse fade in">
      <div className="field field--name-tags field--type-key-value field--label-above">
        <div className="field--label">Tags</div>
        <div className="field--items">
          <div className="field--item">
            <div className="table-responsive">
              <table data-striping="1" className="table table-hover table-striped">
                <thead>
                  <tr>
                    <th>Key</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Object.entries(record).map((keyVal, index) => {
                      return <tr className={index % 2 === 0 ? 'odd' : 'even'}>
                        <td>{keyVal[0]}</td>
                        <td>{keyVal[1]}</td>
                      </tr>;
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default KeyValueTablePanel;
