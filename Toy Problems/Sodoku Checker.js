function sudokuChecker(board) {
    
    let splitBoard = [];
splitBoard = board.split('\n');

let removeBlank = (number) => {
    return number != ' '

splitBoard.filter(removeBlank)



}

return splitBoard;
}

let sudokuGame =`
735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429`;



console.log(sudokuChecker(sudokuGame))