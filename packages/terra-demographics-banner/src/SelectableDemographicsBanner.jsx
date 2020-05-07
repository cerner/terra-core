import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames/bind';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import IconInfo from 'terra-icon/lib/icon/IconInformation';
import DemographicsBanner from './DemographicsBanner';
import DemographicsBannerUtils from './_sharedObjects';
import BackgroundTile from './selectable-demographics-banner/_BackgroundTile';
import SelectableTile from './selectable-demographics-banner/_SelectableTile';
import styles from './selectable-demographics-banner/SelectableDemographicsBanner.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Age of the person.
   */
  age: PropTypes.string,
  /**
   * Application content to display in the banner.
   */
  applicationContent: PropTypes.node,
  /**
   * Avatar to display in the banner. `photo` prop will be ignored if avatar is used.
   */
  avatar: PropTypes.shape(DemographicsBannerUtils.avatarShape),
  /**
   * The person's date of birth.
   */
  dateOfBirth: PropTypes.string,
  /**
   * The person's deceased date. Will display the banner as deceased if this value is provided.
   */
  deceasedDate: PropTypes.string,
  /**
   * Gender of the Person.
   */
  gender: PropTypes.string,
  /**
   * The person's gestational age.
   */
  gestationalAge: PropTypes.string,
  /**
   * Additional key value identifiers of a person's demographic information.
   */
  // eslint-disable-next-line react/forbid-prop-types
  identifiers: PropTypes.object,
  /**
   * Id for Info Button.
   */
  infoButtonId: PropTypes.string,
  /**
   * Callback function triggered when info button is clicked.
   */
  infoButtonOnClick: PropTypes.func.isRequired,
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: intlShape.isRequired,
  /**
   * Whether to display an icon to confidentiality.
   */
  isConfidential: PropTypes.bool,
  /**
   * Full Name of the person.
   */
  personName: PropTypes.string,
  /**
   * URL of photo to display in the banner.
   */
  photo: PropTypes.string,
  /**
   * The column layout in which to present the displays.
   */
  postMenstrualAge: PropTypes.string,
  /**
   * The person's preferred first name if they have one.
   */
  preferredFirstName: PropTypes.string,
  /**
   * Id for Selectable Tile.
  */
  selectableTileId: PropTypes.string,
  /**
   * Callback function triggered when selectable-tile is clicked.
   */
  selectableTileOnClick: PropTypes.func.isRequired,
};

const defaultProps = {
  age: undefined,
  applicationContent: null,
  avatar: undefined,
  dateOfBirth: undefined,
  deceasedDate: null,
  gender: undefined,
  gestationalAge: null,
  identifiers: {},
  infoButtonId: undefined,
  isConfidential: false,
  personName: undefined,
  photo: undefined,
  postMenstrualAge: null,
  preferredFirstName: null,
  selectableTileId: undefined,
};

const SelectableDemographicsBanner = ({
  age,
  applicationContent,
  avatar,
  dateOfBirth,
  deceasedDate,
  gender,
  gestationalAge,
  identifiers,
  infoButtonId,
  infoButtonOnClick,
  intl,
  isConfidential,
  personName,
  photo,
  postMenstrualAge,
  preferredFirstName,
  selectableTileId,
  selectableTileOnClick,
  ...customProps
}) => {
  const handleKeyDown = (event) => {
    if (event.keyCode === KEY_SPACE || event.keyCode === KEY_RETURN) {
      event.preventDefault();
    }
  };

  const handleKeyUp = (event) => {
    if ((event.keyCode === KEY_SPACE || event.keyCode === KEY_RETURN) && selectableTileOnClick) {
      selectableTileOnClick();
    }
  };

  const handleOnClick = () => {
    if (selectableTileOnClick) {
      selectableTileOnClick();
    }
  };

  const DemographicsBannerSelectableTile = (
    <DemographicsBanner
      age={age}
      applicationContent={applicationContent}
      avatar={avatar}
      className={cx('selectable-demographics-banner')}
      dateOfBirth={dateOfBirth}
      deceasedDate={deceasedDate}
      gender={gender}
      gestationalAge={gestationalAge}
      identifiers={identifiers}
      isConfidential={isConfidential}
      personName={personName}
      photo={photo}
      postMenstrualAge={postMenstrualAge}
      preferredFirstName={preferredFirstName}
    />
  );

  const infoText = intl.formatMessage({ id: 'Terra.demographicsBanner.info' });

  return (
    <BackgroundTile {...customProps} isDeceased={!!(deceasedDate)}>
      <SelectableTile id={selectableTileId} onClick={handleOnClick} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
        {DemographicsBannerSelectableTile}
      </SelectableTile>
      <div className={cx('divider')} />
      <button className={cx('info-button')} type="button" role="link" id={infoButtonId} onClick={infoButtonOnClick}>
        {infoText}
        <IconInfo />
      </button>
    </BackgroundTile>
  );
};

SelectableDemographicsBanner.propTypes = propTypes;
SelectableDemographicsBanner.defaultProps = defaultProps;

export default injectIntl(SelectableDemographicsBanner);
