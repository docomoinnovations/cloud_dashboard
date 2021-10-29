import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Label parts in form.
 *
 * @param children Children Node.
 */
const FormSelect = ({value, setvalue, dataList}: {
    value: string,
    setvalue: (s: string) => void,
    dataList: string[]
  }) => {

  const { t } = useTranslation();

  return <select className="form-select form-control" value={value}
    onChange={(e) => {
      setvalue(e.currentTarget.value);
    }}>
    <option value="">- {t('All')} -</option>
    {dataList.map((data) => {
      return <option value={data} key={data}>{data}</option>
    })}
  </select>;

}

export default FormSelect;
