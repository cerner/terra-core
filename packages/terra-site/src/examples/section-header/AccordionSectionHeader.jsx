import React from 'react';

import SectionHeaderExampleTemplate from './SectionHeaderExampleTemplate';

class AccordionSectionHeader extends React.Component {
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
      title: 'I can accordion, click me',
      isOpen: this.state.isOpen,
      onClick: this.handleClick,
    };

    return (
      <SectionHeaderExampleTemplate title="Accordion Section Header" exampleProps={sectionHeaderProps} />
    );
  }
}

export default AccordionSectionHeader;
