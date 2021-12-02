import Col from 'bootstrap3-components/Col';
import FluidContainer from 'bootstrap3-components/FluidContainer';
import Row from 'bootstrap3-components/Row';
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

  return <FluidContainer className="px-0">
    <Row className="mx-0">
      <Col>
        <MenuBar />
        <LaunchTemplateTable cloudContext={cloudContext} />
      </Col>
    </Row>
  </FluidContainer>;

}

export default LaunchTemplatePage;
