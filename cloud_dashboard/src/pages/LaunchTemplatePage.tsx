import CloudContext from 'model/CloudContext';
import LaunchTemplateTable from 'organisms/LaunchTemplateTable';
import MenuBar from 'organisms/MenuBar';
import React from 'react';

/**
 * Page of launch template.
 *
 * @param cloudContext CloudContext.
 */
const LaunchTemplatePage = ({ cloudContext }: {
  cloudContext: CloudContext
}) => {

  return <div className="container-fluid px-0">
    <div className="row mx-0">
      <div className="col">
        <MenuBar />
        <LaunchTemplateTable cloudContext={cloudContext} />
      </div>
    </div>
  </div>;

}

export default LaunchTemplatePage;
