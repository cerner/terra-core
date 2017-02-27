/**
 * ModalManager is used for monitoring the enter and exit of multiple modals on the same page.
 * Current feature:
 * - If any modal is open, disable the scrolling of background by updating the style of <body/>.
 */
class ModalManager {
  constructor() {
    this.modals = new Set();
  }

  add(modal) {
    this.modals.add(modal);
    this.updateBodyStyle();
  }

  remove(modal) {
    this.modals.delete(modal);
    this.updateBodyStyle();
  }

  updateBodyStyle() {
    if (this.modals.size) {
      document.body.classList.add('terra-Modal--open');
    } else {
      document.body.classList.remove('terra-Modal--open');
    }
  }
}

export default ModalManager;
