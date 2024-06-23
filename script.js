// For the TimeStamps
const timeStamp = document.getElementById("timeStamp");
const updateTime = () =>{
    const date = new Date();
    const hour = date.getHours().toString().padStart(2,0);
    const minute = date.getMinutes().toString().padStart(2,0);
    const seconds = date.getSeconds().toString().padStart(2,0);
    const currentTime = `${hour}:${minute}:${seconds}`;
    timeStamp.textContent = `Edited ` + currentTime;
}

updateTime();
setInterval(updateTime, 1000);

const timeText = document.getElementById("timeText");

const updateDay = () =>{
    const date = new Date();
    const today = date.getDate();
    let month = date.getMonth();
    
    switch(month){
        case 0:
            month = "Jan";
            break;
        
        case 1:
            month = "Feb";
            break;
    
        case 2:
            month = "Mar";
            break;
    
        case 3:
            month = "Apr";
            break;
    
        case 4:
            month = "May";
            break;    
            
        case 5:
            month = "Jun";
            break;
         
        case 6:
            month = "Jul";
            break;
    
        case 7:
            month = "Aug";
            break;
    
        case 8:
            month = "Sep";
            break;
    
        case 9:
            month = "Oct";
            break;
    
        case 10:
            month = "Nov";
            break;
    
        case 11:
            month = "Dec";
            break;
    
        default:
            month = "";
    }

    const year = date.getFullYear();

    timeText.textContent = `Est ${today} ${month} ${year}`;
};

updateDay();


// The forms
const firstForm = document.querySelector(".form-container");
const secondForm = document.querySelector(".active-form");
const closeForm = document.querySelector(".close-text");
const noteText = document.querySelector("#note-text");

firstForm.addEventListener("click", () =>{
    firstForm.style.visibility = "hidden";
    secondForm.style.visibility = "visible";
    noteText.focus();
});


closeForm.addEventListener("click", () =>{
    firstForm.style.visibility = "visible";
    secondForm.style.visibility = "hidden";
});


const handleForms = () =>{
    document.body.addEventListener("click", () =>{
        if(noteText.value !== ""){
            console.log(noteText.value);
        }
    });
};

handleForms();

// To Be Replaced
const modalOpening = document.getElementById("modalOpening");
const note = document.getElementById("note");
const close = document.getElementById("close");
const sideBar = document.getElementById("sideBar");
modalOpening.style.visibility = "hidden";   

note.addEventListener("click", () =>{
    modalOpening.style.visibility = "visible";

    if(secondForm.style.visibility === "visible"){
        firstForm.style.visibility = "visible";
        secondForm.style.visibility = "hidden";
    }

    else{
        return "";
    }
});

close.addEventListener("click", () =>{
    modalOpening.style.visibility = "hidden";
});