import React from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { injectIntl } from 'react-intl';
import ResponsiveElement from 'terra-responsive-element';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import * as KeyCode from 'keycode-js';
import styles from './Paginator.module.scss';
import { calculatePages, pageSet } from './_paginationUtils';
import PaginatorButton from './_PaginatorButton';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Function to be executed when a navigation element is selected.
   */
  onPageChange: PropTypes.func.isRequired,
  /**
   * The active/selected page. Used to set the default selected page or maintain selection across renders.
   * Required when using totalCount and itemCountPerPage.
   */
  selectedPage: PropTypes.number.isRequired,
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
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)
   * Preferred method: Allows consumers to create an accessible name for the paginator by adding the ID of heading that describes paginator content.
   */
  ariaLabelledBy: PropTypes.string,
  /**
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)
   * Allows consumers to create an accessible name for the paginator by adding a meaningful and descriptive text string.
   */
  ariaLabel: PropTypes.string,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

class Paginator extends React.Component {
  constructor(props) {
    super(props);

    this.handlePageChange = this.handlePageChange.bind(this);
    this.buildPageButtons = this.buildPageButtons.bind(this);
    this.reducedPaginator = this.reducedPaginator.bind(this);
    this.setPaginator = this.setPaginator.bind(this);
    this.state = {
      showReducedPaginator: false,
      selectedPageMessage: '',
    };
  }

