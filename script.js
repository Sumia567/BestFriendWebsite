// ================================
// SCREENS
// ================================

const screens=document.querySelectorAll(".screen");

function showScreen(id){

screens.forEach(screen=>{

screen.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}

// ================================
// WELCOME
// ================================

function goPassword(){

showScreen("password");

}

// ================================
// PASSWORD
// ================================

function checkPassword(){

const pass=document.getElementById("passwordInput").value.trim();

const error=document.getElementById("errorText");

if(pass==="Bushra"){

error.innerHTML="";

showScreen("loading");

const music=document.getElementById("bgMusic");

if(music){

music.volume=.4;

music.play().catch(()=>{});

}

setTimeout(()=>{

showScreen("question");

},3000);

}

else{

error.innerHTML="❤️ Oops! Wrong password. Only the correct person can unlock this surprise.";

}

}

// ================================
// YES / NO
// ================================

function showYes(){

showScreen("yesPage");

startTyping();

startSlideshow();

launchConfetti();

}

function showNo(){

showScreen("noPage");

}

function backToQuestion(){

showScreen("question");

}

function restartWebsite(){

location.reload();

}

// ================================
// SLIDESHOW
// ================================

const photos=[

"images/photo2.jpg",

"images/photo3.jpg",

"images/photo4.jpg"

];

let slide=0;

function startSlideshow(){

const img=document.getElementById("slideImage");

setInterval(()=>{

slide++;

if(slide>=photos.length){

slide=0;

}

img.src=photos[slide];

},3000);

}

// ================================
// TYPING EFFECT
// ================================

const message=`Thank you for being the most precious person in my life.

You are my happiness, my comfort and one of the biggest blessings in my life.

Every memory with you is beautiful.

Every smile is unforgettable.

Every moment spent together is priceless.

May Allah always keep you happy, healthy, successful and smiling.

Thank you for always being there.

Our friendship means the world to me.

❤️`;

function startTyping(){

const box=document.getElementById("typingText");

box.innerHTML="";

let i=0;

const typing=setInterval(()=>{

box.innerHTML+=message.charAt(i);

i++;

if(i>=message.length){

clearInterval(typing);

}

},35);

}
// ===================================
// FLOATING HEARTS
// ===================================

const hearts=document.querySelector(".hearts");

function createHeart(){

const heart=document.createElement("span");

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(15+Math.random()*20)+"px";

heart.style.animationDuration=(6+Math.random()*4)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,700);


// ===================================
// ROSE PETALS
// ===================================

const petals=document.querySelector(".petals");

function createPetal(){

const petal=document.createElement("span");

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"%";

petal.style.fontSize=(14+Math.random()*12)+"px";

petal.style.animationDuration=(7+Math.random()*5)+"s";

petals.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

}

setInterval(createPetal,1500);


// ===================================
// PREMIUM CONFETTI (YES BUTTON)
// ===================================

function launchConfetti(){

const container=document.getElementById("confettiContainer");

container.innerHTML="";

const items=["🎉","✨","💖","💕"];

for(let i=0;i<60;i++){

const piece=document.createElement("div");

piece.className="confetti";

piece.innerHTML=items[Math.floor(Math.random()*items.length)];

piece.style.left=Math.random()*100+"%";

piece.style.animationDuration=(3+Math.random()*2)+"s";

piece.style.fontSize=(18+Math.random()*15)+"px";

container.appendChild(piece);

setTimeout(()=>{

piece.remove();

},5000);

}

}


// ===================================
// ENTER KEY FOR PASSWORD
// ===================================

const input=document.getElementById("passwordInput");

if(input){

input.addEventListener("keypress",function(e){

if(e.key==="Enter"){

checkPassword();

}

});

}


// ===================================
// PRELOAD IMAGES
// ===================================

[
"images/photo1.png",
"images/photo2.jpg",
"images/photo3.jpg",
"images/photo4.jpg"
].forEach(src=>{

const img=new Image();

img.src=src;

});


// ===================================
// START
// ===================================

console.log("Premium Friendship Website Loaded ❤️");