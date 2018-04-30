import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconNext from 'terra-icon/lib/icon/IconNext';
import IconPrevious from 'terra-icon/lib/icon/IconPrevious';
import NumberField from 'terra-form/lib/NumberField';

import 'terra-base/lib/baseStyles';
import styles from './Paginator.scss';

import { calculatePages } from './_paginationUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Function to be executed when a navigation element is selected.
   */
  onPageChange: PropTypes.func.isRequired,
  /**
   * The active/selected page.
   */
  selectedPage: PropTypes.number.isRequired,
  /**
   * Total number of all items being paginated.
   */
  totalCount: PropTypes.number.isRequired,
  /**
   * Total number of items per page.
   */
  itemCountPerPage: PropTypes.number.isRequired,
};

class ProgressivePaginator extends React.Component {
  constructor(props) {
    super(props);

    const { selectedPage, totalCount } = this.props;

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
    };
  }

  buildPageSelectorForm(totalPages, onSubmit) {
    const { pageInput } = this.state;
    const inputAttrs = { className: cx('page-input') };

    const pageForm = (<form className={cx('page-form')} onSubmit={onSubmit(parseInt(pageInput, 10))}>
      Page {<NumberField isInline inputAttrs={inputAttrs} value={pageInput} onChange={this.handlePageInput} min={1} max={totalPages} />} of {totalPages}
    </form>);

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
