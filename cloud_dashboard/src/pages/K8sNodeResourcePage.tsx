import Col from 'bootstrap3-components/Col';
import FluidContainer from 'bootstrap3-components/FluidContainer';
import Row from 'bootstrap3-components/Row';
import K8sNodeResourceTable from 'organisms/K8sNodeResourceTable';
import MenuBar from 'organisms/MenuBar';
import React from 'react';

/**
 * Page of K8s node resource.
 */
const K8sNodeResourcePage = () => {

  return <FluidContainer className="px-0">
    <Row className="mx-0">
      <Col>
        <MenuBar />
        <K8sNodeResourceTable />
      </Col>
    </Row>
  </FluidContainer>;

}

export default K8sNodeResourcePage;
