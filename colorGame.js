let numSquares = 9;
let colors = generateRandomColors(numSquares);

let squares = document.querySelectorAll(".square");
let rgbText = document.querySelector("#rgb");
let messageText = document.querySelector("#message");
let title = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easy");
let medBtn = document.querySelector("#med");
let hardBtn = document.querySelector("#hard");

let pickedColor = pickColor();
rgbText.textContent = pickedColor;

for(let i = 0; i < squares.length; i++) {
	// adding colors to squares
	squares[i].style.backgroundColor = colors[i];

	// adding click listeners to squares
	squares[i].addEventListener("click", function() {
		// get color of picked square and compare it to the picked color
		if(colors[i] === pickedColor) {
			messageText.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			for(let j = 0; j < squares.length; j++)
				squares[j].style.backgroundColor = pickedColor;
			title.style.backgroundColor = pickedColor;
		}
		else {
			this.style.backgroundColor = "transparent";
			messageText.textContent = "Try Again";
		}
	});
}

resetButton.addEventListener("click", function() {
	title.style.backgroundColor = "steelblue";
	messageText.textContent = "";
	this.textContent = "New Colors";

	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	rgbText.textContent = pickedColor;

	for(let i = 0; i < squares.length; i++) {
		// adding colors to squares
		squares[i].style.backgroundColor = colors[i];

		// adding click listeners to squares
		squares[i].addEventListener("click", function() {
			// get color of picked square and compare it to the picked color
			if(colors[i] === pickedColor) {
				messageText.textContent = "Correct!";
				for(let j = 0; j < squares.length; j++)
					squares[j].style.backgroundColor = pickedColor;
				title.style.backgroundColor = pickedColor;
			}
			else {
				this.style.backgroundColor = "transparent";
				messageText.textContent = "Try Again";
			}
		});
	}
});

easyBtn.addEventListener("click", function() {
	numSquares = 3;
	title.style.backgroundColor = "steelblue";
	messageText.textContent = "";
	resetButton.textContent = "New Colors";

	this.classList.add("selected");
	medBtn.classList.remove("selected");
	hardBtn.classList.remove("selected");

	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	rgbText.textContent = pickedColor;

	for(let i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];

			squares[i].addEventListener("click", function() {
				// get color of picked square and compare it to the picked color
				if(colors[i] === pickedColor) {
					messageText.textContent = "Correct!";
					for(let j = 0; j < squares.length; j++)
						squares[j].style.backgroundColor = pickedColor;
					title.style.backgroundColor = pickedColor;
				}
				else {
					this.style.backgroundColor = "transparent";
					messageText.textContent = "Try Again";
				}
			});
		}
		else {
			squares[i].style.display = "none";
		}
	}
});

medBtn.addEventListener("click", function() {
	numSquares = 6;
	title.style.backgroundColor = "steelblue";
	messageText.textContent = "";
	resetButton.textContent = "New Colors";

	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	hardBtn.classList.remove("selected");

	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	rgbText.textContent = pickedColor;

	for(let i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];

			squares[i].addEventListener("click", function() {
				// get color of picked square and compare it to the picked color
				if(colors[i] === pickedColor) {
					messageText.textContent = "Correct!";
					for(let j = 0; j < squares.length; j++)
						squares[j].style.backgroundColor = pickedColor;
					title.style.backgroundColor = pickedColor;
				}
				else {
					this.style.backgroundColor = "transparent";
					messageText.textContent = "Try Again";
				}
			});
		}
		else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function() {
	numSquares = 9;
	title.style.backgroundColor = "steelblue";
	messageText.textContent = "";
	resetButton.textContent = "New Colors";

	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	medBtn.classList.remove("selected");

	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	rgbText.textContent = pickedColor;

	for(let i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];

			squares[i].addEventListener("click", function() {
				// get color of picked square and compare it to the picked color
				if(colors[i] === pickedColor) {
					messageText.textContent = "Correct!";
					for(let j = 0; j < squares.length; j++)
						squares[j].style.backgroundColor = pickedColor;
					title.style.backgroundColor = pickedColor;
				}
				else {
					this.style.backgroundColor = "transparent";
					messageText.textContent = "Try Again";
				}
			});
		}
		else {
			squares[i].style.display = "none";
		}
	}
});

function pickColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(amount) {
	let temp = [];

	for(let i = 0; i < amount; i++) {
		let r = Math.floor(Math.random() * 256);
		let g = Math.floor(Math.random() * 256);
		let b = Math.floor(Math.random() * 256);
		temp.push("rgb(" + r + ", " + g + ", " + b + ")");
	}

	return temp;
}