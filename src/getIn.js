import curry from "./curry";
import get from "./get";

// This is the un-curried version of `get`.
// Figured since we aren't using it here it's worth avioding the overhead.
const getBase = get.operation;

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
function getIn(keyPath, subject) {
  let value = subject;
  for (let i = 0; i < keyPath.length; i++) {
    if (value === undefined) {
      break;
    }
    value = getBase(keyPath[i], value);
  }
  return value;
}

export default curry(getIn);