import { __assign } from 'tslib';
import React from 'react';

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
    var children = _a.children, _b = _a.radius, radius = _b === void 0 ? 50 : _b, _c = _a.saturation, saturation = _c === void 0 ? 2 : _c, _d = _a.opacity, opacity = _d === void 0 ? 1 : _d, _e = _a.className, className = _e === void 0 ? '' : _e;
    if (!React.isValidElement(children)) {
        console.error('ImageGlow requires a valid React element as its child.');
        return null;
    }
    var _f = children.props, src = _f.src, childStyle = _f.style, childClassName = _f.className;
    var baseImage = src !== null && src !== void 0 ? src : '';
    var glowStyle = {
        position: 'relative',
        zIndex: 1,
        display: 'block',
        width: '100%',
        height: 'auto',
    };
    var styledImage = React.cloneElement(children, {
        style: __assign(__assign({}, glowStyle), (childStyle || {})),
        className: "".concat(childClassName || '', " ").concat(className).trim(),
    });
    return (React.createElement("div", { style: parentStyle },
        styledImage,
        React.createElement("div", { style: blurStyle(baseImage, radius, saturation, opacity) })));
};

export { ImageGlow as default };
