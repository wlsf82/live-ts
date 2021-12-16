import { dbActions } from "./types"

/**
 * Simulates running one of the following database actions:
 *
 * - 0 - create
 * - 1 - read
 * - 2 - update
 * - 3 - delete
 *
 * @param action enum - 0 is equivalent to dbActions.create, 1 is equivalent to dbActions.read, 2 is equivalent to dbActions.update, and 3 is equivalent to dbActions.delete
 *
 * @example runDbAction(0) // logs to the console: 'Creating...'
 * @example runDbAction(dbAction.read) // logs to the console: 'Reading...'
 * @example runDbAction(4) // logs to the console: 'Oops! Invalid db action.'
 */
export default function runDbAction(action: dbActions): void {
  switch(action) {
    case 0:
      console.log('Creating...')
      break
    case 1:
      console.log('Reading...')
      break
    case 2:
      console.log('Updating...')
      break
    case 3:
      console.log('Deleting...')
      break
    default:
      console.log('Oops! Invalid db action.')
      break
  }
}
