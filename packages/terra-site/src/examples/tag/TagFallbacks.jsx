import React from 'react';
import IconTag from 'terra-icon/lib/icon/IconTag';
import Tag from 'terra-tag';
import Alert from 'terra-alert';

const alertTitle = 'Not Reccomended Usage.';
const alertText = 'These styles are provided for when this compoment is missing recomended elements for best practice use.';

const TagHeadingMarginStyle = {
  marginTop: '200px',
};

const TagFallbacks = () => (
  <div>
    <div className="markdown-body" style={TagHeadingMarginStyle}>
      <h2 id="fallbacks-header">Fallback Styles</h2>
    </div>
    <Alert type={Alert.Opts.Types.INFO} title={alertTitle}>{alertText}</Alert>
    <br />
    <h3 id="fallbacks">Tag with no onClick or href</h3>
    <Tag text="No OnClick/HREF Tag" />
    <Tag icon={<IconTag />} text="Icon &amp; Text - No OnClick/HREF Tag" />
  </div>
);

export default TagFallbacks;
