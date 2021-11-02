import React from 'react';
import CallbackForm from 'organisms/CallbackForm';

const CallbackPage: React.VFC = () => {
  return <div className="container-fluid">
    <div className="row">
      <div className="col">
        <CallbackForm />
      </div>
    </div>
  </div>;
}

export default CallbackPage;
