'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraMarkdown = require('terra-markdown');

var _terraMarkdown2 = _interopRequireDefault(_terraMarkdown);

var _README = require('terra-content/docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('terra-content/package.json');

require('terra-content');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies */

var ContentExamples = function ContentExamples() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { id: 'version' },
      'Version: ',
      _package.version
    ),
    _react2.default.createElement(_terraMarkdown2.default, { id: 'readme', src: _README2.default }),
    _react2.default.createElement(
      'h2',
      null,
      'Content'
    ),
    _react2.default.createElement(
      'div',
      { className: 'terra-Content' },
      _react2.default.createElement(
        'h1',
        null,
        'Level 1 Heading'
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Level 2 Heading'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Level 3 Heading'
      ),
      _react2.default.createElement(
        'h4',
        null,
        'Level 4 Heading'
      ),
      _react2.default.createElement(
        'h5',
        null,
        'Level 5 Heading'
      ),
      _react2.default.createElement(
        'h6',
        null,
        'Level 6 Heading'
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'terra-Content' },
      _react2.default.createElement(
        'h2',
        null,
        'Unordered List'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          'Cereal'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Bread'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Pizza',
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              'Sauce'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Cheese'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Crust'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Toppings'
            )
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          'Milk'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Fruit'
        )
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Ordered List'
      ),
      _react2.default.createElement(
        'ol',
        null,
        _react2.default.createElement(
          'li',
          null,
          'First Item'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Second Item'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Third Item'
        )
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Description list'
      ),
      _react2.default.createElement(
        'dl',
        null,
        _react2.default.createElement(
          'dt',
          null,
          'Coffee'
        ),
        _react2.default.createElement(
          'dd',
          null,
          'Black hot drink'
        ),
        _react2.default.createElement(
          'dt',
          null,
          'Milk'
        ),
        _react2.default.createElement(
          'dd',
          null,
          'White cold drink'
        )
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'terra-Content' },
      _react2.default.createElement(
        'p',
        null,
        'Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The ',
        _react2.default.createElement(
          'a',
          { href: '#0' },
          'a element'
        ),
        ' example'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The ',
        _react2.default.createElement(
          'abbr',
          null,
          'abbr element'
        ),
        ' and an ',
        _react2.default.createElement(
          'abbr',
          { title: 'Abbreviation' },
          'abbr'
        ),
        ' element with title examples'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The ',
        _react2.default.createElement(
          'b',
          null,
          'b element'
        ),
        ' example'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The ',
        _react2.default.createElement(
          'cite',
          null,
          'cite element'
        ),
        ' example'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The ',
        _react2.default.createElement(
          'code',
          null,
          'code element'
        ),
        ' example'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The ',
        _react2.default.createElement(
          'em',
          null,
          'em element'
        ),
        ' example'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The ',
        _react2.default.createElement(
          'del',
          null,
          'del element'
        ),
        ' example'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The ',
        _react2.default.createElement(
          'dfn',
          null,
          'dfn element'
        ),
        ' and ',
        _react2.default.createElement(
          'dfn',
          { title: 'Title text' },
          'dfn element with title'
        ),
        ' examples'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The ',
        _react2.default.createElement(
          'i',
          null,
          'i element'
        ),
        ' example'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The ',
        _react2.default.createElement(
          'ins',
          null,
          'ins element'
        ),
        ' example'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The ',
        _react2.default.createElement(
          'mark',
          null,
          'mark element'
        ),
        ' example'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The ',
        _react2.default.createElement(
          's',
          null,
          's element'
        ),
        ' example'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The ',
        _react2.default.createElement(
          'samp',
          null,
          'samp element'
        ),
        ' example'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The ',
        _react2.default.createElement(
          'small',
          null,
          'small element'
        ),
        ' example'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The ',
        _react2.default.createElement(
          'span',
          null,
          'span element'
        ),
        ' example'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The ',
        _react2.default.createElement(
          'strong',
          null,
          'strong element'
        ),
        ' example'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The ',
        _react2.default.createElement(
          'sub',
          null,
          'sub element'
        ),
        ' example'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The ',
        _react2.default.createElement(
          'sup',
          null,
          'sup element'
        ),
        ' example'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The ',
        _react2.default.createElement(
          'u',
          null,
          'u element'
        ),
        ' example'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Preformatted text'
      ),
      _react2.default.createElement(
        'pre',
        null,
        '1   3     6     9\n      P R E F O R M A T T E D T E X T\n      ! " # $ % & \' ( ) * + , - . /\n      0 1 2 3 4 5 6 7 8 9 : ; < = > ?\n      @ A B C D E F G H I J K L M N O\n      P Q R S T U V W X Y Z [ \\ ] ^ _\n      ` a b c d e f g h i j k l m n o\n      p q r s t u v w x y z { | } ~'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Code element inside of pre element'
      ),
      _react2.default.createElement(
        'pre',
        null,
        _react2.default.createElement(
          'code',
          null,
          'a {\n  color: @link-color;\n}'
        )
      )
    )
  );
};

// eslint-disable-next-line import/extensions
// remove eslint-disable once terra-content has been published
/* eslint-disable import/no-extraneous-dependencies */
exports.default = ContentExamples;