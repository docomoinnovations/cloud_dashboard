import { DEFAULT_CLOUD_CONTEXTS } from 'constant';
import CloudContext from 'model/CloudContext';
import CloudServiceProvider from 'model/CloudServiceProvider';
import { createContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useDrupalJsonApi from 'hooks/drupal_jsonapi';

type Action = {
  type: 'setCloudContext',
  message: CloudContext
} | {
  type: 'setLanguage',
  message: string
};

interface AppState {
  cloudContext: CloudContext;
  cloudContextList: CloudContext[];
  dispatch: (action: Action) => void;
}

/**
 * Load Cloud Context.
 *
 * @returns Cloud context.
 */
const loadCloudContext = (): CloudContext => {
  // Load Cloud Context.
  const cloudContextJson = localStorage.getItem('cloudContext');
  return cloudContextJson !== null
    ? JSON.parse(cloudContextJson)
    : DEFAULT_CLOUD_CONTEXTS[0];
};

export const useAppState = (): AppState => {
  const { getEntityListAll } = useDrupalJsonApi();
  const [cloudContext, setCloudContext] = useState<CloudContext>(loadCloudContext());
  const [cloudContextList, setCloudContextList] = useState<CloudContext[]>([...DEFAULT_CLOUD_CONTEXTS]);
  const { i18n } = useTranslation();

  useEffect(() => {
    const languageName = window.localStorage.getItem('languageName');
    if (languageName !== null) {
      i18n.changeLanguage(languageName);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Set cloud context list.
  useEffect(() => {
    const init = async () => {
      const cloudServiceProviderList = ['aws_cloud', 'k8s'];
      let newCloudContextList = [...DEFAULT_CLOUD_CONTEXTS];
      for (const cloudServiceProvider of cloudServiceProviderList) {
        const data = (await getEntityListAll('cloud_config', {}, cloudServiceProvider))
          .map((record: any) => {
          return {
            cloudServiceProvider: cloudServiceProvider as CloudServiceProvider,
            name: record.attributes.cloud_context,
            labelName: record.attributes.name
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatch = (action: Action) => {
    switch(action.type) {
      case 'setCloudContext': {
        // Save new cloud Context.
        localStorage.setItem('cloudContext', JSON.stringify(action.message));
        setCloudContext(action.message);
        break;
      }
      case 'setLanguage':
        i18n.changeLanguage(action.message);
        window.localStorage.setItem('languageName', action.message);
        break;
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
