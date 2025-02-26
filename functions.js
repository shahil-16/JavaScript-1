// function sum(x,y){         //local variable
//     s=x+y;
    // console.log(s);
// }
// sum(2,3);

// function sum(x,y){
//     s=x+y;
//    return s
// }
// let val = sum(2,3);
// console.log(val);

// function sum(x,y){
//     return x+y;
// }


// const arrowSum = (a,b)=>{  //arrow-sum 
//     console.log(a+b);
// }

// const arrowMul = (a,b)=>{
//     return a*b;
// }

// function countVowel(str){
//     let count=0;
//     for ( const char of str){
//         if(char ==="a" ||
//             char ==="e" ||
//             char ==="i" ||
//             char ==="o" ||
//             char ==="u" 
//         ){ count++; }
//     }
//     return count;
// }

// const countVowel = (str)=>{
//     let count=0;
//     for ( const char of str){
//         if(char ==="a" ||
//             char ==="e" ||
//             char ==="i" ||
//             char ==="o" ||
//             char ==="u" 
//         ){ count++; }
//     } 
//     return count;
// }

// function myFunc (abc){
//      return abc;
// }

// function myFunc(abc){
//     console.log("hello") ;
// }

// let a=[1,2,3,4,5]

// a.forEach(function pVal(val){
//     console.log(val);
// })

// let a=[1,2,3,4,5];

// a.forEach( function squareNum(val){
//   result= val*val
//   console.log(result)   //console.log(val*val)
// })

// a.forEach( (val)=>{
//     result= val*val
//     console.log(result)
//   })

// function myfn(num){
//     return num
// }

// let num=[3,4,5];
// let newN =num.map((val)=>{
//     return val*val;
// })
// console.log(newN);

// let arr=[1,2,3,4,5,6,7,8,9,10];
// let evenArr = arr.filter((val) => {
//     return val % 2 === 0;
// });
// console.log(evenArr );
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let gr = arr.reduce((prev,curr)=>{
//     return prev >curr ? prev :curr;
// })
// console.log(gr);

// let arr=[1,2,3,4,5,6,7,8,9,10];
// let gr = arr.filter((prev)=>{
//     return prev >=6
// })
// console.log(gr);

// let num = prompt("Enter a number :");
// let arr = [];
// for(let i= 1 ;i<=num;i++){
//    arr[i-1]=i;
// }
// console.log(arr);

// let sum =arr.reduce((res, curr )=>{
//  return res+ curr
// })
// console.log("sum is =",sum);


// let fact =arr.reduce((res, curr )=>{
//     return res* curr
//    })
//    console.log("factorial is =",fact);