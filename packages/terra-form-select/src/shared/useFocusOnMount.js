import { useLayoutEffect } from 'react';

export default function useFocusOnMount(ref) {
  // useLayoutEffect runs after ref is populated, useEffect does not
  useLayoutEffect(() => {
    const { current: el } = ref;

    if (el) {
      el.focus();
    }
  }, [ref]);
}
