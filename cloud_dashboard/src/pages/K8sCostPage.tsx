import React from 'react';
import K8sCostTable from 'organisms/K8sCostTable';
import MenuBar from 'organisms/MenuBar';

const K8sCostPage = () => {
  return <div className="container-fluid px-0">
    <div className="row mx-0">
      <div className="col">
        <MenuBar />
        <K8sCostTable />
      </div>
    </div>
  </div>;
}

export default K8sCostPage;
