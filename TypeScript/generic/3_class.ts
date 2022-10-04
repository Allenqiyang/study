class Point<T> {
  x: T
  y: T
  z: T

  constructor(x: T, y: T, z: T) {
    this.x = x
    this.y = y
    this.z = z
  }
}

const p1 = new Point("1.33.4", "3.65.2", "8.74.1")
const p2 = new Point<string>("1.33.4", "3.65.2", "8.74.1")
const p3: Point<string> = new Point("1.33.4", "3.65.2", "8.74.1")

const names1: string[] = ["Allen", "Tony", "Rose"]
const names2: Array<string> = ["Allen", "Tony", "Rose"]