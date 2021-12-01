import Form from 'bootstrap3-components/Form';
import MenuTemplate from 'model/MenuTemplate';
import EntityTabs from 'molecules/EntityTabs';
import FieldSelect from 'molecules/FieldSelect';
import ItemCountLabel from 'molecules/ItemCountLabel';
import PageSelector from 'molecules/PageSelector';
import EntityTable from 'organisms/EntityTable';
import MenuBar from 'organisms/MenuBar';
import React, { useEffect, useState } from 'react';
import { getEntityListViewUrl, getEntityTypeId } from 'service/utility';

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
                ? <Form.Group style={{ marginTop: '2rem' }}>
                  <Form.Label>Namespace</Form.Label>
                  <FieldSelect
                    columnKey="namespace"
                    columnName={namespace}
                    setColumnName={setNamespace} />
                </Form.Group>
                : <></>
            }
            {
              namespaceNameFlg
                ? <Form.Group style={{ marginTop: '2rem' }}>
                  <Form.Label>Namespace Name</Form.Label>
                  <FieldSelect
                    columnKey="namespace_name"
                    columnName={namespaceName}
                    setColumnName={setNamespaceName} />
                </Form.Group>
                : <></>
            }
            <Form.Group style={{ marginTop: '2rem' }}>
              <ItemCountLabel
                entityTypeId={entityTypeId}
                namespace={namespace}
                namespaceName={namespaceName}
                itemCount={itemCount}
                setItemCount={setItemCount} />
            </Form.Group>
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
