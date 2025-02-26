// //print 1 to 8
// for(let a=1;a<=8;a++){   //let
//     console.log("Shahil Ahmed",a);   //8 execute
// }
// console.log(a); 

// for(var a=1;a<=8;a++){   //var
//     console.log("Shahil Ahmed",a);   //9 execute
// }
// console.log(a);

//calculate sum of 1 to 5
// let sum=0;
// let n=10
// for(let i=0;i<=n;i++){ 
//     sum=sum+i;  //sum = 15
// }
// console.log("Sum is",sum);
// console.log("Loop Ended"); 

//while loop
// let i =1;
// while(i<=5){
//     console.log("i",i);
//  i++;
// }
// console.log("gggg");

//do-while
// let i=1;
// do{
//     console.log("i =",i);
//    i++;
// }while(i<=5);

//for-of loop
// let str="ShahilAhmed"
// let size=0;
// for(let val of str){
//     console.log("val=",val);
//     size++;
// }
// console.log(size);

//for-in loop
// let student={
//     name: "shahil Ahmed",
//     age: 25,
//     cgpa:7,
//     isPass: true
// }
// for(let key in student){
//     console.log("key =",key," value =",student[key]);
// }

// Even Number
// let n=100;
// for(let i=0;i<=n;i++){
//     if(i%2===0){
//         console.log("even number",i)
//     }
// }

// let i=0;
// let n=100;
// while(i<=n){
//     if(i%2===0){  //even   //2!== odd
//         console.log(i);
//     }
//     i++;
// }

// let a=prompt("enter a number");
// console.log(a);


// let str = "ShahilAhmed";
// let str2 = 'Shahil' ;
// console.log(str[0]);

// template literals
// let specialString=`This is a Template literal`;
// console.log(typeof specialString)

// let obj ={
//     item:"pen",
//     price: 10,
// }
// // console.log("the cost of",obj.item,"is",obj.price,"rupees");
// console.log(`the cost of ${obj.item} is ${obj.price} rupees`);   //Template literals

// // console.log("Hello\nworld")
// let str= " world   ";
// let newstr=str.toUpperCase();
// console.log(str);
// console.log(newstr);
// console.log(str.trim())

// let str = "6763762376";
// console.log(str.slice(1,3));
// let a = "Hello";
// console.log(a.slice(1,4));

// let str = "6763762376";
// let a = "Hello";
// let b =a.concat(str);  //str+a
// console.log(b);


// let a = "Hello Worldllo";
// console.log(a.replaceAll("llo","bye"));


// let a = "Hel qor";
// console.log(a.charAt(2));