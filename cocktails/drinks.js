var div_icon = document.querySelector('div')
var div = document.getElementById('result')

var a = document.createElement('a')
a.setAttribute('href', 'index.html')
var icon = document.createElement('img')
icon.setAttribute('src','resources/button.png')
icon.style.height = '40px'
icon.style.width = '80px'
a.append(icon)
div_icon.append(a)

var xhr = new XMLHttpRequest()
var url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
var title = document.querySelector('title').textContent
console.log(title)

if (title == 'Rum') {
	get_drink('rum')
}
else if (title == 'Vodka') {
	get_drink('vodka')
}
else if (title == 'Wine') {
	get_drink('wine')
}
else if (title == 'Whisky') {
	get_drink('whisky')
}
else if (title == 'Margarita') {
	get_drink('margarita')
}
else if (title == 'Tequila') {
	get_drink('tequila')
}
else if (title == 'Gin') {
	get_drink('gin')
}
else if (title == 'Punch') {
	get_drink('punch')
}
else if (title == 'Scotch') {
	get_drink('scotch')
}

function get_drink(drink) {
	console.log(drink)
	xhr.open("GET", url + drink)
	xhr.send()
	xhr.onload = function() {
		//console.log(this.response)
		var drink = JSON.parse(this.response)
		console.log(drink.drinks)
		display(drink) 
	}
}

function display(drink) {
	console.log(drink)
	for (var i = 0; i < drink.drinks.length; i++) {
		var card = document.createElement('div')
		card.setAttribute('class', 'card flip_box')

		var div_name = document.createElement('div')
		div_name.textContent = drink.drinks[i].strDrink
		div_name.style.paddingTop = '420px'

		var div_inner = document.createElement('div')
		div_inner.setAttribute('class','flip_inner')

		var div_front = document.createElement('div')
		div_front.setAttribute('class','flip_front')

		var image = document.createElement('img')
		image.setAttribute('src',drink.drinks[i].strDrinkThumb)
		image.setAttribute('id','image')

		div_front.append(image)
	
		var div_back = document.createElement('div')
		div_back.setAttribute('class','flip_back')

		//for (var j = 1; j < 16; j++) {
		//var temp = 'strIngredient'+j
		//console.log(drink.drinks[i])
		//console.log(drink.drinks[i].strIngredient1)
		//}

		var div_instr = document.createElement('div')
		div_instr.textContent = 'Instructions: ' + drink.drinks[i].strInstructions
		div_back.append(div_instr)

		div_inner.append(div_front,div_back)

		card.append(div_inner,div_name)
		div.append(card)
	}
}
