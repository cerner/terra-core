import React from 'react';
import Select from '../../../Select';

const DefaultValueZero = () => (
<Select defaultValue={0} id="defaultValueZero" >
    <Select.Option value={0} display='Display 1' />
    <Select.Option value={1} display='Display 2' />
    <Select.Option value={2} display='Display 3' />
</Select >
);

export default DefaultValueZero;