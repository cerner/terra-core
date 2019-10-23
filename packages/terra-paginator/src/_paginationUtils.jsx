import * as KeyCode from 'keycode-js';

/**
 * Enables focus styles for the target of the given event. Typically used as an onBlur callback on selectable elements.
 * See: terra-application-navigation/src/utils/helpers.js
 */
const enableFocusActiveStyles = (event) => {
  if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
    event.currentTarget.setAttribute('data-active-styles-enabled', 'true');
  }

  if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE || event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {
    event.currentTarget.setAttribute('data-focus-styles-enabled', 'true');
  }
};

/**
 * Disables focus styles for the target of the given event. Typically used as an onMouseDown callback on selectable elements.
 * See: terra-application-navigation/src/utils/helpers.js
 */
const disableFocusActiveStyles = (event) => {
  if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
    event.currentTarget.setAttribute('data-active-styles-enabled', 'false');
  }

  if (event.nativeEvent.keyCode === KeyCode.KEY_TAB) {
    event.currentTarget.setAttribute('data-focus-styles-enabled', 'true');
  }
};

/**
 * Disable focus style on Blur event.
 */
const disableFocusOnBlur = (event) => {
  event.currentTarget.setAttribute('data-focus-styles-enabled', 'false');
};

const calculatePages = (totalCount, itemCountPerPage) => Math.ceil(totalCount / itemCountPerPage);

const pageSet = (index, totalPages) => {
  const sequence = [];
  const numberShiftPoint = 7;
  const maxPagesDisplayed = 10;
  const previousSequenceCount = 5;
  const nextSequenceCount = 4;
  let mutableIndex = index;

  if (mutableIndex < 1) {
    mutableIndex = 1;
  } else if (mutableIndex > totalPages) {
    mutableIndex = totalPages;
  }

  if (mutableIndex < numberShiftPoint) {
    const pagesDisplayed = totalPages < maxPagesDisplayed ? totalPages : maxPagesDisplayed;

    for (let i = 1; i <= pagesDisplayed; i += 1) {
      sequence.push(i);
    }
  } else if (mutableIndex <= totalPages && mutableIndex > totalPages - maxPagesDisplayed && mutableIndex > totalPages - previousSequenceCount) {
    for (let i = totalPages; i > totalPages - maxPagesDisplayed && i > 0; i -= 1) {
      sequence.push(i);
    }
  } else {
    for (let i = mutableIndex; i >= mutableIndex - previousSequenceCount; i -= 1) {
      sequence.push(i);
    }

    for (let i = mutableIndex + 1; i <= mutableIndex + nextSequenceCount; i += 1) {
      sequence.push(i);
    }
  }

  return sequence.sort((a, b) => a - b);
};

export {
  calculatePages, disableFocusActiveStyles, disableFocusOnBlur, enableFocusActiveStyles, pageSet,
};
