import K8sPodResourceTable from 'organisms/K8sPodResourceTable';
import MenuBar from 'organisms/MenuBar';
import React from 'react';

/**
 * Page of K8s pod resource.
 */
const K8sPodResourcePage = () => {

  return <div className="container-fluid px-0">
    <div className="row mx-0">
      <div className="col">
        <MenuBar />
        <K8sPodResourceTable />
      </div>
    </div>
  </div>;

}

export default K8sPodResourcePage;
