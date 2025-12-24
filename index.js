



// 2-masala

// function rotateArray(arr, numb) {
//     let result = []

//     for (let j = numb; j < arr.length; j++) {
//         result.push(arr[j])

//     }

//     for (let i = 0; i < numb; i++) {
//         result.push(arr[i])

//     }


//     return result

// }
// console.log(rotateArray([1, 2, 3, 4, 5], 1));



// 3-masala

// function twoSum(arr, numb) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === numb) {
//                 result.push(i, j)
//             }
//         }
//     }
//     return result
// }
// console.log(twoSum([3, 3, 11, 7, 15, 2], 9));


// 4-masala

// function calc(arr, numb) {
//     let result = 0
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i]
//     }
//     if (result === numb) {
//         return true
//     } else {
//         return false
//     }


// }
// console.log(calc([2, 4, 1], 7))


// 5-masala

// function difference(arr1, arr2) {
//     let result = []
//     for (let i = 0; i < arr1.length; i++) {
//         let injector = false
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] == arr2[j]) {
//                 injector = true
//                 break;
//             }
            
//         }
//         if (injector) {
            
//         }else{
//             result.push(arr1[i])
//         }
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         let injector = false
//         for (let j = 0; j < arr1.length; j++) {
//             if (arr2[i] == arr1[j]) {
//                 injector = true
//                 break;
//             }
            
//         }
//         if (injector) {
            
//         }else{
//             result.push(arr2[i])
//         } 
//     }
//     return result

// }
// console.log(difference([2, 4, 1], [2, 3, 8]));


// 6-masala array elementlari ichidan eng ko'p uchraydiganini qaytaring

// function mostFrequentElement(arr) {
//     let obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]]) {
//             obj[arr[i]] += 1
//         }else{
//             obj[arr[i]] = 1
//         }
//     }

//     let engKattasi = 0
//     let mostFrequent 
//     for (let key in obj) {
        
//         if (obj[key] > engKattasi) {
//             engKattasi = obj[key]
//             mostFrequent = key
//         }
        
//     }

//     return Number(mostFrequent)
    

// }
// console.log(mostFrequentElement([1, 3, 1, 3, 2, 1]));




// 7. string ichidagi raqamlarni o'zgartirish kerak ya'ni birga oshirish


// function onePlus(str) {
//     let result = ""
//     for (let i = 0; i < str.length; i++) {
//         if (!isNaN(str[i]) && str[i] !== " ") {
//             result += (Number(str[i]) + 1)
//         }else{
//             result += str[i]
//         }
//     }
//     return result
// }

// console.log(onePlus("789 abc 123"));


// 8. eng uzun ortib boruvchi bo'limani topish

// function longestIncreasing(arr) {
//     let maxLength = 0;
//     let currentLength = 1; 

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i + 1] > arr[i]) {
//             currentLength++;
//         } else {
//             if (currentLength > maxLength) {
//                 maxLength = currentLength;
//             }
//             currentLength = 1; 
//         }
//     }


//     if (currentLength > maxLength) maxLength = currentLength;

//     return maxLength;
// }

// console.log(longestIncreasing([10, 20, 30, 10, 40, 50, 52, 55, 6]));
// // Natija: 5


// 9. arraydagi takroriy elementlar soni

// function counter(arr) {
//     let obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]]) {
//             obj[arr[i]] ++
//         }else{
//             obj[arr[i]] = 1
//         }
//     }
//     return obj
// }

// console.log(counter([1, 2, 2, 3, 4, 4, 4, 5]));


// 10. berilgan ichma-ich arraylarni yig'indisini qaytaring

// function matrixSum(...arr) {
//     let result = 0
//     for (let i = 0; i < arr.length; i++) {
//         let birlik = arr[i]
//         for (let j = 0; j < birlik.length; j++) {
//             result += birlik[j]
//         }
//     }
//     return result
// }
// console.log(matrixSum([1, 2, 3,], [4, 5, 6], [7, 8, 9]));



// Qo'shimcha


//1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// function twoSum(nums, target) {
//     let result = []
//     for (let i = 0; i < nums.length; i++){
//         for (let j = i + 1; j < nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 result.push(j, i)
//             }
//        }
//     }
//     return result
// };

// console.log(twoSum([3,2,3], 6))


// 2.Given an integer x, return true if x is a palindrome, and false otherwise.

// function palindrome(x) {
//     let str = String(x)
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[str.length - 1]) {
//             return true
//         }else{
//             return false
//         }
//     }
// }

// console.log(palindrome(121));



