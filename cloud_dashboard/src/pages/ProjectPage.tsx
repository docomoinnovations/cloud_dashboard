import CloudContext from 'model/CloudContext';
import MenuBar from 'organisms/MenuBar';
import ProjectTable from 'organisms/ProjectTable';
import React from 'react';

/**
 * Page of viewing project info.
 *
 * @param cloudContext CloudContext.
 */
const ProjectPage = ({ cloudContext }: {
  cloudContext: CloudContext
}) => {

  return <>
    <MenuBar />
    <div className="container-fluid px-0">
      <div className="row mx-0">
        <div className="col">
          <ProjectTable cloudContext={cloudContext} />
        </div>
      </div>
    </div>
  </>;

}

export default ProjectPage;
