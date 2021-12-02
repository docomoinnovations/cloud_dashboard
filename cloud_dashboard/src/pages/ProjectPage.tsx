import Col from 'bootstrap3-components/Col';
import FluidContainer from 'bootstrap3-components/FluidContainer';
import Row from 'bootstrap3-components/Row';
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
    <FluidContainer className="px-0">
      <Row className="mx-0">
        <Col>
          <ProjectTable cloudContext={cloudContext} />
        </Col>
      </Row>
    </FluidContainer>
  </>;

}

export default ProjectPage;
