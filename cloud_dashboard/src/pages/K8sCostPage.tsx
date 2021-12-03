import Col from 'bootstrap3-components/Col';
import FluidContainer from 'bootstrap3-components/FluidContainer';
import Row from 'bootstrap3-components/Row';
import RESOURCE_STORE_LIST from 'constant/resource_store_template';
import MenuBar from 'organisms/MenuBar';
import ResourceTable from 'organisms/ResourceTable';
import React from 'react';

/**
 * Page of K8s cost.
 */
const K8sCostPage = () => {

  return <FluidContainer className="px-0">
    <Row className="mx-0">
      <Col>
        <MenuBar />
        <ResourceTable template={RESOURCE_STORE_LIST[0]} />
      </Col>
    </Row>
  </FluidContainer>;

}

export default K8sCostPage;
