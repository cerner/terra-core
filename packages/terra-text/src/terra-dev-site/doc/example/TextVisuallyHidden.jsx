import React from 'react';
import { Link } from 'react-router-dom';
import Text from 'terra-text';

const TextVisuallyHidden = () => (
  <div>
    <p>
      The `isVisuallyHidden` prop can be used to hide the content visually, yet provide the content to screen readers.
      More info on this approach can be found here:
      {' '}
      <Link to="http://a11yproject.com/posts/how-to-hide-content/">http://a11yproject.com/posts/how-to-hide-content/</Link>
    </p>
    <p>
The example below includes a
      <code> &lt;Text /&gt;</code>
      {' '}
component using the
      <code> isVisuallyHidden</code>
      {' '}
prop.
    </p>
    <Text isVisuallyHidden>This text is not visible, however it is accessible to screen readers.</Text>
  </div>
);

export default TextVisuallyHidden;
