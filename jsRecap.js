// // let value = "hellow";
// // ("wolleh");

// // // output = > ["he","low"] ["he","ow"]

// // console.log(typeof value);
// // console.log(value.split("l"));

// // console.log(value.reverse());

// // let ArrString = value.split();

// let sampleData = ["item1", "item2", "item3", "item4"];
// let newItem = "item5";

// // sampleData.shift(newItem)
// let itemIndex = sampleData.indexOf("item2");
// console.log(sampleData.splice(itemIndex + 1, 0, newItem));
// console.log(sampleData); //["item1", "item2","item5", "item3", "item4"]

// // ["item1", "item2","item5", "i6","i7", "item4"]
// let deleteItemIndex = sampleData.indexOf("item3");
// sampleData.splice(deleteItemIndex, 1, "i6", "i7");

let numbers = [3, 4, 2, 5, 10, 8, 9, 6];

//filtering
// 1. extract all even number
// 2. extract all odd number
// 3. extract all number multiple of 3

let evenNum = numbers.filter((num) =>num % 2 === 0 && num %3===0);
console.log(evenNum);
// [3, 4, 2, 10, 8, 9, 6]

