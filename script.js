let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let start=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    // game can start only once 
    if(start == false){
        console.log("game started!!!")
        start=true;
        levelup();
    }

});
function gflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");

    },250);
}
function uflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");

    },250);
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=` level ${level}`;
    // random btn choose
    let randomIndex=Math.floor(Math.random()*3);
    let randomColor=btns[randomIndex];
    // class access color based
    let randombtn=document.querySelector(`.${randomColor}`);
    // console.log(randombtn);
    gameseq.push(randomColor);
    console.log(gameseq)
    gflash(randombtn);


}
function checkAns(idx){
    // console.log("curre level :",level);
    
    if(userseq[idx]== gameseq[idx]){
       if(userseq.length == gameseq.length){
        setTimeout(function(){},1000);
        levelup();
       }
    }else{
        h2.innerHTML=` Game over ur score is <b> ${level} </b> <br>: press any key"`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"; 
        },150);
        reset();
    }
}
function btnpress(){
    // console.log(this)
    // which btn pressed by me
    let btn=this;
    // flash when i press
    uflash(btn);
    // user pressed color
    userColor=btn.getAttribute("id");
    // console.log(userColor);

    userseq.push(userColor);
    // check ans
    checkAns(userseq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function reset(){
    start=false
    gameseq=[];
    userseq=[];
    level=0;

}