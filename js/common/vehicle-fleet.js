$(document).ready(function() {
    var header = document.getElementsByClassName("header")[0];
	var sticky = header.offsetTop;
	
	function stickyHeader() {
		if (window.pageYOffset > 0) {
			header.classList.add("sticky");
		} 
		else {
		    header.classList.remove("sticky");
		}
	}

	stickyHeader();
	window.onscroll = stickyHeader;
});