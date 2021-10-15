import React, { useContext, useEffect } from 'react';
import HttpService from 'service/http';
import { AppContext } from 'service/state';

/**
 * Label of entity item's count.
 * @param entityTypeId Entity type ID.
 * @param namespace Value of namespace.
 * @param namespaceName Value of namespace.
 * @param itemCount Entity item's count.
 * @param setItemCount Setter of itemCount.
 * @param cloudServiceProvider Cloud Service Provider.
 */
const ItemCountLabel: React.VFC<{
  entityTypeId: string,
  namespace: string,
  namespaceName: string,
  itemCount: number,
  setItemCount: (n: number) => void
}> = ({ entityTypeId, namespace, namespaceName, itemCount, setItemCount }) => {
  const { cloudContext } = useContext(AppContext);

  // Set entity item's count.
  useEffect(() => {
    let url = cloudContext.name === 'ALL'
      ? `/cloud_dashboard/${cloudContext.cloudServiceProvider}/${entityTypeId}/entity/count`
      : `/cloud_dashboard/${cloudContext.cloudServiceProvider}/${cloudContext.name}/${entityTypeId}/entity/count`;
    if (namespace !== '') {
      url += `?namespace=${namespace}`;
    }
    if (namespaceName !== '') {
      url += `?namespace_name=${namespaceName}`;
    }
    HttpService.getInstance().getJson<{count: number}>(url).then((res) => {
      setItemCount(res.count);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cloudContext, namespace, namespaceName]);

  return <label className="control-label">Item Count: {itemCount}</label>;
};

export default ItemCountLabel;
