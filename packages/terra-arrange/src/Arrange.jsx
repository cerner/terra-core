import React, { PropTypes } from 'react';
import classNames from 'classnames';
import '../src/arrange.scss';

const alignmentTypes = ['center', 'bottom', 'stretch'];

const ObjectFilter = (obj, predicate) => {
  const filtered = Object
                     .keys(obj)
                     .filter(key => predicate(key, obj[key]))
                     .map(key => ({ [key]: obj[key] }));
  return Object.assign({}, ...filtered);
};

const CustomProps = (props, propTypes) =>
  ObjectFilter(props, key => !Object.prototype.hasOwnProperty.call(propTypes, key));


const propTypes = {
  fitStart: PropTypes.element,
  fill: PropTypes.element.isRequired,
  fitEnd: PropTypes.element,
  align: PropTypes.oneOf(alignmentTypes),
  alignFitStart: PropTypes.oneOf(alignmentTypes),
  alignFitEnd: PropTypes.oneOf(alignmentTypes),
  alignFill: PropTypes.oneOf(alignmentTypes),
};

const Arrange = (props) => {
  const customProps = CustomProps(props, Arrange.propTypes);

  let { alignFitStart, alignFitEnd, alignFill } = props;

  if (props.align !== undefined) {
    alignFitStart = alignFitEnd = alignFill = props.align;
  }

  const arrangeClass = classNames('terra-Arrange', { [`${customProps.className}`]: customProps.className });

  const fitStartClass = classNames([
    'terra-Arrange-fitStart',
    { [`terra-Arrange-fitStart--${alignFitStart}`]: alignFitStart },
  ]);

  const fitEndClass = classNames([
    'terra-Arrange-fitEnd',
    { [`terra-Arrange-fitEnd--${alignFitEnd}`]: alignFitEnd },
  ]);

  const fillClass = classNames([
    'terra-Arrange-fill',
    { [`terra-Arrange-fill--${alignFill}`]: alignFill },
  ]);

  if (props.fitStart === undefined && props.fitEnd === undefined) {
    // eslint-disable-next-line no-console
    console.warn('At least one of the props: [fitStart, fitEnd] should be supplied.');
  }

  return (
    <div {...customProps} className={arrangeClass} >
      <div className={fitStartClass}>
        {props.fitStart}
      </div>
      <div className={fillClass}>
        {props.fill}
      </div>
      <div className={fitEndClass}>
        {props.fitEnd}
      </div>
    </div>
  );
};

Arrange.propTypes = propTypes;

export default Arrange;
