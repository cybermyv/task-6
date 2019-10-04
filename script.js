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
                const cell = board.rows[x].cells[y];
                if (item === 1) { cell.classList.add('red') } else { cell.classList.remove('red') }

            })
        })
    }

    function setLiveCell(x, y, arr) {
        console.log(arr[x][y]);
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

    //-- 
    function checkPosition() {


        for (let x = 0; x < 1; x++) {



            for (let y = 0; y < 1; y++) {
                let count = 0;



                if (y - 1 >= 0) {
                    if (life[x, y - 1] === 1) count += 1
                }
                console.log('x= ', x, 'y= ', y, 'count - ', count);

                if (x - 1 >= 0 && y - 1 >= 0) {
                    if (life[x - 1, y - 1] === 1) count += 1
                }
                console.log('x= ', x, 'y= ', y, 'count - ', count);

                if (x - 1 >= 0) {
                    if (life[x - 1, y] === 1) count += 1
                }
                console.log('x= ', x, 'y= ', y, 'count - ', count);

                if (x - 1 >= 0 && y + 1 <= board_dimmension) {
                    if (life[x - 1, y + 1] === 1) count += 1
                }
                console.log('x= ', x, 'y= ', y, 'count - ', count);

                if (y + 1 >= board_dimmension) {
                    if (life[x, y + 1] === 1) count += 1
                }
                console.log('x= ', x, 'y= ', y, 'count - ', count);

                if (x + 1 >= board_dimmension && y + 1 >= board_dimmension) {
                    if (life[x + 1, y + 1] === 1) count += 1
                }
                console.log('x= ', x, 'y= ', y, 'count - ', count);

                if (x + 1 >= board_dimmension) {
                    if (life[x + 1, y] === 1) count += 1
                }
                console.log('x= ', x, 'y= ', y, 'count - ', count);

                if (x + 1 >= board_dimmension && y - 1 >= 0) {
                    if (life[x + 1, y - 1] === 1) count += 1
                }
                console.log('x= ', x, 'y= ', y, 'count - ', count);



                if (count === 3) {
                    life[x][y] = 1;
                }

                if (count > 3) {
                    life[x][y] = 0;
                }
                if (count < 3) {
                    life[x][y] = 0;
                }

                boardDraw(life);


            }


        }



    }


    board.addEventListener('click', event => {
        const e = event.target;
        const td = e.closest('td');
        const tr = e.closest('tr');

        const y = td.cellIndex;
        const x = tr.rowIndex;

        console.log(x, y)

        setLiveCell(x, y, life);
        boardDraw(life);
    })

    startGameBtn.addEventListener('click', () => {
        clearBoard();
        startGame(step);
    }, false);




    setX.addEventListener('click', () => {
        // console.log(life);
        // console.log(checkPosition(2, 2));

        checkPosition();


    });


    createBoard(board);
    life = lifeInitial();
    boardDraw(life);
})();