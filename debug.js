Debug = function(element) 
{
	/*----------------------------------------------------------------------------------------------------------------*\
    	DISPLAY DEBUG BAR
	\*----------------------------------------------------------------------------------------------------------------*/
	$('<div/>', {
	    "class": "debugger",
	    "style": "width: 300px;" +
	    		"padding: 20px;" +
	    		"border: 1px solid #ccc;" +
	    		"box-shadow: 1px 1px 5px #000;" +
	    		"background: #fff;" +
	    		"color: #333;" +
	    		"font-size: 14px;" +
	    		"line-height: 1.5em;" +
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
		LIST OF ERRORS TO CHECK
	\*----------------------------------------------------------------------------------------------------------------*/
	/* No alt attribute */
	checkError("noAlt", "Image missing alt attribute", $('img:not([alt])'), "error");
	
	/* Empty alt text is OK but should be doubled checked */
	checkError("missingAlt", "Image has empty alt text", $('img[alt=""]'));

	/* No href attribute */
	checkError("noHref", "Link missing href attribute", $('a:not([href])'), "error");
	
	/* Questionable href */
	checkError("questionalHref1", "Link with # for href", $('a[href="#"]'));
	checkError("questionalHref2", "Link with 'javascript' in href", $('a[href*="javascript"]'));
	
	/* Empty href */
	checkError("emptyHref", "Link has empty href", $('a[href=""]'));
	
	/* List should only have li's as children */
	checkError("invalidUL", "UL with invalid children", $('ul').children(":not(li)"), "error");
	checkError("invalidOL", "OL with invalid children", $('ol').children(":not(li)"), "error");
	
	/* No method attribute */
	checkError("noAction", "Form without method attribute", $('form:not([method])'), "error");

	/* No action attribute */
	checkError("noAction", "Form without action attribute", $('form:not([action])'), "error");

	/* Has an empty action */
	checkError("emptyAction", "Form with empty action", $('form[action=""]'));

	/* Has an empty method */
	checkError("emptyMethod", "Form with empty method", $('form[method=""]'));
	
	/* No name attribute */
	checkError("noName1", "Input without name attribute", $('input:not([name])'), "error");
	checkError("noName2", "Textarea without name attribute", $('textarea:not([name])'), "error");
	checkError("noName3", "Select without name attribute", $('select:not([name])'), "error");

	/* No type attribute */
	checkError("noType", "Input without type attribute", $('input:not([type])'), "error");

	/* Has an empty name */
	checkError("emptyName1", "Input with empty name", $('input[name=""]'), "error");
	checkError("emptyName2", "Textarea with empty name", $('textarea[name=""]'), "error");
	checkError("emptyName3", "Select with empty name", $('select[name=""]'), "error");
	
	/* Has an empty type */
	checkError("emptyType", "Input with empty type", $('input[type=""]'), "error");

	/* Submit has no value */
	checkError("submitMissingValue", "Submit input missing a value", $('input[type="submit"]:not([value])'), "error");	

	/* Submit input has an empty value */
	checkError("submitEmptyValue", "Submit input with empty value", $('input[type="submit"][value=""]'), "error");
	
	/* Avoid in-line styles */
	checkError("inlineStyles", "Do you need inline styles?", $('[style]'));

	/* Avoid IDs for styling, double check to make sure this isn't doing any styling */
	checkError("hasID", "Do you need an ID?", $('[id]'));

	/* Empty class */
	checkError("emptyClass", "Element has an empty class", $('[class=""]'), "error");

	/* Empty id */
	checkError("emptyID", "Element has an empty ID", $('[id=""]'), "error");
	
	/* Trigger a click on all errors to show them */
	$('.debugger div').trigger('click');
	
	
	
	
	
	/*----------------------------------------------------------------------------------------------------------------*\
		CHECK FOR ERROR
	\*----------------------------------------------------------------------------------------------------------------*/
	function checkError(className, description, rule, errorLevel)
	{
		//remove debugger elements from the rule
		rule = rule.not(".debugger");
		rule = rule.not(".debugger *");
		
		//create item in debug bar
		$('<div/>', {
			"style": "cursor: pointer;",
			"class": className,
			click: function() {
				rule.each(function(index) {
					if(errorLevel == "error")
					{
						toggleError($(this));
					} else {
						toggleWarning($(this));
					}
				});
				
				toggleErrorText($("." + className + " span"));
			}
		}).appendTo(".debugger");
		
		//add item display state
		$("." + className).html(description + ": " + rule.size() + "<span style='float: right;'></span>");
	}
	
	
	
	
	
	/*----------------------------------------------------------------------------------------------------------------*\
		TOGGLE ERROR & WARNING STYLES
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
};

$(function() {
    var debug = new Debug();
});