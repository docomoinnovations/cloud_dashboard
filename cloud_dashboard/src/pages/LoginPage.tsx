import React from 'react';
import LoginForm from 'organisms/LoginForm';

const LoginPage: React.VFC = () => {
  return <div className="container-fluid">
    <div className="row">
      <div className="col">
        <LoginForm />
      </div>
    </div>
  </div>;
}

export default LoginPage;
