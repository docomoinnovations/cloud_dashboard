import CloudContext from 'model/CloudContext';
import CloudServiceProvider from 'model/CloudServiceProvider';
import React, { useContext } from 'react';
import { AppContext } from 'service/state';

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
  const { cloudContextList } = useContext(AppContext);

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
