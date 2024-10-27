'use strict';

var tslib = require('tslib');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function isImageElement(element) {
    return React__default["default"].isValidElement(element) && element.type === 'img';
}
var parentStyle = {
    position: 'relative',
    display: 'inline-block',
};
var blurStyle = function (baseImage, radius, saturation, opacity) { return ({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    pointerEvents: 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: "url(".concat(baseImage, ")"),
    filter: "blur(".concat(radius, "px) saturate(").concat(saturation, ")"),
    opacity: opacity,
    zIndex: 0,
}); };
var ImageGlow = function (_a) {
    var _b;
    var children = _a.children, _c = _a.radius, radius = _c === void 0 ? 50 : _c, _d = _a.saturation, saturation = _d === void 0 ? 2 : _d, _e = _a.opacity, opacity = _e === void 0 ? 1 : _e, _f = _a.className, className = _f === void 0 ? '' : _f;
    if (!isImageElement(children)) {
        console.error('ImageGlow expects a single <img> element as its child.');
        return null;
    }
    var baseImage = (_b = children.props.src) !== null && _b !== void 0 ? _b : '';
    var glowStyle = {
        position: 'relative',
        zIndex: 1,
        display: 'block',
        width: '100%',
        height: 'auto',
    };
    var styledImage = React__default["default"].cloneElement(children, {
        style: tslib.__assign(tslib.__assign({}, glowStyle), (children.props.style || {})),
        className: "".concat(children.props.className || '', " ").concat(className).trim(),
    });
    return (React__default["default"].createElement("div", { style: parentStyle },
        styledImage,
        React__default["default"].createElement("div", { style: blurStyle(baseImage, radius, saturation, opacity) })));
};

module.exports = ImageGlow;
