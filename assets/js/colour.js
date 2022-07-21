 

var randomColour = function() {

	var r = Math.floor((Math.random() * 180) + 65); 
	var g = Math.floor((Math.random() * 180) + 65);
	var b = Math.floor((Math.random() * 180) + 65);

	return "rgba(" + r + "," + g + "," + b + ", 1)";
}

var changeColours = function() {
	
	var as = document.getElementsByTagName('a');
	for (var i = 0, len = as.length; i < len; i++) {
		as[i].style.color = randomColour();
	}

	as = document.querySelectorAll('.post h3');
	for (var i = 0, len = as.length; i < len; i++) {
		as[i].style.color = randomColour();
	}

	as = document.querySelectorAll('.post h4');
	for (var i = 0, len = as.length; i < len; i++) {
		as[i].style.color = randomColour();
	}

	as = document.getElementsByClassName('site-header');
	for (var i = 0, len = as.length; i < len; i++) {
		as[i].style.borderTop = "5px solid " + randomColour();
	}

	// post menu keep subsections white
	as = document.querySelectorAll('.post-menu li li a');
	for (var i = 0, len = as.length; i < len; i++) {
		as[i].style.color = '#fff';
	}
}


if(window.attachEvent) {
    window.attachEvent('onload', changeColours);
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function(evt) {
            curronload(evt);
            changeColours(evt);
        };
        window.onload = newonload;
    } else {
        window.onload = changeColours;
    }
}