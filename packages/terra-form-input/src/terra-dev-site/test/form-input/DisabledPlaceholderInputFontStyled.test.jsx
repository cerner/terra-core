import React from 'react';

import Input from '../../../Input';

const styles = {
  fontStyle: 'italic',
};

const DisabledPlaceholderInput = () => <Input aria-label="disabled form placeholder input" disabled id="form-input-disabled-placeholder" placeholder="placeholder" style={styles} />;

export default DisabledPlaceholderInput;
