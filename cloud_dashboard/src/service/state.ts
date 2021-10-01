import { DEFAULT_CLOUD_CONTEXTS } from "constant";
import CloudContext from "model/CloudContext";
import CloudServiceProvider from "model/CloudServiceProvider";
import { createContext, useState } from "react";

type Action = {
  type: 'setCloudContext',
  message: CloudContext
} | {
  type: 'setCloudServiceProvider',
  message: CloudServiceProvider
};

interface AppState {
  cloudContext: CloudContext;
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
    dispatch
  };
};

export const AppContext = createContext<AppState>({
  cloudContext: DEFAULT_CLOUD_CONTEXTS[0],
  dispatch: () => {}
});
