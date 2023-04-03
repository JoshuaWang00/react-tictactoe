import React, { useState} from 'react';
import './tictactoe.css';

const TicTacToe = () => {
	const [turn, setTurn] = useState('x');
	const [cells, setCells] = useState(Array(9).fill(null));
	const [winner, setWinner] = useState(null);

	const checkForWinner = (squares) => {
		let combos = {
			across: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			down: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagnol: [
				[0, 4, 8],
				[2, 4, 6],
			],
		};

let isWinner = false;

		for (let combo in combos) {
			combos[combo].forEach((pattern) => {
				if (
					squares[pattern[0]] === null ||
					squares[pattern[1]] === null ||
					squares[pattern[2]] === null
				) {
					// do nothing
				} else if (
					squares[pattern[0]] === squares[pattern[1]] &&
					squares[pattern[1]] === squares[pattern[2]]
				) {
					//this is what we will set as the winner
					setWinner(squares[pattern[0]]);	
					isWinner = true;				
				}

			});
		}
		if ((squares[0] && squares[1] && squares[2] && squares[3] && squares[4] && squares[5] && squares[6] && squares[7] && squares[8] != null) && (isWinner === false)){setWinner('Nobody')}
		}

	


	function handleClick(num){
		if (cells[num] !== null) {
			alert('Already clicked');
			return;
		}
		if (winner != null) {
			alert('Game is finished');
			return;
		}


		let squares = [...cells];

		if (turn === 'x') {
			squares[num] = 'x';
			setTurn('o');
		} else {
			squares[num] = 'o';
			setTurn('x');

		}
		checkForWinner(squares);
		setCells(squares);
	};

	const handleRestart = () => {
		setWinner(null);
		setCells(Array(9).fill(null));
	};

	const Cell = ({ num }) => {
		return <td onClick={() => handleClick(num)}>{cells[num]}</td>;



	};

	return (
		<div className='container'>
			<table className = 'turnTable'>
				Turn: {turn}
				<tbody>
					<tr>
						<Cell num={0} />
						<Cell num={1} />
						<Cell num={2} />
					</tr>
					<tr>
						<Cell num={3} />
						<Cell num={4} />
						<Cell num={5} />
					</tr>
					<tr>
						<Cell num={6} />
						<Cell num={7} />
						<Cell num={8} />
					</tr>
				</tbody>
			</table>
			{winner && (
				<>
					<p>{winner} is the winner!</p>
					<button onClick={() => handleRestart()}>Play Again</button>
				</>
			)}
		</div>
	);
};

export default TicTacToe;