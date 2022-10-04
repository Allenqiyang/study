// type Direction = 'left' | 'top' | 'right' | 'bottom'

enum Direction {
  LEFT,
  TOP,
  RIGHT,
  BOTTOM
}

function turnDirection(direction: Direction) {
  switch(direction) {
    case Direction.LEFT:
      console.log('turn left')
      break
    case Direction.TOP:
      console.log('turn top')
      break
    case Direction.RIGHT:
      console.log('turn right')
      break
    case Direction.BOTTOM:
      console.log('turn bottom')
      break
    default:
      // 这样如果有一个情况没有枚举完就会报错
      const foo: never = direction
      break
  }
}

turnDirection(Direction.LEFT)
turnDirection(Direction.TOP)
turnDirection(Direction.RIGHT)
turnDirection(Direction.BOTTOM)