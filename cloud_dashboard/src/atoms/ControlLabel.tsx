import React from 'react';

/**
 * Label parts in form.
 * @param children Children Node.
 */
const ControlLabel = ({children}: { children: React.ReactNode }) => {

  return <label className="control-label">{children}</label>;

}

export default ControlLabel;
