import { requestActions } from "./types"

/**
 * Simulates running one of the following HTTP requests:
 *
 * - 1 - get
 * - 2 - post
 * - 3 - patch
 * - 4 - put
 * - 5 - delete
 *
 * @param action enum - 1 is equivalent to requestActions.get, 2 is equivalent to requestActions.post, 3 is equivalent to requestActions.patch, 4 is equivalent to requestActions.put, and 5 is equivalent to requestActions.delete
 *
 * @example runRequest(1) // logs to the console: 'Getting...'
 * @example runRequest(requestActions.post) // logs to the console: 'Posting...'
 * @example runRequest(6) // logs to the console: 'Oops! Invalid request action.'
 */
export default function runRequest(action: requestActions): void {
  switch(action) {
    case 1:
      console.log('Getting...')
      break
    case 2:
      console.log('Posting...')
      break
    case 3:
      console.log('Patching...')
      break
    case 4:
      console.log('Putting...')
      break
    case 5:
      console.log('Deleting...')
      break
    default:
      console.log('Oops! Invalid request action.')
      break
  }
}
