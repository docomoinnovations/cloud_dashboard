import EntityTable from 'component/EntityTable';
import FieldSelect from 'component/FieldSelect';
import ItemCountLabel from 'component/ItemCountLabel';
import PageSelector from 'component/PageSelector';
import EntityColumn from 'model/EntityColumn';
import SortInfo from 'model/SortInfo';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from 'service/state';

/**
 * Form of entity.
 * @param entityTypeId Entity type ID.
 * @param column Entity's name list.
*/
const EntityForm: React.VFC<{
  entityTypeId: string,
  column: EntityColumn[]
}> = ({ entityTypeId, column }) => {
  const { cloudContext } = useContext(AppContext);
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

  return <div className="container-fluid">
    <div className="row">
      <div className="col">
        <form>
          {namespaceFlg
            ? <div className="form-group" style={{ marginTop: '2rem' }}>
              <label className="control-label">Namespace</label>
              <FieldSelect
                cloudContext={cloudContext}
                columnKey="namespace"
                columnName={namespace}
                setColumnName={setNamespace} />
            </div>
            : <></>}
          {namespaceNameFlg
            ? <div className="form-group" style={{ marginTop: '2rem' }}>
              <label className="control-label">Namespace Name</label>
              <FieldSelect
                cloudContext={cloudContext}
                columnKey="namespace_name"
                columnName={namespaceName}
                setColumnName={setNamespaceName} />
            </div>
            : <></>}
          <div className="form-group" style={{ marginTop: '2rem' }}>
            <ItemCountLabel
              cloudContext={cloudContext}
              entityTypeId={entityTypeId}
              namespace={namespace}
              namespaceName={namespaceName}
              itemCount={itemCount}
              setItemCount={setItemCount} />
          </div>
          <div className="table-responsive" style={{ marginTop: '2rem' }}>
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
  </div>;
}

export default EntityForm;
