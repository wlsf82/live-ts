import { person } from './types'

/**
* Introduces a person saying: '{name} is {age} years old and he (or she) is (or is not) married.'
*
* @param person object - An object representing a person, with the following properties:
* - name (string and mandatory)
* - age (number and mandatory)
* - pronoun (string and mandatory)
* - isMarried (boolean and optional) // if isMarried is not provided, it's considered false by default
*
* @example introducePerson({ name: 'John', age: 30, pronoun: 'he', isMarried: true }) // logs to the console:
* // John is 30 years old and he is married.
* @example introducePerson({ name: 'Mary', age: 22, pronoun: 'she' }) // logs to the console:
* // Mary is 22 years old and she is not married.
*/
export default function introducePerson(person: person): void {
 const { name, age, pronoun, isMarried } = person
 console.log(`${name} is ${age} years old and ${pronoun} ${isMarried ? 'is' : 'is not'} married.`)
}
