// This file is based on https://github.com/reactjs/reactjs.org/blob/master/src/prism-styles.js

const prismColors = {
  plainText: '#ffffff',
  char: '#D8DEE9',
  comment: '#B2B2B2',
  keyword: '#c5a5c5',
  lineHighlight: '#353b45', // colors.dark + extra lightness
  primitive: '#5a9bcf',
  string: '#8dc891',
  variable: '#d7deea',
  boolean: '#ff8b50',
  punctuation: '#88C6BE',
  tag: '#fc929e',
  function: '#79b6f2',
  className: '#FAC863',
  method: '#6699CC',
  operator: '#fc929e',
};

export default {
  'code[class*="language-"]': {
    color: '#f8f8f2',
    background: 'none',
    textShadow: '0 1px rgba(0, 0, 0, 0.3)',
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
  },
  'pre[class*="language-"]': {
    color: '#fff',
    background: 'rgb(40, 44, 52)',
    textShadow: '0 1px rgba(0, 0, 0, 0.3)',
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    padding: '1em',
    margin: '.5em 0',
    overflow: 'auto',
    borderRadius: '0.3em',
  },
  ':not(pre) > code[class*="language-"]': {
    background: 'rgb(40, 44, 52)',
    padding: '.1em',
    borderRadius: '.3em',
    whiteSpace: 'normal',
  },
  'plain-text': {
    color: prismColors.plainText,
  },
  'attr-name': {
    color: prismColors.keyword,
  },
  comment: {
    color: prismColors.comment,
  },
  'block-comment': {
    color: prismColors.comment,
  },
  prolog: {
    color: prismColors.comment,
  },
  doctype: {
    color: prismColors.comment,
  },
  cdata: {
    color: prismColors.comment,
  },
  property: {
    color: prismColors.primitive,
  },
  number: {
    color: prismColors.primitive,
  },
  'function-name': {
    color: prismColors.primitive,
  },
  constant: {
    color: prismColors.primitive,
  },
  symbol: {
    color: prismColors.primitive,
  },
  deleted: {
    color: prismColors.primitive,
  },
  boolean: {
    color: prismColors.boolean,
  },
  tag: {
    color: prismColors.tag,
  },
  string: {
    color: prismColors.string,
  },
  punctuation: {
    color: prismColors.punctuation,
  },
  selector: {
    color: prismColors.char,
  },
  char: {
    color: prismColors.char,
  },
  builtin: {
    color: prismColors.char,
  },
  inserted: {
    color: prismColors.char,
  },
  function: {
    color: prismColors.function,
  },
  operator: {
    color: prismColors.variable,
  },
  entity: {
    color: prismColors.variable,
    cursor: 'help',
  },
  url: {
    color: prismColors.variable,
  },
  '.language-css .token.string': {
    color: prismColors.variable,
  },
  '.style .token.string': {
    color: prismColors.variable,
  },
  variable: {
    color: prismColors.variable,
  },
  'attr-value': {
    color: prismColors.string,
  },
  keyword: {
    color: prismColors.keyword,
  },
  'at-rule': {
    color: prismColors.className,
  },
  'class-name': {
    color: prismColors.className,
  },
  important: {
    fontWeight: 400,
  },
  bold: {
    fontWeight: 700,
  },
  italic: {
    fontStyle: 'italic',
  },
  '.namespace': {
    opacity: 0.7,
  },

};
