Debug = function(element) 
{
	/*----------------------------------------------------------------------------------------------------------------*\
    	DISPLAY DEBUG BAR
	\*----------------------------------------------------------------------------------------------------------------*/
	$('<div/>', {
	    "class": "debugger",
	    "style": "padding: 20px; " +
	    		"border: 1px solid #ccc; " +
	    		"box-shadow: 1px 1px 5px #000; " +
	    		"background: #fff; " +
	    		"color: #333; " +
	    		"position: fixed; " +
	    		"top: 0; " +
	    		"left: 0; " +
	    		"z-index: 9999;"
	}).prependTo("body");
	
	$('<h1/>', {
		"style": "margin-bottom: 10px;",
	    "text": "Debug bar"
	}).prependTo(".debugger");
	
	$('<div/>', {
		"style": "margin-bottom: 10px;",
	    "text": "Click to hide / show errors and warnings"
	}).appendTo(".debugger");
	
	$('<div/>', {
		"style": "cursor: pointer;",
		"class": "imageMissingAlt",
		click: function() {
			imageMissingAlt();
		}
	}).appendTo(".debugger");
	
	$('<div/>', {
		"style": "cursor: pointer;",
		"class": "imageEmptyAlt",
		click: function() {
			imageEmptyAlt();
		}
	}).appendTo(".debugger");
	
	
	
	
	
	/*----------------------------------------------------------------------------------------------------------------*\
		SET COUNTS TO 0
	\*----------------------------------------------------------------------------------------------------------------*/
	var imageMissingAltCount = 0;
	var imageEmptyAltCount = 0;
	
	
	
	
	/*----------------------------------------------------------------------------------------------------------------*\
		RUN ALL CHECKS
	\*----------------------------------------------------------------------------------------------------------------*/
	imageMissingAlt();
	imageEmptyAlt();
	
	
	
	
	
	/*----------------------------------------------------------------------------------------------------------------*\
		UPDATE ERROR COUNTS
	\*----------------------------------------------------------------------------------------------------------------*/
	updateCounts();
	function updateCounts()
	{
		$(".imageMissingAlt").text("Images missing alt text: " + imageMissingAltCount);
		$(".imageEmptyAlt").text("Images empty alt text: " + imageEmptyAltCount);
	}
	
	
	
	
	
	/*----------------------------------------------------------------------------------------------------------------*\
		TOGGLE ERRORS
	\*----------------------------------------------------------------------------------------------------------------*/
	function toggleError(element)
	{
		if($(element).hasClass("debuggerError"))
		{
			$(element).css({"outline": "none"});
			$(element).removeClass("debuggerError");
		} else {
			$(element).css({"outline": "5px solid red"});
			$(element).addClass("debuggerError");
		}
	}
	
	function toggleWarning(element)
	{		
		if($(element).hasClass("debuggerWarning"))
		{
			$(element).css({"outline": "none"});
			$(element).removeClass("debuggerWarning");
		} else {
			$(element).css({"outline": "5px solid yellow"});
			$(element).addClass("debuggerWarning");
		}
	}
	
	
	
	
	
	/*----------------------------------------------------------------------------------------------------------------*\
		ERROR CHECKS
	\*----------------------------------------------------------------------------------------------------------------*/
	//highlight images with missing alt attribute
	function imageMissingAlt()
	{
		$('img:not([alt])').each(function(index) {
			toggleError($(this));
			
			imageMissingAltCount++;
		});
	}
	
	//highlight images with empty alt attribute
	function imageEmptyAlt()
	{
		$('img[alt=""]').each(function(index) {
			toggleWarning($(this));
			
			imageEmptyAltCount++;
		});
	}
};





$(function() {
    var debug = new Debug();
});