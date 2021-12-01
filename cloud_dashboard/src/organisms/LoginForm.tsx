import Form from 'bootstrap3-components/Form';
import useDrupalOAuth2 from 'hooks/drupal_oauth2';
import React from 'react';

/**
 * Login form component.
 */
const LoginForm = () => {
  const { toCallbackUrl } = useDrupalOAuth2();

  return <Form>
    <button type="button"
      className="btn btn-default"
      onClick={toCallbackUrl}>
      Log in
    </button>
  </Form>;

}

export default LoginForm;
