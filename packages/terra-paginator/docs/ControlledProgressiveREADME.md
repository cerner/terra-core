# Terra Controlled Progressive Paginator

Controlled version of the [Progressive Paginator]((https://github.com/cerner/terra-core/packages/terra-paginator/docs/ProgressiveREADME.md)) for when the pagination state needs to be managed by a parent component.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-paginator`

## Usage

```jsx
import React from 'react';
import ControlledProgressivePaginator from 'terra-paginator/lib/ControlledProgressivePaginator';

class ProgressivePaginatorExample extends React.Component {
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
      <ControlledProgressivePaginator onPageChange={this.changePages} selectedPage={this.state.currentPage} totalCount={450} itemCountPerPage={10} />
    );
  }
}
```

## Component Features

* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
