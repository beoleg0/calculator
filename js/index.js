var button = document.querySelectorAll('.calculator__button-item');
var display = document.querySelector('.calculator__display-item');

var leftOperand = null;
var currentOperation = null;

button.forEach( function(e) {
	e.addEventListener('click', function(){

		if (Number.isInteger(+this.innerText)) {
			if (+display.innerText === 0) {
				display.innerText = this.innerText
			} else {
				display.innerText = display.innerText + this.innerText
			}
		}

		if (this.innerText.toLowerCase() === 'c'){
			display.innerText = 0
		}

		if (this.innerText.charCodeAt(0) === 8592) {
			if (+display.innerText.length > 1) {
				display.innerText = display.innerText.slice(0, display.innerText.length-1)
			} else{
				display.innerText = 0
			}
		}

		if (this.innerText === '/' ||
				this.innerText === '*' ||
				this.innerText === '-' ||
				this.innerText === '+') 
		{
			leftOperand = display.innerText;
			currentOperation = this.innerText;
			display.innerText = 0;
		}

		if (this.innerText === '=') {
			if (leftOperand) {
				eval('var result = function(){ return +leftOperand ' + currentOperation + ' +display.innerText }()');
				display.innerText = result;

				leftOperand == null;
				currentOperation == null;
			}
		}
	})
});