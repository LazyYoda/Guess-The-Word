function getscore() {
    score = localStorage.getItem("scorekey");
    document.getElementById("showscore").innerHTML = score;
}

function back() {
    window.location = "activity_1.html";
}