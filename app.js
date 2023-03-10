const zoom=document.querySelector(".zoom");
const photo=document.querySelector(".photo");
const main=document.querySelector(".main");
const logo=document.querySelector(".logo");
const text=document.querySelector(".text");
const email=document.querySelector(".email");
const mlogo=document.querySelector(".mlogo");
function gettext(){
  var intext=document.querySelector(".email").value;
  windows.alert(intext);
}
const t1=new TimelineMax();
t1.fromTo(photo, 1.5,{ height:"0%" },{height:"100%", ease: Power2.easeInOut })

.fromTo(
  main,
  1,
  {x: "-150%"},
  {x: "0%", ease: Power2.easeInOut } ,"-=1"
)
.fromTo(
  text,
  1,
  {x: "-150%"},
  {x: "0%", ease: Power2.easeInOut } ,"-=1"
)
.fromTo(
  mlogo,
  1,
  {opacity: 0},
  {opacity: 1, ease: Power2.easeInOut } ,"-=1"
)
