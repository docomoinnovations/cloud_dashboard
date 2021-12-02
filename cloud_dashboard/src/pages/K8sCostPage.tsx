import Col from 'bootstrap3-components/Col';
import FluidContainer from 'bootstrap3-components/FluidContainer';
import Row from 'bootstrap3-components/Row';
import K8sCostTable from 'organisms/K8sCostTable';
import MenuBar from 'organisms/MenuBar';
import React from 'react';

/**
 * Page of K8s cost.
 */
const K8sCostPage = () => {

  return <FluidContainer className="px-0">
    <Row className="mx-0">
      <Col>
        <MenuBar />
        <K8sCostTable />
      </Col>
    </Row>
  </FluidContainer>;

}

export default K8sCostPage;
