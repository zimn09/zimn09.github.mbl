let btn = document.getElementById("btn");
let inpt = document.getElementById("text");
let btn2 = document.getElementById("btn2");
let paragraph = "";
let mbl_circle = document.getElementById("mbl-circle");
let close_btn = document.getElementById("close-btn");
btn.addEventListener("click", function() {
  let anchor = document.createElement("a");
  document.getElementById("cont").appendChild(anchor);
  anchor.textContent = "Delete Text";
  anchor.href = "#";
  paragraph = document.createElement("p");
  document.getElementById("cont").appendChild(paragraph);
  paragraph.textContent = inpt.value;
  inpt.value = "";
  paragraph.addEventListener("click", function() {
    paragraph.style.color = "green";
    paragraph.style.textDecoration = "line-through";
    var audio = new Audio("minimal-ui-pack-pops-clicks-ticks-27052.mp3");
    audio.play();
    setTimeout(function() {
      audio.pause();
      audio.currentTime = 0;
    }, 1000);
  });
  anchor.addEventListener("click", function() {
    paragraph.textContent = "";
    paragraph.style.color = "black";
    anchor.textContent = "";
    paragraph.setAttribute("contenteditable", false);
  });
});

btn2.addEventListener("click", function() {
  if (paragraph.textContent.length > 0) {
    window.alert("Just double-click the text to edit it. Then just hold the text with your left mouse button");
    paragraph.addEventListener("dblclick", function() {
      paragraph.style.color = "black";
      paragraph.style.textDecoration = "none";
      if (confirm("Are you sure you want to edit the text?")) {
        // action confirmed
        paragraph.setAttribute("contenteditable", true);
        paragraph.onclick = function(){
          paragraph.style.color = "black";
          paragraph.style.textDecoration = "none";
          document.getElementById("cont").onclick = function(){
            paragraph.setAttribute("contenteditable", false)
            if (paragraph.contentEditable){
              //ahoj
            }
            else{
              paragraph.addEventListener("click", function() {
                paragraph.style.color = "green";
                paragraph.style.textDecoration = "line-through";
                var audio = new Audio("minimal-ui-pack-pops-clicks-ticks-27052.mp3");
                audio.play();
                setTimeout(function() {
                  audio.pause();
                  audio.currentTime = 0;
                }, 1000);
              });
            }
          }
        }
        console.log("Ok is clicked.");
      } else {
        // action cancelled
        console.log("Cancel is clicked.");
      }
    });
  } else {
    window.alert("You must write some text first before you can edit it.");
  }
});




    
