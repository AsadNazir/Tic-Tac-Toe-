let Tictac = ['X', 'O'];
let count = 0;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let boxes = document.querySelectorAll(`.box`);
//Modal Box Related variables
let Click_me = document.querySelector(`#Select`);
let IsModalOn = true;
Click_me.addEventListener('click', modal_btn)
    //Calling ShowModal Fucntion
show_modal();

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
        setTimeout(checker, 200);
    })

});
//This function resets the board when game is done
function Reset() {
    boxes.forEach(function(ele) {
        ele.innerHTML = ` `;
    })
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //alert("Game Ended");
    show_modal();
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
        Reset(arr[0]);
    }
    if (arr[3] === arr[4] && arr[4] === arr[5]) {
        Reset(arr[3]);
    }
    if (arr[6] === arr[7] && arr[7] === arr[8]) {
        Reset(arr[6]);
    }
    if (arr[0] === arr[3] && arr[3] === arr[6]) {
        Reset(arr[0]);
    }
    if (arr[1] === arr[4] && arr[4] === arr[7]) {
        Reset(arr[1]);
    }
    if (arr[2] === arr[5] && arr[5] === arr[8]) {
        Reset(arr[2]);
    }
    if (arr[0] === arr[4] && arr[4] === arr[8]) {
        Reset(arr[0]);
    }
    if (arr[2] === arr[4] && arr[4] === arr[6]) {
        Reset(arr[2]);
    } else {
        DrawChecker();
    }

}

//Modal Box JavaSript



function modal_btn() {
    let background = document.querySelector(`.tic`);
    background.style.opacity = `1`;
    let Modal = document.querySelector(`.modal`);
    Modal.style.display = `none`;
    IsModalOn = false;

}
//For Showing Modal
function show_modal() {
    let background = document.querySelector(`.tic`);
    background.style.opacity = `0.5`;
    let Modal = document.querySelector(`.modal`);
    Modal.style.display = `grid`;


}