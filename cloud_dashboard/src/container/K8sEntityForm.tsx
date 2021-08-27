import { ITEMS_PER_PAGE } from 'constant';
import EntityColumn from 'model/EntityColumn';
import EntityColumnType from 'model/EntityColumnType';
import React, { useEffect, useState } from 'react';

/**
 * Information of soring parameter for entity table.
 */
interface SortInfo {
  key: string;
  direction: 'ASC' | 'DESC';
}

/**
 * K8s Entity.
 */
interface K8sEntity {
  attributes: {
    [key: string]: any;
  };
  id: string;
}

/**
 * Padding Zero String.
 * @param data data
 * @param length data length
 * @returns Padded value
 */
const paddingZero = (data: any, length: number) => {
  return `000000${data}`.slice(-length);
}

/**
 * Convert to datetime string for UI.
 * @param dateString datetime string
 * @returns datetime string for UI
 */
const convertDateString = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  let output = `${year}/${paddingZero(month, 2)}/${paddingZero(day, 2)}`;
  output += ` - ${paddingZero(hour, 2)}:${paddingZero(minute, 2)}`;
  return output;
}

/**
 * Round number method.
 * @param value number
 * @param digit digit
 * @returns fixed value string
 */
const roundNumber = (value: number, digit: number) => {
  // This code means "x = 10 ^ digit".
  let x = 1.0;
  for (let i = 0; i < digit; i += 1) {
    x *= 10;
  }

  // Use guard clause.
  if (Math.floor(value) !== value) {
    return `${Math.round(value * x) / x}`;
  }

  let temp = `${value}`;
  if (digit !== 0) {
    temp += '.';
    for (let i = 0; i < digit; i += 1) {
      temp += '0';
    }
  }
  return temp;
};

/**
 * Selector of cloud context.
 * @param cloudContext Value of cloud context.
 * @param setCloudContext Setter method of cloud context.
 */
const CloudContextSelect: React.VFC<{
  cloudContext: string,
  setCloudContext: (s: string) => void
}> = ({ cloudContext, setCloudContext }) => {
  const [cloudContextList, setCloudContextList] = useState<string[]>([]);

  // Set cloud context list.
  useEffect(() => {
    fetch(`/jsonapi/cloud_config/k8s`).then((res) => {
      return res.json();
    }).then((res) => {
      setCloudContextList(res.data.map((record: any) => {
        return record.attributes.cloud_context;
      }));
    });
  }, []);

  // Set default cloud context.
  useEffect(() => {
    if (!cloudContextList.includes(cloudContext) && cloudContextList.length >= 1) {
      setCloudContext(cloudContextList[0]);
    }
  }, [cloudContextList]);

  return <select className="form-select form-control" value={cloudContext}
    onChange={(e) => {
      setCloudContext(e.currentTarget.value);
    }}>
    {cloudContextList.map((c) => {
      return <option value={c} key={c}>{c}</option>
    })}
  </select>;
}

/**
 * Selector of field column.
 * @param cloudContext Value of cloud context.
 * @param columnName Value of field column.
 * @param setColumnName Setter method of field column.
 */
const FieldSelect: React.VFC<{
  cloudContext: string,
  columnKey: string,
  columnName: string,
  setColumnName: (s: string) => void
}> = ({ cloudContext, columnKey, columnName, setColumnName }) => {
  const [dataList, setDataList] = useState<string[]>([]);

  // Set columnData list.
  useEffect(() => {
    let url = `/jsonapi/k8s_${columnKey}/k8s_${columnKey}`;
    if (cloudContext !== '') {
      url += `?cloudContext=${cloudContext}`;
    }
    fetch(url).then((res) => {
      return res.json();
    }).then((res) => {
      setDataList(res.data.map((record: any) => {
        return record.attributes.name;
      }));
    });
  }, [cloudContext]);

  return <select className="form-select form-control" value={columnName}
    onChange={(e) => {
      setColumnName(e.currentTarget.value);
    }}>
    <option value="">- すべて -</option>
    {dataList.map((data) => {
      return <option value={data} key={data}>{data}</option>
    })}
  </select>;
}

/**
 * Label of entity item's count.
 * @param cloudContext Value of cloud context.
 * @param entityTypeId Entity type ID.
 * @param namespace Value of namespace.
 * @param namespaceName Value of namespace.
 * @param itemCount Entity item's count.
 * @param setItemCount Setter of itemCount.
 */
