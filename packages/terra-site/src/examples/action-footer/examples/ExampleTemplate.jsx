import React from 'react';
import PropsTypes from 'prop-types';

const propTypes = {
  examples: PropsTypes.arrayOf(
    PropsTypes.shape({
      title: PropsTypes.string.isRequired,
      component: PropsTypes.node.isRequired,
    }),
  ),
};

const childStyle = {
  minWidth: '400px',
  padding: '10px',
  flex: '0 0 auto',
};

const ExampleTemplate = ({ examples }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {
      examples.map(e => (
        <div style={{ minWidth: '400px', paddingRight: '10px' }}>
          <h2>{e.title}</h2>
          <div style={{ border: 'dashed rgba(0, 0, 0, 0.38)' }}>
            <div style={{ backgroundColor: '#fafafa', color: 'rgba(0, 0, 0, 0.38)', height: '50px' }}>Lorem ipsum</div>
            {e.component}
          </div>
        </div>
      ))
    }
  </div>
);

ExampleTemplate.propTypes = propTypes;

export default ExampleTemplate;
