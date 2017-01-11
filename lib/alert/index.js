'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('./test.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alert = function (_React$Component) {
  (0, _inherits3.default)(Alert, _React$Component);

  function Alert() {
    (0, _classCallCheck3.default)(this, Alert);
    return (0, _possibleConstructorReturn3.default)(this, (Alert.__proto__ || (0, _getPrototypeOf2.default)(Alert)).apply(this, arguments));
  }

  (0, _createClass3.default)(Alert, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'test' },
        'alertsss'
      );
    }
  }]);
  return Alert;
}(_react2.default.Component);

exports.default = Alert;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map