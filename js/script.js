const bill = document.querySelector('.bill');
const people = document.querySelector('.people');
const tipBtns = document.querySelectorAll('.tip-btn');
const customTip = document.querySelector('.custom-tip');

const errorParagraphs = document.querySelectorAll('.error');
const billError = document.querySelector('.bill-error');
const tipError = document.querySelector('.tip-error');
const peopleError = document.querySelector('.people-error');

const tipAmount = document.querySelector('.tip-amount');
const totalAmount = document.querySelector('.total-amount');

const countBtn = document.querySelector('.count-btn');
const resetBtn = document.querySelector('.reset-btn');

let tipPercentage = 0;

// // customTip - value
// console.log(parseInt(customTip.value));

const activeTip = (e) => {
	if (e.target.classList.contains('tip-btn')) {
		tipBtns.forEach((btn) => btn.classList.remove('active'));
	}

	if (e.target.classList.contains('tip-btn')) {
		e.target.classList.toggle('active');
	}

	let tipBtn = document.querySelector('.active');
	tipPercentage = parseFloat(tipBtn.textContent.slice(0, -1)) / 100;
	getCustomTip();
};

const checkForm = () => {
	if (bill.value === '') {
		billError.textContent = "Can't be empty";
	} else if (bill.value == 0) {
		billError.textContent = "Can't be zero";
	} else {
		billError.textContent = '';
	}

	if (people.value === '') {
		peopleError.textContent = "Can't be empty";
	} else if (people.value == 0) {
		peopleError.textContent = "Can't be zero";
	} else {
		peopleError.textContent = '';
	}

	if (
		bill.value != '' &&
		bill.value != 0 &&
		people.value != '' &&
		people.value != 0
	) {
		count();
	}
};

const count = () => {
	const billValue = parseFloat(bill.value);
	const peopleValue = parseFloat(people.value);
	const totalResult = (billValue + billValue * tipPercentage) / peopleValue;
	const tipResult = (billValue * tipPercentage) / peopleValue;

	tipAmount.textContent = `$${tipResult.toFixed(2)}`;
	totalAmount.textContent = `$${totalResult.toFixed(2)}`;
};

const reset = () => {
	bill.value = '';
	people.value = '';
	customTip.value = '';
	tipPercentage = 0;

	tipBtns.forEach((btn) => {
		btn.classList.remove('active');
	});

	errorParagraphs.forEach(
		(errorParagraph) => (errorParagraph.textContent = '')
	);

	tipAmount.textContent = '$0.00';
	totalAmount.textContent = '$0.00';
};

countBtn.addEventListener('click', checkForm);
resetBtn.addEventListener('click', reset);
tipBtns.forEach((btn) => addEventListener('click', activeTip));
