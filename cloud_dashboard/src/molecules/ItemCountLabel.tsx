import React, { useContext, useEffect } from 'react';
import HttpService from 'service/http';
import { AppContext } from 'service/state';
import { useTranslation } from 'react-i18next';
import ControlLabel from 'atoms/ControlLabel';
import CloudContext from 'model/CloudContext';

/**
 * Get entity item's count.
 *
 * @param cloudContext Cloud context.
 * @param entityTypeId Entity type ID.
 * @param namespace Value of namespace.
 * @param namespaceName Value of namespace.
 * @returns Entity item's count.
 */
const getItemCount = async  (
  cloudContext: CloudContext,
  entityTypeId: string,
  namespace: string,
  namespaceName: string
) => { 

  // Create URL for REST API.
  let url = cloudContext.name === 'ALL'
    ? `/cloud_dashboard/${cloudContext.cloudServiceProvider}/${entityTypeId}/entity/count`
    : `/cloud_dashboard/${cloudContext.cloudServiceProvider}/${cloudContext.name}/${entityTypeId}/entity/count`;
  if (namespace !== '') {
    url += `?namespace=${namespace}`;
  }
  if (namespaceName !== '') {
    url += `?namespace_name=${namespaceName}`;
  }
  const jsonApiServerUri = window.localStorage.getItem('jsonapiServerUri');
  if (jsonApiServerUri !== null) {
    url = jsonApiServerUri + url;
  }

  return (await HttpService.getInstance().getJson<{count: number}>(url)).count;

};

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
  const { t } = useTranslation();

  // Set entity item's count.
  useEffect(() => {
    getItemCount(cloudContext, entityTypeId, namespace, namespaceName).then((count) => {
      setItemCount(count);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cloudContext, namespace, namespaceName]);

  return <ControlLabel>{t('ItemCount')}: {itemCount}</ControlLabel>;

};

export default ItemCountLabel;
