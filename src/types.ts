export type person = {
  name: string,
  age: number,
  pronoun: string,
  isMarried?: boolean
}

export type people = Array<person>

export enum dbActions {
  create,
  read,
  update,
  delete
}

export enum basicColors {
  red = 'red',
  green = 'green',
  blue = 'blue  '
}

export enum requestActions {
  get = 1,
  post,
  patch,
  put,
  delete
}
