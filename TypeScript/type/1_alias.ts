type IDType = string | number | boolean

type PointType = {
  x: number,
  y: number,
  z?: number
}

function printId(id: IDType) {
  console.log(id)
}

function printPoint(point: PointType) {
  console.log(point.x)
  console.log(point.y)
  console.log(point.z)
}