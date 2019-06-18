/* eslint-disable no-console */
import React from 'react';
import classnames from 'classnames/bind';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DropdownButton from '../../../DropdownButton';
import styles from './BoundedDropdownButton.scss';

const cx = classnames.bind(styles);

class BoundedDropdownButton extends React.Component {
  constructor(props) {
    super(props);

    this.setContainerRef = this.setContainerRef.bind(this);
    this.getContainerRef = this.getContainerRef.bind(this);
  }

  setContainerRef(node) {
    this.containerRef = node;
  }

  getContainerRef() {
    return this.containerRef;
  }

  render() {
    return (
      <div className={cx('container')} ref={this.setContainerRef}>
        <DropdownButton
          defaultOption={{ label: 'Primary', callback: () => { console.log('primary option'); } }}
          className={cx('top-left')}
          boundingRef={this.getContainerRef}
        >
          <DropdownButton.Option label="1st Option Lorem Ipsum Dolor" callback={() => { console.log('hi'); }} />
          <DropdownButton.Option label="2nd Option" callback={() => { console.log('bye'); }} />
        </DropdownButton>
        <DropdownButton
          defaultOption={{ label: 'Primary', callback: () => { console.log('primary option'); } }}
          className={cx('top-right')}
          boundingRef={this.getContainerRef}
        >
          <DropdownButton.Option label="1st Option Lorem Ipsum Dolor" callback={() => { console.log('hi'); }} />
          <DropdownButton.Option label="2nd Option" callback={() => { console.log('bye'); }} />
        </DropdownButton>
        <DropdownButton
          defaultOption={{ label: 'Primary', callback: () => { console.log('primary option'); } }}
          className={cx('bottom-left')}
          boundingRef={this.getContainerRef}
        >
          <DropdownButton.Option label="1st Option Lorem Ipsum Dolor" callback={() => { console.log('hi'); }} />
          <DropdownButton.Option label="2nd Option" callback={() => { console.log('bye'); }} />
        </DropdownButton>
        <DropdownButton
          defaultOption={{ label: 'Primary', callback: () => { console.log('primary option'); } }}
          className={cx('bottom-right')}
          boundingRef={this.getContainerRef}
        >
          <DropdownButton.Option label="1st Option Lorem Ipsum Dolor" callback={() => { console.log('hi'); }} />
          <DropdownButton.Option label="2nd Option" callback={() => { console.log('bye'); }} />
        </DropdownButton>
      </div>
    );
  }
}

export default BoundedDropdownButton;
