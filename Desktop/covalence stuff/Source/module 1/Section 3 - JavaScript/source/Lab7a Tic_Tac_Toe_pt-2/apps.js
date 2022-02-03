let cells = document.querySelectorAll('.row > div');
let moveIndex = 0;


for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked() {

    // Paint
    if (event.target.textContent == '') {
        if (moveIndex % 2 == 0) {
            event.target.textContent = 'Me';
            moveIndex++;
        } else {
            event.target.textContent = 'You';
            moveIndex++;
        }
        if (moveIndex == 9) {
            alert("Draw!");
        }



        // Logic Check
        if ((cells[0].textContent == 'Me' && cells[1].textContent == 'Me' && cells[2].textContent == 'Me') || ((cells[0].textContent == 'You' && cells[1].textContent == 'You' && cells[2].textContent == 'You'))) {
            if (cells[0].textContent == 'Me') {
                alert('I am the winner!');
            } else {
                alert("You are the runner!");
            }
        } else if ((cells[3].textContent == 'Me' && cells[4].textContent == 'Me' && cells[5].textContent == 'Me') || ((cells[3].textContent == 'You' && cells[4].textContent == 'You' && cells[5].textContent == 'You'))) {
            if (cells[3].textContent == 'Me') {
                alert('I am the winner!');
            } else {
                alert("You are the runner!");
            }
        } else if ((cells[6].textContent == 'Me' && cells[7].textContent == 'Me' && cells[8].textContent == 'Me') || ((cells[6].textContent == 'You' && cells[7].textContent == 'You' && cells[8].textContent == 'You'))) {
            if (cells[6].textContent == 'Me') {
                alert('I am the winner!');
            } else {
                alert("You are the runner!");
            }
        } else if ((cells[0].textContent == 'Me' && cells[3].textContent == 'Me' && cells[6].textContent == 'Me') || ((cells[0].textContent == 'You' && cells[3].textContent == 'You' && cells[6].textContent == 'You'))) {
            if (cells[0].textContent == 'Me') {
                alert('I am the winner!');
            } else {
                alert("You are the runner!");
            }
        } else if ((cells[1].textContent == 'Me' && cells[4].textContent == 'Me' && cells[7].textContent == 'Me') || ((cells[1].textContent == 'You' && cells[4].textContent == 'You' && cells[7].textContent == 'You'))) {
            if (cells[1].textContent == 'Me') {
                alert('I am the winner!');
            } else {
                alert("You are the runner!");
            }
        } else if ((cells[2].textContent == 'Me' && cells[5].textContent == 'Me' && cells[8].textContent == 'Me') || ((cells[2].textContent == 'You' && cells[5].textContent == 'You' && cells[8].textContent == 'YOu'))) {
            if (cells[2].textContent == 'Me') {
                alert('I am the winner!');
            } else {
                alert("You are the runner!");
            }
        } else if ((cells[0].textContent == 'Me' && cells[4].textContent == 'Me' && cells[8].textContent == 'Me') || ((cells[0].textContent == 'You' && cells[4].textContent == 'You' && cells[8].textContent == 'You'))) {
            if (cells[0].textContent == 'Me') {
                alert('I am the winner!');
            } else {
                alert("You are the runner!");
            }
        } else if ((cells[2].textContent == 'Me' && cells[4].textContent == 'Me' && cells[6].textContent == 'X') || ((cells[2].textContent == 'You' && cells[4].textContent == 'You' && cells[6].textContent == 'You'))) {
            if (cells[2].textContent == 'Me') {
                alert('I am the winner!');
            } else {
                alert("You are the runner!");
            }
        }
    }


}



















/*
 


    function win() {
        const winningCombo = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [0, 4, 8]
        ];
        
           
        for (let j = 0; j < winningCombo.length; j++) {
            for(let k = 0; k < winningCombo[j].length; k++)
            var a =winningCombo[0].textContent;
            var b =winningCombo[1].textContent;
            var c =winningCombo[2].textContent;
            
            if (a === ""|| b === "" || c === "");{
                
                continue;
            }
                if (a === b && b === c) {
                 alert(cells[a].textContent + 'Wins!');
               
            }
            else {
                
                return;
            }
        }
        
    
        }
    ============================================================================================================================================================================
function winner(){
    if (cells[2].textContent == 'Me') {
        alert('I am the winner!');
    } else {
        alert("You are the runner!");
}
}

*/