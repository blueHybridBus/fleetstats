$(document).ready(function() {
	var obj = getCookieObj();

	if (!$.isEmptyObject(obj)) {
		if (!obj.hasOwnProperty("cookiesConsent")) {
			showCookieBanner(obj);
		}
	} 
	else {
		showCookieBanner({});
	}
	
	setCookieObj(obj);
	
	$("#fleet-nav").click(dropdownMenuDisplay);

	$(window).click(function(event) {
		// Allows user to click anywhere on the screen to close menu
		if (event.target.id != "mobile-menu-icon" && event.target.id != "fleet-nav"
			&& window.innerWidth > 670 && event.target.id != "fleet-nav-dropdown-icon") {
			$(".dropdown-content").css("display", "none");
		}
	});

	$(".icon").click(function() {
		var x = $("#main-nav");

		if (x.hasClass("responsive")) {
			x.height(53);
			
			var delay = 280;
			setTimeout(function() {
				x.removeClass("responsive");
			}, delay);
		} 
		else {
			x.addClass("responsive");
			x.height(417);
		}
	});

	var menu = window.matchMedia("(min-width: 670px)");
	menu.addListener(function(x) {
		if (x.matches) {
			$("#main-nav").height(53);
			$("#main-nav").removeClass("responsive");
			$(".dropdown-content").css("display", "none");
		}
		else {
			$(".dropdown-content").css("display", "block");
		}
	});
});

function dropdownMenuDisplay() {
	var dropdown = $(".dropdown-content");

	if (dropdown.css("display") == "block") {
		dropdown.css("display", "none");
	} 
	else {
		dropdown.css("display", "block");
	}
}

function getCookieObj() {
	var cookie = decodeURIComponent(document.cookie).split(';');
	var prefs = {};

	// Itereate through each part of the cookie
	for (i = 0; i < cookie.length; i++) {
		var part = cookie[i].split('=');
		var name = part[0];
		element = name.replace(/\s+/g, '');

		if (element == "prefs") {
			prefs = JSON.parse(part[1]);
		}
	}

	return prefs;
}

function setCookieObj(obj) {
	var d = new Date();
	d.setTime(d.getTime() + (1000 * 60 * 60 * 24 * 365 * 3));

	var expiryDate = d.toUTCString();
	var path = "/";
	var sameSiteVal = "Lax";

    document.cookie = "prefs=" + encodeURIComponent(JSON.stringify(obj)) + ";"
        + "expires=" + expiryDate + ";"
        + "path=" + path + ";"
        + "sameSite=" + sameSiteVal + ";";
}

function showCookieBanner() {
	var cookieBanner = $("#cookie-banner");
	cookieBanner.removeClass("hidden");

	$("#cookies-consent-btn").on("click", function() {
		cookieBanner.addClass("hidden");
		
		var newCookie = getCookieObj();
		newCookie.cookiesConsent = true;
		setCookieObj(newCookie);
	});	
}