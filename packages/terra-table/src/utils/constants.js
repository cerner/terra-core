const ERRORS = {};
ERRORS.ROW_HEADER_INDEX_EXCEEDS_PINNED = 'Prop rowHeaderIndex exceeds the size of pinnedColumns.';
ERRORS.ROW_HEADER_INDEX_LESS_THAN_ZERO = 'Prop rowHeaderIndex must be a positive integer.';
ERRORS.ROW_HEADER_INDEX_NOT_AN_INTEGER = 'Prop rowHeaderIndex must be an integer.';
ERRORS.PINNED_COLUMNS_UNDEFINED = 'to be properly accessible, the row header column should be a pinned column. please set pinned columns';

export default ERRORS;
