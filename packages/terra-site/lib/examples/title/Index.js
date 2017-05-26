'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraMarkdown = require('terra-markdown');

var _terraMarkdown2 = _interopRequireDefault(_terraMarkdown);

var _README = require('terra-title/docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('terra-title/package.json');

require('terra-title');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TitleExamples = function TitleExamples() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { id: 'version' },
      'Version: ',
      _package.version
    ),
    _react2.default.createElement('link', { rel: 'stylesheet', media: 'screen', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css' }),
    _react2.default.createElement(_terraMarkdown2.default, { id: 'readme', src: _README2.default }),
    _react2.default.createElement(
      'h2',
      { id: 'caption' },
      'Caption'
    ),
    _react2.default.createElement(
      'h1',
      { className: 'terra-Title terra-Title--tiny terra-Title--horizontalMiddle' },
      _react2.default.createElement(
        'span',
        { className: 'terra-Title--heading' },
        'Terra Title Horizontal Middle Caption',
        _react2.default.createElement(
          'div',
          { className: 'terra-Title--caption' },
          'Terra Title Caption'
        )
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h1',
      { className: 'terra-Title terra-Title--tiny terra-Title--verticalCenter' },
      _react2.default.createElement(
        'span',
        { className: 'terra-Title--heading' },
        'Terra Title Vertical Center Caption',
        _react2.default.createElement(
          'div',
          { className: 'terra-Title--caption' },
          'Terra Title Caption'
        )
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      { id: 'graphic' },
      'Graphic'
    ),
    _react2.default.createElement(
      'h1',
      { className: 'terra-Title terra-Title--tiny terra-Title--horizontalMiddle' },
      _react2.default.createElement(
        'span',
        { className: 'terra-Title--graphic' },
        _react2.default.createElement('i', { className: 'fa fa-cloud' })
      ),
      _react2.default.createElement(
        'span',
        { className: 'terra-Title--heading' },
        'Terra Title Horizontal Middle Graphic'
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h1',
      { className: 'terra-Title terra-Title--tiny terra-Title--verticalCenter' },
      _react2.default.createElement(
        'span',
        { className: 'terra-Title--graphic' },
        _react2.default.createElement('i', { className: 'fa fa-cloud' })
      ),
      _react2.default.createElement(
        'span',
        { className: 'terra-Title--heading' },
        'Terra Title Vertical Center Graphic'
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      { id: 'horizontal' },
      'Horizontal'
    ),
    _react2.default.createElement(
      'h1',
      { className: 'terra-Title terra-Title--medium terra-Title--horizontalTop' },
      _react2.default.createElement(
        'span',
        { className: 'terra-Title--graphic' },
        _react2.default.createElement('img', { src: 'https://placeholdit.imgix.net/~text?txtsize=20&txt=100%C3%97100&w=100&h=100', alt: 'Placeholder' })
      ),
      _react2.default.createElement(
        'span',
        { className: 'terra-Title--heading' },
        'Terra Title Horizontal Top Graphic Caption',
        _react2.default.createElement(
          'div',
          { className: 'terra-Title--caption' },
          'Terra Title Caption'
        )
      )
    ),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'h1',
      { className: 'terra-Title terra-Title--medium terra-Title--horizontalMiddle' },
      _react2.default.createElement(
        'span',
        { className: 'terra-Title--graphic' },
        _react2.default.createElement('img', { src: 'https://placeholdit.imgix.net/~text?txtsize=20&txt=100%C3%97100&w=100&h=100', alt: 'Placeholder' })
      ),
      _react2.default.createElement(
        'span',
        { className: 'terra-Title--heading' },
        'Terra Title Horizontal Middle Graphic Caption',
        _react2.default.createElement(
          'div',
          { className: 'terra-Title--caption' },
          'Terra Title Caption'
        )
      )
    ),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'h1',
      { className: 'terra-Title terra-Title--medium terra-Title--horizontalBottom' },
      _react2.default.createElement(
        'span',
        { className: 'terra-Title--graphic' },
        _react2.default.createElement('img', { src: 'https://placeholdit.imgix.net/~text?txtsize=20&txt=100%C3%97100&w=100&h=100', alt: 'Placeholder' })
      ),
      _react2.default.createElement(
        'span',
        { className: 'terra-Title--heading' },
        'Terra Title Horizontal Bottom Graphic Caption',
        _react2.default.createElement(
          'div',
          { className: 'terra-Title--caption' },
          'Terra Title Caption'
        )
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      { id: 'size' },
      'Size'
    ),
    _react2.default.createElement(
      'h1',
      { className: 'terra-Title terra-Title--huge' },
      'h1 terra-title-huge'
    ),
    _react2.default.createElement(
      'h2',
      { className: 'terra-Title terra-Title--huge' },
      'h2 terra-title-huge'
    ),
    _react2.default.createElement(
      'h3',
      { className: 'terra-Title terra-Title--huge' },
      'h3 terra-title-huge'
    ),
    _react2.default.createElement(
      'h4',
      { className: 'terra-Title terra-Title--huge' },
      'h4 terra-title-huge'
    ),
    _react2.default.createElement(
      'h5',
      { className: 'terra-Title terra-Title--huge' },
      'h5 terra-title-huge'
    ),
    _react2.default.createElement(
      'h6',
      { className: 'terra-Title terra-Title--huge' },
      'h6 terra-title-huge'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h1',
      { className: 'terra-Title terra-Title--large' },
      'h1 terra-title-large'
    ),
    _react2.default.createElement(
      'h2',
      { className: 'terra-Title terra-Title--large' },
      'h2 terra-title-large'
    ),
    _react2.default.createElement(
      'h3',
      { className: 'terra-Title terra-Title--large' },
      'h3 terra-title-large'
    ),
    _react2.default.createElement(
      'h4',
      { className: 'terra-Title terra-Title--large' },
      'h4 terra-title-large'
    ),
    _react2.default.createElement(
      'h5',
      { className: 'terra-Title terra-Title--large' },
      'h5 terra-title-large'
    ),
    _react2.default.createElement(
      'h6',
      { className: 'terra-Title terra-Title--large' },
      'h6 terra-title-large'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h1',
      { className: 'terra-Title terra-Title--medium' },
      'h1 terra-title-medium'
    ),
    _react2.default.createElement(
      'h2',
      { className: 'terra-Title terra-Title--medium' },
      'h2 terra-title-medium'
    ),
    _react2.default.createElement(
      'h3',
      { className: 'terra-Title terra-Title--medium' },
      'h3 terra-title-medium'
    ),
    _react2.default.createElement(
      'h4',
      { className: 'terra-Title terra-Title--medium' },
      'h4 terra-title-medium'
    ),
    _react2.default.createElement(
      'h5',
      { className: 'terra-Title terra-Title--medium' },
      'h5 terra-title-medium'
    ),
    _react2.default.createElement(
      'h6',
      { className: 'terra-Title terra-Title--medium' },
      'h6 terra-title-medium'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h1',
      { className: 'terra-Title terra-Title--small' },
      'h1 terra-title-small'
    ),
    _react2.default.createElement(
      'h2',
      { className: 'terra-Title terra-Title--small' },
      'h2 terra-title-small'
    ),
    _react2.default.createElement(
      'h3',
      { className: 'terra-Title terra-Title--small' },
      'h3 terra-title-small'
    ),
    _react2.default.createElement(
      'h4',
      { className: 'terra-Title terra-Title--small' },
      'h4 terra-title-small'
    ),
    _react2.default.createElement(
      'h5',
      { className: 'terra-Title terra-Title--small' },
      'h5 terra-title-small'
    ),
    _react2.default.createElement(
      'h6',
      { className: 'terra-Title terra-Title--small' },
      'h6 terra-title-small'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h1',
      { className: 'terra-Title terra-Title--tiny' },
      'h1 terra-title-tiny'
    ),
    _react2.default.createElement(
      'h2',
      { className: 'terra-Title terra-Title--tiny' },
      'h2 terra-title-tiny'
    ),
    _react2.default.createElement(
      'h3',
      { className: 'terra-Title terra-Title--tiny' },
      'h3 terra-title-tiny'
    ),
    _react2.default.createElement(
      'h4',
      { className: 'terra-Title terra-Title--tiny' },
      'h4 terra-title-tiny'
    ),
    _react2.default.createElement(
      'h5',
      { className: 'terra-Title terra-Title--tiny' },
      'h5 terra-title-tiny'
    ),
    _react2.default.createElement(
      'h6',
      { className: 'terra-Title terra-Title--tiny' },
      'h6 terra-title-tiny'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      { id: 'vertical' },
      'Vertical'
    ),
    _react2.default.createElement(
      'h1',
      { className: 'terra-Title terra-Title--medium terra-Title--verticalStart' },
      _react2.default.createElement(
        'span',
        { className: 'terra-Title--graphic' },
        _react2.default.createElement('i', { className: 'fa fa-cloud' })
      ),
      _react2.default.createElement(
        'span',
        { className: 'terra-Title--heading' },
        'Terra Title Horizontal Start Graphic Caption',
        _react2.default.createElement(
          'div',
          { className: 'terra-Title--caption' },
          'Terra Title Caption'
        )
      )
    ),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'h1',
      { className: 'terra-Title terra-Title--medium terra-Title--verticalCenter' },
      _react2.default.createElement(
        'span',
        { className: 'terra-Title--graphic' },
        _react2.default.createElement('i', { className: 'fa fa-cloud' })
      ),
      _react2.default.createElement(
        'span',
        { className: 'terra-Title--heading' },
        'Terra Title Horizontal Center Graphic Caption',
        _react2.default.createElement(
          'div',
          { className: 'terra-Title--caption' },
          'Terra Title Caption'
        )
      )
    ),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'h1',
      { className: 'terra-Title terra-Title--medium terra-Title--verticalEnd' },
      _react2.default.createElement(
        'span',
        { className: 'terra-Title--graphic' },
        _react2.default.createElement('i', { className: 'fa fa-cloud' })
      ),
      _react2.default.createElement(
        'span',
        { className: 'terra-Title--heading' },
        'Terra Title Horizontal End Graphic Caption',
        _react2.default.createElement(
          'div',
          { className: 'terra-Title--caption' },
          'Terra Title Caption'
        )
      )
    )
  );
};

// eslint-disable-next-line import/extensions
exports.default = TitleExamples;