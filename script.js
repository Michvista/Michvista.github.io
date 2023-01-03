var isClicked = false;
const icon = document.getElementById('icon')
const div = document.getElementById('div');

const clicked = () => {
	isClicked ? icon.className = 'fa-solid fa-bars' : icon.className = 'fa-solid fa-xmark';
	alert('clicked');
	isClicked = !isClicked;
}
