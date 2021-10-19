let Tictac = ['X', 'O'];
let count = 0;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let boxes = document.querySelectorAll(`.box`);
boxes.forEach(function(ele, index) {
    ele.addEventListener("click", function() {
        ele.innerHTML = `${Tictac[count]}`;
        arr[index] = Tictac[count];
        count++;

        count = count % 2;
        console.log(arr);
        setTimeout(checker, 500);
    })

});

function Reset() {
    boxes.forEach(function(ele) {
        ele.innerHTML = ` `;
    })
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    alert("Game Ended");
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
    }
}