Debug = function(element) 
{
	/*----------------------------------------------------------------------------------------------------------------*\
    	DISPLAY DEBUG BAR
	\*----------------------------------------------------------------------------------------------------------------*/
	$('<div/>', {
	    "class": "debugger",
	    "style": "padding: 20px;" +
	    		"border: 1px solid #ccc;" +
	    		"box-shadow: 1px 1px 5px #000;" +
	    		"background: #fff;" +
	    		"color: #333;" +
	    		"position: fixed;" +
	    		"top: 0;" +
	    		"left: 0;" +
	    		"z-index: 9999;"
	}).prependTo("body");
	
	$('<a/>', {
		"style": "padding: 5px 8px;" +
				"background: #ccc;" +
				"color: #333;" +
				"line-height: 1em;" +
				"position: absolute;" +
				"top: 0; " +
				"right: 0;",
	    "text": "-",
	    "href": "https://github.com/MartinBlackburn/Website-Debugger",
	    click: function(event) {
	    	event.preventDefault();
			toggleDebugBar();
		}
	}).appendTo(".debugger");
	
	$('<h1/>', {
		"style": "margin-bottom: 0;",
	    "text": "Debug bar"
	}).appendTo(".debugger");
	
	$('<div/>', {
		"style": "margin-bottom: 10px;",
	    "text": "Click to hide / show errors and warnings"
	}).appendTo(".debugger");
	
	
	
	
	
	/*----------------------------------------------------------------------------------------------------------------*\
		TOGGLE DEBUG BAR
	\*----------------------------------------------------------------------------------------------------------------*/
	function toggleDebugBar()
	{
		$(".debugger div").slideToggle();
		$(".debugger h1").slideToggle();
		
		if($(".debugger a").text() == "-")
		{
			$(".debugger a").text("+");
		} else {
			$(".debugger a").text("-");
		}
	}
	
	
	
	
	
	/*----------------------------------------------------------------------------------------------------------------*\
		TOGGLE ERROR TEXT 
	\*----------------------------------------------------------------------------------------------------------------*/
	function toggleErrorText(element)
	{	
		if($(element).text() == "shown")
		{
			$(element).text("hidden");
		} else {
			$(element).text("shown");
		}
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
		RUN ALL CHECKS
	\*----------------------------------------------------------------------------------------------------------------*/
	errorsText();
	imageMissingAlt();
	imageEmptyAlt();
	noHref();
	questionableHref1();
	questionableHref2();
	emptyHref();
	
	
	
	
	
	/*----------------------------------------------------------------------------------------------------------------*\
		ADD ERROR TEXT
	\*----------------------------------------------------------------------------------------------------------------*/
	function errorsText()
	{
		//images with missing alt attribute
		$('<div/>', {
			"style": "cursor: pointer;",
			"class": "imageMissingAlt",
			click: function() {
				imageMissingAlt();
			}
		}).appendTo(".debugger");
		
		$(".imageMissingAlt").html("Images missing alt attribute: " + $('img:not([alt])').size() + "<span style='float: right;'></span>");
		
		//images with empty alt attribute
		$('<div/>', {
			"style": "cursor: pointer;",
			"class": "imageEmptyAlt",
			click: function() {
				imageEmptyAlt();
			}
		}).appendTo(".debugger");
		
		$(".imageEmptyAlt").html("Images empty alt text: " + $('img[alt=""]').size() + "<span style='float: right;'></span>");
		
		/* No href attribute */
		$('<div/>', {
			"style": "cursor: pointer;",
			"class": "noHref",
			click: function() {
				noHref();
			}
		}).appendTo(".debugger");
		
		$(".noHref").html("Links without href attribute: " + $('a:not([href])').size() + "<span style='float: right;'></span>");
		
		/* Questionable href */
		$('<div/>', {
			"style": "cursor: pointer;",
			"class": "questionableHref1",
			click: function() {
				questionableHref1();
			}
		}).appendTo(".debugger");
		
		$(".questionableHref1").html("Links with # as href: " + $('a[href="#"]').size() + "<span style='float: right;'></span>");
		
		/* Questionable href */
		$('<div/>', {
			"style": "cursor: pointer;",
			"class": "questionableHref2",
			click: function() {
				questionableHref2();
			}
		}).appendTo(".debugger");
		
		$(".questionableHref2").html("Links with 'javacript' in href: " + $('a[href*="javascript"]').size() + "<span style='float: right;'></span>");
		
		/* Empty href */
		$('<div/>', {
			"style": "cursor: pointer;",
			"class": "emptyHref",
			click: function() {
				emptyHref();
			}
		}).appendTo(".debugger");
		
		$(".emptyHref").html("Links with empty href: " + $('a[href=""]').size() + "<span style='float: right;'></span>");
	}





	/*----------------------------------------------------------------------------------------------------------------*\
		ERROR CHECKS
	\*----------------------------------------------------------------------------------------------------------------*/
	//images with missing alt attribute
	function imageMissingAlt()
	{
		$('img:not([alt])').each(function(index) {
			toggleError($(this));
		});
		
		toggleErrorText($(".imageMissingAlt span"));
	}
	
	//images with empty alt attribute
	function imageEmptyAlt()
	{		
		$('img[alt=""]').each(function(index) {
			toggleWarning($(this));
		});
		
		toggleErrorText($(".imageEmptyAlt span"));
	}
	
	/* No href attribute */
	function noHref()
	{		
		$('a:not([href])').each(function(index) {
			toggleError($(this));
		});
		
		toggleErrorText($(".noHref span"));
	}
	
	/* Questionable href */
	function questionableHref1()
	{		
		$('a[href="#"]').each(function(index) {
			toggleWarning($(this));
		});
		
		toggleErrorText($(".questionableHref1 span"));
	}
	
	/* Questionable href */
	function questionableHref2()
	{		
		$('a[href*="javascript"]').each(function(index) {
			toggleWarning($(this));
		});
		
		toggleErrorText($(".questionableHref2 span"));
	}
	
	/* Empty href */
	function emptyHref()
	{		
		$('a[href=""]').each(function(index) {
			toggleWarning($(this));
		});
		
		toggleErrorText($(".emptyHref span"));
	}
};

$(function() {
    var debug = new Debug();
});