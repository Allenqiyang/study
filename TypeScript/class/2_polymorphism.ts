class Animal {
  moving() {
    console.log('moving')
  }
}

class Dog extends Animal {
  moving() {
    console.log('running')
  }
}

class Bird extends Animal {
  moving() {
    console.log('flying')
  }
}

function useMoving(animals: Animal[]) {
  animals.forEach(animal => {
    animal.moving()
  })
}

useMoving([new Dog(), new Bird()])