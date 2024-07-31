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
        this.$notes = document.querySelector(".notes-content");
        this.$closeText = document.querySelector(".close-text");
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
        const isCloseTextClickedOn = this.$closeText.contains(event.target);
        const title = this.$noteTitle.value;
        const text = this.$noteText.value;

        if(isFormContainerClickedOn){
            this.openActiveForm();
        }

        else if(!isActiveFormClickedOn || isCloseTextClickedOn){
            if(title !== "" && text !== ""){
                this.addNote({title, text});
            }
            this.closeActiveForm();
        }
    }

    openActiveForm(){
        this.$activeForm.style.visibility = "visible";
        this.$formContainer.style.visibility = "hidden";
        this.$noteText.focus();
    }

    closeActiveForm(){
        this.$formContainer.style.visibility = "visible";
        this.$activeForm.style.visibility = "hidden";
        this.$noteTitle.value = "";
        this.$noteText.value = "";
    }

    addNote({title, text}){
        const newNote = new Note(cuid(), title, text);
        this.notes = [...this.notes, newNote];
        this.displayNotes();
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
        this.$notes.innerHTML = this.notes.map((item) => {
            return `
                    <div class="notes-content">
                        <div class="notes">
                            <div class="tooltip">
                                <span class="material-icons checkbox">check_circle</span>
                                <span class="tooltip-text">Select note</span>
                            </div>
                            <div class="note-title"><span>${item.title}</span></div>
                            <div class="note-text"><span>${item.text}</span></div>
                            <div class="note-icons">
                                <div class="tooltip">
                                    <span class="material-icons">add_alert</span>
                                    <span class="tooltip-text">Remind me</span>
                                </div>
                                <div class="tooltip">
                                    <span class="material-icons">person_add_alt</span>
                                    <span class="tooltip-text">Collaborator</span>
                                </div>
                                <div class="tooltip">
                                    <span class="material-icons">palette</span>
                                    <span class="tooltip-text">Background Options</span>
                                </div>
                                <div class="tooltip">
                                    <span class="material-icons">image</span>
                                    <span class="tooltip-text">Add image</span>
                                </div>
                                <div class="tooltip">
                                    <span class="material-icons">archive</span>
                                    <span class="tooltip-text">Archive</span>
                                </div>
                                <div class="tooltip">
                                    <span class="material-icons">more_vert</span>
                                    <span class="tooltip-text">More</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
        }).join("");

        // this.notes.map((item) =>{
        //     console.log(`
        //     ID: ${item.id}
        //     Title: ${item.title}
        //     Text: ${item.text}`);
        // });

    }
}

const note1 = {
    title: "test title",
    text: "test text"
}

const app = new App();