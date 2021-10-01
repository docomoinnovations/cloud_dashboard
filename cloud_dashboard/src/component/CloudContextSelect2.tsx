import { DEFAULT_CLOUD_CONTEXTS } from 'constant';
import CloudContext from 'model/CloudContext';
import CloudServiceProvider from 'model/CloudServiceProvider';
import React, { useEffect, useState } from 'react';
import HttpService from 'service/http';

/**
 * Selector of cloud context.
 * @param cloudContext Value of cloud context.
 * @param setCloudContext Setter method of cloud context.
 * @param cloudServiceProvider Cloud Service Provider.
 */
const CloudContextSelect2: React.VFC<{
  cloudContext: CloudContext,
  setCloudContext: (s: CloudContext) => void
}> = ({ cloudContext, setCloudContext }) => {
  const [cloudContextList, setCloudContextList] = useState<CloudContext[]>([...DEFAULT_CLOUD_CONTEXTS]);

  // Set cloud context list.
  useEffect(() => {
    const init = async () => {
      const cloudServiceProviderList = ['aws_cloud', 'k8s'];
      let newCloudContextList = [...DEFAULT_CLOUD_CONTEXTS];
      for (const cloudServiceProvider of cloudServiceProviderList) {
        const data = (await HttpService.getInstance().getJson<{ data: any[] }>(
          `/jsonapi/cloud_config/${cloudServiceProvider}`
        )).data.map((record: any) => {
          return {
            cloudServiceProvider: cloudServiceProvider as CloudServiceProvider,
            name: record.attributes.cloud_context
          };
        });
        newCloudContextList = [...newCloudContextList, ...data];
      }
      setCloudContextList(newCloudContextList);

      // Update Cloud Context.
      if (newCloudContextList.filter((r) => {
        return r.cloudServiceProvider === cloudContext.cloudServiceProvider
          && r.name === cloudContext.name;
      }).length === 0) {
        setCloudContext(DEFAULT_CLOUD_CONTEXTS[0]);
      }
    };
    init();
  }, []);

  return <select
    className="form-select form-control"
    value={`${cloudContext.cloudServiceProvider} ${cloudContext.name}`}
    onChange={(e) => {
      const temp = e.currentTarget.value.split(' ');
      const temp2 = {
        cloudServiceProvider: temp[0] as CloudServiceProvider,
        name: temp[1]
      };
      setCloudContext(temp2);
    }}>
    {cloudContextList.map((c) => {
      const key = `${c.cloudServiceProvider} ${c.name}`;
      const label = `[${c.cloudServiceProvider}] ${c.name}`;
      return <option
        value={key}
        key={key}
      >{label}</option>
    })}
  </select>;
}

export default CloudContextSelect2;
