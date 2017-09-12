import React from 'react';
import Table from '../../../lib/Table';

const MultipleRowSelectableTableMultipleRows = () => (
  <Table isStriped={false}>
    <Table.Header>
      <Table.HeaderCell content={'Name'} key={'NAME'} minWidth={'small'} />
      <Table.HeaderCell content={'Preselected?'} key={'PRESELECTED'} minWidth={'medium'} />
      <Table.HeaderCell content={'Is Selection Changeable'} key={'IS_SELECTABLE'} minWidth={'large'} />
    </Table.Header>
    <Table.MultipleSelectableRows>
      <Table.Row key={'PERSON_0'}>
        <Table.Cell content="John Smith" key="NAME" />
        <Table.Cell content="undefined" key="PRESELECTED" />
        <Table.Cell content="undefined" key="IS_SELECTABLE" />
      </Table.Row>
      <Table.Row key={'PERSON_1'} isSelectable={false}>
        <Table.Cell content="John Smith" key="NAME" />
        <Table.Cell content="undefined" key="PRESELECTED" />
        <Table.Cell content="false" key="IS_SELECTABLE" />
      </Table.Row>
      <Table.Row key={'PERSON_2'} isSelectable>
        <Table.Cell content="Dave Smith" key="NAME" />
        <Table.Cell content="undefined" key="PRESELECTED" />
        <Table.Cell content="true" key="IS_SELECTABLE" />
      </Table.Row>
      <Table.Row key={'PERSON_3'} isSelected={false}>
        <Table.Cell content="Jim Smith" key="NAME" />
        <Table.Cell content="false" key="PRESELECTED" />
        <Table.Cell content="undefined" key="IS_SELECTABLE" />
      </Table.Row>
      <Table.Row key={'PERSON_4'} isSelected>
        <Table.Cell content="Ann Smith" key="NAME" />
        <Table.Cell content="true" key="PRESELECTED" />
        <Table.Cell content="undefined" key="IS_SELECTABLE" />
      </Table.Row>
      <Table.Row key={'PERSON_5'} isSelected={false} isSelectable={false}>
        <Table.Cell content="Jane Smith" key="NAME" />
        <Table.Cell content="false" key="PRESELECTED" />
        <Table.Cell content="false" key="IS_SELECTABLE" />
      </Table.Row>
      <Table.Row key={'PERSON_6'} isSelected={false} isSelectable>
        <Table.Cell content="Jack Smith" key="NAME" />
        <Table.Cell content="false" key="PRESELECTED" />
        <Table.Cell content="true" key="IS_SELECTABLE" />
      </Table.Row>
      <Table.Row key={'PERSON_7'} isSelected isSelectable={false}>
        <Table.Cell content="Joe Smith" key="NAME" />
        <Table.Cell content="true" key="PRESELECTED" />
        <Table.Cell content="false" key="IS_SELECTABLE" />
      </Table.Row>
      <Table.Row key={'PERSON_8'} isSelected isSelectable>
        <Table.Cell content="Jill Smith" key="NAME" />
        <Table.Cell content="true" key="PRESELECTED" />
        <Table.Cell content="true" key="IS_SELECTABLE" />
      </Table.Row>
    </Table.MultipleSelectableRows>
  </Table>
);

export default MultipleRowSelectableTableMultipleRows;
