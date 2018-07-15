import React from 'react';
import PropTypes from 'prop-types';
import ListSectionHeader from './ListSectionHeader';
import ListItem from './ListItem';

const propTypes = {
  /**
   * The header content to be placed for display in a section.
   */
  headerContent: PropTypes.string,
  /**
   * The header content to be placed for display in a section.
   */
  sectionIndex: PropTypes.number,
  /**
   * The list of elements to be placed for display in a section.
   */
  listItems: PropTypes.arrayOf(PropTypes.node),
};

const defaultProps = {
  headerContent: '',
  sectionIndex: 0,
  listItems: [],
};

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.generateHeader = this.generateHeader.bind(this);
  }

  generateHeader() {
    return (<ListItem
      content={
        <ListSectionHeader
          id={`Section-${this.props.sectionIndex + 1}`}
          title={this.props.headerContent}
        />}
      key={this.props.headerContent}
    />);
  }

  render() {
    return (
      <React.Fragment>
        {this.generateHeader()}
        {this.props.listItems}
      </React.Fragment>
    );
  }
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;
export default Section;
