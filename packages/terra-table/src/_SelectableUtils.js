/**
* Returns the index of the first selected row for SingleSelectableRows.
*/
const initialSingleSelectRowIndex = (rows) => {
  if (!rows || !rows.length) {
    return null;
  }

  for (let i = 0; i < rows.length; i += 1) {
    if (rows[i].props.isSelected) {
      return i;
    }
  }
  return -1;
};

/**
* Returns if the selected row index should update for SingleSelectableRows.
*/
const shouldHandleSingleSelectRowSelection = (currentIndex, newIndex) => currentIndex !== newIndex;

/**
* The KEYCODES supported by seletectable table components.
*/
const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
};

const SelectableUtils = {
  initialSingleSelectRowIndex,
  shouldHandleSingleSelectRowSelection,
  KEYCODES,
};

export default SelectableUtils;
