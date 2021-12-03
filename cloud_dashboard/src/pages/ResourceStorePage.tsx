import Col from 'bootstrap3-components/Col';
import FluidContainer from 'bootstrap3-components/FluidContainer';
import Row from 'bootstrap3-components/Row';
import ResourceStoreTemplate from 'model/ResourceStoreTemplate';
import MenuBar from 'organisms/MenuBar';
import ResourceStoreTable from 'organisms/ResourceStoreTable';
import React from 'react';

/**
 * Page of Cloud Resource.
 */
const ResourceStorePage = ({ template }: { template: ResourceStoreTemplate }) => {

  return <FluidContainer className="px-0">
    <Row className="mx-0">
      <Col>
        <MenuBar />
        <ResourceStoreTable template={template} />
      </Col>
    </Row>
  </FluidContainer>;

}

export default ResourceStorePage;
