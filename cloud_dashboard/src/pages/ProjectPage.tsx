import React from 'react';
import MenuBar from 'organisms/MenuBar';
import CloudContext from 'model/CloudContext';
import ProjectTable from 'organisms/ProjectTable';

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
