/**
 * @file Tests if ES6 Reflect is supported.
 * @version 1.1.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module has-reflect-support-x
 */

/**
 * Indicates if `Reflect`exists.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */
module.exports = typeof Reflect === 'object' && Reflect !== null;
