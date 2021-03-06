import Form from 'bootstrap3-components/Form';
import useDrupalOAuth2 from 'hooks/drupal_oauth2';
import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';

/**
 * Callback form for Authorization Code Grant.
 */
const CallbackForm = () => {

  const { getTokenByAuthorizationCodeGrant } = useDrupalOAuth2();

  useEffect(() => {
    getTokenByAuthorizationCodeGrant();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Form>
    <div style={{ display: 'flex' }}>
      <Loader
        type="Grid"
        color="#00BFFF"
        height="3rem"
        width="3rem"
      />
      <span style={{
        fontSize: '2rem',
        marginLeft: '2rem'
      }}>Orchestrating clouds...</span>
    </div>
  </Form>;

}

export default CallbackForm;
