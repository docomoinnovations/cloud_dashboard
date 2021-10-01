import CloudServiceProvider from 'model/CloudServiceProvider';
import React, { useEffect, useState } from 'react';
import HttpService from 'service/http';

/**
 * Selector of cloud context.
 * @param cloudContext Value of cloud context.
 * @param setCloudContext Setter method of cloud context.
 * @param cloudServiceProvider Cloud Service Provider.
 */
const CloudContextSelect: React.VFC<{
  cloudContext: string,
  setCloudContext: (s: string) => void,
  cloudServiceProvider: CloudServiceProvider
}> = ({ cloudContext, setCloudContext, cloudServiceProvider }) => {
  const [cloudContextList, setCloudContextList] = useState<string[]>([]);

  // Set cloud context list.
  useEffect(() => {
    HttpService.getInstance().getJson<{data: any}>(
      `/jsonapi/cloud_config/${cloudServiceProvider}`
    ).then((res) => {
      const cloudContextListTemp = res.data.map((record: any) => {
        return record.attributes.cloud_context;
      });
      setCloudContextList(cloudContextListTemp);
      if (!cloudContextListTemp.includes(cloudContext) && cloudContextListTemp.length >= 1) {
        setCloudContext(cloudContextListTemp[0]);
      }
    });
  }, []);

  return <select className="form-select form-control" value={cloudContext}
    onChange={(e) => {
      setCloudContext(e.currentTarget.value);
    }}>
    {cloudContextList.map((c) => {
      return <option value={c} key={c}>{c}</option>
    })}
  </select>;
}

export default CloudContextSelect;
