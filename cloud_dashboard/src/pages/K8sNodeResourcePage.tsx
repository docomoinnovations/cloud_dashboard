import React from 'react';
import K8sNodeResourceTable from 'organisms/K8sNodeResourceTable';
import MenuBar from 'organisms/MenuBar';

/**
 * Page of K8s node resource.
 */
const K8sNodeResourcePage = () => {

  return <div className="container-fluid px-0">
    <div className="row mx-0">
      <div className="col">
        <MenuBar />
        <K8sNodeResourceTable />
      </div>
    </div>
  </div>;

}

export default K8sNodeResourcePage;
