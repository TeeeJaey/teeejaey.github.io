
class Snake {
	constructor() {
		this.size = 3;
		this.position = ["10:3","11:3","12:3"];
		this.color = "#333";
		this.direction = "R";
	}

	paint() {
		for(var i = 0 ; i < rows ; i++) {
			for(var j = 0 ; j < cols ; j++) {
				if(this.position.includes(i+":"+j))
					game.board[i][j].setSnake();
				else
					game.board[i][j].setClear();
			}
		}
	}

	move() {
		let nextPos = "";
		const head = game.getBoardCellByID(this.position[this.size-1]);

		switch (this.direction) {
			case 'R':
				nextPos += head.x + ":";
				if(head.y + 1 < cols) nextPos += head.y+1;
				else nextPos += '0';
				break;
                
			case 'L':
				nextPos += head.x + ":";
				if(head.y > 0) nextPos += head.y-1;
				else nextPos += (cols-1);
				break;
		
			case 'U':
				if(head.x > 0) nextPos += head.x-1;
				else nextPos += (rows-1);
				
				nextPos += ":" + head.y;
				break;

			case 'D':
				if(head.x + 1 < rows) nextPos += head.x+1;
				else nextPos += '0';
				
				nextPos += ":" + head.y;
				break;
		}
		
		const next = game.getBoardCellByID(nextPos);

		if(next.isDanger || next.isSnake) game.endGame();
				
		if(next.isFood) this.size++;
		else this.position = this.position.slice(1);
		
		this.position.push(nextPos);
	}
}