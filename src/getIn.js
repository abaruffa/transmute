import _get from './internal/_get';
import curry from './curry';

function getIn(keyPath, subject) {
  let value = subject;
  for (let i = 0; i < keyPath.length; i++) {
    if (value === undefined) {
      break;
    }
    value = _get(keyPath[i], value);
  }
  return value;
}

/**
 * Retrieve a `keyPath` from a nested Immutable or JS structure.
 *
 * `getIn` short circuts when it encounters a `null` or `undefined` value.
 *
 * @example
 * const getFirstName = getIn(['name', 'first']);
 * const user = UserRecord({
 *   name: Map({
 *     first: 'Test',
 *     last: 'Testerson',
 *   }),
 * });
 * getFirstName(user) === 'Test'
 *
 * @param  {Array<string>} keyPath
 * @param  {Array|Iterable|Object} subject
 * @return {any}
 */
export default curry(getIn);
