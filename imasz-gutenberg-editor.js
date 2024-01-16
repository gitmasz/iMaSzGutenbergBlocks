/**AddClass**/
function goAddClass(element, name){
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
	}
};
/**RemoveClass**/
function goRemoveClass(element, name){
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);		 
		}
	}
	element.className = arr1.join(" ");
};

/**Options Switch**/
document.addEventListener('click', function (event) {
	if(!event.target.matches('div.block_options_switch span.options_toggle')) return;
	event.preventDefault();
	if(event.target.matches('div.block_options_switch span.options_toggle.open')){
		event.target.parentElement.parentElement.children[1].style.display="none";
		goRemoveClass(event.target, 'open');
	}else if(event.target.matches('div.block_options_switch span.options_toggle')){
		event.target.parentElement.parentElement.children[1].style.display="block";
		goAddClass(event.target, 'open');
	};
}, false);