// // For the TimeStamps
// const timeStamp = document.getElementById("timeStamp");
// const updateTime = () =>{
//     const date = new Date();
//     const hour = date.getHours().toString().padStart(2,0);
//     const minute = date.getMinutes().toString().padStart(2,0);
//     const seconds = date.getSeconds().toString().padStart(2,0);
//     const currentTime = `${hour}:${minute}:${seconds}`;
//     timeStamp.textContent = `Edited ` + currentTime;
// }

// updateTime();
// setInterval(updateTime, 1000);

// const timeText = document.getElementById("timeText");

// const updateDay = () =>{
//     const date = new Date();
//     const today = date.getDate();
//     let month = date.getMonth();
    
//     switch(month){
//         case 0:
//             month = "Jan";
//             break;
        
//         case 1:
//             month = "Feb";
//             break;
    
//         case 2:
//             month = "Mar";
//             break;
    
//         case 3:
//             month = "Apr";
//             break;
    
//         case 4:
//             month = "May";
//             break;    
            
//         case 5:
//             month = "Jun";
//             break;
         
//         case 6:
//             month = "Jul";
//             break;
    
//         case 7:
//             month = "Aug";
//             break;
    
//         case 8:
//             month = "Sep";
//             break;
    
//         case 9:
//             month = "Oct";
//             break;
    
//         case 10:
//             month = "Nov";
//             break;
    
//         case 11:
//             month = "Dec";
//             break;
    
//         default:
//             month = "";
//     }

//     const year = date.getFullYear();

//     timeText.textContent = `Est ${today} ${month} ${year}`;
// };

// updateDay();


// // The forms
// const firstForm = document.querySelector(".form-container");
// const secondForm = document.querySelector(".active-form");
// const closeForm = document.querySelector(".close-text");
// const noteTitle = document.querySelector("#note-title");
// const noteText = document.querySelector("#note-text");

// firstForm.addEventListener("click", () =>{
//     firstForm.style.visibility = "hidden";
//     secondForm.style.visibility = "visible";
//     noteText.focus();
// });


// closeForm.addEventListener("click", () =>{
//     firstForm.style.visibility = "visible";
//     secondForm.style.visibility = "hidden";
//     handleForms();
//     noteTitle.value = "";
//     noteText.value = "";

// });


// const handleForms = () =>{
//         if(noteText.value !== ""){
//             console.log(noteText.value);
//         }
// };



// // To Be Replaced
// const modalOpening = document.getElementById("modalOpening");
// const note = document.getElementById("note");
// const close = document.getElementById("close");
// const sideBar = document.getElementById("sideBar");
// modalOpening.style.visibility = "hidden";   

// note.addEventListener("click", () =>{
//     modalOpening.style.visibility = "visible";

//     if(secondForm.style.visibility === "visible"){
//         firstForm.style.visibility = "visible";
//         secondForm.style.visibility = "hidden";
//     }

//     else{
//         return "";
//     }
// });

// close.addEventListener("click", () =>{
//     modalOpening.style.visibility = "hidden";
// });



class Note{
    constructor(id, title, text){
        this.id = id;
        this.title = title;
        this.text = text;
    }
}

class App{
    constructor(){
        this.notes = [];
        this.$activeForm = document.querySelector(".active-form");
        this.$formContainer = document.querySelector(".form-container");
        this.$noteTitle = document.querySelector("#note-title");
        this.$noteText = document.querySelector("#note-text");
        this.eventListeners();
    }

    eventListeners(){
        document.body.addEventListener("click", (event) =>{
            this.handleFormClick();
        });
    }

    handleFormClick(){
        const isFormContainerClickedOn = this.$formContainer.contains(event.target);
        const isActiveFormClickedOn = this.$activeForm.contains(event.target);


        if(isFormContainerClickedOn){
            this.openActiveForm();
        }
    }

    openActiveForm(){
        this.$activeForm.style.visibility = "visible";
        this.$formContainer.style.visibility = "hidden";
        this.$noteText.focus();
    }


    addNote(id, {title, text}){
        const newNote = new Note(id, title, text);
        this.notes = [...this.notes, newNote];
    }

    editNote(id, {title, text}){
        this.notes.map((item) =>{
            if(item.id === id){
                item.title = title;
                item.text = text;
            }
        })
    }


    deleteNote(id){
        this.notes = this.notes.filter(item => item.id !== id);
    }

    displayNotes(){
        this.notes.map((item) =>{
            console.log(`
            ID: ${item.id}
            Title: ${item.title}
            Text: ${item.text}`);
        });
    }
}

const note1 = {
    title: "test title",
    text: "test text"
}

const app = new App();