import { person, people, dbActions, basicColors } from './src/types'
import introducePerson from './src/introducePerson'
import runDbAction from './src/runDbAction'
import chooseColorToPaint from './src/chooseColorToPaint'
import runRequest from './src/runRequest'

let myName = 'Walmyr'
console.log('myName is a variable of type: ', typeof(myName))
// myName = 4 // This is invalid. TS infers myName is of type string
console.log(`Hi, I'm ${myName}. Welcome to 'JavaScript for QAs! '`)

console.log('')

let color
console.log('color is a variable of type: ', typeof(color))
color = 'pink'
console.log('Color: ', color)
color = 0 // When initialized as undefined, a variable becames of type any
// So, when reasigned to a value of a different type, it will accept it.
console.log('Color: ', color, ':/')

console.log('')

const someNullVariable: null = null
console.log('someNullVariable: ', someNullVariable)

const name: string = 'Tom'
const age: number = 39
const pronoun: string = 'he'
const isMarried: boolean = true

const tom: person = {
  name,
  age,
  pronoun,
  isMarried
}

console.log('')

introducePerson(tom)

const ana: person = {
  name: 'Ana',
  age: 25,
  pronoun: 'she'
}

introducePerson(ana)

const gregory: person = {
  name: 'Gregory',
  age: 18,
  pronoun: 'she',
  isMarried: false
}

const people: people = [
  ana,
  tom,
  gregory
]

introducePerson(people[2])

console.log('')
console.log('Time to run some database operations')
console.log('')

runDbAction(0)
runDbAction(1)
runDbAction(2)
runDbAction(3)
runDbAction(4)

console.log('')

runDbAction(dbActions.create)
runDbAction(dbActions.read)
runDbAction(dbActions.update)
runDbAction(dbActions.delete)

console.log('')
console.log('Time for some painting')
console.log('')

console.log(chooseColorToPaint(basicColors.red))
console.log(chooseColorToPaint(basicColors.green))
console.log(chooseColorToPaint(basicColors['blue']))

console.log('')
console.log('Time to run some HTTP requests')
console.log('')

runRequest(1)
runRequest(2)
runRequest(3)
runRequest(4)
runRequest(5)
runRequest(0)