const ItemCountLabel: React.VFC<{
  entityTypeId: string,
  cloudContext: string,
  namespace: string,
  namespaceName: string,
  itemCount: number,
  setItemCount: (n: number) => void
}> = ({ cloudContext, entityTypeId, namespace, namespaceName, itemCount, setItemCount }) => {
  // Set entity item's count.
  useEffect(() => {
    if (cloudContext === '') {
      setItemCount(0);
    } else {
      let url = `/cloud_dashboard/k8s/${cloudContext}/${entityTypeId}/entity/count`;
      if (namespace !== '') {
        url += `?namespace=${namespace}`;
      }
      if (namespaceName !== '') {
        url += `?namespace_name=${namespaceName}`;
      }
      fetch(url).then((res) => {
        return res.json();
      }).then((res) => {
        setItemCount(res.count);
      });
    }
  }, [cloudContext, namespace, namespaceName]);

  return <label className="control-label">Item Count: {itemCount}</label>;
};

/**
 * Label of entity item's count.
 * @param entityTypeId Entity type ID.
 * @param column Entity's name list.
 * @param cloudContext Value of cloud context.
 * @param namespace Value of namespace.
 * @param namespaceName Value of namespace.
 * @param sortInfo Information of soring parameter.
 * @param setSortInfo Setter of sortInfo.
 * @param pageIndex Entity item's page index.
*/
const EntityTable: React.VFC<{
  entityTypeId: string,
  column: EntityColumn[],
  cloudContext: string,
  namespace: string,
  namespaceName: string,
  sortInfo: SortInfo,
  setSortInfo: (s: SortInfo) => void
  pageIndex: number
}> = ({ entityTypeId, column, cloudContext, namespace, namespaceName,
  sortInfo, setSortInfo, pageIndex }) => {
  const [entityList, setEntityList] = useState<K8sEntity[]>([]);

  /**
   * Change sort mode.
   * @param key Sort key.
   */
  const changeSortMode = (key: string) => {
    if (sortInfo.key !== key) {
      setSortInfo({ key, direction: 'ASC' });
      return;
    }
    if (sortInfo.direction === 'ASC') {
      setSortInfo({ key, direction: 'DESC' });
      return;
    }
    setSortInfo({ key: '', direction: 'ASC' });
  };

  /**
   * Convert data for UI.
   */
  const convert = (data: any, type: EntityColumnType) => {
    switch (type) {
      case 'datetime':
        return convertDateString(data);
      case 'memory': {
        if (data >= 1024 * 1024 * 1024) {
          return `${roundNumber(data / (1024 * 1024 * 1024), 2)}Gi`;
        }
        if (data >= 1024 * 1024) {
          return `${roundNumber(data / (1024 * 1024), 2)}Mi`;
        }
        if (data >= 1024) {
          return `${roundNumber(data / (1024), 2)}Ki`;
        }
        return roundNumber(data, 2);
      }
      case 'boolean':
        if (data) {
          return 'TRUE';
        } else {
          return 'FALSE';
        }
      case 'key-value': {
        let log = '';
        for (const record of data) {
          if (log !== '') {
            log += ', ';
          }
          log += `${record['item_key']}:${record['item_value']}`;
        }
        return log;
      }
      default:
        return data;
    }
  }

  // Make URL for getting entities by JSON:API.
  useEffect(() => {
    let url = `/jsonapi/${entityTypeId}/${entityTypeId}`;
    const parameters: { key: string, value: string }[] = [];
    parameters.push({key: 'page[limit]', value: `${ITEMS_PER_PAGE}`});
    parameters.push({key: 'page[offset]', value: `${pageIndex * ITEMS_PER_PAGE}`});
    if (namespace !== '') {
      parameters.push({ key: 'filter[namespace]', value: namespace });
    }
    if (namespaceName !== '') {
      parameters.push({ key: 'filter[namespace_name]', value: namespaceName });
    }
    if (cloudContext !== '') {
      parameters.push({ key: 'filter[cloud_context]', value: cloudContext });
    }
    if (sortInfo.key !== '') {
      parameters.push(
        sortInfo.direction === 'ASC'
          ? { key: 'sort', value: sortInfo.key }
          : { key: 'sort', value: '-' + sortInfo.key }
      );
    }
    if (parameters.length > 0) {
      url += '?' + parameters.map((r) => r.key + '=' + r.value).join('&');
    }

    fetch(url).then((res) => {
      return res.json();
    }).then((res) => {
      setEntityList(res.data);
    });
  }, [namespace, namespaceName, cloudContext, sortInfo, pageIndex]);

  return <table className="table table-hover table-striped sticky-enabled sticky-table">
    <thead>
      <th>
        <input type="checkbox" className="form-checkbox" title="このテーブルのすべての列を選択する" />
      </th>
      {column.map((record) => {
        return <th key={record.name} onClick={() => changeSortMode(record.name)}>
          {record.labelName}
          {sortInfo.key === record.name && sortInfo.direction === 'ASC' ? '↑'
            : sortInfo.key === record.name && sortInfo.direction === 'DESC' ? '↓'
              : ''}
        </th>
      })}
    </thead>
    <tbody>
      {entityList.map((record) => {
        return <tr key={record.id}>
          <td>
            <input className="form-checkbox" type="checkbox" />
          </td>
          {column.map((cRecord) => {
            return <td key={cRecord.name}>
              {convert(record.attributes[cRecord.name], cRecord.type)}
            </td>
          })}
        </tr>;
      })}
    </tbody>
  </table>
};

