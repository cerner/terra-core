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
   * The list of elements to be placed for display in a section.
   */
  listItems: PropTypes.array,
};

const defaultProps = {
  headerContent: '',
  listItems: [],
};

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.generateHeader = this.generateHeader.bind(this);
  }

  generateHeader() {
    return <ListItem isSelectable content={<ListSectionHeader id={this.props.headerContent} title={this.props.headerContent} onClick={this.handleClick} />} key={this.props.headerContent} />;
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
