'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  width: '100%',
  height: '100%',
  color: '#666',
  overflowY: 'auto',
  padding: '8px',
  boxSizing: 'border-box',
  border: '1px solid #ECECEC',
  borderRadius: 4,
  backgroundColor: '#FFF',
  margin: '0'
};

var ActionLogger = function ActionLogger(_ref) {
  var actionLog = _ref.actionLog;
  return _react2.default.createElement(
    'pre',
    { style: style },
    actionLog
  );
};

ActionLogger.propTypes = {
  actionLog: _react2.default.PropTypes.string.isRequired
};

exports.default = ActionLogger;