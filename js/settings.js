$(document).ready(function() {
	$(".themeSwitch").change(function() {
	    var cookie = getCookieObj();
	    delete cookie.mode; // remove obsolete property
	    
		if($("body").hasClass("dark")) { 
			setLightTheme();
			delete cookie.theme;
	    } else { 
	   		setDarkTheme();
			cookie.theme = "dark";
		}

		setCookieObj(cookie);
	});
});

function setDarkTheme() {
	$("body").addClass("dark");
}

function setLightTheme() {
	$("body").removeClass("dark");
}