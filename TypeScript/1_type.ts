function add(n1: number|string, n2: number|string) {
  if(typeof n1 === 'number' && typeof n2 === 'number') {
    return n1 + n2
  } else if(typeof n1 === 'string' && typeof n2 === 'string') {
    return n1 + n2
  }
}

const result = add(10, 20)