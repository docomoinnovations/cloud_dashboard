import React, { useContext } from 'react';
import ControlLabel from 'atoms/ControlLabel';
import { LANGUAGE_LIST } from 'i18n';
import FormButtonGroup from 'molecules/FormButtonGroup';
import { useTranslation } from 'react-i18next';
import { AppContext } from 'service/state';

const SetLanguageForm = () => {
  const { dispatch } = useContext(AppContext);
  const { t, i18n } = useTranslation();

  return <form>
    <div className="form-group" style={{ marginTop: '2rem' }}>
      <ControlLabel>{t('Language')}</ControlLabel><br />
      <FormButtonGroup buttonList={
        LANGUAGE_LIST.map((language) => {
          return {
            disabled: i18n.language === language.key,
            onClick: () => {
              dispatch({ type: 'setLanguage', message: language.key });
            },
            value: language.value
          };
        })
      } />
    </div>
  </form>;
}

export default SetLanguageForm;
