import React, { useState } from 'react';

import classNames from 'classnames/bind';

import Text from 'terra-text';
import Spacer from 'terra-spacer';
import Heading from 'terra-heading';
import IconAvailable from 'terra-icon/lib/icon/IconAvailable';
import IconClear from 'terra-icon/lib/icon/IconClear';
import Checkbox from 'terra-form-checkbox';
import Switch from 'terra-switch';
import { DisclosureManagerHeaderAdapter } from 'terra-application/lib/disclosure-manager';

import styles from './IconInformationModal.module.scss';
const cx = classNames.bind(styles);

const FunctionIndicator = ({canBe, stringTemplate, emphasizedSubstring}) => {
  const insertionIndex = stringTemplate.indexOf('_');
  const firstSubstring = stringTemplate.substring(0, insertionIndex);
  const secondSubstring = stringTemplate.substring(insertionIndex + 1);
  console.log('firstString', firstSubstring)
  console.log('secondString', secondSubstring)

  const iconProps = {
    height: '1rem',
    width: '1rem',
    style: {color: 'red'},
  }

  return (
    <Spacer marginBottom='small-2'>
      <Text>
        { canBe ? (<><IconAvailable {...iconProps} /> Can </>) : <><IconClear {...iconProps} /> Cannot </>}
        {firstSubstring}{<b>{emphasizedSubstring}</b>}{secondSubstring}
      </Text>
    </Spacer>
  )
}

const IconPreviews = ({Icon, defaultBackground, colorResponsiveElements}) => {
  const [selectedBackground, setSelectedBackground] = useState(defaultBackground || values[0]);
  const [colorHighlighted, setColorHighlighted] = useState(false);

  const colorResponsive = colorResponsiveElements.length > 0;

  const backgrounds = ['light', 'low-light', 'checkered'];

  return (
    <div className={cx('iconPreviews')}>
      <div className={cx(
        'largePreviewContainer',
        `${selectedBackground}-background`,
        colorHighlighted ? 'highlighted' : '',
      )}>
        <Icon height="120" width="120"/>
      </div>
      <Spacer marginTop="large">
        <Text className={cx('preview-background-label')}>Preview Background</Text>
        <fieldset className={cx('background-options-fieldset')}>
          {
            backgrounds.map((value, index) => (
              <>
                <input
                  type="radio"
                  name="background-options"
                  value={value}
                  className={cx('background-radio-button', value)}
                  defaultChecked={value === selectedBackground}
                  onChange={() => setSelectedBackground(value)}
                />
                <label htmlFor={value} className={cx('background-radio-label', value)}>{value}</label>
              </>
            ))
          }
        </fieldset>
      </Spacer>
      {
        colorResponsive ? 
          <Spacer marginTop='large'>
            <Heading level={5}>Themable Elements</Heading>
            <Text>{colorResponsiveElements}</Text>
            <Spacer marginTop="large" />
            <Switch
              isChecked={colorHighlighted}
              labelText={<Text className={cx('pink-color-code', {highlighted: colorHighlighted})}>Highlight</Text>}
              onChange={setColorHighlighted}
            />
          </Spacer>
        : null
      }
    </div>
  )
}


const IconInformationModal = ({data}) => {
  const Icon = data.svg;
  return (
    <div>
      <DisclosureManagerHeaderAdapter
        title="Icon Details"
        
      />
      <div className={cx('iconModalContents')}>
        <IconPreviews
          Icon={Icon}
          defaultBackground={data.needsDarkBackground ? 'low-light' : 'light'}
          colorResponsiveElements={data.colorResponsiveElements}
        />

        <div className={cx('summaryInfo')}>
          <Heading level={5}>Meaning</Heading>
          <Text>{data.meaning}</Text>
          <Spacer marginBottom="large+1"/>

          <Heading level={5}>Sets/Categories</Heading>
          <Text>{data.sets.join(', ')}</Text>
          <Spacer marginBottom="large+1"/>

          <Heading level={5}>Contextual Example</Heading>
          <span className={cx('inline-example')}><Text><Icon />Lorem ipsum <Icon /> dolor sit amet <Icon /></Text></span>
          <Spacer marginTop="large+1" />

          <Heading level={5}>Functions</Heading>
          <FunctionIndicator
            canBe={data.isAction}
            stringTemplate="be used to perform an _"
            emphasizedSubstring="action"
          />
          <FunctionIndicator
            canBe={data.isStatus}
            stringTemplate="be used to indicate a _"
            emphasizedSubstring="status"
          />
          <FunctionIndicator
            canBe={data.isToggle}
            stringTemplate="be used as a _"
            emphasizedSubstring="toggle"
          />
          <FunctionIndicator
            canBe={!data.labelRequired}
            stringTemplate="be used _"
            emphasizedSubstring="without a label"
          />
        </div>

        <div className={cx('bottom-matter')}>
          <Spacer marginTop="large">
            <Heading level={5}>Human Factors Guidance</Heading>
            <Text>{data.hfGuidance}</Text>
          </Spacer>

          <Spacer marginTop="large">
            <Heading level={5}>Importing</Heading>
            <div className={cx('import-example')}>
              <span className={cx('import')}>import</span>
              <span className={cx('alias')}> {data.terraAlias} </span>
              <span className={cx('from')}>from </span>
              <span className={cx('import-path')}>'terra-icon/lib/icon/{data.terraAlias}'</span>
              <span className={cx('semicolon')}>;</span>
            </div>
          </Spacer>
        </div>
      </div>
    </div>
  )
}

export default IconInformationModal;
