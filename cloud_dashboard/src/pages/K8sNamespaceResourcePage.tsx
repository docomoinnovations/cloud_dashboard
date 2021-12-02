import Col from 'bootstrap3-components/Col';
import FluidContainer from 'bootstrap3-components/FluidContainer';
import Row from 'bootstrap3-components/Row';
import K8sNamespaceResourceTable from 'organisms/K8sNamespaceResourceTable';
import MenuBar from 'organisms/MenuBar';
import React from 'react';

/**
 * Page of K8s namespace resource.
 */
const K8sNamespaceResourcePage = () => {

  return <FluidContainer className="px-0">
    <Row className="mx-0">
      <Col>
        <MenuBar />
        <K8sNamespaceResourceTable />
      </Col>
    </Row>
  </FluidContainer>;

}

export default K8sNamespaceResourcePage;
