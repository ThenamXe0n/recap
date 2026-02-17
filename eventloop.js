// function a(){
//     console.log("hi from a function")
// }
// // a()
// setTimeout(a,0)

// let orderstatus = new Promise((Res,Rej)=>{
// Res("delivered")
// })
// console.log(orderstatus)
// console.log("js file started")

// let api = fetch("https://dummyjson.com/products")
// console.log("api output",api)

// setTimeout(function a() {console.log("i am a")}, 1000);

// setTimeout(function b() {console.log("i am b")}, 500);

// setTimeout(function c() {console.log("i am c")}, 0);

// function d() {
//     console.log("i am d")
// }

// d();

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 2000);
// }

// function test() {
//   return 5 + 5;
// }
// const test2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5 + 5);
//   }, 2000);
// });
// async function handleResult() {
//   try {
//     let result = await test();
//     let result2 = await test2();
//     console.log(result);
//     console.log(result2);
//   } catch (error) {
//     console.log(error);
//   }
// }

// handleResult();


async function test() {
  console.log("1");
  let dummyPromise = await null;
  console.log("2");
}

console.log("3");
test();
console.log("4");
dummyPromise().then()
// 3,4,1,2
// 3,1,4,2