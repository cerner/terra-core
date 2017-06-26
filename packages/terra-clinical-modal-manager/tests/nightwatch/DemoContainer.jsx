import React from 'react';
import PropTypes from 'prop-types';
import AppDelegate from 'terra-clinical-app-delegate';

let nestedComponentIndex = 0;

class DemoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.disclose = this.disclose.bind(this);
    this.dismiss = this.dismiss.bind(this);
    this.closeDisclosure = this.closeDisclosure.bind(this);
    this.goBack = this.goBack.bind(this);
    this.maximize = this.maximize.bind(this);
    this.minimize = this.minimize.bind(this);
  }

  disclose() {
    this.props.app.disclose({
      preferredType: 'modal',
      size: 'small',
      content: {
        key: `DemoContainer-${nestedComponentIndex += 1}`,
        name: 'DemoContainer',
        props: {
          identifier: `DemoContainer-${nestedComponentIndex}`,
        },
      },
    });
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

  render() {
    const { app, identifier } = this.props;

    return (
      <div id={identifier} className="nested-component" style={{ height: '100%', padding: '10px' }}>
        <h2>Content Component</h2>
        <br />
        <h4>id: {identifier}</h4>
        <br />
        <button className="disclose" onClick={this.disclose}>Disclose</button>
        {app && app.dismiss ? <button className="dismiss" onClick={this.dismiss}>Dismiss</button> : null }
        {app && app.closeDisclosure ? <button className="close-disclosure" onClick={this.closeDisclosure}>Close Disclosure</button> : null }
        {app && app.goBack ? <button className="go-back" onClick={this.goBack}>Go Back</button> : null }
        {app && app.maximize ? <button className="maximize" onClick={this.maximize}>Maximize</button> : null }
        {app && app.minimize ? <button className="minimize" onClick={this.minimize}>Minimize</button> : null }
      </div>
    );
  }
}

DemoContainer.propTypes = {
  app: AppDelegate.propType,
  identifier: PropTypes.string,
};

AppDelegate.registerComponentForDisclosure('DemoContainer', DemoContainer);

export default DemoContainer;
