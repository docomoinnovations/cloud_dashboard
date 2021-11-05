import React from 'react';
import K8sNamespaceResourceTable from 'organisms/K8sNamespaceResourceTable';
import MenuBar from 'organisms/MenuBar';

const K8sNamespaceResourcePage = () => {
  return <div className="container-fluid px-0">
    <div className="row mx-0">
      <div className="col">
        <MenuBar />
        <K8sNamespaceResourceTable />
      </div>
    </div>
  </div>;
}

export default K8sNamespaceResourcePage;
