import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import ResponsiveElement from 'terra-responsive-element';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import styles from './Paginator.module.scss';
import { calculatePages, pageSet } from './_paginationUtils';
import PaginatorButton from './_PaginatorButton';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Function to be executed when a navigation element is selected.
   */
  onPageChange: PropTypes.func.isRequired,
  /**
   * The active/selected page. Used to set the default selected page or maintain selection across renders.
   * Required when using totalCount and itemCountPerPage.
   */
  selectedPage: PropTypes.number,
  /**
   * Total number of all items being paginated.
   * Required when using itemCountPerPage and selectedPage.
   */
  totalCount: PropTypes.number,
  /**
    * Total number of items per page.
    * Required when using selectedPage and totalCount.
    */
  itemCountPerPage: PropTypes.number,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: intlShape.isRequired,
};

class Paginator extends React.Component {
  constructor(props) {
    super(props);

    const { selectedPage, totalCount, itemCountPerPage } = this.props;

    this.state = {
      selectedPage: selectedPage && totalCount ? selectedPage : undefined,
      pageSequence: selectedPage && totalCount ? pageSet(selectedPage, calculatePages(totalCount, itemCountPerPage)) : undefined,
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.hasNavContext = this.hasNavContext.bind(this);
    this.buildPageButtons = this.buildPageButtons.bind(this);
    this.reducedPaginator = this.reducedPaginator.bind(this);
  }

  handlePageChange(index) {
    return (event) => {
      event.preventDefault();

      if (Number.isNaN(Number(index))) {
        this.props.onPageChange(event.currentTarget.attributes['aria-label'].value);

        return false;
      }

      this.props.onPageChange(index);
      this.setState({
        selectedPage: index,
        pageSequence: pageSet(index, calculatePages(this.props.totalCount, this.props.itemCountPerPage)),
      });

      return false;
    };
  }

  buildPageButtons(totalPages, onClick) {
    const { intl } = this.props;
    const { pageSequence, selectedPage } = this.state;

    const pageButtons = [];

    pageSequence.forEach((val) => {
      const paginationLinkClassNames = cx([
        'nav-link',
        val === selectedPage ? 'is-selected' : null,
      ]);

      if (val > totalPages) {
        return;
      }
      pageButtons.push((
        <PaginatorButton
          ariaLabel={intl.formatMessage({ id: 'Terra.paginator.pageIndex' }, { pageNumber: val })}
          ariaCurrent={val === selectedPage}
          className={paginationLinkClassNames}
          tabIndex={val === selectedPage ? null : '0'}
          key={`pageButton_${val}`}
          onClick={onClick(val)}
        >
          {val}
        </PaginatorButton>
      ));
    });

    return pageButtons;
  }

  hasNavContext() {
    return this.props.totalCount && this.props.itemCountPerPage;
  }

  defaultPaginator() {
    const { intl } = this.props;
    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);
    const { selectedPage } = this.state;
    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;

    const fullView = (
      <div className={cx(['paginator', !this.hasNavContext() && 'pageless'])}>
        {
          this.hasNavContext() && (
          <PaginatorButton
            ariaDisabled={selectedPage === 1}
            ariaLabel={intl.formatMessage({ id: 'Terra.paginator.first' })}
            className={cx(['nav-link', 'left-controls', selectedPage === 1 && 'is-disabled'])}
            tabIndex={selectedPage === 1 ? null : '0'}
            onClick={this.handlePageChange(1)}
          >
            {intl.formatMessage({ id: 'Terra.paginator.first' })}
          </PaginatorButton>
          )
        }
        <PaginatorButton
          ariaDisabled={selectedPage === 1}
          ariaLabel={intl.formatMessage({ id: 'Terra.paginator.previous' })}
          className={cx(['nav-link', 'left-controls', 'previous', selectedPage === 1 && 'is-disabled'])}
          tabIndex={selectedPage === 1 ? null : '0'}
          onClick={this.handlePageChange(previousPageIndex)}
        >
          <span className={cx('icon')} />
          {intl.formatMessage({ id: 'Terra.paginator.previous' })}
        </PaginatorButton>
        {this.hasNavContext() && this.buildPageButtons(totalPages, this.handlePageChange)}
        <PaginatorButton
          ariaDisabled={selectedPage === totalPages}
          ariaLabel={intl.formatMessage({ id: 'Terra.paginator.next' })}
          className={cx(['nav-link', 'right-controls', 'next', selectedPage === totalPages && 'is-disabled'])}
          tabIndex={selectedPage === totalPages ? null : '0'}
          onClick={this.handlePageChange(nextPageIndex)}
        >
          {intl.formatMessage({ id: 'Terra.paginator.next' })}
          <span className={cx('icon')} />
        </PaginatorButton>
        {
          this.hasNavContext() && (
          <PaginatorButton
            ariaDisabled={selectedPage === totalPages}
            ariaLabel={intl.formatMessage({ id: 'Terra.paginator.last' })}
            className={cx(['nav-link', 'right-controls', selectedPage === totalPages && 'is-disabled'])}
            tabIndex={selectedPage === totalPages ? null : '0'}
            onClick={this.handlePageChange(totalPages)}
          >
            {intl.formatMessage({ id: 'Terra.paginator.last' })}
          </PaginatorButton>
          )
        }
      </div>
    );

    return fullView;
  }

