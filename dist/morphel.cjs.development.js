'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var morphdom = _interopDefault(require('morphdom'));

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var Morphel = /*#__PURE__*/function () {
  function Morphel(element) {
    this.element = element;
    this.originalHTML = element.outerHTML.toString();
  }
  var _proto = Morphel.prototype;
  _proto.morph = function morph(toNode, options) {
    morphdom(this.element, toNode, options);
    return this;
  };
  _proto.restore = function restore() {
    if (this.originalHTML) {
      morphdom(this.element, this.originalHTML);
    }
    return this;
  };
  _createClass(Morphel, [{
    key: "el",
    get: function get() {
      return this.element;
    }
  }]);
  return Morphel;
}();

function morphel(fromEl, toNode, options) {
  return new Morphel(fromEl).morph(toNode, options);
}

exports.Morphel = Morphel;
exports.default = morphel;
//# sourceMappingURL=morphel.cjs.development.js.map
