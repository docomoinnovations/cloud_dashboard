import React, { useContext } from 'react';
import { AppContext } from 'service/state';

const ProviderView: React.VFC = () => {
  const { cloudContextList } = useContext(AppContext);

  return <div className="container-fluid">
    <div className="row">
      <div className="col">
        <form>
          <div className="form-group" style={{ marginTop: '2rem' }}>
            <label className="control-label">Cloud Service Providers</label>
          </div>
          <div className="table-responsive" style={{ marginTop: '2rem' }}>
            <table className="table table-hover table-striped sticky-enabled sticky-table">
              <thead>
                <th>Name</th>
                <th>Instance Pricing</th>
                <th>Spreadsheet</th>
              </thead>
              <tbody>
                {
                  cloudContextList.map((r, index) => {
                    return <tr key={index}>
                    <td>{r.labelName}</td>
                    <td>{r.cloudServiceProvider === 'aws_cloud' ? 'view' : ''}</td>
                    <td></td>
                  </tr>;
                  })
                }
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  </div>;
}

export default ProviderView;
