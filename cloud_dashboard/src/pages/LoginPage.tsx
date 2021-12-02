import Col from 'bootstrap3-components/Col';
import FluidContainer from 'bootstrap3-components/FluidContainer';
import Row from 'bootstrap3-components/Row';
import LoginForm from 'organisms/LoginForm';
import React from 'react';

/**
 * Page for login.
 */
const LoginPage = () => {

  return <FluidContainer className="px-0">
    <Row className="mx-0">
      <Col>
        <LoginForm />
      </Col>
    </Row>
  </FluidContainer>;

}

export default LoginPage;
