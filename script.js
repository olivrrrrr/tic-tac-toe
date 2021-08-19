const squares = document.querySelectorAll('.grid div')
const startBtn = document.querySelector('.start')
const player = document.querySelector('.player')
let currentPlayer = 'Cross'

squares.forEach(square => {
    square.onclick = function(){
 if(!square.classList.contains('cross') && !square.classList.contains('circle')){ 
            if(currentPlayer === 'Cross'){
                square.classList.add('cross')
                currentPlayer = 'Circle'
                player.innerHTML = currentPlayer
            }
            else if(currentPlayer === 'Circle'){
                square.classList.add('circle')
                currentPlayer = 'Cross'
                player.innerHTML = currentPlayer
            }
            } else {
                alert('cannot play here')
            }
            announceWinner()
    } 
})

function announceWinner(){
    if(squares[0].classList.contains('cross') &&
        squares[1].classList.contains('cross') && 
        squares[2].classList.contains('cross') || 
        squares[3].classList.contains('cross') &&
        squares[4].classList.contains('cross') && 
        squares[5].classList.contains('cross')||
        squares[6].classList.contains('cross') &&
        squares[7].classList.contains('cross') && 
        squares[8].classList.contains('cross') || 
        squares[0].classList.contains('cross') &&
        squares[3].classList.contains('cross') && 
        squares[6].classList.contains('cross') || 
        squares[1].classList.contains('cross') &&
        squares[4].classList.contains('cross') && 
        squares[7].classList.contains('cross') || 
        squares[2].classList.contains('cross') &&
        squares[5].classList.contains('cross') && 
        squares[8].classList.contains('cross') || 
        squares[0].classList.contains('cross') &&
        squares[4].classList.contains('cross') && 
        squares[8].classList.contains('cross') || 
        squares[2].classList.contains('cross') &&
        squares[4].classList.contains('cross') && 
        squares[6].classList.contains('cross') ){
            alert('Crosses win')
        }   
        if(
        squares[0].classList.contains('circle') &&
        squares[1].classList.contains('circle') && 
        squares[2].classList.contains('circle') || 
        squares[3].classList.contains('circle') &&
        squares[4].classList.contains('circle') && 
        squares[5].classList.contains('circle')||
        squares[6].classList.contains('circle') &&
        squares[7].classList.contains('circle') && 
        squares[8].classList.contains('circle') || 
        squares[0].classList.contains('circle') &&
        squares[3].classList.contains('circle') && 
        squares[6].classList.contains('circle') || 
        squares[1].classList.contains('circle') &&
        squares[4].classList.contains('circle') && 
        squares[7].classList.contains('circle') || 
        squares[2].classList.contains('circle') &&
        squares[5].classList.contains('circle') && 
        squares[8].classList.contains('circle') || 
        squares[0].classList.contains('circle') &&
        squares[4].classList.contains('circle') && 
        squares[8].classList.contains('circle') || 
        squares[2].classList.contains('circle') &&
        squares[4].classList.contains('circle') && 
        squares[6].classList.contains('circle')){
            alert('Circles win')
        }
}



