import CloudContextSelect from 'component/CloudContextSelect';
import EntityTable from 'component/EntityTable';
import FieldSelect from 'component/FieldSelect';
import ItemCountLabel from 'component/ItemCountLabel';
import PageSelector from 'component/PageSelector';
import CloudServiceProvider from 'model/CloudServiceProvider';
import EntityColumn from 'model/EntityColumn';
import SortInfo from 'model/SortInfo';
import React, { useEffect, useState } from 'react';

/**
 * Form of entity.
 * @param entityTypeId Entity type ID.
 * @param column Entity's name list.
 * @param cloudServiceProvider Cloud Service Provider.
*/
const EntityForm: React.VFC<{
  entityTypeId: string,
  column: EntityColumn[],
  cloudServiceProvider: CloudServiceProvider
}> = ({ entityTypeId, column, cloudServiceProvider }) => {
  const [cloudContext, setCloudContext] = useState<string>('');
  const [namespace, setNamespace] = useState<string>('');
  const [namespaceName, setNamespaceName] = useState<string>('');
  const [itemCount, setItemCount] = useState(0);
  const [sortInfo, setSortInfo] = useState<SortInfo>({
    key: '', direction: 'ASC'
  });
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    if (namespace !== '') {
      setNamespaceName('');
    }
  }, [namespace]);

  useEffect(() => {
    if (namespaceName !== '') {
      setNamespace('');
    }
  }, [namespaceName]);

  const namespaceFlg = column.map((c) => c.labelName).includes('Namespace');
  const namespaceNameFlg = column.map((c) => c.labelName).includes('Namespace Name');

  return <div className="row" style={{ marginTop: '2rem' }}>
    <div className="col">
      <form>
        <div className="form-group">
          <label className="control-label">Cloud context</label>
          <CloudContextSelect
            cloudContext={cloudContext}
            setCloudContext={setCloudContext}
            cloudServiceProvider={cloudServiceProvider} />
        </div>
        {namespaceFlg
          ? <div className="form-group">
            <label className="control-label">Namespace</label>
            <FieldSelect
              cloudContext={cloudContext}
              columnKey="namespace"
              columnName={namespace}
              setColumnName={setNamespace}
              cloudServiceProvider={cloudServiceProvider} />
          </div>
          : <></>}
        {namespaceNameFlg
          ? <div className="form-group">
            <label className="control-label">Namespace Name</label>
            <FieldSelect
              cloudContext={cloudContext}
              columnKey="namespace_name"
              columnName={namespaceName}
              setColumnName={setNamespaceName}
              cloudServiceProvider={cloudServiceProvider} />
          </div>
          : <></>}
        <div className="form-group">
          <ItemCountLabel
            cloudContext={cloudContext}
            entityTypeId={entityTypeId}
            namespace={namespace}
            namespaceName={namespaceName}
            itemCount={itemCount}
            setItemCount={setItemCount}
            cloudServiceProvider={cloudServiceProvider} />
        </div>
        <div className="table-responsive">
          <EntityTable
            entityTypeId={entityTypeId}
            column={column}
            cloudContext={cloudContext}
            namespace={namespace}
            namespaceName={namespaceName}
            sortInfo={sortInfo}
            setSortInfo={setSortInfo}
            pageIndex={pageIndex} />
        </div>
        <PageSelector
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
          itemCount={itemCount} />
      </form>
    </div>
  </div>
}

export default EntityForm;
