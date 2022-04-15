import '../scss/main.scss'

console.log("webpack"); 

async function test() {
  const promise = Promise.resolve(123)
  console.log(await promise)
}
test()
