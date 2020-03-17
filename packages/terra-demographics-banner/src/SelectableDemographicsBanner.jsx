import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames/bind';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import IconInfo from 'terra-icon/lib/icon/IconInformation';
import DemographicsBannerDisplay from './DemographicsBannerDisplay';
import BackgroundTile from './selectable-demographics-banner/_BackgroundTile';
import SelectableTile from './selectable-demographics-banner/_SelectableTile';
import styles from './selectable-demographics-banner/SelectableDemographicsBanner.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Application content to display in the banner.
   */
  applicationContent: PropTypes.node,
  /**
   * Age of the person.
   */
  age: PropTypes.string,
  /**
   * The persons date of birth.
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
   * The persons gestational age.
   */
  gestationalAge: PropTypes.string,
  /**
   * Additional key value identifiers of a person's demographic information.
   */
  // eslint-disable-next-line react/forbid-prop-types
  identifiers: PropTypes.object,
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: intlShape.isRequired,
  /**
   * Full Name of the person.
   */
  personName: PropTypes.string,
  /**
   * URL of Photo to display in the banner.
   */
  photo: PropTypes.string,
  /**
   * The column layout in which to present the displays.
   */
  postMenstrualAge: PropTypes.string,
  /**
   * The persons preferred first name if they have one.
   */
  preferredFirstName: PropTypes.string,
  /**
   * Callback function triggered when info button is clicked.
   */
  infoButtonOnClick: PropTypes.func.isRequired,
  /**
   * Callback function triggered when selectable-tile is clicked.
   */
  selectableTileOnClick: PropTypes.func.isRequired,
  /**
   * Id for Info Button.
   */
  infoButtonId: PropTypes.string,
  /**
   * Id for Selectable Tile.
  */
  selectableTileId: PropTypes.string,
};

const defaultProps = {
  applicationContent: null,
  age: undefined,
  dateOfBirth: undefined,
  deceasedDate: null,
  gender: undefined,
  gestationalAge: null,
  identifiers: {},
  personName: undefined,
  photo: undefined,
  postMenstrualAge: null,
  preferredFirstName: null,
  infoButtonId: undefined,
  selectableTileId: undefined,
};

const SelectableDemographicsBanner = ({
  applicationContent,
  age,
  dateOfBirth,
  deceasedDate,
  gender,
  gestationalAge,
  identifiers,
  photo,
  postMenstrualAge,
  preferredFirstName,
  intl,
  personName,
  infoButtonOnClick,
  selectableTileOnClick,
  infoButtonId,
  selectableTileId,
  ...customProps
}) => {
  const noDataProvided = intl.formatMessage({ id: 'Terra.demographicsBanner.noDataProvided' });

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
    <DemographicsBannerDisplay
      className={cx('selectable-demographics-banner')}
      age={age || noDataProvided}
      dateOfBirth={dateOfBirth || noDataProvided}
      gender={gender || noDataProvided}
      personName={personName || noDataProvided}
      dateOfBirthLabel={intl.formatMessage({ id: 'Terra.demographicsBanner.dateOfBirth' })}
      dateOfBirthFullText={intl.formatMessage({ id: 'Terra.demographicsBanner.dateOfBirthFullText' })}
      deceasedDateLabel={intl.formatMessage({ id: 'Terra.demographicsBanner.deceased' })}
      gestationalAgeLabel={intl.formatMessage({ id: 'Terra.demographicsBanner.gestationalAge' })}
      gestationalAgeFullText={intl.formatMessage({ id: 'Terra.demographicsBanner.gestationalAgeFullText' })}
      postMenstrualAgeLabel={intl.formatMessage({ id: 'Terra.demographicsBanner.postMenstrualAge' })}
      postMenstrualAgeFullText={intl.formatMessage({ id: 'Terra.demographicsBanner.postMenstrualAgeFullText' })}
    />
  );

  return (
    <BackgroundTile {...customProps} isDeceased={!!(deceasedDate)}>
      <SelectableTile id={selectableTileId} onClick={handleOnClick} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
        {DemographicsBannerSelectableTile}
      </SelectableTile>
      <div className={cx('divider')} />
      {/* Needs Translation */}
      <button className={cx('info-button')} type="button" role="link" id={infoButtonId} onClick={infoButtonOnClick}>
        Info
        <IconInfo />
      </button>
    </BackgroundTile>
  );
};

SelectableDemographicsBanner.propTypes = propTypes;
SelectableDemographicsBanner.defaultProps = defaultProps;

export default injectIntl(SelectableDemographicsBanner);
