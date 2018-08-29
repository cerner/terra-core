import React from 'react';

import Input from '../../../Input';

const styles = {
  fontStyle: 'italic',
};

const PlaceholderInput = () => <Input aria-label="placeholder form input" id="form-input-placeholder" placeholder="placeholder" style={styles} />;

export default PlaceholderInput;
