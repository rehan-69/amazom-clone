
let needHelpContent = document.getElementById("need-help-content");
let isShow = true;

let signHeight = document.getElementById("sign-in-1");


function needHelp() {
    if (isShow) {
        needHelpContent.style.display = "block";
        signHeight.style.height = "310px";
    } else {
        needHelpContent.style.display = "none";
        signHeight.style.height = "274px";

    }
    isShow = !isShow;
}


let button = document.getElementById("sign-page-btn-1");
button.onclick = () =>{
    alert("Successfully sign up");
}

