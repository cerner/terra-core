import React from 'react';
import PropTypes from 'prop-types';
import AppDelegate from 'terra-app-delegate';

class ContentContainer extends React.Component {
  constructor(props) {
    super(props);

    this.disclose = this.disclose.bind(this);
    this.dismiss = this.dismiss.bind(this);
    this.closeDisclosure = this.closeDisclosure.bind(this);
    this.goBack = this.goBack.bind(this);
    this.maximize = this.maximize.bind(this);
    this.minimize = this.minimize.bind(this);
    this.requestFocus = this.requestFocus.bind(this);
    this.releaseFocus = this.releaseFocus.bind(this);
  }

  disclose(size) {
    return () => {
      const identifier = Date.now();

      this.props.app.disclose({
        preferredType: 'modal',
        size,
        content: {
          key: `ContentContainer-${identifier}`,
          name: 'ContentContainer',
          props: {
            identifier: `ContentContainer-${identifier}`,
          },
        },
      });
    };
  }

  dismiss() {
    this.props.app.dismiss();
  }

  closeDisclosure() {
    this.props.app.closeDisclosure();
  }

  goBack() {
    this.props.app.goBack();
  }

  maximize() {
    this.props.app.maximize();
  }

  minimize() {
    this.props.app.minimize();
  }

  requestFocus() {
    this.props.app.requestFocus();
  }

  releaseFocus() {
    this.props.app.releaseFocus();
  }

  render() {
    const { app, identifier } = this.props;

    return (
      <div className="content-container" style={{ height: '100%', padding: '10px' }}>
        <h2>Content Component</h2>
        <br />
        <h4>id: {identifier}</h4>
        <br />
        {app && app.releaseFocus ? <h4>Modal has lost focus!</h4> : null }
        {app && app.requestFocus ? <h4>Modal has gained focus!</h4> : null }
        <br />
        <button className="disclose" onClick={this.disclose()}>Disclose</button>
        {identifier === 'root-component' && <button className="disclose-tiny" onClick={this.disclose('tiny')}>Disclose - Tiny</button>}
        {identifier === 'root-component' && <button className="disclose-small" onClick={this.disclose('small')}>Disclose - Small</button>}
        {identifier === 'root-component' && <button className="disclose-medium" onClick={this.disclose('medium')}>Disclose - Medium</button>}
        {identifier === 'root-component' && <button className="disclose-large" onClick={this.disclose('large')}>Disclose - Large</button>}
        {identifier === 'root-component' && <button className="disclose-huge" onClick={this.disclose('huge')}>Disclose - Huge</button>}
        {app && app.dismiss ? <button className="dismiss" onClick={this.dismiss}>Dismiss</button> : null }
        {app && app.closeDisclosure ? <button className="close-disclosure" onClick={this.closeDisclosure}>Close Disclosure</button> : null }
        {app && app.goBack ? <button className="go-back" onClick={this.goBack}>Go Back</button> : null }
        {app && app.maximize ? <button className="maximize" onClick={this.maximize}>Maximize</button> : null }
        {app && app.minimize ? <button className="minimize" onClick={this.minimize}>Minimize</button> : null }
        {app && app.requestFocus ? <button className="requestFocus" onClick={this.requestFocus}>Request Focus</button> : null }
        {app && app.releaseFocus ? <button className="releaseFocus" onClick={this.releaseFocus}>Release Focus</button> : null }
      </div>
    );
  }
}

ContentContainer.propTypes = {
  app: AppDelegate.propType,
  identifier: PropTypes.string,
};

AppDelegate.registerComponentForDisclosure('ContentContainer', ContentContainer);

export default ContentContainer;
