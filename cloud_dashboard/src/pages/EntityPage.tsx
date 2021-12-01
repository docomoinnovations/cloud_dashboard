import React, { useEffect, useState } from 'react';
import FieldSelect from 'molecules/FieldSelect';
import ItemCountLabel from 'molecules/ItemCountLabel';
import PageSelector from 'molecules/PageSelector';
import EntityTable from 'organisms/EntityTable';
import MenuTemplate from 'model/MenuTemplate';
import MenuBar from 'organisms/MenuBar';
import EntityTabs from 'molecules/EntityTabs';
import { getEntityListViewUrl, getEntityTypeId } from 'service/utility';
import ControlLabel from 'atoms/ControlLabel';

/**
 * Page of entity view.
 * @param menuTemplate Menu Template.
*/
const EntityPage = ({ menuTemplate }: {
  menuTemplate: MenuTemplate
}) => {

  const [namespace, setNamespace] = useState<string>('');
  const [namespaceName, setNamespaceName] = useState<string>('');
  const [itemCount, setItemCount] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);

  const entityTypeId = getEntityTypeId(menuTemplate);

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

  useEffect(() => {
    window.scrollBy(0, -window.pageYOffset);
  }, [pageIndex]);

  const namespaceFlg = menuTemplate.entityColumn.map((c) => c.labelName).includes('Namespace');
  const namespaceNameFlg = menuTemplate.entityColumn.map((c) => c.labelName).includes('Namespace Name');

  return <>
    <MenuBar />
    <EntityTabs menuType={menuTemplate.cloudServiceProvider} menuName={menuTemplate.labelName} />
    <div className="container-fluid px-0">
      <div className="row mx-0">
        <div className="col">
          <form>
            {
              namespaceFlg
                ? <div className="form-group" style={{ marginTop: '2rem' }}>
                  <ControlLabel>Namespace</ControlLabel>
                  <FieldSelect
                    columnKey="namespace"
                    columnName={namespace}
                    setColumnName={setNamespace} />
                </div>
                : <></>
            }
            {
              namespaceNameFlg
                ? <div className="form-group" style={{ marginTop: '2rem' }}>
                  <ControlLabel>Namespace Name</ControlLabel>
                  <FieldSelect
                    columnKey="namespace_name"
                    columnName={namespaceName}
                    setColumnName={setNamespaceName} />
                </div>
                : <></>
            }
            <div className="form-group" style={{ marginTop: '2rem' }}>
              <ItemCountLabel
                entityTypeId={entityTypeId}
                namespace={namespace}
                namespaceName={namespaceName}
                itemCount={itemCount}
                setItemCount={setItemCount} />
            </div>
          </form>
        </div>
      </div>
    </div>
    <PageSelector
      pageIndex={pageIndex}
      setPageIndex={setPageIndex}
      itemCount={itemCount} />
    <div className="container-fluid px-0">
      <div className="row mx-0">
        <div className="col">
          <form>
            <EntityTable
              entityTypeId={entityTypeId}
              entityColumnList={menuTemplate.entityColumn}
              namespace={namespace}
              namespaceName={namespaceName}
              pageIndex={pageIndex}
              detailInfo={
                typeof menuTemplate.detailInfoColumn !== 'undefined'
                ? {
                  column: menuTemplate.detailInfoColumn,
                  path: getEntityListViewUrl(menuTemplate)
                }
                : undefined} />
          </form>
        </div>
      </div>
    </div>
    <PageSelector
      pageIndex={pageIndex}
      setPageIndex={setPageIndex}
      itemCount={itemCount} />
  </>;

}

export default EntityPage;
