'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SlidePanel = require('terra-slide-panel/src/SlidePanel');

var _SlidePanel2 = _interopRequireDefault(_SlidePanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mainContentForSlidePanel = function mainContentForSlidePanel(togglePanelHandler) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'header',
      { style: { backgroundColor: 'lightgrey' } },
      _react2.default.createElement(
        'h3',
        { style: { margin: '0px', padding: '5px', display: 'inline-block' } },
        'Main Content'
      ),
      _react2.default.createElement(
        'button',
        { onClick: togglePanelHandler, style: { display: 'inline-block' } },
        'Toggle Panel'
      )
    ),
    _react2.default.createElement(
      'div',
      { style: { margin: '5px' } },
      _react2.default.createElement(
        'p',
        null,
        'This is the main content area of the slide panel. The overall height of the SlidePanel is determined by the intrinsic height of the content in this container.'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          'Item 1'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Item 2'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Item 3'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Item 4'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Item 5'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Item 6'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Item 7'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Item 8'
        )
      )
    )
  );
};

var panelContentForSlidePanel = function panelContentForSlidePanel(togglePanelHandler, toggleFullscreenHandler) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'header',
      { style: { backgroundColor: 'lightgrey' } },
      _react2.default.createElement(
        'h3',
        { style: { margin: '0px', padding: '5px', display: 'inline-block' } },
        'Panel Content'
      ),
      _react2.default.createElement(
        'button',
        { onClick: togglePanelHandler, style: { display: 'inline-block' } },
        'Toggle Panel'
      ),
      _react2.default.createElement(
        'button',
        { onClick: toggleFullscreenHandler, style: { display: 'inline-block' } },
        'Toggle Fullscreen'
      )
    ),
    _react2.default.createElement(
      'div',
      { style: { margin: '5px' } },
      _react2.default.createElement(
        'p',
        null,
        'This is the panel content area of the slide panel.'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          'Item 1'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Item 2'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Item 3'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Item 4'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Item 5'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Item 6'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Item 7'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Item 8'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Item 9'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Item 10'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Item 11'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Item 12'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Item 13'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Item 14'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Item 15'
        )
      )
    )
  );
};

var SlidePanelDemo = function (_React$Component) {
  _inherits(SlidePanelDemo, _React$Component);

  function SlidePanelDemo(props) {
    _classCallCheck(this, SlidePanelDemo);

    var _this = _possibleConstructorReturn(this, (SlidePanelDemo.__proto__ || Object.getPrototypeOf(SlidePanelDemo)).call(this, props));

    _this.state = {
      panelIsOpen: props.isOpen || false,
      panelIsFullscreen: props.isFullscreen || false
    };

    _this.handlePanelToggle = _this.handlePanelToggle.bind(_this);
    _this.handleFullscreenToggle = _this.handleFullscreenToggle.bind(_this);
    return _this;
  }

  _createClass(SlidePanelDemo, [{
    key: 'handlePanelToggle',
    value: function handlePanelToggle() {
      var newState = this.state;

      newState.panelIsOpen = !this.state.panelIsOpen;

      if (!newState.panelIsOpen) {
        newState.panelIsFullscreen = false;
      }

      this.setState(newState);
    }
  }, {
    key: 'handleFullscreenToggle',
    value: function handleFullscreenToggle() {
      var newState = this.state;

      newState.panelIsFullscreen = !this.state.panelIsFullscreen;

      this.setState(newState);
    }
  }, {
    key: 'render',
    value: function render() {
      var containerAttributes = {
        style: { border: '1px lightgrey solid' }
      };

      return _react2.default.createElement(
        'div',
        { style: { padding: '5px' } },
        _react2.default.createElement(
          'div',
          containerAttributes,
          _react2.default.createElement(_SlidePanel2.default, {
            mainContent: mainContentForSlidePanel(this.handlePanelToggle),
            panelContent: panelContentForSlidePanel(this.handlePanelToggle, this.handleFullscreenToggle),
            panelSize: this.props.panelSize,
            panelBehavior: this.props.panelBehavior,
            panelPosition: this.props.panelPosition,
            isOpen: this.state.panelIsOpen,
            isFullscreen: this.state.panelIsFullscreen,
            fill: this.props.fill
          })
        )
      );
    }
  }]);

  return SlidePanelDemo;
}(_react2.default.Component);

SlidePanelDemo.propTypes = {
  panelBehavior: _propTypes2.default.oneOf(['overlay', 'squish']),
  panelPosition: _propTypes2.default.oneOf(['start', 'end']),
  panelSize: _propTypes2.default.oneOf(['small', 'large']),
  isFullscreen: _propTypes2.default.bool,
  isOpen: _propTypes2.default.bool,
  fill: _propTypes2.default.bool
};

exports.default = SlidePanelDemo;