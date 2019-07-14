function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Indicates if `Reflect`exists.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */
export default (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' && Reflect !== null;

//# sourceMappingURL=has-reflect-support-x.esm.js.map