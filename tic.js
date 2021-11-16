let Tictac = ['X', 'O'];
let count = 0;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let boxes = document.querySelectorAll(`.box`);

//Modal Box Related variables

// let IsModalOn = true;


//Calling ShowModal Fucntion
show_modal(`Choose`);

//This here Adds an event listner to box 
boxes.forEach(function(ele, index) {
    ele.addEventListener("click", function() {
        if (arr[index] != 'X' && arr[index] != 'O') {

            ele.innerHTML = `${Tictac[count]}`;
            arr[index] = Tictac[count];
            count++;
            count = count % 2;
        }
        console.log(arr);
        //Delay so that user can see where it is marking
        setTimeout(checker, 100);
    })

});

//This function resets the board when game is done
function Reset() {
    boxes.forEach(function(ele) {
        ele.innerHTML = ` `;
    })
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    //Passin the message
    show_modal(arguments[0]);
}

//This checks for winner
function DrawChecker() {
    let type = false;
    for (let i = 0; i < arr.length; i++) {

        if (typeof(arr[i]) != "string") {
            type = true;
            break;
        }
    }
    if (!type) {
        Reset("Game Drawn");
    }
}

function checker() {
    if (arr[0] === arr[1] && arr[1] === arr[2]) {
        Reset(`${arr[0]} won`);
    }
    if (arr[3] === arr[4] && arr[4] === arr[5]) {
        Reset(`${arr[3]} won`);
    }
    if (arr[6] === arr[7] && arr[7] === arr[8]) {
        Reset(`${arr[6]} won`);
    }
    if (arr[0] === arr[3] && arr[3] === arr[6]) {
        Reset(`${arr[0]} won`);
    }
    if (arr[1] === arr[4] && arr[4] === arr[7]) {
        Reset(`${arr[1]} won`);
    }
    if (arr[2] === arr[5] && arr[5] === arr[8]) {
        Reset(`${arr[2]} won`);
    }
    if (arr[0] === arr[4] && arr[4] === arr[8]) {
        Reset(`${arr[0]} won`);
    }
    if (arr[2] === arr[4] && arr[4] === arr[6]) {
        Reset(`${arr[2]} won`);
    } else {
        DrawChecker();
    }

}
//Reset button
let reset = document.querySelector(`#reset_btn`);
reset.addEventListener('click', function() {
    Reset(`Choose`);
})

//Modal Box JavaSript

function modal_btn() {
    count = arguments[0];
    let background = document.querySelector(`.tic`);
    background.style.filter = `blur(0px)`;
    background.style.pointerEvents = `all`;;
    let Modal = document.querySelector(`.modal`);
    Modal.style.transfrom = `translateX(-50%) translateY(-50%) scale(0.3)`;
    Modal.style.display = `none`;
    IsModalOn = false;

}
// filter: blur(8px);
// -webkit-filter: blur(8px);
//For Showing Modal
function show_modal() {
    let background = document.querySelector(`.tic`);
    background.style.filter = `blur(8px)`;
    background.style.pointerEvents = `none`;;
    let Modal = document.querySelector(`.modal`);
    let text = document.querySelector(`#Modal_text`);
    text.innerHTML = `${arguments[0]}`;
    Modal.style.display = `flex`;
    Modal.style.transform = `translateX(-50%) translateY(-50%) scale(1)`;
}