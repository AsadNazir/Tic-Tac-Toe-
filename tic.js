let Tictac = ['X', 'O'];
let count = 0;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let boxes = document.querySelectorAll(`.box`);

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
        setTimeout(checker, 500);
    })

});
//This function resets the board when game is done
function Reset() {
    boxes.forEach(function(ele) {
        ele.innerHTML = ` `;
    })
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    alert("Game Ended");
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
        Reset();
    }
}

function checker() {
    if (arr[0] === arr[1] && arr[1] === arr[2]) {
        Reset();
    }
    if (arr[3] === arr[4] && arr[4] === arr[5]) {
        Reset();
    }
    if (arr[6] === arr[7] && arr[7] === arr[8]) {
        Reset();
    }
    if (arr[0] === arr[3] && arr[3] === arr[6]) {
        Reset();
    }
    if (arr[1] === arr[4] && arr[4] === arr[7]) {
        Reset();
    }
    if (arr[2] === arr[5] && arr[5] === arr[8]) {
        Reset();
    }
    if (arr[0] === arr[4] && arr[4] === arr[8]) {
        Reset();
    }
    if (arr[2] === arr[4] && arr[4] === arr[6]) {
        Reset();
    } else {
        DrawChecker();
    }

}