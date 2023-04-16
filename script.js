// кнопка on/Off:

const onOFfBtn = document.querySelector('.onOff');
const onOffText = document.querySelector('.switcherText p');

onOFfBtn.addEventListener('click', function () {
	if (onOffText.innerHTML === 'Off') {
		onOffText.innerHTML = 'On';
	} else {
		onOffText.innerHTML = 'Off';
	}
});

// сбор данных с формы://

const checkBtn = document.querySelector('#submit');

const checkUserName = document.querySelector('#formGroupExampleInput');
const checkUserPass = document.querySelector('#exampleInputPassword1');
const checkUserLabelText = document.querySelector('#formGroupExampleInput');
const checkUserRemember = document.querySelector('#flexCheckDefault');
const checkUserOnOffBtn = document.querySelector('.onOff');
const checkUserRadio = document.querySelectorAll('.radioBtn .form-check-input');
const checkUserOption = document.querySelector('.form-select');

//проверка Remember и onOFf
function userRememberFn() {
	if (checkUserRemember.checked) {
		return checkUserRemember.value;
	}
}
function userOnOffFn() {
	if (checkUserOnOffBtn.checked) {
		return checkUserOnOffBtn.value;
	} else {
		alert('Check On/Off button');
	}
}
//цикл для перебора радиокнопок
function userRadioFn() {
	for (let i = 0; i < checkUserRadio.length; i++) {
		if (checkUserRadio[i].checked) {
			data = checkUserRadio[i].value;
			break;
		}
	}
	return data;
}
//сбор данных в массив
checkBtn.addEventListener('click', () => {
	let data = {
		userName: checkUserName.value,
		userPassword: checkUserPass.value,
		userText: checkUserLabelText.value,
		userRemember: userRememberFn(),
		userOnOff: userOnOffFn(),
		userRadio: userRadioFn(),
		userOption: checkUserOption.value,
	};
	alert(JSON.stringify(data));
});
