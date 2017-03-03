import React from 'react';

import SingleSelectList from '../../../lib/SingleSelectList';

export default () => <SingleSelectList onChange={event => event.delegateTarget}><SingleSelectList.Item /><SingleSelectList.Item /><SingleSelectList.Item /></SingleSelectList>;
