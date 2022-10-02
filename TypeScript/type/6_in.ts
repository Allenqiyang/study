type Fish = {
  swimming: () => void
}

type Dog = {
  barking: () => void
}

function walk(animal: Fish | Dog) {
  if('swimming' in animal) {
    animal.swimming()
  } else {
    animal.barking()
  }
}

class Student {
  studying() {}
}

class Teacher {
  teaching() {}
}

function work(person: Student | Teacher) {
  if(person instanceof Student) {
    person.studying()
  } else {
    person.teaching()
  }
}

export {}