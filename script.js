(function() {
    'use strict';

    const board_dimmension = 5;

    const board = document.querySelector('.board');
    const startGameBtn = document.querySelector('.start_game');
    const step = document.querySelector('.game_step');
    const setX = document.querySelector('.x_game');

    let life = [];


    function createBoard(board) {
        for (let i = 0; i < board_dimmension; i++) {
            const row = board.insertRow(i);
            for (let j = 0; j < board_dimmension; j++) {
                const cell = row.insertCell(j);
            }
        }
    }

    function lifeInitial() {
        let arr = new Array();
        for (let i = 0; i < board_dimmension; i++) {
            arr[i] = new Array();
            for (let j = 0; j < board_dimmension; j++) {
                arr[i][j] = 0;
            }
        }
        return arr;
    }

    function boardDraw(arr) {
        arr.forEach((item, x) => {
            arr[x].forEach((item, y) => {
                const cell = board.rows[y].cells[x];
                if (item === 1) cell.classList.add('red');
            })
        })
    }

    function setLiveCell(x, y, arr) {
        if (arr[x][y] === 0) {
            arr[x][y] = 1;
        } else {
            arr[x][y] = 0;
        }
    }



    function startGame(step) {
        let i = 0;
        const interval = setInterval(() => {
            step.innerHTML = i++;
        }, 1000);
    }

    function clearBoard() {
        const clear = document.querySelectorAll('.red');
        life = lifeInitial();
        clear.forEach(element => {
            element.classList.remove('red');
        });
    }


    board.addEventListener('click', event => {
        const e = event.target;
        const td = e.closest('td');
        const tr = e.closest('tr');
        // td.classList.add('red');

        const x = td.cellIndex;
        const y = tr.rowIndex;

        setLiveCell(x, y, life);
        boardDraw(life);
    })

    startGameBtn.addEventListener('click', () => {
        clearBoard();
        startGame(step);
    }, false);




    setX.addEventListener('click', () => {
        life = lifeInitial();
        boardDraw(life);
    })

    createBoard(board);
})();