//your JS code here. If required.

const button = document.querySelector("input");
button.addEventListener("click",handleClick);

const options = document.getElementById("colorSelect");

function handleClick(event){
	event.preventDefault();
	options.remove(options.selectedIndex);
}