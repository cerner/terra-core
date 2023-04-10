import React from 'react';
import Text from 'terra-text';
import moment from 'moment';

const dateVar = moment("01-10-2022").format("MM/DD/YYYY");

export default () => <Text id="dateTest">
    {dateVar}
</Text>;
