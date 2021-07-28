import React, { useEffect, useState } from 'react';
import { ROUTE_URL } from 'constant';

interface K8sPod {
  drupal_internal__id: number;
  cloud_context: string;
  namespace: string;
  name: string;
  node_name: string;
  status: string;
  restarts: number;
  cpu_usage: string | null;
  memory_usage: string | null;
  created: string;
}

type SortKey = ''
  | 'namespace' | 'name' | 'node_name' | 'status' | 'restarts'
  | 'cpu_usage' | 'memory_usage' | 'created';
type SortDirection = 'ASC' | 'DESC';

interface SortInfo {
  key: SortKey;
  direction: SortDirection;
}

const K8sPodForm: React.VFC = () => {
  const [podList, setPodList] = useState<K8sPod[]>([]);
  const [itemsPerPage] = useState(30);
  const [itemCount, setItemCount] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [namespaceList, setNamespaceList] = useState<string[]>([]);
  const [selectedNamespace, setSelectedNamespace] = useState<string>('');
  const [cloudContextList, setCloudContextList] = useState<string[]>([]);
  const [selectedCloudContext, setSelectedCloudContext] = useState<string>('');
  const [sortInfo, setSortInfo] = useState<SortInfo>({
    key: '', direction: 'ASC'
  });
  const [hasNextFlg, setHasNextFlg] = useState(false);

  const changeSortMode = (key: SortKey) => {
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

  const paddingZero = (data: any, length: number) => {
    return `000000${data}`.slice(-length);
  }

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

  useEffect(() => {
    // If you don't have the access token, redirect route URL.
    const accessToken = window.localStorage.getItem('accessToken');
    const expiresDatetime = window.localStorage.getItem('expiresDatetime');
    if (accessToken === null || expiresDatetime == null) {
      window.location.href = ROUTE_URL;
      return;
    }

    // If the access token has expired, redirect route URL.
    const now = (new Date()).getTime();
    if (now > parseInt(expiresDatetime, 10)) {
      window.location.href = ROUTE_URL;
    }
  }, []);

  useEffect(() => {
    // make URL for getting pod entities by JSON:API
    let url = `/jsonapi/k8s_pod/k8s_pod?page[limit]=${itemsPerPage}&page[offset]=${pageIndex * itemsPerPage}`;
    if (selectedNamespace !== '') {
      url += `&filter[namespace]=${selectedNamespace}`;
    }
    if (selectedCloudContext !== '') {
      url += `&filter[cloud_context]=${selectedCloudContext}`;
    }
    if (sortInfo.key !== '') {
      if (sortInfo.direction === 'ASC') {
        url += `&sort=${sortInfo.key}`;
      } else {
        url += `&sort=-${sortInfo.key}`;
      }
    }
    fetch(url).then((res) => {
      return res.json();
    }).then((res) => {
      // set next link flg
      if (res.links.next) {
        setHasNextFlg(true);
      } else {
        setHasNextFlg(false);
      }
      // set pod's data
      setPodList(res.data.map((record: any) => {
        return {
          drupal_internal__id: record.attributes.drupal_internal__id,
          cloud_context: record.attributes.cloud_context,
          namespace: record.attributes.namespace,
          name: record.attributes.name,
          node_name: record.attributes.node_name,
          status: record.attributes.status,
          restarts: record.attributes.restarts,
          cpu_usage: record.attributes.cpu_usage,
          memory_usage: record.attributes.memory_usage,
          created: convertDateString(record.attributes.created),
        };
      }));
    });
  }, [itemsPerPage, pageIndex, selectedNamespace, selectedCloudContext, sortInfo]);

  // set namespace list
  useEffect(() => {
    fetch(`/jsonapi/k8s_namespace/k8s_namespace`).then((res) => {
      return res.json();
    }).then((res) => {
      setNamespaceList(res.data.map((record: any) => {
        return record.attributes.name;
      }));
    });
  }, []);

  // set cloud_context list
  useEffect(() => {
    fetch(`/jsonapi/cloud_config/k8s`).then((res) => {
      return res.json();
    }).then((res) => {
      setCloudContextList(res.data.map((record: any) => {
        return record.attributes.cloud_context;
      }));
    });
  }, []);

  // set item count
  useEffect(() => {
    // make URL
    let url = `/cloud_dashboard/k8s/${selectedCloudContext}/k8s_pod/entity/count`;
    if (selectedNamespace !== '') {
      url += `?namespace=${selectedNamespace}`;
    }
    // refresh item count
    fetch(url).then((res) => {
      return res.json();
    }).then((res) => {
      setItemCount(res.count);
    });
  }, [selectedNamespace, selectedCloudContext]);

  useEffect(() => {
    // set default cloud_context
    if (selectedCloudContext === '' || !cloudContextList.includes(selectedCloudContext)) {
      if (cloudContextList.length >= 1) {
        setSelectedCloudContext(cloudContextList[0]);
      }
    }
  }, [cloudContextList]);

  return <div className="row" style={{ marginTop: '2rem' }}>
    <div className="col">
      <form>
        <div className="form-group">
          <label className="control-label">Cloud context</label>
          <select className="form-select form-control" value={selectedCloudContext}
            onChange={(e) => {
              setSelectedCloudContext(e.currentTarget.value);
            }}>
            {cloudContextList.map((cloudContext) => {
              return <option value={cloudContext} key={cloudContext}>{cloudContext}</option>
            })}
          </select>
        </div>
        <div className="form-group">
          <label className="control-label">Namespace</label>
          <select className="form-select form-control" value={selectedNamespace}
            onChange={(e) => {
              setSelectedNamespace(e.currentTarget.value);
            }}>
            <option value="">- すべて -</option>
            {namespaceList.map((namespace) => {
              return <option value={namespace} key={namespace}>{namespace}</option>
            })}
          </select>
        </div>
        <div className="form-group">
          <label className="control-label">Item Count: {itemCount}</label>
        </div>
        <div className="table-responsive">
          <table className="table table-hover table-striped sticky-enabled sticky-table">
            <thead>
              <th>
                <input type="checkbox" className="form-checkbox" title="このテーブルのすべての列を選択する" />
              </th>
              <th onClick={() => changeSortMode('namespace')}>Namespace
                {sortInfo.key === 'namespace' && sortInfo.direction === 'ASC' ? '↑'
                  : sortInfo.key === 'namespace' && sortInfo.direction === 'DESC' ? '↓'
                    : ''}
              </th>
              <th onClick={() => changeSortMode('name')}>Name
                {sortInfo.key === 'name' && sortInfo.direction === 'ASC' ? '↑'
                  : sortInfo.key === 'name' && sortInfo.direction === 'DESC' ? '↓'
                    : ''}
              </th>
              <th onClick={() => changeSortMode('node_name')}>Node
                {sortInfo.key === 'node_name' && sortInfo.direction === 'ASC' ? '↑'
                  : sortInfo.key === 'node_name' && sortInfo.direction === 'DESC' ? '↓'
                    : ''}
              </th>
              <th onClick={() => changeSortMode('status')}>State
                {sortInfo.key === 'status' && sortInfo.direction === 'ASC' ? '↑'
                  : sortInfo.key === 'status' && sortInfo.direction === 'DESC' ? '↓'
                    : ''}
              </th>
              <th onClick={() => changeSortMode('restarts')}>Restarts
                {sortInfo.key === 'restarts' && sortInfo.direction === 'ASC' ? '↑'
                  : sortInfo.key === 'restarts' && sortInfo.direction === 'DESC' ? '↓'
                    : ''}
              </th>
              <th onClick={() => changeSortMode('cpu_usage')}>CPU (Usage)
                {sortInfo.key === 'cpu_usage' && sortInfo.direction === 'ASC' ? '↑'
                  : sortInfo.key === 'cpu_usage' && sortInfo.direction === 'DESC' ? '↓'
                    : ''}
              </th>
              <th onClick={() => changeSortMode('memory_usage')}>Memory (Usage)
                {sortInfo.key === 'memory_usage' && sortInfo.direction === 'ASC' ? '↑'
                  : sortInfo.key === 'memory_usage' && sortInfo.direction === 'DESC' ? '↓'
                    : ''}
              </th>
              <th onClick={() => changeSortMode('created')}>Created
                {sortInfo.key === 'created' && sortInfo.direction === 'ASC' ? '↑'
                  : sortInfo.key === 'created' && sortInfo.direction === 'DESC' ? '↓'
                    : ''}
              </th>
            </thead>
            <tbody>
              {podList.map((pod) => {
                return <tr key={pod.drupal_internal__id}>
                  <td>
                    <input className="form-checkbox" type="checkbox" />
                  </td>
                  <td>{pod.namespace}</td>
                  <td>
                    <a href={`/clouds/k8s/${pod.cloud_context}/pod/${pod.drupal_internal__id}`}
                      target="_blank" rel="noopener noreferrer">
                      {pod.name}
                    </a>
                  </td>
                  <td>{pod.node_name}</td>
                  <td>{pod.status}</td>
                  <td>{pod.restarts}</td>
                  <td>{pod.cpu_usage}</td>
                  <td>{pod.memory_usage}</td>
                  <td>{pod.created}</td>
                </tr>;
              })}
            </tbody>
          </table>
        </div>
        <nav>
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
            <li className={hasNextFlg ? '' : 'disabled'}>
              <a href="#" aria-label="次のページへ" onClick={() => {
                if (hasNextFlg) {
                  setPageIndex(pageIndex + 1);
                }
              }}>
                <span aria-hidden="true">＞</span>
              </a>
            </li>
            <li className={itemCount !== 0 && hasNextFlg ? '' : 'disabled'}>
              <a href="#" aria-label="最後のページへ" onClick={() => {
                if (itemCount !== 0 && hasNextFlg) {
                  const pageCount = Math.floor(1.0 * (itemCount + itemsPerPage - 1) / itemsPerPage);
                  setPageIndex(pageCount - 1);
                }
              }}>
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav>
      </form>
    </div>
  </div>;
}

export default K8sPodForm;
