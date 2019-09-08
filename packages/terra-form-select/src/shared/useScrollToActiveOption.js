import { useEffect } from 'react';

export default function useScrollToActiveOption(menuRef, activeDescendantId) {
  useEffect(() => {
    const { current: menu } = menuRef;

    if (!menu) {
      return;
    }

    const activeOption = document.getElementById(activeDescendantId);

    if (activeOption === null) {
      return;
    }

    const dropdownRect = menu.parentNode.getBoundingClientRect();
    const optionRect = activeOption.getBoundingClientRect();

    if (optionRect.top < dropdownRect.top) {
      activeOption.scrollIntoView();
    } else if (optionRect.bottom > dropdownRect.bottom) {
      activeOption.scrollIntoView(false);
    }
  }, [activeDescendantId, menuRef]);
}
