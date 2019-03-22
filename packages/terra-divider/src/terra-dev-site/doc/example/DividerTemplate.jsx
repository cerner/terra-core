import React from 'react';

/* eslint-disable react/prop-types */
class DividerTemplate extends React.Component {
  render() {
    return (
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        {this.props.children}
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>
    );
  }
};

export default DividerTemplate;
