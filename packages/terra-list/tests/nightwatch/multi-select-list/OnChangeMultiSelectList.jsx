import React from 'react';

import MultiSelectList from '../../../lib/MultiSelectList';

export default () => <MultiSelectList onChange={event => event.delegateTarget}><MultiSelectList.Item /><MultiSelectList.Item /><MultiSelectList.Item /></MultiSelectList>;