/**
 * Page selector
 * @param pageIndex Entity item's page index.
 * @param setPageIndex Setter of pageIndex.
 * @param itemCount Entity item's count.
 */
const PageSelector: React.VFC<{
  pageIndex: number,
  setPageIndex: (n: number) => void,
  itemCount: number
}> = ({pageIndex, setPageIndex, itemCount}) => {
  const pageCount = Math.floor(1.0 * (itemCount + ITEMS_PER_PAGE - 1) / ITEMS_PER_PAGE);

  return <nav>
    <ul className="pagination">
      <li>
        <a href="#" aria-label="最初のページへ" onClick={() => {
          setPageIndex(0);
        }}>
          <span aria-hidden="true">«</span>
        </a>
      </li>
      <li>
        <a href="#" aria-label="前のページへ" onClick={() => {
          setPageIndex(Math.max(0, pageIndex - 1));
        }}>
          <span aria-hidden="true">＜</span>
        </a>
      </li>
      <li><a href="#">{pageIndex + 1}</a></li>
      <li className={pageIndex !== pageCount - 1 ? '' : 'disabled'}>
        <a href="#" aria-label="次のページへ" onClick={() => {
          setPageIndex(Math.min(pageIndex + 1, pageCount - 1));
        }}>
          <span aria-hidden="true">＞</span>
        </a>
      </li>
      <li className={itemCount !== 0 && pageIndex !== pageCount - 1 ? '' : 'disabled'}>
        <a href="#" aria-label="最後のページへ" onClick={() => {
          setPageIndex(pageCount - 1);
        }}>
          <span aria-hidden="true">»</span>
        </a>
      </li>
    </ul>
  </nav>;
}

/**
 * Form of K8s entity.
 * @param entityTypeId Entity type ID.
 * @param column Entity's name list.
*/
const K8sEntityForm: React.VFC<{
  entityTypeId: string,
  column: EntityColumn[]
}> = ({ entityTypeId, column }) => {
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
            setCloudContext={setCloudContext} />
        </div>
        {namespaceFlg
          ? <div className="form-group">
            <label className="control-label">Namespace</label>
            <FieldSelect
              cloudContext={cloudContext}
              columnKey="namespace"
              columnName={namespace}
              setColumnName={setNamespace} />
          </div>
          : <></>}
        {namespaceNameFlg
          ? <div className="form-group">
            <label className="control-label">Namespace Name</label>
            <FieldSelect
              cloudContext={cloudContext}
              columnKey="namespace_name"
              columnName={namespaceName}
              setColumnName={setNamespaceName} />
          </div>
          : <></>}
        <div className="form-group">
          <ItemCountLabel
            cloudContext={cloudContext}
            entityTypeId={entityTypeId}
            namespace={namespace}
            namespaceName={namespaceName}
            itemCount={itemCount}
            setItemCount={setItemCount} />
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

export default K8sEntityForm;