import React from 'react';
import Control from 'terra-form/lib/Control';

class ControlExamples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relocate: '',
      children: '',
      language: '',
    };
    this.handleRelocateChange = this.handleRelocateChange.bind(this);
    this.handleChildrenChange = this.handleChildrenChange.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleRelocateChange(event) {
    if (event.target.checked) {
      this.setState({ relocate: 'yes' });
    } else {
      this.setState({ relocate: 'no' });
    }
  }

  handleChildrenChange(event) {
    this.setState({ children: event.target.value });
  }

  handleLanguageChange(event) {
    this.setState({ language: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <Control
            type="checkbox"
            labelText="Are you willing to locate?"
            name="relocation"
            value="relocation"
            onChange={this.handleRelocateChange}
          />
          <Control
            type="radio"
            labelText="I have Children"
            name="children_present"
            value="has_children"
            checked={this.state.children === 'has_children'}
            onChange={this.handleChildrenChange}
          />
          <Control
            type="radio"
            labelText="I do not have Children"
            name="children_present"
            value="has_no_children"
            checked={this.state.children === 'has_no_children'}
            onChange={this.handleChildrenChange}
          />
          <div>
            <Control
              type="radio"
              name="language"
              value="c++"
              labelText="C++"
              isInline
              checked={this.state.language === 'c++'}
              onChange={this.handleLanguageChange}
            />
            <Control
              type="radio"
              name="language"
              value="java"
              labelText="Java"
              isInline
              checked={this.state.language === 'java'}
              onChange={this.handleLanguageChange}
            />
            <Control
              type="radio"
              name="language"
              value="ruby"
              labelText="Ruby"
              isInline
              checked={this.state.language === 'ruby'}
              onChange={this.handleLanguageChange}
            />
            <Control
              type="radio"
              name="language"
              value="javascript"
              labelText="JavaScript"
              isInline
              checked={this.state.language === 'javascript'}
              onChange={this.handleLanguageChange}
            />
          </div>
        </form>
        <hr />
        <ul>Input Provided:
          <li style={{ margin: '10px' }}>Relocate - {this.state.relocate}</li>
          <li style={{ margin: '10px' }}>Children - {this.state.children}</li>
          <li style={{ margin: '10px' }}>Programming language - {this.state.language}</li>
        </ul>
        <br />
      </div>
    );
  }
}

export default ControlExamples;
