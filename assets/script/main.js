const BTN_SWITCH = document.querySelector('#switch');
const deletion_BTN = document.querySelector('#trash_id')
const backck_drop2 = document.querySelector('#ackgdrop-two');
const backdrop = document.querySelector('#backdrop');
const PO_UP_CALL = document.querySelector('#input-box');
const inputNoteTitleValue = document.querySelector("#note-title");
const inputDateValue = document.querySelector("#dateColation");
const inputNoteBodyValue = document.querySelector("#textarea-note");
const addBtn = document.querySelector("#ADD-TEXT");
const cancelBtn = document.querySelector("#CANCEL-PO-UP");
const menu_bar_BTN = document.querySelector('#menu-bar')
const menu_Box = document.querySelector('#MENU-BOX');
const note_container = document.querySelector("#note-container");
let note_place = document.querySelector('#book-place')
const trashBTN = document.querySelector("#trash-container");
const deletion_exe = document.querySelector("#deltion_question");
const back_drop3 = document.querySelector('#backdrop_3');
const confirm_deletion_BTN = document.querySelector('#confirm_deletion');
const cancel_deletion_process = document.querySelector('#cancel_deletion')
const get___1 = document.getElementsByClassName('placeCss')
const note_Id = document.getElementById("Note_id")



const generalArray = [];

const backdropCall = () =>
{
    backdrop.classList.add('visible');
}

const add_backdrop2 = () => {
    backck_drop2.classList.add('visible')
    menu_Box.classList.add('visible');
}

const popUpCall = () =>
{
    PO_UP_CALL.classList.add('visibility');
    backdropCall();
}

const removePopUp = () =>
{
    PO_UP_CALL.classList.remove('visibility');
    backdrop.classList.remove('visible');
    menu_Box.classList.remove('visible');
}

const craetionOfnoteValuePlace = document.createElement('div');


const    RESULT_OUT_PUT =  (titlenoteValue, noteTextValue, dateValue) =>
{
    const craetionOfnoteValuePlace = document.createElement('div');
    craetionOfnoteValuePlace.className = 'placeCss';

    craetionOfnoteValuePlace.innerHTML = `   
    <div class="note-box">
        <div class="image-palce">
<img src="assets/images/file-text.svg" alt="">
        </div>
     <div class="text-place">
<h3>TITLE:${titlenoteValue}</h3>

<p>
${noteTextValue}
 
</p>


<h4>DATE:${dateValue} </h4>


<img class="note_trash_buton_styling" src = "assets/images/trash-alt-10-15-30.svg" id= "second_trash-id">
     </div>

 
    </div>
`
note_place.append(craetionOfnoteValuePlace);
}


const creation_of_the_second_trash = document.createElement('h1')
creation_of_the_second_trash.innerHTML =' <h1 style ="color:red;">kkkk</h1>';
console.log(creation_of_the_second_trash)


note_place.append(creation_of_the_second_trash);


const tranch_visibility = () => {
    if (generalArray.length  > 0)
    {
        trashBTN.classList.add('visible');
        note_container.classList.add('visible');
        // console.log('djibril is the king of the coding')
    }
    else if(generalArray.length   === 0)

    {
        trashBTN.classList.remove('visible');
        note_container.classList.remove('visible');  
    }  
}
 


const clearn_input =  () =>
{
    inputNoteTitleValue.value = '';
    inputDateValue.value = '';
    inputNoteBodyValue.value = '' ;
}

const valueCollection = () =>
{
   const noteTitle = inputNoteTitleValue.value ;
   const noteDate = inputDateValue.value;
   const noteBodyText = inputNoteBodyValue.value;

   if(noteTitle.trim().length === 0 || noteDate.trim().length === 0 || noteBodyText.trim().length === 0) 
   {
       alert('please full the input')
       return
   }

const OBJECT_ONE = {

value1:noteTitle,
value2:noteDate,
value3:noteBodyText
}
generalArray .push(OBJECT_ONE);
removePopUp();
console.log(generalArray);
RESULT_OUT_PUT ( noteTitle,noteBodyText,noteDate );
tranch_visibility();
clearn_input ()
}

const backdropAndMenuRemove = () =>
{
    backck_drop2.classList.remove('visible')
    menu_Box.classList.remove('visible');
}



const deletion_question_function = () =>
{
back_drop3.classList.add('visible');
    deletion_exe.classList.add('visible');

}

const back_drop_3_logic = () =>
{
    back_drop3.classList.remove('visible');
    deletion_exe.classList.remove('visible'); 
}

const deletion_process = () => {

note_place.firstElementChild.remove();
for(const yy of  get___1)
{
    yy.remove();
}

    trashBTN.classList.remove('visible');
    back_drop_3_logic();
    note_container.classList.remove('visible');
}



const cancelDeletionProceesFunction = () =>
{
    back_drop_3_logic();

}


const deletion_By_Id_function = () => 
 {
alert('every things are good !!!!')
}

let second_trash_calling  = document.querySelector("second_trash-id");


menu_bar_BTN.addEventListener('click',add_backdrop2 )
cancelBtn.addEventListener('click',removePopUp );
addBtn.addEventListener('click',valueCollection);
backdrop.addEventListener('click',removePopUp );
BTN_SWITCH.addEventListener('click',popUpCall );
backck_drop2.addEventListener('click', backdropAndMenuRemove );
deletion_BTN.addEventListener('click',deletion_question_function);
back_drop3 .addEventListener('click',back_drop_3_logic)
confirm_deletion_BTN .addEventListener('click',deletion_process)
cancel_deletion_process.addEventListener('click', cancelDeletionProceesFunction)
