import Button from 'bootstrap3-components/Button';
import Form from 'bootstrap3-components/Form';
import useDrupalOAuth2 from 'hooks/drupal_oauth2';
import React from 'react';

/**
 * Login form component.
 */
const LoginForm = () => {
  const { toCallbackUrl } = useDrupalOAuth2();

  return <Form>
    <Button onClick={toCallbackUrl}>Log in</Button>
  </Form>;

}

export default LoginForm;
