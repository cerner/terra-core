import React from 'react';
import Text from 'terra-text';
import moment from 'moment';

const timeVar = moment("10:22:30", "hh:mm:ss").format("hh:mm:ss");

export default () => <Text id="timeTest">
    {timeVar}
</Text>;