  reducedPaginator() {
    const { intl } = this.props;
    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);
    const { selectedPage } = this.state;
    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;

    const reducedView = (
      <div className={cx(['paginator', !this.hasNavContext() && 'pageless'])} role="navigation" aria-label="pagination">
        {
          this.hasNavContext() && (
          <PaginatorButton
            ariaDisabled={selectedPage === 1}
            ariaLabel={intl.formatMessage({ id: 'Terra.paginator.first' })}
            className={cx(['nav-link', 'left-controls', selectedPage === 1 && 'is-disabled'])}
            tabIndex={selectedPage === 1 ? null : '0'}
            onClick={this.handlePageChange(1)}
          >
            {intl.formatMessage({ id: 'Terra.paginator.first' })}
          </PaginatorButton>
          )
        }
        <PaginatorButton
          ariaDisabled={selectedPage === 1}
          ariaLabel={intl.formatMessage({ id: 'Terra.paginator.previous' })}
          className={cx(['nav-link', 'left-controls', 'previous', 'icon-only', selectedPage === 1 && 'is-disabled'])}
          tabIndex={selectedPage === 1 ? null : '0'}
          onClick={this.handlePageChange(previousPageIndex)}
        >
          <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.paginator.previous' })} />
          <span className={cx('icon')} />
        </PaginatorButton>
        {this.hasNavContext() && intl.formatMessage({ id: 'Terra.paginator.pageIndex' }, { pageNumber: selectedPage })}
        <PaginatorButton
          ariaDisabled={selectedPage === totalPages}
          ariaLabel={intl.formatMessage({ id: 'Terra.paginator.next' })}
          className={cx(['nav-link', 'right-controls', 'next', 'icon-only', selectedPage === totalPages && 'is-disabled'])}
          tabIndex={selectedPage === totalPages ? null : '0'}
          onClick={this.handlePageChange(nextPageIndex)}
        >
          <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.paginator.next' })} />
          <span className={cx('icon')} />
        </PaginatorButton>
        {
          this.hasNavContext() && (
          <PaginatorButton
            ariaDisabled={selectedPage === totalPages}
            ariaLabel={intl.formatMessage({ id: 'Terra.paginator.last' })}
            className={cx(['nav-link', 'right-controls', selectedPage === totalPages && 'is-disabled'])}
            tabIndex={selectedPage === totalPages ? null : '0'}
            onClick={this.handlePageChange(totalPages)}
          >
            {intl.formatMessage({ id: 'Terra.paginator.last' })}
          </PaginatorButton>
          )
        }
      </div>
    );

    return reducedView;
  }

  render() {
    return <ResponsiveElement tiny={this.reducedPaginator()} medium={this.defaultPaginator()} />;
  }
}

Paginator.propTypes = propTypes;

export default injectIntl(Paginator);
