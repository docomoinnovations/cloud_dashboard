import React from 'react';
import CloudServiceProviderMap from 'organisms/CloudServiceProviderMap';
import MenuBar from 'organisms/MenuBar';
import SetLanguageForm from 'organisms/SetLanguageForm';
import CloudServiceProviderTable from 'organisms/CloudServiceProviderTable';

/**
 * Page of cloud service provider info.
 */
const ProviderPage = () => {

  return <>
    <MenuBar />
    <div className="container-fluid px-0">
      <div className="row mx-0">
        <div className="col">
          <CloudServiceProviderMap />
        </div>
      </div>
      <div className="row mx-0">
        <div className="col">
          <SetLanguageForm />
          <CloudServiceProviderTable />
        </div>
      </div>
    </div>
  </>;

}

export default ProviderPage;
