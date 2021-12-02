import Col from 'bootstrap3-components/Col';
import FluidContainer from 'bootstrap3-components/FluidContainer';
import Row from 'bootstrap3-components/Row';
import CallbackForm from 'organisms/CallbackForm';
import React from 'react';

/**
 * Callback page.
 */
const CallbackPage = () => {

  return <FluidContainer className="px-0">
    <Row className="mx-0">
      <Col>
        <CallbackForm />
      </Col>
    </Row>
  </FluidContainer>;

}

export default CallbackPage;
