import Col from 'bootstrap3-components/Col';
import FluidContainer from 'bootstrap3-components/FluidContainer';
import Row from 'bootstrap3-components/Row';
import RESOURCE_STORE_LIST from 'constant/resource_store_template';
import MenuBar from 'organisms/MenuBar';
import ResourceTable from 'organisms/ResourceTable';
import React from 'react';

/**
 * Page of K8s namespace resource.
 */
const K8sNamespaceResourcePage = () => {

  return <FluidContainer className="px-0">
    <Row className="mx-0">
      <Col>
        <MenuBar />
        <ResourceTable template={RESOURCE_STORE_LIST[1]} />
      </Col>
    </Row>
  </FluidContainer>;

}

export default K8sNamespaceResourcePage;
