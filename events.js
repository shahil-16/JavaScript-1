let btn1 =document.querySelector("#btn1");
btn1.onclick= () =>{
    console.log("button was clicked");
    let a= 25;
    a++;
    console.log(a);
}

let div = document.querySelector("div");
div.onmouseover =() =>{
    console.log("Hello World")
}

btn1.addEventListener("click", () =>{
    console.log("click on handler-1")
})
btn1.addEventListener("click", () =>{
    console.log("click on handler-3")
})

const handler =() =>{
    console.log("hclick on handler-4")
}
btn1.addEventListener("click", handler);

btn1.addEventListener("click", (evt) =>{
    console.log("click on handler-2")
    console.log(evt);
    console.log(evt.type);
})

btn1.removeEventListener("click",handler)