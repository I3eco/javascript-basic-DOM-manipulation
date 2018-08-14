window.onload = function() {
	(function(){
		var answer = document.getElementById('main');
		console.log(answer);
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