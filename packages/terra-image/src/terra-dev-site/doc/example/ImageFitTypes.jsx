import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Image from 'terra-image';
import FitTypesWrapper from 'terra-image/lib/terra-dev-site/doc/example/common/FitTypesWrapper';
import styles from './ImageFitTypes.scss';
import exampleImage from '../../assets/170x251.jpg';

const cx = classNames.bind(styles);

const propTypes = { fit: PropTypes.string, variant: PropTypes.string };

const ImageFitTypes = ({
  ...props
}) => (
  <div className={cx('image-container')}>
    <Image alt="Toggle fit image" className={cx('image')} src={exampleImage} fit={props.fit} variant={props.variant} />
  </div>
);

ImageFitTypes.propTypes = propTypes;
export default FitTypesWrapper(ImageFitTypes);
