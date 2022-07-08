var greet_msgs = ["Good Morning 🙂", "Good Noon ❤️", "Good Afternoon 😘", "Good Evening 😃", "Good Night,Have a sweet dream 🥰😘"];
var time = new Date();
var hr = time.getHours();
var mn = time.getMinutes();
var day = time.getDay();
var grt_msg = ""
    // hr = 15;
if (5 <= hr && hr <= 11) {
    grt_msg = greet_msgs[0];
} else if (11 < hr && hr <= 14) {
    grt_msg = greet_msgs[1];
} else if (14 < hr && hr <= 16) {
    grt_msg = greet_msgs[2];
} else if (16 < hr && hr <= 20) {
    grt_msg = greet_msgs[3];
} else if (20 < hr && hr <= 23) {
    grt_msg = greet_msgs[4];
} else {
    grt_msg = "Hello";
}


var epu_msg_box = document.querySelector(".epu_msg");
epu_msg_box.innerHTML = grt_msg;
var usr_msg_box = document.querySelector(".ur_msg");

var msg_type = document.querySelector("input");
var send_btn = document.querySelector("button");
send_btn.addEventListener('click', () => {
  if(msg_type.value==""){return}
  var audio= new Audio("./pop.mp3");
  audio.play()
    usr_msg_box.innerHTML = msg_type.value;
    msg_type.value = ""
    var rply = "";
    var ctd=usr_msg_box.innerHTML.toLocaleLowerCase();
    if(ctd.includes("epu")){
      
      rply="🥰yes"
    }else if(ctd.includes("hello")||ctd=="hi"){
      rply="Hii"
    }else if(ctd.includes("good")){
      rply="🥰🥰🥰"
    }else if(ctd.includes("love u")){
      rply="i love u too😘😘🥰🥰"
    }else if(ctd.includes("bye")){
      rply="see you 😘 byeee"
    }else if(ctd.includes("play")){
      rply="wait sometime..."}
      else{
        rply="🥰😘"
      }
    var audio = new Audio("./note.mp3")
  setTimeout(() => { epu_msg_box.innerHTML=rply;audio.play(); },2000)
    
});
function asksm(){
  var qus=["Ki koro 🙃","🙃","Hiii","Kuch bolo vi","😘","sweet 🥰","ami epu 😋","gimme something","😋 hungry","🙈💌😽"]
  var index = Math.floor(Math.random() * 10);
  var audio = new Audio("./note.mp3")
  epu_msg_box.innerHTML = qus[index];
  audio.play();
  
  
}
setInterval(asksm,60000)



msg_type.addEventListener("input", () => {
    usr_msg_box.innerHTML = "...";
})


var pic = document.querySelector("img")

var nsrc = pic.src.split("/");
nsrc.pop();
var asrc=["a","b","c","d","e","a","b","c","d","e"];
var ind = Math.floor(Math.random() * 10);
nsrc.push(asrc[ind]+".jpg")
var ppp = nsrc.join("/")
pic.src=ppp;


var btn3=document.getElementById("button");
var text=document.getElementById("input");
var API="AIzaSyAp1r-Fl4b_wFmSGi0QjyL5uXq0J15AU_w";
var link="https://www.googleapis.com/youtube/v3/search?key=";

btn3.addEventListener("click",()=>{
  var val=text.value;
  var val = val.split(" ").join("+")
  var ops = link+API+"&q="+val+"&maxResults=1";
  
  
  fetch(ops)
  .then(res => res.json())
  .then(data=> doit(data))
  function doit(data){
    var sid = (data.items[0].id).videoId;
    var s = document.querySelector("iframe")
    s.src="https://www.youtube.com/embed/"+sid
    
  } 
  
})


