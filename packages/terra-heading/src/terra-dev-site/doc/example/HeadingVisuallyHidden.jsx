import React from 'react';
import { Link } from 'react-router-dom';
import Heading from 'terra-heading';

const HeadingVisuallyHidden = () => (
  <div>
    The `isVisuallyHidden` prop can be used to hide the content visually, yet provide the content to screen readers.
    More info on this approach can be found here:
    {' '}
    <Link to="http://a11yproject.com/posts/how-to-hide-content/">http://a11yproject.com/posts/how-to-hide-content/</Link>
    <p>
      The example below includes a
      {' '}
      <code>&lt;Heading /&gt;</code>
      {' '}
      component using the
      <code>isVisuallyHidden</code>
      {' '}
      prop.
    </p>
    <Heading level={3} isVisuallyHidden>This text is not visible, however it is accessible to screen readers.</Heading>
  </div>
);

export default HeadingVisuallyHidden;
