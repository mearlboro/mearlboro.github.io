 

var randomColour = function() {

	var r = Math.floor((Math.random() * 200) + 20); 
	var g = Math.floor((Math.random() * 200) + 20);
	var b = Math.floor((Math.random() * 200) + 20);

	return "rgba(" + r + "," + g + "," + b + ", 1)";
}

var changeColours = function() {
	
	var as = document.getElementsByTagName('a');
	for (var i = 0, len = as.length; i < len; i++) {
		as[i].style.color = randomColour();
	}

	//as = document.getElementsByTagName('h1');
	//for (var i = 0, len = as.length; i < len; i++) {
	//	as[i].style.textShadow = "2px 4px 0 " + randomColour();
	//}

	//as = document.getElementsByClassName('sideline-container');
	//for (var i = 0, len = as.length; i < len; i++) {
	//	as[i].style.borderLeft = "10px solid " + randomColour();
	//}

	as = document.getElementsByClassName('site-header');
	for (var i = 0, len = as.length; i < len; i++) {
		as[i].style.borderTop = "5px solid " + randomColour();
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