let year = new Date().getUTCFullYear();
let tmonth = new Date().getMonth(); // change
let date = new Date().getDate();
let tday = new Date().getUTCDay(); // change
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Spet", "Oct", "Nov", "Dec"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function toMonth(req){
    return months[req];
}

function toDay(req){
    return days[req];
}

let dayShow = document.getElementById("day");
dayShow.innerHTML = toDay(tday);

let fullDate = `${year} ${toMonth(tmonth)} ${date}, ${toDay(tday)}`
document.getElementById("dayRight").innerHTML = fullDate


monday = {
    1: "Maths Sr",
    2: "Chemistry D",
    3: "English",
    4: "Nepali",
    5: "Chemistry, S",
    6: "English Reading",
    7: "Maths, S",
    8: "Nepali Reading"
}
tuesday = {
    1: "Maths L",
    2: "Chemistry RDP",
    3: "Nepali",
    4: "Chemistry Practical",
    5: "Chemistry Practical",
    6: "DSS Talk",
    7: "Computer, Su",
    8: "Physics, M"
}
wednesday = {
    1: "Chemistry, RDP",
    2: "Adv Programming",
    3: "Adv Programming",
    4: "Computer, Sa",
    5: "English",
    6: "Maths, L",
    7: "Chemistry, D",
    8: "Maths, S"
}
thursday = {
    1: "Math Sr",
    2: "Basic Coding",
    3: "Basic Coding",
    4: "Physics Practical",
    5: "Physics Practical",
    6: "Nepali",
    7: "Computer, Su",
    8: "Physics, B"
}
friday = {
    1: "Physics, R",
    2: "Physics, R",
    3: "Maths, S",
    4: "Computer, S",
    5: "Nepali Reading",
    6: "Physics, B",
    7: "English Reading",
    8: "English"
}

let td = new Date().getDay();
classes = document.getElementById("routine");

function tomorrow(){
    if(td == 1){
        tuesdayShow()
    }
    if(td == 2){
        wednesdayShow()
    }
    if(td == 3){
        thursdayShow()
    }
    if(td == 4){
        fridayShow()
    }
    if(td == 5){
        saturdayShow()
    }
    if(td == 0){
        mondayShow()
    }
}



function mondayShow() {
    // classes.innerHTML = `${monday["1"]} <br> ${monday["2"]} <div id="break">Break</div> ${monday["3"]} <div id="break">Lunch Break</div> ${monday["4"]} <br> ${monday["5"]} <br> ${monday["6"]} <div id="break">Break</div> ${monday["7"]} <br> ${monday["8"]} `;
    dayShow.innerHTML = "Good Luck for Exam!";
};

function tuesdayShow() {
    //classes.innerHTML = `${tuesday["1"]} <br> ${tuesday["2"]} <div id="break">Break</div> ${tuesday["3"]} <div id="break">Lunch Break</div> ${tuesday["4"]} <br> ${tuesday["5"]} <br> ${tuesday["6"]} <div id="break">Break</div> ${tuesday["7"]} <br> ${tuesday["8"]} `;
    //dayShow.innerHTML = "Tuesday";
    dayShow.innerHTML = "Good Luck for Exam!";
};

function wednesdayShow() {
    //classes.innerHTML = `${wednesday["1"]} <br> ${wednesday["2"]} <div id="break">Break</div> ${wednesday["3"]} <div id="break">Lunch Break</div> ${wednesday["4"]} <br> ${wednesday["5"]} <br> ${wednesday["6"]} <div id="break">Break</div> ${wednesday["7"]} <br> ${wednesday["8"]} `;
    //dayShow.innerHTML = "Wednesday";
    dayShow.innerHTML = "Good Luck for Exam!";
};

function thursdayShow() {
    //classes.innerHTML = `${thursday["1"]} <br> ${thursday["2"]} <div id="break">Break</div> ${thursday["3"]} <div id="break">Lunch Break</div> ${thursday["4"]} <br> ${thursday["5"]} <br> ${thursday["6"]} <div id="break">Break</div> ${thursday["7"]} <br> ${thursday["8"]} `;
    //dayShow.innerHTML = "Thursday";
    dayShow.innerHTML = "Good Luck for Exam!";
};

function fridayShow() {
    //classes.innerHTML = `${friday["1"]} <br> ${friday["2"]} <div id="break">Break</div> ${friday["3"]} <div id="break">Lunch Break</div> ${friday["4"]} <br> ${friday["5"]} <br> ${friday["6"]} <div id="break">Break</div> ${friday["7"]} <br> ${friday["8"]} `;
    //dayShow.innerHTML = "Friday";
    dayShow.innerHTML = "Good Luck for Exam!";
};
function sundayShow() {
    //classes.innerHTML = "No Classes today!";
    //dayShow.innerHTML = "Sunday";
    dayShow.innerHTML = "Good Luck for Exam!";
};
function saturdayShow() {
    //classes.innerHTML = "No Classes today!";
    //dayShow.innerHTML = "Saturday";
    dayShow.innerHTML = "Good Luck for Exam!";
};


if (td == 1) {
    mondayShow()
}
if (td == 2) {
    tuesdayShow()
}
if (td == 3) {
    wednesdayShow()
}
if (td == 4) {
    thursdayShow()
}
if (td == 5) {
    fridayShow()
}
if(td == 6){
    saturdayShow()
}
if(td == 0){
    sundayShow()
}
