import Form from 'bootstrap3-components/Form';
import SortInfo from 'model/SortInfo';
import DataTable from 'organisms/DataTable';
import React, { useContext, useState } from 'react';
import { AppContext } from 'service/state';

/**
 * Table of cloud service providers.
 */
const CloudServiceProviderTable = () => {

  const { cloudContextList } = useContext(AppContext);
  const [sortInfo, setSortInfo] = useState<SortInfo>({
    key: '', direction: 'ASC'
  });

  return <Form>
    <Form.Group style={{ marginTop: '2rem' }}>
      <Form.Label>Cloud Service Providers</Form.Label>
    </Form.Group>
    <DataTable
      dataColumnList={[{ key: 'labelName', label: 'Name' }]}
      dataRecordList={
        cloudContextList
          .sort((a, b) => {
            const keyA = a.labelName;
            const keyB = b.labelName;
            if (sortInfo.direction === 'ASC') {
              return keyA > keyB ? 1 : -1;
            } else {
              return keyA > keyB ? -1 : 1;
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
  </Form>;

}

export default CloudServiceProviderTable;
