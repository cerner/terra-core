import React from 'react';
import Alert from 'terra-alert';
import Button from 'terra-button';
import Toggle from 'terra-toggle';

const buttonStyle = { textDecoration: 'underline', color: '#1c11f21' };

class LongTextExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTextShown: false,
    };
    this.handleShowMore = this.handleShowMore.bind(this);
    this.handleShowLess = this.handleShowLess.bind(this);
  }

  handleShowMore() {
    this.setState({ allTextShown: true });
  }

  handleShowLess() {
    this.setState({ allTextShown: false });
  }

  render() {
    const alertStartTagStr = '<Alert type={Alert.Opts.Types.INFO} title="Gettysburg Address:" >';
    const alertContentStr = '<span>Four score and seven years ago our fathers brought forth on this continent, a new nation, . . .</span>';
    const alertEndTagStr = '</Alert>';
    return (
      <div>
        <div dir="ltr">
          <h3>Alert of type info with custom title and long text with show more/less</h3>
          <br />
          <code>
            {alertStartTagStr}
            <br />
            &nbsp;&nbsp;{alertContentStr}
            <br />
            {alertEndTagStr}
          </code>
        </div>
        <br />
        <Alert type={Alert.Opts.Types.INFO} title="Gettysburg Address:" >
          <span>
            Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.
            <Toggle isOpen={!this.state.allTextShown}>
              <Button onClick={this.handleShowMore} text="Show More" variant="link" style={buttonStyle} />
            </Toggle>
            <Toggle isOpen={this.state.allTextShown}>
                Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.
              <br /><br />
                But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
              <br /><br />
              <Button onClick={this.handleShowLess} text="Show Less" variant="link" style={buttonStyle} />
            </Toggle>
          </span>
        </Alert>
      </div>
    );
  }
}

export default LongTextExample;
