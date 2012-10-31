#Website Debugger

Collection of CSS and JavaScript to help detect possible errors on website.

These debugging tools should not be relied upon, they are here to aid your usual checks, like validating your markup.

##Usage
Add either the debug.css or the debug.js, you don't need both. You will then get outlines round elements that may have issues.

##Red errors
Images without alt text  
Links without a href  
Lists with child elements that aren't li's  
Forms without a method or action  
Inputs without a name  
Inputs without a type  
Submit input without a value  
Elements with an empty class or ID

##Yellow errors
Empty elements  
Images with an empty alt text  
Links with an empty href  
Links with a href of '#' or containing 'javascript'  
Forms with an empty method  
Elements with inlines styles as these should be avioded where possible  
Elements with IDs as these shouldn't be used in CSS

###Notes
You will need jQuery to use the JavaScript debugger.