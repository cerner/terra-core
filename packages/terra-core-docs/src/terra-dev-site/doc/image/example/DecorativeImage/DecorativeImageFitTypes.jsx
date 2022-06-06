import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { DecorativeImage } from 'terra-image';
import FitTypesWrapper from '../common/FitTypesWrapper';
import styles from '../ImageFitTypes.scss';
import decorativeImage from '../../assets/crocus.jpg';

const cx = classNames.bind(styles);

const propTypes = { fit: PropTypes.string, variant: PropTypes.string };

const DecorativeImageFitTypes = ({
  ...props
}) => (
  <div className={cx('image-container')}>
    <DecorativeImage className={cx('image')} src={decorativeImage} fit={props.fit} variant={props.variant} />
  </div>
);

DecorativeImageFitTypes.propTypes = propTypes;
export default FitTypesWrapper(DecorativeImageFitTypes);
