let btn1 = document.querySelector("#btn1");
let body = document.querySelector("body");
let currMode="light";

// body.onmouseover =() =>{
//     body.style.backgroundColor="red";
//     console.log("hello");
// }
btn1.addEventListener("click", () => {
    // console.log("hello");

    if (currMode==="light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");

    }else{
        currMode ="light";
      body.classList.add("light");
      body.classList.remove("dark");
    }



console.log(currMode);

});






// btn1.addEventListener("click", () => {
//     console.log("hello");
// });                                          //2 times allowed

// btn1.onclick = () =>{
//     console.log("hello world")
// }
// btn1.onclick = () =>{
//     console.log("hello world")                  //won't repeat
// }


// btn1.addEventListener("click", () => {
//     // console.log("hello");

//     if (currMode==="Light"){
//         currMode="Dark";
//         document.querySelector("body").classList.add("dark");
//     }else{
//         currMode ="Light";
//         document.querySelector("body").classList.add("white");
//     }

// console.log(currMode)

// });
