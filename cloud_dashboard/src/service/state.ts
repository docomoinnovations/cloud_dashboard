import { DEFAULT_CLOUD_CONTEXTS } from "constant";
import CloudContext from "model/CloudContext";
import CloudServiceProvider from "model/CloudServiceProvider";
import { createContext, useEffect, useState } from "react";
import HttpService from "service/http";

type Action = {
  type: 'setCloudContext',
  message: CloudContext
} | {
  type: 'setCloudServiceProvider',
  message: CloudServiceProvider
};

interface AppState {
  cloudContext: CloudContext;
  cloudContextList: CloudContext[];
  dispatch: (action: Action) => void;
}

const loadCloudContext = () => {
  // Load Cloud Context.
  const temp = localStorage.getItem('cloudContext');
  if (temp !== null) {
    const cloudContextTemp: CloudContext = JSON.parse(temp);
    return cloudContextTemp;
  }
  return DEFAULT_CLOUD_CONTEXTS[0];
};

export const useAppState = (): AppState => {
  const [cloudContext, setCloudContext] = useState<CloudContext>(loadCloudContext());
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

  const dispatch = (action: Action) => {
    switch(action.type) {
      case 'setCloudContext': {
        // Save new cloud Context.
        localStorage.setItem('cloudContext', JSON.stringify(action.message));
        setCloudContext(action.message);
        break;
      }
    }
  };

  return {
    cloudContext,
    cloudContextList,
    dispatch
  };
};

export const AppContext = createContext<AppState>({
  cloudContext: DEFAULT_CLOUD_CONTEXTS[0],
  cloudContextList: [],
  dispatch: () => {}
});
