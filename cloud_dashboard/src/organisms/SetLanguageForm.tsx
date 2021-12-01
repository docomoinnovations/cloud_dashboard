import Form from 'bootstrap3-components/Form';
import { LANGUAGE_LIST } from 'i18n';
import FormButtonGroup from 'molecules/FormButtonGroup';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AppContext } from 'service/state';

/**
 * Form for setting language.
 */
const SetLanguageForm = () => {

  const { dispatch } = useContext(AppContext);
  const { t, i18n } = useTranslation();

  return <Form>
    <Form.Group style={{ marginTop: '2rem' }}>
      <Form.Label>{t('Language')}</Form.Label><br />
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
    </Form.Group>
  </Form>;

}

export default SetLanguageForm;
