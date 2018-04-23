import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import IconNext from 'terra-icon/lib/icon/IconNext';
import IconPrevious from 'terra-icon/lib/icon/IconPrevious';
import NumberField from 'terra-form/lib/NumberField';
import { calculatePages, pageSequence } from './_paginationUtils';

import 'terra-base/lib/baseStyles';
import styles from './Paginator.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /*
   * Function to be executed when a navigation element is selected.
   */
  onPageChange: PropTypes.func.isRequired,
  /*
   * The active/selected page.
   */
  selectedPage: PropTypes.number.isRequired,
  /*
   * Total number of all items being paginated.
   */
  totalCount: PropTypes.number.isRequired,
  /*
   * Total number of items per page.
   */
  itemCountPerPage: PropTypes.number.isRequired,
};

class ProgressivePaginator extends React.Component {
  constructor(props) {
    super(props);

    const { selectedPage, totalCount, itemCountPerPage } = this.props;

    this.state = {
      pageInput: selectedPage,
      selectedPage: selectedPage && totalCount ? selectedPage : undefined,
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePageInput = this.handlePageInput.bind(this);
    this.buildPageSelectorForm = this.buildPageSelectorForm.bind(this);
  }

  handlePageInput(e) {
    this.setState({ pageInput: e.target.value });
  }

  handlePageChange(index) {
    return (event) => {
      event.preventDefault();
      
      this.props.onPageChange(event, index);
      this.setState({ pageInput: index, selectedPage: index });
    }
  }

  buildPageSelectorForm(totalPages, onSubmit) {
    const { pageInput } = this.state;

    const pageForm = <div>
      <form className={cx('page-form')} onSubmit={onSubmit(parseInt(pageInput))}>
        <div>Page {<NumberField isInline value={pageInput} onChange={this.handlePageInput} min={1} max={totalPages} />} of {totalPages}</div>
      </form>
    </div>

    return pageForm;
  }

  render() {
    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);
    const { selectedPage } = this.state;

    return (
      <div className={cx('paginator')}>
        {this.buildPageSelectorForm(totalPages, this.handlePageChange)}
        <div>
          <a className={cx(['nav-link', selectedPage === 1 ? 'is-disabled' : null])} tabIndex="0" onClick={this.handlePageChange(1)}>First</a>
          <a className={cx(['nav-link', selectedPage === 1 ? 'is-disabled' : null])} tabIndex="0" onClick={this.handlePageChange(selectedPage === 1 ? 1 : selectedPage - 1)}>{<IconPrevious />} Previous</a>
          <a className={cx(['nav-link', selectedPage === totalPages ? 'is-disabled' : null])} tabIndex="0" onClick={this.handlePageChange(selectedPage === totalPages ? totalPages : selectedPage + 1)}>Next {<IconNext />}</a>
          <a className={cx(['nav-link', selectedPage === totalPages ? 'is-disabled' : null])} tabIndex="0" onClick={this.handlePageChange(totalPages)}>Last</a>
        </div>
      </div>
    );
  }
}

ProgressivePaginator.propTypes = propTypes;

export default ProgressivePaginator;
