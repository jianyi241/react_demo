let num = 10

const obj = {
  num: 8,
  objFun() {
    console.log('1', this.num)
    return function() {
      // let num = 7
      console.log('this ===> ', this,'===> ', num)
      return {
        num: num
      }
    }
  }
}

const obj1 = {
  num: 8,
  objFun() {
    console.log('2')
    const that = this
    return function() {
      console.log('that ===> ', that,'===> ', that.num)
      return {
        num: that.num
      }
    }
  }
}
let objFunChild = obj.objFun()
let objFunChild1 = obj1.objFun()
objFunChild()
objFunChild1()
// console.log('obj result ===> ', obj.objFun())
// console.log('obj1 result ===> ', obj1.objFun())

const person = {
  name: '刘华强',
  gender: '男',
  age: 33,
  motto: '这瓜保熟吗',
  job: '黑涩会'
}
person.job = 'ffffffffffffff'
console.log('person -- ', person)
const constPerson = Object.preventExtensions(JSON.parse(JSON.stringify(person)))
constPerson.age = 88
constPerson.height = 1.78
console.log('constPerson -- ', constPerson)
