const autoResizeTextareaHeight = (onChange, baseRowCount) =>
  (e) => {
    const textarea = e.currentTarget;
    const lineHeight = Math.ceil(parseFloat(window.getComputedStyle(textarea).lineHeight, 0));
    const minRows = baseRowCount;
    textarea.rows = minRows;
    const rows = Math.ceil((textarea.scrollHeight - textarea.baseScrollHeight) / lineHeight);
    textarea.rows = minRows + rows;

    if (onChange) {
      onChange(e);
    }
  };

const setTextareaBaseHeight = onFocus =>
  (e) => {
    if (onFocus) {
      onFocus(e);
    }

    const textarea = e.currentTarget;

    if (!textarea.baseScrollHeight) {
      const savedValue = textarea.value;
      textarea.value = '';
      textarea.baseScrollHeight = textarea.scrollHeight;
      textarea.value = savedValue;
      autoResizeTextareaHeight(e);
    }
  };

export default {
  autoResizeTextareaHeight,
  setTextareaBaseHeight,
};
