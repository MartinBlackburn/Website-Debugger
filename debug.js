Debug = function(element) 
{
	//run all checks
	imageMissingAlt();
	imageEmptyAlt()
	
	
	
	
	
	//toggle error on an element
	function toggleError(element)
	{
		$(element).toggle(
			function () {
				$(this).css({"outline": "red"});
				$(this).addClass("debuggerError");
			},
			function () {
				$(this).css({"outline": "none"});
				$(this).removeClass("debuggerError");
			}
		);
	}
	
	//toggle warning on an element
	function toggleWarning(element)
	{
		$('img[alt=""]').toggle(
			function () {
				$(this).css({"outline": "yellow"});
				$(this).addClass("debuggerWarning");
			},
			function () {
				$(this).css({"outline": "none"});
				$(this).removeClass("debuggerWarning");
			}
		);
	}
	
	
	
	
	
	//highlight images with missing alt attribute
	function imageMissingAlt()
	{
		$('img:not([alt])').each(function(index) {
			toggleError($(this));
		});
	}
	
	//highlight images with empty alt attribute
	function imageEmptyAlt()
	{
		$('img[alt=""]').each(function(index) {
			toggleWarning($(this));
		});
	}
};





$(function() {
    var debug = new Debug();
});