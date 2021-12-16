import { basicColors } from './types'

/**
 * Returns a string like 'The basic color for my painting will be: [one-of-the-basic-colors-here]'
 *
 * @param color enum - the possible options are basicColors.red, basicColors.green, or basicColors.blue
 *
 * @returns string
 *
 * @example paint(basicColor.blue) // Returns: The basic color for my painting will be: blue.
 * @example paint(basicColor['red']) // Returns: The basic color for my painting will be: red.
 */
export default function chooseColorToPaint(color: basicColors): string {
  return `The basic color for my painting will be: ${color}.`
}
