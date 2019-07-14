/**
 * Indicates if `Reflect`exists.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */
export default typeof Reflect === 'object' && Reflect !== null;
