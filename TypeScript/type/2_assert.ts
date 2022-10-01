// <img id="Allen" />

// 类型断言as
const el = document.getElementById("Allen") as HTMLImageElement
el.src = "url"

class Person {
  
}

class Student extends Person {
  studying() {

  }
}

function sayHello(p: Person) {
  // p.studying()    Property 'studying' does not exist on type 'Person'
  (p as Student).studying()
}

const stu = new Student()
sayHello(stu)
