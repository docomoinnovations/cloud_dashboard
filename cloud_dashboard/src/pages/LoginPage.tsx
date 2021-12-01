import LoginForm from 'organisms/LoginForm';
import React from 'react';

/**
 * Page for login.
 */
const LoginPage = () => {

  return <div className="container-fluid px-0">
    <div className="row mx-0">
      <div className="col">
        <LoginForm />
      </div>
    </div>
  </div>;

}

export default LoginPage;
