var data = 0;
var operation;
var input;

function process(input) {
	document.form1.scr.value = document.form1.scr.value + input;
}

function operationStore(r) {
	data = document.form1.scr.value;
  	operation = parseInt(r);
  	document.form1.scr.value = "";
}

function result() {
	switch(operation) {
		case 1: {
			document.form1.scr.value = parseInt(data) + parseInt(document.form1.scr.value);
		} break;

		case 2: {
			document.form1.scr.value = parseInt(data) - parseInt(document.form1.scr.value);
		} break;

		case 3: {
			document.form1.scr.value = parseInt(data) * parseInt(document.form1.scr.value);
		}

		case 4: {
			document.form1.scr.value = parseInt(data) / parseInt(document.form1.scr.value);
		}

		default:
		break;
	}

	data = document.form1.scr.value;
}

function clears() {
	data = 0;
	operation = null;
	input = null;
	document.form1.scr.value = "";
}
