const message = `Apa pun yang sedang kamu hadapi sekarang,
aku harap kamu tetap kuat.

Kamu lebih hebat dari yang kamu pikirkan.
Aku percaya kamu bisa melewati semuanya.`;

let i = 0;

function typing(){
const el = document.getElementById("text");
if(el && i < message.length){
el.innerHTML += message.charAt(i);
i++;
setTimeout(typing,40);
}
}

typing();

/* hati */

function createHeart(){
const heart = document.createElement("div");
heart.className="heart";
heart.innerHTML="❤";
heart.style.left=Math.random()*100+"vw";
heart.style.fontSize=Math.random()*20+10+"px";
document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);
}

setInterval(createHeart,500);

/* kelopak */

function createPetal(){
const petal = document.createElement("div");
petal.className="petal";
petal.innerHTML="🌸";
petal.style.left=Math.random()*100+"vw";
petal.style.fontSize=Math.random()*20+15+"px";
document.body.appendChild(petal);

setTimeout(()=>{
petal.remove();
},8000);
}

setInterval(createPetal,800);
