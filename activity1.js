var score = 0;

function update() {
    score = score + 1;
    document.getElementById("scorelabel").innerHTML = score;
}

function save() {
    localStorage.setItem("scorekey", score);
}

function next() {
    window.location = "activity_2.html";
}