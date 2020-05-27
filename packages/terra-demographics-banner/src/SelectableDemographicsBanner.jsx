import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames/bind';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
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
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: intlShape.isRequired,
  /**
   * Whether to display an icon to confidentiality.
   */
  isConfidential: PropTypes.bool,
  /**
   * Function callback for when the appropriate click or key action is performed.
   */
  onClick: PropTypes.func.isRequired,
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
};

const defaultProps = {
  applicationContent: null,
  deceasedDate: null,
  gestationalAge: null,
  identifiers: {},
  isConfidential: false,
  postMenstrualAge: null,
  preferredFirstName: null,
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
  intl,
  isConfidential,
  onClick,
  personName,
  photo,
  postMenstrualAge,
  preferredFirstName,
  ...customProps
}) => {
  const handleKeyDown = (event) => {
    if (event.keyCode === KEY_SPACE || event.keyCode === KEY_RETURN) {
      event.preventDefault();
    }
  };

  const handleKeyUp = (event) => {
    if ((event.keyCode === KEY_SPACE || event.keyCode === KEY_RETURN) && onClick) {
      onClick();
    }
  };

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <BackgroundTile
      {...customProps}
      isDeceased={!!(deceasedDate)}
    >
      <SelectableTile
        onClick={handleOnClick}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      >
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
          isSelectable
          personName={personName}
          photo={photo}
          postMenstrualAge={postMenstrualAge}
          preferredFirstName={preferredFirstName}
        />
      </SelectableTile>
    </BackgroundTile>
  );
};

SelectableDemographicsBanner.propTypes = propTypes;
SelectableDemographicsBanner.defaultProps = defaultProps;

export default injectIntl(SelectableDemographicsBanner);
