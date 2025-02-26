// let header = document.getElementById("header");
// console.dir(header);
// console.log(header);

// let top1= document.getElementsByClassName("top");
// console.log(top1);
// console.dir(top1);

// let para= document.getElementsByTagName("p");
// console.log(para);

// let par= document.querySelector("p");
// console.log(par);

// let par1 =document.querySelectorAll("p");
// console.log(par1);

// let par = document.querySelector("#header");
// console.log(par);
// console.dir(par);

// let div= document.querySelector("div")
// console.log(div);

// let heading =document.querySelector("h1");

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from shahil"

let divs = document.querySelectorAll(".box");
console.log(divs[2]);

let idx=1;
for( div of divs){
   div.innerText = `New Unique Value ${idx}`;
   idx++;
}

// divs[0].innerText= "New Value 1";
// divs[1].innerText= "New Value 2";
// divs[2].innerText= "New Value 3";