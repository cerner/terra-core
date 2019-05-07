import React from 'react';
import IconCaretUp from 'terra-icon/lib/icon/IconCaretUp';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import IconSuccess from 'terra-icon/lib/icon/IconSuccess';
import IconTag from 'terra-icon/lib/icon/IconTag';
import ActionHeader from '../../../../../terra-action-header/src/ActionHeader';
import Button from '../../../Button';
import ButtonGroup from '../../../../../terra-button-group/src/ButtonGroup';
import Dialog from '../../../../../terra-dialog/src/Dialog';
import SearchField from '../../../../../terra-search-field/src/SearchField';
import SectionHeader from '../../../../../terra-section-header/src/SectionHeader';
import ShowHide from '../../../../../terra-show-hide/src/ShowHide';
import Tag from '../../../../../terra-tag/src/Tag';
import ToggleButton from '../../../../../terra-toggle-button/src/ToggleButton';
import ToggleSectionHeader from '../../../../../terra-toggle-section-header';

const buttonStyle = { margin: '5px' };
const cellStyle = { padding: '0.5rem' };

export default () => (
  <div style={{ paddingLeft: '1em', width: '100%' }}>
    <div style={{ float: 'left', width: '20%' }}>
      <h4>Button:</h4>
      <Button icon={<IconEdit />} text="icon" style={buttonStyle} />
      <h4>Action Header:</h4>
      <ActionHeader
        title="tester"
        onClose={() => alert('You clicked close!')}
        onBack={() => alert('You clicked back!')}
      />
      <h4>Button Group:</h4>
      <ButtonGroup>
        <ButtonGroup.Button text="Up" icon={<IconCaretUp />} key="upIcon" />
        <ButtonGroup.Button text="Down" icon={<IconCaretDown />} key="downIcon" />
      </ButtonGroup>
      <h4>Dialog:</h4>
      <Dialog
        header="le header"
        onClose={() => alert('Close')}
      />
      <h4>Icon:</h4>
      <tbody>
        <tr style={{ backgroundColor: '#EEEEEE' }}>
          <td style={cellStyle}><IconSuccess height="2em" width="2em" /></td>
        </tr>
      </tbody>
    </div>
    <div style={{ float: 'left', paddingLeft: '1em', width: '20%' }}>
      <h4>Search Field:</h4>
      <SearchField />
      <h4>Section Header:</h4>
      <SectionHeader
        title="Closed"
        onClick={() => {}}
      />
      <h4>Show Hide:</h4>
      <ShowHide style={{ backgroundColor: '#eee' }} />
      <h4>Tag:</h4>
      <Tag icon={<IconTag />} text="Icon &amp; Text Tag" />
      <h4>Toggle Button:</h4>
      <ToggleButton closedButtonText="ToggleButton" />
      <h4>Toggle Section Header:</h4>
      <ToggleSectionHeader />
    </div>
  </div>
);
