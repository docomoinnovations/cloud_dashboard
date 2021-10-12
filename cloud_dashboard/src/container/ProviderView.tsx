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
              </thead>
              <tbody>
                {
                  cloudContextList
                    .filter((r) => r.name !== 'ALL')
                    .map((r, index) => {
                    return <tr key={index}>
                    <td>{r.labelName}</td>
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
