import React from 'react';
import Base from 'terra-base';
import Alert from '../../lib/Alert';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

class AlertDismissible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDismissed: false,
    };
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleDismiss() {
    const newState = this.state;
    newState.isDismissed = true;
    this.setState(newState);
  }

  render() {
    let alertElem = <div id="dismissed">Alert was dismissed</div>;
    if (!this.state.isDismissed) {
      alertElem = (<Alert id="dismissibleAlert" type={Alert.Opts.Types.SUCCESS} onDismiss={this.handleDismiss} >
        This is a dismissable Alert;
      </Alert>);
    }
    return (
      <div>
        <Base locale={locale}>
          {alertElem}
        </Base>
      </div>
    );
  }
}

export default AlertDismissible;
