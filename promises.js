// let orderStatus = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("delivered");
//   }, 5000);
// });

// console.log(orderStatus)

// let pocketMoneyToCome = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(1000);
//   }, 1000);
// });

// function result(money) {
//   let remainingMoney = 100;

//   let mybudget = parseInt(remainingMoney) + parseInt(money);

//   let movieTicket = 300;
//   "300" + "100";

//   if (mybudget < movieTicket || Number.isNaN(mybudget)) {
//     console.log("sorry!,you can't buy movie ticket");
//   } else {
//     console.log("here is your movie ticket", mybudget);
//   }
// }

// pocketMoneyToCome.then(result).catch((error) => {
//   console.log(error);
// });

// async function handlePromise() {
//   try {
//     let money = await pocketMoneyToCome;
//     let remainingMoney = 100;

//     let mybudget = parseInt(remainingMoney) + parseInt(money);

//     let movieTicket = 300;
//     "300" + "100";

//     if (mybudget < movieTicket || Number.isNaN(mybudget)) {
//       console.log("sorry!,you can't buy movie ticket");
//     } else {
//       console.log("here is your movie ticket", mybudget);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// handlePromise();

let apiUrl = "https://dummyjson.com/products";
let apiUrl2 = "https://dummyjson.com/quotes";

async function fetchProductData() {
  try {
    let response = await fetch(apiUrl, {
      method: "POST",
    });
    let data = await response.json();
    // console.log("data title of first product",data.products[0].title);
  } catch (error) {
    console.log(error)
  }
}

fetchProductData()
// const fetchProductData = async()=>{

// }
