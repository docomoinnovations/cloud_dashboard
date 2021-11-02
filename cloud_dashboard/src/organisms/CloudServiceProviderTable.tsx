import React, { useContext, useState } from 'react';
import ControlLabel from 'atoms/ControlLabel';
import SortInfo from 'model/SortInfo';
import { AppContext } from 'service/state';
import DataTable from './DataTable';

const CloudServiceProviderTable = () => {
  const { cloudContextList } = useContext(AppContext);
  const [sortInfo, setSortInfo] = useState<SortInfo>({
    key: '', direction: 'ASC'
  });

  return <form>
    <div className="form-group" style={{ marginTop: '2rem' }}>
      <ControlLabel>Cloud Service Providers</ControlLabel>
    </div>
    <DataTable
      dataColumnList={[{ key: 'labelName', label: 'Name' }]}
      dataRecordList={
        cloudContextList
          .sort((a, b) => {
            const key1 = a.labelName;
            const key2 = b.labelName;
            if (sortInfo.direction === 'ASC') {
              return key1 > key2 ? 1 : -1;
            } else {
              return key1 > key2 ? -1 : 1;
            }
          })
          .filter((r) => r.name !== 'ALL')
          .map((r) => {
            return {
              id: `${r.cloudServiceProvider}_${r.name}`,
              value: { 'labelName': r.labelName }
            };
          })
      }
      sortInfo={sortInfo}
      setSortInfo={setSortInfo}
    />
  </form>;
}

export default CloudServiceProviderTable;
