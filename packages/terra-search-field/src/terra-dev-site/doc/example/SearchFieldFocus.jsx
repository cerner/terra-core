// import React from 'react';
// // eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
// import SearchField from 'terra-search-field/lib/SearchField';
// import Button from 'terra-button';

// class SearchFieldFocus extends React.Component {
//   constructor(props) {
//     super(props);
//     this.invalidSearchMessage = 'The default minimum search length is 2.';
//     this.state = { searchText: '', message: this.invalidSearchMessage };
//     this.handleSearch = this.handleSearch.bind(this);
//     this.handleInvalidSearch = this.handleInvalidSearch.bind(this);
//     this.handleButtonClick = this.handleButtonClick.bind(this);
//   }

//   handleButtonClick() {
//     if (this.searchInput) {
//       this.searchInput.focus();
//     }
//   }

//   handleSearch(searchText) {
//     this.setState({ searchText, message: 'Search Text: ' });
//   }

//   handleInvalidSearch() {
//     this.setState({ searchText: '', message: this.invalidSearchMessage });
//   }

//   render() {
//     return (
//       <div>
//         <Button text="Focus Me" onClick={this.handleButtonClick} id="search-field-focus-button" />
//         <p>
//           {this.state.message}
//           {this.state.searchText}
//         </p>
//         <SearchField
//           onSearch={this.handleSearch}
//           onInvalidSearch={this.handleInvalidSearch}
//           inputRefCallback={(inputRef) => { this.searchInput = inputRef; }}
//         />
//       </div>
//     );
//   }
// }

import React, { useState, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import SearchField from 'terra-search-field/lib/SearchField';
import Button from 'terra-button';

const INVALID_MESSAGE = 'The default minimum search length is 2.';

const SearchFieldFocus = () => {
  let searchElement = useRef(null);
  const [searchText, setSearchText] = useState({ searchText: '' });

  const message = searchText.length >= 2 ? `Search text: ${searchText}` : INVALID_MESSAGE;

  const handleButtonClick = () => {
    if (searchElement) {
      searchElement.focus();
    }
  };

  return (
    <div>
      <Button text="Focus Me" onClick={handleButtonClick} id="search-field-focus-button" />
      <p>{message}</p>
      <SearchField
        inputRefCallback={(inputRef) => { searchElement = inputRef; }}
        onSearch={setSearchText}
        onInvalidSearch={setSearchText}
      />
    </div>
  );
};


export default SearchFieldFocus;
