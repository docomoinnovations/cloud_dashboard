import FieldSelect from 'molecules/FieldSelect';
import ItemCountLabel from 'molecules/ItemCountLabel';
import PageSelector from 'molecules/PageSelector';
import EntityColumn from 'model/EntityColumn';
import React, { useEffect, useState } from 'react';
import EntityView from './EntityView';

/**
 * Form of entity.
 * @param entityTypeId Entity type ID.
 * @param column Entity's name list.
*/
const EntityForm: React.VFC<{
  entityTypeId: string,
  column: EntityColumn[]
}> = ({ entityTypeId, column }) => {
  const [namespace, setNamespace] = useState<string>('');
  const [namespaceName, setNamespaceName] = useState<string>('');
  const [itemCount, setItemCount] = useState(0);
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

  return <>
    {namespaceFlg
      ? <div style={{ marginTop: '2rem' }}>
        <label className="control-label">Namespace</label>
        <FieldSelect
          columnKey="namespace"
          columnName={namespace}
          setColumnName={setNamespace} />
      </div>
      : <></>}
    {namespaceNameFlg
      ? <div style={{ marginTop: '2rem' }}>
        <label className="control-label">Namespace Name</label>
        <FieldSelect
          columnKey="namespace_name"
          columnName={namespaceName}
          setColumnName={setNamespaceName} />
      </div>
      : <></>}
    <div style={{ marginTop: '2rem' }}>
      <ItemCountLabel
        entityTypeId={entityTypeId}
        namespace={namespace}
        namespaceName={namespaceName}
        itemCount={itemCount}
        setItemCount={setItemCount} />
    </div>
    <div style={{ marginTop: '2rem' }}>
      <EntityView
        entityTypeId={entityTypeId}
        entityColumnList={column}
        namespace={namespace}
        namespaceName={namespaceName}
        pageIndex={pageIndex} />
    </div>
    <PageSelector
      pageIndex={pageIndex}
      setPageIndex={setPageIndex}
      itemCount={itemCount} />
  </>;
}

export default EntityForm;
