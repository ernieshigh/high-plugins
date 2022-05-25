/**
	*
	* Some JS for scroll
	*
**/

function do_something(){ 


  alert('wtf')

		document.getElementById("scroll-block").remove();
   return true; // submit the form
 
}

document.addEventListener('DOMContentLoaded', function() {
	 
	window.addEventListener('scroll', function() { 
		var top =	 window.pageYOffset || document.documentElement.scrollTop;
			if (top > 100) {
				document.getElementById("scroll-block").style.display = "block";
			} else {
				document.getElementById("scroll-block").style.display = "none";
			}
		 
	});


})