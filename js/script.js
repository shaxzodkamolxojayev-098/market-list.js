let elForm = document.querySelector('.market-list');
let elInput = document.querySelector('.input-string');
let elList = document.querySelector('.written-list');

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	let list = [];
	let inputString = elInput.value;
	elInput.value = '';
	list.push(inputString);

	for (item of list) {
		let newItem = document.createElement('li');
		let newText = document.createElement('p');
		newItem.setAttribute('class', 'item');
		newText.setAttribute('class', 'text');
		newText.textContent = inputString;
		newItem.appendChild(newText);
		elList.appendChild(newItem);
	}
})