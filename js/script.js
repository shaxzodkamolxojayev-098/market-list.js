let elForm = document.querySelector('.market-list');
let elInput = document.querySelector('.input-string');
let elList = document.querySelector('.written-list');

let list = [];

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	let inputString = elInput.value;
	elInput.value = '';
	list.push(inputString);

	for (item of list) {
		elList.innerHTML = ''
		let newItem = document.createElement('li');
		let newCheckbox = document.createElement('input');
		let newText = document.createElement('p');
		let newButton = document.createElement('button');
		// console.log(newItem);
		newItem.setAttribute('class', 'item');
		newCheckbox.setAttribute('type', 'checkbox');
		newButton.setAttribute('type', 'submit');
		newButton.textContent = `Delete`;
		newText.setAttribute('class', 'text');
		newText.textContent = inputString;
		newItem.appendChild(newCheckbox);
		newItem.appendChild(newText);
		newItem.appendChild(newButton);
		elList.appendChild(newItem);
	}
})