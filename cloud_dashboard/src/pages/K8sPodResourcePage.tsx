import Col from 'bootstrap3-components/Col';
import FluidContainer from 'bootstrap3-components/FluidContainer';
import Row from 'bootstrap3-components/Row';
import K8sPodResourceTable from 'organisms/K8sPodResourceTable';
import MenuBar from 'organisms/MenuBar';
import React from 'react';

/**
 * Page of K8s pod resource.
 */
const K8sPodResourcePage = () => {

  return <FluidContainer className="px-0">
    <Row className="mx-0">
      <Col>
        <MenuBar />
        <K8sPodResourceTable />
      </Col>
    </Row>
  </FluidContainer>;

}

export default K8sPodResourcePage;
