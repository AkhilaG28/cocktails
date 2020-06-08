var div = document.getElementById('main_page')

function display() {
	//console.log(event.target.textContent)
	if (event.target.textContent == 'Rum') {
		location.href = 'rum.html'
	}

	else if (event.target.textContent == 'Vodka') {
		location.href = 'vodka.html'
	}

	else if (event.target.textContent == 'Wine') {
		location.href = 'wine.html'
	}
	else if (event.target.textContent == 'Whisky') {
		location.href = 'whisky.html'
	}
	else if (event.target.textContent == 'Margarita') {
		location.href = 'margarita.html'
	}
	else if (event.target.textContent == 'Tequila') {
		location.href = 'tequila.html'
	}
	else if (event.target.textContent == 'Gin') {
		location.href = 'gin.html'
	}
	else if (event.target.textContent == 'Punch') {
		location.href = 'punch.html'
	}
	else {
		location.href = 'scotch.html'
	}
}

div.addEventListener('click', display)