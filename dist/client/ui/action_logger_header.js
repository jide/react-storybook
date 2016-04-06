'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionLoggerHeader = function (_Component) {
  (0, _inherits3.default)(ActionLoggerHeader, _Component);

  function ActionLoggerHeader() {
    var _Object$getPrototypeO;

    (0, _classCallCheck3.default)(this, ActionLoggerHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(ActionLoggerHeader)).call.apply(_Object$getPrototypeO, [this].concat(args)));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(ActionLoggerHeader, [{
    key: 'render',
    value: function render() {
      var wrapStyle = {
        cursor: 'row-resize',
        padding: '5px',
        boxSizing: 'border-box'
      };

      var h3Style = {
        fontFamily: '\n        -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto",\n        "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif\n      ',
        color: '#444',
        letterSpacing: '2px',
        fontSize: 12,
        margin: '5px 0 2px 5px'
      };

      var clearButtonStyle = {
        marginLeft: 5
      };

      var onClear = this.props.onClear;

      return _react2.default.createElement(
        'div',
        { style: wrapStyle },
        _react2.default.createElement(
          'h3',
          { style: h3Style },
          'ACTION LOGGER',
          _react2.default.createElement(
            'button',
            { style: clearButtonStyle, onClick: onClear },
            'CLEAR'
          )
        )
      );
    }
  }]);
  return ActionLoggerHeader;
}(_react.Component);

ActionLoggerHeader.propTypes = {
  onClear: _react2.default.PropTypes.func
};

exports.default = ActionLoggerHeader;