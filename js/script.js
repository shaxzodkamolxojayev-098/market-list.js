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
		let newList = document.createElement('p');
		newItem.setAttribute('class', 'item');
		newList.setAttribute('class', 'text');
		newList.textContent = inputString;
		newItem.appendChild(newList);
		elList.appendChild(newItem);
	}
})