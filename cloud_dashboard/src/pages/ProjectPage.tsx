import React from 'react';
import MenuBar from 'organisms/MenuBar';
import CloudContext from 'model/CloudContext';

const ProjectPage = ({ cloudContext }: {
  cloudContext: CloudContext
}) => {
  return <>
    <MenuBar />
    <div className="container-fluid px-0">
      <div className="row mx-0">
        <div className="col">
          <span>{cloudContext.labelName}</span>
        </div>
      </div>
    </div>
  </>;
}

export default ProjectPage;
