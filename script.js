(function() {
    'use strict';

    const board_dimmension = 5;

    const board = document.querySelector('.board');
    const start_game_btn = document.querySelector('.start_game');
    const step = document.querySelector('.game_step');

    function createBoard(board) {
        for (let i = 0; i < board_dimmension; i++) {
            const row = board.insertRow(i);
            for (let j = 0; j < board_dimmension; j++) {
                const cell = row.insertCell(j);
            }
        }
    }

    board.addEventListener('click', event => {
        const e = event.target;
        const td = e.closest('td');
        td.classList.add('red');
    })

    function startGame(step) {

        let i = 0;

        const interval = setInterval(() => {
            step.innerHTML = i++;
            console.log(i);

        }, 1000);

    }




    createBoard(board);

    startGame(step);


})();