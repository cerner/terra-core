import React from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { injectIntl } from 'react-intl';
import ResponsiveElement from 'terra-responsive-element';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import * as KeyCode from 'keycode-js';
import styles from './Paginator.module.scss';
import { calculatePages } from './_paginationUtils';
import PaginatorButton from './_PaginatorButton';
import getPageLabel from './PageLabel';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Function to be executed when a navigation element is selected.
   */
  onPageChange: PropTypes.func.isRequired,
  /**
   * The active/selected page.
   */
  selectedPage: PropTypes.number,
  /**
   * Total number of all items being paginated.
   */
  totalCount: PropTypes.number,
  /**
   * Total number of items per page.
   */
  itemCountPerPage: PropTypes.number,
  /**
   * Allows user to set the heading id of the page.
   */
  ariaLabelledBy: PropTypes.string,
  /**
   * Allows user to set the custom paginator label.
   */
  ariaLabel: PropTypes.string,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  /**
   * Allows user to set custom page label. _(usage note: User must pass translated text)_.
   */
  pageLabel: PropTypes.string,
  /**
   * Applies anchor style or not. This is used to render the paginator in grap background with a top borderline.
   */
  anchorStyle: PropTypes.bool,
};

const defaultProps = {
  anchorStyle: false,
};

class ProgressivePaginator extends React.Component {
  constructor(props) {
    super(props);

    const { selectedPage } = this.props;

    this.state = {
      selectedPage: selectedPage || 1,
      showReducedPaginator: false,
      selectedPageMessage: '',
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.defaultProgressivePaginator = this.defaultProgressivePaginator.bind(this);
    this.reducedProgressivePaginator = this.reducedProgressivePaginator.bind(this);
    this.setPaginator = this.setPaginator.bind(this);
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

      this.props.onPageChange(index);

      let message;
      if (totalCount && itemCountPerPage) {
        message = intl.formatMessage({ id: 'Terra.paginator.pageSelectedWithCount' }, { pageNumber: index, pageNumberTotal: calculatePages(totalCount, itemCountPerPage) });
      } else {
        message = intl.formatMessage({ id: 'Terra.paginator.pageSelected' }, { pageNumber: index });
      }

      this.setState({
        selectedPage: index,
        selectedPageMessage: message,
      });
    };
  }

  setPaginator(event) {
    const showReducedPaginator = event === 'tiny';
    if (this.state.showReducedPaginator !== showReducedPaginator) {
      this.setState({ showReducedPaginator });
    }
  }

  defaultProgressivePaginator() {
    const theme = this.context;
    const {
      intl,
      totalCount,
      itemCountPerPage,
      ariaLabelledBy,
      ariaLabel,
      pageLabel,
      anchorStyle,
    } = this.props;
    const totalPages = (totalCount) ? calculatePages(totalCount, itemCountPerPage) : 0;
    const { selectedPage } = this.state;
    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;
    const paginatorAriaLabel = ariaLabel || 'pagination';
    const renderFirstandLastButton = totalCount > 0;

    const { messageId, messageAttributes } = getPageLabel(pageLabel, selectedPage, totalPages);

    const fullViewChildren = (
      <>
        <div>
          {
            intl.formatMessage({ id: messageId }, messageAttributes)
          }
        </div>
        <ul className={cx('progressive-list')}>
          {
            renderFirstandLastButton && (
              <li>
                <PaginatorButton
                  ariaDisabled={selectedPage === 1}
                  ariaLabel={intl.formatMessage({ id: 'Terra.paginator.first' })}
                  className={cx(['nav-link', selectedPage === 1 ? 'is-disabled' : null])}
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
              className={cx(['nav-link', 'previous', selectedPage === 1 ? 'is-disabled' : null])}
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
              className={cx(['nav-link', 'next', selectedPage === totalPages ? 'is-disabled' : null])}
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
                  className={cx(['nav-link', selectedPage === totalPages ? 'is-disabled' : null])}
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
      <VisuallyHiddenText aria-live="polite" aria-relevant="all" text={this.state.selectedPageMessage} />
    );

    const fullView = (
      <nav
        className={cx('paginator', 'progressive', anchorStyle && 'anchor-style', theme.className)}
        aria-labelledby={ariaLabelledBy}
        aria-label={ariaLabelledBy ? undefined : paginatorAriaLabel}
      >
        {navigationMessage}
        {fullViewChildren}
      </nav>
    );

    return fullView;
  }

  reducedProgressivePaginator() {
    const theme = this.context;
    const {
      intl,
      totalCount,
      itemCountPerPage,
      ariaLabelledBy,
      ariaLabel,
      pageLabel,
      anchorStyle,
    } = this.props;
    const totalPages = (totalCount) ? calculatePages(totalCount, itemCountPerPage) : 0;
    const { selectedPage } = this.state;
    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;
    const paginatorAriaLabel = ariaLabel || 'pagination';
    const renderFirstandLastButton = totalCount > 0;

    const { messageId, messageAttributes } = getPageLabel(pageLabel, selectedPage, totalPages);

    const reducedViewChildren = (
      <>
        <div>
          {
            intl.formatMessage({ id: messageId }, messageAttributes)
          }
        </div>
        <ul className={cx('progressive-list')}>
          {
            renderFirstandLastButton && (
              <li>
                <PaginatorButton
                  ariaDisabled={selectedPage === 1}
                  ariaLabel={intl.formatMessage({ id: 'Terra.paginator.first' })}
                  className={cx(['nav-link', selectedPage === 1 ? 'is-disabled' : null])}
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
              className={cx(['nav-link', 'previous', 'icon-only', selectedPage === 1 ? 'is-disabled' : null])}
              disabled={selectedPage === 1}
              onClick={this.handlePageChange(previousPageIndex)}
              onKeyDown={this.handlePageChange(previousPageIndex)}
            >
              <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.paginator.previous' })} />
              <span className={cx('icon')} />
            </PaginatorButton>
          </li>
          <li>
            <PaginatorButton
              ariaDisabled={selectedPage === totalPages}
              ariaLabel={intl.formatMessage({ id: 'Terra.paginator.next' })}
              className={cx(['nav-link', 'next', 'icon-only', selectedPage === totalPages ? 'is-disabled' : null])}
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
                  className={cx(['nav-link', selectedPage === totalPages ? 'is-disabled' : null])}
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
      <VisuallyHiddenText aria-live="polite" aria-relevant="all" text={this.state.selectedPageMessage} />
    );

    const reducedView = (
      <nav
        className={cx('paginator', 'progressive', anchorStyle && 'anchor-style', theme.className)}
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
        { this.state.showReducedPaginator ? this.reducedProgressivePaginator() : this.defaultProgressivePaginator()}
      </ResponsiveElement>
    );
  }
}

ProgressivePaginator.propTypes = propTypes;
ProgressivePaginator.defaultProps = defaultProps;
ProgressivePaginator.contextType = ThemeContext;

export default injectIntl(ProgressivePaginator);