  handlePageChange(index) {
    const {
      intl,
      itemCountPerPage,
      totalCount,
    } = this.props;

    return (event) => {
      if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
        event.preventDefault();
      }

      if (Number.isNaN(Number(index))) {
        this.props.onPageChange(event.currentTarget.attributes['aria-label'].value);

        return false;
      }

      let message;
      if (totalCount && itemCountPerPage) {
        message = intl.formatMessage({ id: 'Terra.paginator.pageSelectedWithCount' }, { pageNumber: index, pageNumberTotal: calculatePages(totalCount, itemCountPerPage) });
      } else {
        message = intl.formatMessage({ id: 'Terra.paginator.pageSelected' }, { pageNumber: index });
      }

      this.props.onPageChange(index);
      this.setState({ selectedPageMessage: message });

      return false;
    };
  }

  setPaginator(value) {
    const showReducedPaginator = value === 'tiny';
    if (this.state.showReducedPaginator !== showReducedPaginator) {
      this.setState({ showReducedPaginator });
    }
  }

  buildPageButtons(totalPages, onClick) {
    const {
      intl,
      itemCountPerPage,
      selectedPage,
      totalCount,
    } = this.props;
    const pageSequence = pageSet(selectedPage, calculatePages(totalCount, itemCountPerPage));
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
        <li>
          <PaginatorButton
            ariaLabel={intl.formatMessage({ id: 'Terra.paginator.pageIndex' }, { pageNumber: val })}
            ariaCurrent={val === selectedPage}
            className={paginationLinkClassNames}
            key={`pageButton_${val}`}
            onClick={onClick(val)}
            onKeyDown={onClick(val)}
            tabIndex={val === selectedPage ? '-1' : '0'}
          >
            {val}
          </PaginatorButton>
        </li>
      ));
    });

    return pageButtons;
  }

  defaultPaginator() {
    const theme = this.context;
    const {
      selectedPage,
      intl,
      totalCount,
      itemCountPerPage,
      ariaLabelledBy,
      ariaLabel,
    } = this.props;
    const totalPages = calculatePages(totalCount, itemCountPerPage);
    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;
    const paginatorAriaLabel = ariaLabel || 'pagination';
    const renderFirstandLastButton = totalCount > 0;

    const fullViewChildren = (
      <ul className={cx('list')}>
        {
          renderFirstandLastButton && (
            <li>
              <PaginatorButton
                ariaDisabled={selectedPage === 1}
                ariaLabel={intl.formatMessage({ id: 'Terra.paginator.first' })}
                className={cx(['nav-link', 'left-controls', selectedPage === 1 && 'is-disabled'])}
                disabled={selectedPage === 1}
                onClick={this.handlePageChange(1)}
                onKeyDown={this.handlePageChange(1)}
              >
                {intl.formatMessage({ id: 'Terra.paginator.first' })}
              </PaginatorButton>
            </li>
          )
        }
        <li>
          <PaginatorButton
            ariaDisabled={selectedPage === 1}
            ariaLabel={intl.formatMessage({ id: 'Terra.paginator.previous' })}
            className={cx(['nav-link', 'left-controls', 'previous', selectedPage === 1 && 'is-disabled'])}
            disabled={selectedPage === 1}
            onClick={this.handlePageChange(previousPageIndex)}
            onKeyDown={this.handlePageChange(previousPageIndex)}
          >
            <span className={cx('icon')} />
            {intl.formatMessage({ id: 'Terra.paginator.previous' })}
          </PaginatorButton>
        </li>
        {totalCount && this.buildPageButtons(totalPages, this.handlePageChange)}
        <li>
          <PaginatorButton
            ariaDisabled={selectedPage === totalPages}
            ariaLabel={intl.formatMessage({ id: 'Terra.paginator.next' })}
            className={cx(['nav-link', 'right-controls', 'next', selectedPage === totalPages && 'is-disabled'])}
            disabled={selectedPage === totalPages}
            onClick={this.handlePageChange(nextPageIndex)}
            onKeyDown={this.handlePageChange(nextPageIndex)}
          >
            {intl.formatMessage({ id: 'Terra.paginator.next' })}
            <span className={cx('icon')} />
          </PaginatorButton>
        </li>
        {
          renderFirstandLastButton && (
            <li>
              <PaginatorButton
                ariaDisabled={selectedPage === totalPages}
                ariaLabel={intl.formatMessage({ id: 'Terra.paginator.last' })}
                className={cx(['nav-link', 'right-controls', selectedPage === totalPages && 'is-disabled'])}
                disabled={selectedPage === totalPages}
                onClick={this.handlePageChange(totalPages)}
                onKeyDown={this.handlePageChange(totalPages)}
              >
                {intl.formatMessage({ id: 'Terra.paginator.last' })}
              </PaginatorButton>
            </li>
          )
        }
      </ul>
    );

    const navigationMessage = (
      <VisuallyHiddenText aria-live="polite" aria-relevant="additions text" text={this.state.selectedPageMessage} />
    );

    const fullView = (
      <nav
        className={cx('paginator', !totalCount && 'pageless', theme.className)}
        aria-labelledby={ariaLabelledBy}
        aria-label={ariaLabelledBy ? undefined : paginatorAriaLabel}
      >
        {navigationMessage}
        {fullViewChildren}
      </nav>
    );

    return fullView;
  }

  reducedPaginator() {
    const theme = this.context;
    const {
      selectedPage,
      intl,
      totalCount,
      itemCountPerPage,
      ariaLabelledBy,
      ariaLabel,
    } = this.props;
    const totalPages = calculatePages(totalCount, itemCountPerPage);
    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;
    const paginatorAriaLabel = ariaLabel || 'pagination';
    const renderFirstandLastButton = totalCount > 0;

    const reducedViewChildren = (
      <>
        <div>
          {
            totalCount && intl.formatMessage({ id: 'Terra.paginator.pageIndex' }, { pageNumber: selectedPage })
          }
        </div>
        <ul className={cx('list')}>
          {
            renderFirstandLastButton && (
              <li>
                <PaginatorButton
                  ariaDisabled={selectedPage === 1}
                  ariaLabel={intl.formatMessage({ id: 'Terra.paginator.first' })}
                  className={cx(['nav-link', 'left-controls', selectedPage === 1 && 'is-disabled'])}
                  disabled={selectedPage === 1}
                  onClick={this.handlePageChange(1)}
                  onKeyDown={this.handlePageChange(1)}
                >
                  {intl.formatMessage({ id: 'Terra.paginator.first' })}
                </PaginatorButton>
              </li>
            )
          }
          <li>
            <PaginatorButton
              ariaDisabled={selectedPage === 1}
              ariaLabel={intl.formatMessage({ id: 'Terra.paginator.previous' })}
              className={cx(['nav-link', 'left-controls', 'previous', selectedPage === 1 && 'is-disabled'])}
              disabled={selectedPage === 1}
              onClick={this.handlePageChange(previousPageIndex)}
              onKeyDown={this.handlePageChange(previousPageIndex)}
            >
              <span className={cx('icon')} />
              {intl.formatMessage({ id: 'Terra.paginator.previous' })}
            </PaginatorButton>
          </li>
          <li>
            <PaginatorButton
              ariaDisabled={selectedPage === totalPages}
              ariaLabel={intl.formatMessage({ id: 'Terra.paginator.next' })}
              className={cx(['nav-link', 'right-controls', 'next', 'icon-only', selectedPage === totalPages && 'is-disabled'])}
              disabled={selectedPage === totalPages}
              onClick={this.handlePageChange(nextPageIndex)}
              onKeyDown={this.handlePageChange(nextPageIndex)}
            >
              <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.paginator.next' })} />
              <span className={cx('icon')} />
            </PaginatorButton>
          </li>
          {
            renderFirstandLastButton && (
              <li>
                <PaginatorButton
                  ariaDisabled={selectedPage === totalPages}
                  ariaLabel={intl.formatMessage({ id: 'Terra.paginator.last' })}
                  className={cx(['nav-link', 'right-controls', selectedPage === totalPages && 'is-disabled'])}
                  disabled={selectedPage === totalPages}
                  onClick={this.handlePageChange(totalPages)}
                  onKeyDown={this.handlePageChange(totalPages)}
                >
                  {intl.formatMessage({ id: 'Terra.paginator.last' })}
                </PaginatorButton>
              </li>
            )
          }
        </ul>
      </>
    );

    const navigationMessage = (
      <VisuallyHiddenText aria-live="polite" aria-relevant="additions text" text={this.state.selectedPageMessage} />
    );

    const reducedView = (
      <nav
        className={cx('paginator', theme.className)}
        aria-labelledby={ariaLabelledBy}
        aria-label={ariaLabelledBy ? undefined : paginatorAriaLabel}
      >
        {navigationMessage}
        {reducedViewChildren}
      </nav>
    );

    return reducedView;
  }

  render() {
    return (
      <ResponsiveElement
        onChange={this.setPaginator}
      >
        { this.state.showReducedPaginator ? this.reducedPaginator() : this.defaultPaginator()}
      </ResponsiveElement>
    );
  }
}

Paginator.propTypes = propTypes;
Paginator.contextType = ThemeContext;

export default injectIntl(Paginator);
