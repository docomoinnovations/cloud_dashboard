import React, { useEffect, useState } from 'react';
import { ROUTE_URL } from 'constant';

interface AwsCloudInstance {
  drupal_internal__id: number;
  cloud_context: string;
  name: string;
  public_ip: string | null;
  instance_state: string;
  instance_type: string;
  availability_zone: string;
  cost: number | null;
  created: string;
}

type SortKey = ''
  | 'name' | 'public_ip' | 'instance_state' | 'instance_type'
  | 'availability_zone' | 'cost' | 'created';
type SortDirection = 'ASC' | 'DESC';

interface SortInfo {
  key: SortKey;
  direction: SortDirection;
}

const AwsCloudInstanceForm: React.VFC = () => {
  const [instanceList, setInstanceList] = useState<AwsCloudInstance[]>([]);
  const [itemsPerPage] = useState(30);
  const [pageIndex, setPageIndex] = useState(0);
  const [cloudContextList, setCloudContextList] = useState<string[]>([]);
  const [selectedCloudContext, setSelectedCloudContext] = useState<string>('');
  const [sortInfo, setSortInfo] = useState<SortInfo>({
    key: '', direction: 'ASC'
  });
  const [hasNextFlg, setHasNextFlg] = useState(false);

  const changeSortMode = (key: SortKey) => {
    if (sortInfo.key !== key) {
      setSortInfo({key, direction: 'ASC'});
      return;
    }
    if (sortInfo.direction === 'ASC') {
      setSortInfo({key, direction: 'DESC'});
      return;
    }
    setSortInfo({key: '', direction: 'ASC'});
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
    let url = `/jsonapi/aws_cloud_instance/aws_cloud_instance?page[limit]=${itemsPerPage}&page[offset]=${pageIndex * itemsPerPage}`;
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
      setInstanceList(res.data.map((record: any) => {
        return {
          drupal_internal__id: record.attributes.drupal_internal__id,
          cloud_context: record.attributes.cloud_context,
          name: record.attributes.name,
          public_ip: record.attributes.public_ip,
          instance_state: record.attributes.instance_state,
          instance_type: record.attributes.instance_type,
          availability_zone: record.attributes.availability_zone,
          cost: record.attributes.cost,
          created: convertDateString(record.attributes.created),
        };
      }));
    });
  }, [itemsPerPage, pageIndex, selectedCloudContext, sortInfo]);

  // set cloud_context list
  useEffect(() => {
    fetch(`/jsonapi/cloud_config/aws_cloud`).then((res) => {
      return res.json();
    }).then((res) => {
      setCloudContextList(res.data.map((record: any) => {
        return record.attributes.cloud_context;
      }));
    });
  }, []);

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
        <div className="table-responsive">
          <table className="table table-hover table-striped sticky-enabled sticky-table">
            <thead>
              <th>
                <input type="checkbox" className="form-checkbox" title="このテーブルのすべての列を選択する" />
              </th>
              <th onClick={() => changeSortMode('name')}>Name
                {sortInfo.key === 'name' && sortInfo.direction === 'ASC' ? '↑'
                  : sortInfo.key === 'name' && sortInfo.direction === 'DESC' ? '↓'
                    : ''}
              </th>
              <th onClick={() => changeSortMode('public_ip')}>Public IP
                {sortInfo.key === 'public_ip' && sortInfo.direction === 'ASC' ? '↑'
                  : sortInfo.key === 'public_ip' && sortInfo.direction === 'DESC' ? '↓'
                    : ''}
              </th>
              <th onClick={() => changeSortMode('instance_state')}>Instance State
                {sortInfo.key === 'instance_state' && sortInfo.direction === 'ASC' ? '↑'
                  : sortInfo.key === 'instance_state' && sortInfo.direction === 'DESC' ? '↓'
                    : ''}
              </th>
              <th onClick={() => changeSortMode('instance_type')}>Instance Type
                {sortInfo.key === 'instance_type' && sortInfo.direction === 'ASC' ? '↑'
                  : sortInfo.key === 'instance_type' && sortInfo.direction === 'DESC' ? '↓'
                    : ''}
              </th>
              <th onClick={() => changeSortMode('availability_zone')}>Availability Zone
                {sortInfo.key === 'availability_zone' && sortInfo.direction === 'ASC' ? '↑'
                  : sortInfo.key === 'availability_zone' && sortInfo.direction === 'DESC' ? '↓'
                    : ''}
              </th>
              <th onClick={() => changeSortMode('cost')}>Cost
                {sortInfo.key === 'cost' && sortInfo.direction === 'ASC' ? '↑'
                  : sortInfo.key === 'cost' && sortInfo.direction === 'DESC' ? '↓'
                    : ''}
              </th>
              <th onClick={() => changeSortMode('created')}>Created
                {sortInfo.key === 'created' && sortInfo.direction === 'ASC' ? '↑'
                  : sortInfo.key === 'created' && sortInfo.direction === 'DESC' ? '↓'
                    : ''}
              </th>
            </thead>
            <tbody>
              {instanceList.map((instance) => {
                return <tr key={instance.drupal_internal__id}>
                  <td>
                    <input className="form-checkbox" type="checkbox" />
                  </td>
                  <td>
                    <a href={`/clouds/aws_cloud/${instance.cloud_context}/instance/${instance.drupal_internal__id}`}
                      target="_blank" rel="noopener noreferrer">
                      {instance.name}
                    </a>
                  </td>
                  <td>{instance.public_ip}</td>
                  <td>{instance.instance_state}</td>
                  <td>{instance.instance_type}</td>
                  <td>{instance.availability_zone}</td>
                  <td>{instance.cost !== null ? `$${instance.cost}` : ''}</td>
                  <td>{instance.created}</td>
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
          </ul>
        </nav>
      </form>
    </div>
  </div>;
}

export default AwsCloudInstanceForm;
