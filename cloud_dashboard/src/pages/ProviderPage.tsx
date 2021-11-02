import React from 'react';
import CloudServiceProviderMap from 'organisms/CloudServiceProviderMap';
import MenuBar from 'organisms/MenuBar';
import SetLanguageForm from 'organisms/SetLanguageForm';
import CloudServiceProviderTable from 'organisms/CloudServiceProviderTable';

const ProviderPage = () => {
  return <>
    <MenuBar />
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <CloudServiceProviderMap />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <SetLanguageForm />
          <CloudServiceProviderTable />
        </div>
      </div>
    </div>
  </>;
}

export default ProviderPage;
