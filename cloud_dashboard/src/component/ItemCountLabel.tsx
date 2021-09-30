import React, { useEffect } from 'react';
import HttpService from 'service/http';

/**
 * Label of entity item's count.
 * @param cloudContext Value of cloud context.
 * @param entityTypeId Entity type ID.
 * @param namespace Value of namespace.
 * @param namespaceName Value of namespace.
 * @param itemCount Entity item's count.
 * @param setItemCount Setter of itemCount.
 * @param cloudConfigType Type of cloud config.
 */
const ItemCountLabel: React.VFC<{
  entityTypeId: string,
  cloudContext: string,
  namespace: string,
  namespaceName: string,
  itemCount: number,
  setItemCount: (n: number) => void,
  cloudConfigType: string
}> = ({ cloudContext, entityTypeId, namespace, namespaceName, itemCount, setItemCount, cloudConfigType }) => {
  // Set entity item's count.
  useEffect(() => {
    if (cloudContext === '') {
      setItemCount(0);
    } else {
      let url = `/cloud_dashboard/${cloudConfigType}/${cloudContext}/${entityTypeId}/entity/count`;
      if (namespace !== '') {
        url += `?namespace=${namespace}`;
      }
      if (namespaceName !== '') {
        url += `?namespace_name=${namespaceName}`;
      }
      HttpService.getInstance().getJson<{count: number}>(url).then((res) => {
        setItemCount(res.count);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cloudContext, namespace, namespaceName]);

  return <label className="control-label">Item Count: {itemCount}</label>;
};

export default ItemCountLabel;
