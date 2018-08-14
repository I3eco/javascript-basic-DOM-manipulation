window.onload = function() {
	(function(){
		var answer,
		    newHeader;
		newHeader = document.createElement('h1');
		document.body.appendChild(newHeader);
		newHeader.setAttribute('id', 'main');
		answer = document.getElementById('main');
		
		function canDrive() {
			var getAge = prompt("Please enter your age:");
			if (getAge >= 18) {
				answer.innerText ="You can drive";
				answer.setAttribute('class', 'green');
			}
			else {
				answer.innerText = "You cannot drive";
				answer.setAttribute('class', 'red');
			}
		}
		
		canDrive();
	})();
}
