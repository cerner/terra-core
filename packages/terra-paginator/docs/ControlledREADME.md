# Terra Controlled Paginator

Controlled version of the [Paginator](https://github.com/cerner/terra-core/packages/terra-paginator/docs/README.md) for when the pagination state needs to be managed by a parent component.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-paginator`

## Usage

```jsx
import React from 'react';
import ControlledPaginator from 'terra-paginator/lib/ControlledPaginator';

class ControlledPaginatorExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
    };

    this.changePages = this.changePages.bind(this);
  }

  changePages(index) {
    this.setState({ currentPage: index });
  }

  render() {
    return (
      <ControlledPaginator onPageChange={this.changePages} selectedPage={this.state.currentPage} totalCount={450} itemCountPerPage={10} />
    );
  }
}
```

## Component Features

* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
