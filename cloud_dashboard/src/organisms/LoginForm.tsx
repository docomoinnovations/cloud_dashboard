import useDrupalOAuth2 from 'hooks/drupal_oauth2';
import React from 'react';

/**
 * Login form component.
 */
const LoginForm = () => {
  const { toCallbackUrl } = useDrupalOAuth2();

  return <form>
    <button type="button"
      className="btn btn-default"
      onClick={toCallbackUrl}>
        Log in
    </button>
  </form>;

}

export default LoginForm;
