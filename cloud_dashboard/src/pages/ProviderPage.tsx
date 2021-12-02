import Col from 'bootstrap3-components/Col';
import FluidContainer from 'bootstrap3-components/FluidContainer';
import Row from 'bootstrap3-components/Row';
import CloudServiceProviderMap from 'organisms/CloudServiceProviderMap';
import CloudServiceProviderTable from 'organisms/CloudServiceProviderTable';
import MenuBar from 'organisms/MenuBar';
import SetLanguageForm from 'organisms/SetLanguageForm';
import React from 'react';

/**
 * Page of cloud service provider info.
 */
const ProviderPage = () => {

  return <>
    <MenuBar />
    <FluidContainer className="px-0">
      <Row className="mx-0">
        <Col>
          <CloudServiceProviderMap />
        </Col>
      </Row>
      <Row className="mx-0">
        <Col>
          <SetLanguageForm />
          <CloudServiceProviderTable />
        </Col>
      </Row>
    </FluidContainer>
  </>;

}

export default ProviderPage;
