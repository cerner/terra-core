import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ShowHide from 'terra-show-hide/lib/ShowHide';

const fullText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ante, porta sit amet sem vitae, pellentesque pharetra ex. Etiam odio purus, maximus eget mauris in, pulvinar euismod neque. Curabitur eu vulputate leo. Etiam tincidunt lectus ut metus interdum, sit amet porttitor leo ornare. Sed tincidunt rutrum odio, dignissim rhoncus nulla finibus et. Mauris mollis posuere dolor dignissim vulputate. Sed accumsan dignissim mi id pulvinar. Vivamus sapien nibh, dignissim id semper non, consectetur et felis. Duis mattis odio tortor, eu mattis lectus lobortis mattis. Ut sit amet risus pellentesque, imperdiet mi eu, sodales massa. Aenean quis lacus rutrum, lobortis urna vel, congue est. Vivamus viverra efficitur viverra. Integer sit amet metus dolor. Nullam imperdiet vehicula tincidunt. Duis consequat congue magna, eu imperdiet magna venenatis et. Quisque eget vulputate massa. Donec vel diam vel nulla gravida blandit sit amet sed quam. Donec sed feugiat magna, eget consequat mi. Ut quis arcu non libero tempus semper nec in sem. Nunc in quam leo. Donec risus eros, dapibus ut nisi vitae, ullamcorper faucibus nisl. Suspendisse finibus urna vel mi sodales, a pharetra nisl convallis. Phasellus sed turpis non ipsum scelerisque pellentesque at cursus lectus. Nunc ut velit nec odio ultrices sodales.';

class NoPreviewShowHide extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggleShowHide = this.toggleShowHide.bind(this);
  }

  toggleShowHide() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    return (
      <ShowHide isOpen={this.state.isOpen} onChange={this.toggleShowHide}>
        {<p>{fullText}</p>}
      </ShowHide>
    );
  }
}

export default NoPreviewShowHide;
