import Form from 'bootstrap3-components/Form';
import useDrupalJsonApi, { GetJsonDataType } from 'hooks/drupal_jsonapi';
import CloudContext from 'model/CloudContext';
import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AppContext } from 'service/state';

/**
 * Get entity item's count.
 *
 * @param cloudContext Cloud context.
 * @param entityTypeId Entity type ID.
 * @param namespace Value of namespace.
 * @param namespaceName Value of namespace.
 * @returns Entity item's count.
 */
const getItemCount = async (
  getJsonData: GetJsonDataType,
  cloudContext: CloudContext,
  entityTypeId: string,
  namespace: string,
  namespaceName: string
) => {

  // Create URL for REST API.
  const url = cloudContext.name === 'ALL'
    ? `/cloud_dashboard/${cloudContext.cloudServiceProvider}/${entityTypeId}/entity/count`
    : `/cloud_dashboard/${cloudContext.cloudServiceProvider}/${cloudContext.name}/${entityTypeId}/entity/count`;
  const filter: { [key: string]: string; } = {};
  if (namespace !== '') {
    filter['namespace'] = namespace;
  }
  if (namespaceName !== '') {
    filter['namespace_name'] = namespaceName;
  }

  // Download data.
  return (await getJsonData<{ count: number }>(url, filter)).count;

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
const ItemCountLabel = ({ entityTypeId, namespace, namespaceName, itemCount, setItemCount }: {
  entityTypeId: string,
  namespace: string,
  namespaceName: string,
  itemCount: number,
  setItemCount: (n: number) => void
}) => {

  const { cloudContext } = useContext(AppContext);
  const { getJsonData } = useDrupalJsonApi();
  const { t } = useTranslation();

  // Set entity item's count.
  useEffect(() => {
    getItemCount(getJsonData, cloudContext, entityTypeId, namespace, namespaceName).then((count) => {
      setItemCount(count);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cloudContext, namespace, namespaceName]);

  return <Form.Label>{t('ItemCount')}: {itemCount}</Form.Label>;

};

export default ItemCountLabel;
