import React from 'react';

import SectionHeaderExampleTemplate from './SectionHeaderExampleTemplate';

class LongTitleAccordionSectionHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const sectionHeaderProps = {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteu',
      isOpen: this.state.isOpen,
      onClick: this.handleClick,
    };

    return (
      <SectionHeaderExampleTemplate title="Long Title Accordion Section Header" exampleProps={sectionHeaderProps} />
    );
  }
}

export default LongTitleAccordionSectionHeader;
